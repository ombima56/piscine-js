import { readFile, writeFile, access } from 'fs/promises';
import { join } from 'path';

async function tellMeVIP(directory) {
  try {
    const filePath = join(directory, 'guests.json');
    try {
      await access(filePath);
    } catch {
      const vipFilePath = join(directory, 'vip.txt');
      await writeFile(vipFilePath, '', 'utf-8');
      return;
    }

    const data = await readFile(filePath, 'utf-8');
    const guests = JSON.parse(data);

    const vipGuests = guests
      .filter(guest => guest.response === 'YES')
      .sort((a, b) => {
        const lastNameComparison = a.lastname.localeCompare(b.lastname);
        return lastNameComparison !== 0 ? lastNameComparison : a.firstname.localeCompare(b.firstname);
      });

    const formattedGuests = vipGuests.map((guest, index) => 
      `${index + 1}. ${guest.lastname} ${guest.firstname}`
    );

    const vipFilePath = join(directory, 'vip.txt');
    await writeFile(vipFilePath, formattedGuests.join('\n'), 'utf-8');
  } catch (error) {
    console.error('Error occurred:', error);
  }
}

const directory = process.argv[2] || process.cwd();
tellMeVIP(directory);

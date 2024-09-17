import { readFile, writeFile, access } from 'fs/promises';
import { join } from 'path';

async function tellMeVIP(directory) {
  const filePath = join(directory, 'guests.json');
  const vipFilePath = join(directory, 'vip.txt');

  try {
    await access(filePath);
    
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

    await writeFile(vipFilePath, formattedGuests.join('\n'), 'utf-8');

  } catch (error) {
    if (error.code === 'ENOENT') {
      await writeFile(vipFilePath, '', 'utf-8');
    } else {
      console.error('Error occurred:', error);
    }
  }
}

const directory = process.argv[2] || process.cwd();
tellMeVIP(directory);
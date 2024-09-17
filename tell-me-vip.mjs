import { readFile, writeFile } from 'fs/promises';
import { join } from 'path';

async function filterVIPGuests() {
    try {
        const filePath = join(process.cwd(), 'guests.json');

        const data = await readFile(filePath, 'utf-8');
        const guests = JSON.parse(data);

        const vipGuests = guests
            .filter(guest => guest.response === 'YES')
            .sort((a, b) => {
                const lastNameComparison = a.lastname.localeCompare(b.lastname);
                return lastNameComparison !== 0 ? lastNameComparison : a.firstname.localeCompare(b.firstname);
            });

        const formattedGuests = vipGuests.map((guest, index) => `${index + 1}. ${guest.lastname} ${guest.firstname}`);

        const vipFilePath = join(process.cwd(), 'vip.txt');
        await writeFile(vipFilePath, formattedGuests.join('\n'), 'utf-8');

        console.log('VIP list has been successfully created in vip.txt');
    } catch (error) {
        console.error('Error occurred:', error);
    }
}

filterVIPGuests();

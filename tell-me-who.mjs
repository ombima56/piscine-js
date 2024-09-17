import { promises as fs } from 'fs';
import { resolve } from 'path';

const formatGuestName = (filename, index) => {
    const nameParts = filename.split('_');
    
    const firstname = nameParts[0];
    const lastname = nameParts[1];

    const formattedName = `${index}. ${lastname} ${firstname}`;
    return formattedName;
};

const tellMeWho = async (directoryPath) => {
    try {
        const entries = await fs.readdir(directoryPath);

        const sortedEntries = entries
            .map((entry) => entry.split('.')[0])
            .sort((a, b) => {
                const [firstA, lastA] = a.split('_');
                const [firstB, lastB] = b.split('_');
                return lastA.localeCompare(lastB); 
            });

        sortedEntries.map((entry, index) => {
            const formattedName = formatGuestName(entry, index + 1);
            console.log(formattedName);
        });
    } catch (error) {
        console.error('Error reading the directory:', error);
    }
};

const args = process.argv.slice(2);
const directoryPath = args.length > 0 ? args[0] : '.';

const resolvedPath = resolve(directoryPath);
tellMeWho(resolvedPath);

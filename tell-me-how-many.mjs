import { promises as fs } from 'fs';
import { resolve } from 'path';

const countDirectoryEntries = async (directoryPath) => {
    try {
        const entries = await fs.readdir(directoryPath);
        console.log(`Number of entries in ${directoryPath}: ${entries.length}`);
    } catch (error) {
        console.error('Error reading the directory:', error);
    }
};

const args = process.argv.slice(2);
const directoryPath = args.length > 0 ? args[0] : '.';

const resolvedPath = resolve(directoryPath);
countDirectoryEntries(resolvedPath);
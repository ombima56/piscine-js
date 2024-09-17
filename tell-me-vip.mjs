import { writeFile } from 'node:fs/promises';
import { readFile } from 'node:fs/promises';
import { readdir } from 'node:fs/promises';
import { argv } from 'node:process';
import { join } from 'node:path';

let filePath = argv[2];
let files;
let store = [];
let list = "";

try {
    files = await readdir(filePath);

    if (files.length === 0) {
        await writeFile(join(filePath, 'vip.txt'), '', 'utf8');
        return;
    }

    for (let i = 0; i < files.length; i++) {
        try {
            let content = await readFile(join(filePath, files[i]), 'utf8');
            let obj = JSON.parse(content);

            if (obj.answer && obj.answer.toLowerCase() === 'yes') {
                store.push(files[i]);
            }
        } catch (fileError) {
            console.error(`Error reading or parsing file ${files[i]}: ${fileError.message}`);
        }
    }

    let result = split(store);
    result.sort();

    for (let i = 0; i < result.length; i++) {
        list += `${i + 1}. ${result[i]}`;
        if (i < result.length - 1) {
            list += "\n";
        }
    }

    await writeFile(join(filePath, 'vip.txt'), list, 'utf8');
} catch (err) {
    console.error('Error during processing:', err.message);
}

const split = (arr) => {
    let result = [];
    for (let file of arr) {
        let store = file.split('_');
        store[1] = store[1].slice(0, -5); 
        let conc = `${store[1]} ${store[0]}`;
        result.push(conc);
    }
    return result;
}
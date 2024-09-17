import { readdir } from 'node:fs/promises';
import { resolve } from 'node:path';
import { writeFile } from 'node:fs/promises';


async function getvip() {
try {
    let path = '';
    if (process.argv.length===3){
        path =  resolve(process.argv[2])
        
    }else{
        path=cwd();
    } 
 
  const files = await readdir(path);
let result =[]
    for(let file in files){
        let obj= getjson(resolve(process.argv[2]+"/"+files[file]));
        if (obj.answer==='yes')result.push(getname(files[file]  ));
    }
    result.sort()
    let text = ''
    for(let i=0;i<result.length;i++){
        let num=i+1;
        if (result[result.length-1]===result[i]){
        text+=(`${num}. ${result[i]}`);

        }else{

            text+=(`${num}. ${result[i]}`)+'\n';
        }
    }
    // text += '\n'
    const data = new Uint8Array(Buffer.from(text));
     await writeFile('vip.txt', data);
    // console.log(result);
} catch (err) {
  console.error(err);
}}
getvip();


function getname(filename) {
    filename= filename.split('.')[0];
    let first=filename.split('_')[0];
    let last=filename.split('_')[1];
    return last+' '+first;
}

import { readFileSync } from 'node:fs';

function getjson(filename) {
    try {
      return JSON.parse(readFileSync(filename, 'utf8'));
    } catch (err) {
      console.error(`Error reading JSON file: ${filename}`);
      return null;
    }
  }
import { readFile } from 'fs';

export const read = (async () => {
    readFile('./files/fileToRead.txt', (err,data) => {
        if (err) throw 'FS operation failed';
        console.log(data.toString());
    })
})();
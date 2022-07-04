import { readFile } from 'fs';

export const read = (async () => {
    readFile('src/fs/files/fileToRead.txt', (err,data) => {
        if (err) throw 'FS operation failed';
        console.log(data.toString());
    })
})();
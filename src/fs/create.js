import { writeFile, open } from 'fs';


export const create = (async () => {
    open('src/fs/files/fresh.txt', (err) => {
        if (!err) throw 'FS operation failed';
        writeFile('src/fs/files/fresh.txt', 'I am fresh and young', (err) => {
            if (err) throw err;
        })
    })
})();



import { appendFile, open } from 'fs'

export const create = (async () => {
    await open('files/fresh.txt', (err) => {
        if (!err) throw 'FS operation failed';
        appendFile('files/fresh.txt', 'I am fresh and young', (err) => {
            if (err) throw err;
        })
    })
})();



import { readdir } from "fs";

export const list = (async () => {
    readdir('src/fs/files', (err,data) => {
        if (err) throw 'FS operation failed';
        console.log(data);
    })
})();
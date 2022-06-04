import { mkdir, readdir, copyFileSync } from 'fs'

export const copy = (async () => {
    mkdir('./files_copy', (err) => {
        if (err) throw 'FS operation failed';

        readdir('./files',(err,data) => {
            if (err) throw 'FS operation failed';

            data.forEach((item) => {
                copyFileSync(`./files/${item}`, `./files_copy/${item}`)
            })
        });
    });

})();
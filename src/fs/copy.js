import { mkdir, readdir, copyFileSync } from 'fs'

export const copy = (async () => {
    mkdir('src/fs/files_copy', (err) => {
        if (err) throw 'FS operation failed';

        readdir('src/fs/files',(err,data) => {
            if (err) throw 'FS operation failed';

            data.forEach((item) => {
                copyFileSync(`src/fs/files/${item}`, `src/fs/files_copy/${item}`)
            })
        });
    });

})();
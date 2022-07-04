import { rm } from 'fs'

export const remove = (async () => {
     rm('src/fs/files/fileToRemove.txt', (err) => {
         if (err) throw 'FS operation failed';
     })
})();
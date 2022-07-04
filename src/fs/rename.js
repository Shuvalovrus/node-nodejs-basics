import { rename as renameFile } from "fs"

export const rename = (async () => {
   renameFile('src/fs/files/wrongFilename.txt','src/fs/files/properFilename.md', (err) => {
       if (err) throw 'FS operation failed'
   })
})();
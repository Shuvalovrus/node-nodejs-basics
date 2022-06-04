import { rename as renameFile } from "fs"

export const rename = (async () => {
   renameFile('./files/wrongFilename.txt','./files/properFilename.md', (err) => {
       if (err) throw 'FS operation failed'
   })
})();
import { createWriteStream } from "fs";

export const write = (async () => {
    let stream = createWriteStream('./files/fileToWrite.txt');
    process.stdin.on('data', (data) => {
        stream.write(data);
    })
})();

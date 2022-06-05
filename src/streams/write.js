import { createWriteStream } from "fs";

export const write = (async () => {
    let stream = createWriteStream('src/streams/files/fileToWrite.txt');
    process.stdin.on('data', (data) => {
        stream.write(data);
    })
})();

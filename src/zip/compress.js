import { createReadStream, createWriteStream } from "fs";
import { createGzip } from 'zlib'
import { pipeline } from "stream"

export const compress = async () => {
    const readStream = createReadStream('src/zip/files/fileToCompress.txt');
    const writeStream = createWriteStream('src/zip/files/archive.gz');

    const transform = createGzip()

    pipeline(
        readStream,
        transform,
        writeStream,
        (err) => {
            if (err) throw err;
        }
    )

};

compress()


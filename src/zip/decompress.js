import { createReadStream, createWriteStream } from "fs";
import { createUnzip } from 'zlib'
import { pipeline } from "stream"

export const decompress = async () => {
    const readStream = createReadStream('./files/archive.gz');
    const writeStream = createWriteStream('./files/fileToCompress.txt');

    const transform = createUnzip()

    pipeline(
        readStream,
        transform,
        writeStream,
        (err) => {
            if (err) throw err;
        }
    )

};

decompress()
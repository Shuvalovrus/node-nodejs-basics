import { Transform, pipeline } from "stream"

export const transform = (async () => {
    let readStream = process.stdin;
    let writeStream = process.stdout;

    const transformStream = new Transform({
        transform(chunk, encoding, callback) {
            let stringChunk = chunk.toString().trim();

            this.push(stringChunk.split('').reverse().join('') + '\n');

            callback()
        }
    })

    pipeline(
        readStream,
        transformStream,
        writeStream,
        err => {
            throw err
        }

    )
})();


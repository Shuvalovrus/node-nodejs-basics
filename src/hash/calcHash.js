import { readFile } from "fs";
import { createHash } from 'crypto'

export const calculateHash = async () => {

    readFile('./files/fileToCalculateHashFor.txt','utf8', (err,data) => {
        if (err) throw err;
        let hash = createHash('sha256').update(data).digest('hex')
        console.log(hash);
    })

};

calculateHash()
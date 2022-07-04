import { fork } from 'child_process';
const mainArg = process.argv.slice(2);

export const spawnChildProcess = async (args) => {
    let child = fork('src/cp/files/script.js', args, { stdio: ['pipe', 'pipe', 'pipe', 'ipc']})

    child.stdout.on('data', (data) => {
        process.stdout.write(`Received from child process: ${data}`)
    });

    process.stdin.on('data',(data) => {
        child.stdin.write(data);
    })

};

spawnChildProcess(mainArg)
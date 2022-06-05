import { cpus } from 'os'
import { Worker } from 'worker_threads'

export const performCalculations = async () => {
    let arr = []
    for (let i = 10; i < 10 + cpus().length; i++) {
        arr.push(new Promise((resolve, reject) => {
            const worker = new Worker('./worker.js', {
                workerData : i
            })
            worker.on('message', message => {
                resolve(message)
            })
            worker.on('error', err => {
                resolve({ status: 'error', data: null })
            })
        }))
    }
    Promise.all(arr).then(value => console.log(value));

};

performCalculations();
export const parseArgs = () => {

    process.argv.forEach((item, index) => {
        if (item.includes('prop')) {
            console.log(`${item} is ${process.argv[index + 1]}`)
        }
    })

};

parseArgs()
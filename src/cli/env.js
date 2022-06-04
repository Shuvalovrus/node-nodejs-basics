export const parseEnv = () => {

    for (let item in process.env) {
        if (item.includes('RSS_')) {
            console.log(`${item}=${process.env[item]}`);
        }
    }
};
parseEnv()
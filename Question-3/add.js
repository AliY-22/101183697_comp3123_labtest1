const fs = require('fs');
const path = require('path');

const logsFolder = path.join(__dirname, 'Log Files');

const createLogs = () => {
    if (!fs.existsSync(logsFolder)) {
        fs.mkdirSync(logsFolder);
        console.log(`Created folder: ${logsFolder}`);
    }

    process.chdir(logsFolder);
    
    for (let i = 0; i < 10; i++) {
        const fileName = `logo${i}.txt`;
        fs.writeFileSync(fileName, `This is log file number ${i}`);
        console.log(fileName);
    }
};

createLogs();
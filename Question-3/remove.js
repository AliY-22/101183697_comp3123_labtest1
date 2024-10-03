const fs = require('fs');
const path = require('path');

const logsFolder = path.join(__dirname, 'Log Files');


const removeLogs = () => {
    if (fs.existsSync(logsFolder)) {
        const files = fs.readdirSync(logsFolder);

        files.forEach(file => {
            const filePath = path.join(logsFolder, file);
            console.log(`delete files...${file}`);
            fs.unlinkSync(filePath);
        });

        fs.rmdirSync(logsFolder);
        console.log(`Removed: ${logsFolder}`);
    } else {
        console.log('Folder does not exist.');
    }
};

removeLogs();
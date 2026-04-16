const fs = require('fs');
const path = require('path');

console.log('task-update-master.js');

const taskUpdateMaster = () => {
    const taskUpdateMasterPath = path.join(__dirname, 'task-update-master.js');
    const taskUpdateMasterContent = fs.readFileSync(taskUpdateMasterPath, 'utf8');
    console.log(taskUpdateMasterContent);
}

taskUpdateMaster();
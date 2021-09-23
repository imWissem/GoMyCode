const importedFunction = require('./mymodule');

const path = process.argv[2];
const ext = process.argv[3];

importedFunction(path,ext,(err,data)=>{
    if(err){
        console.log(err);
        return;
    }
    data.forEach(element => {
        console.log(element);
    });
})
const fs = require('fs');
const path = require('path');


module.exports = function (folder, extention,callback){
    
    fs.readdir(folder,'utf-8',(err,data)=>{
        if(err){
            return callback(err,null);    
        }
        let filteredList = data.filter((element)=>{
            if(path.extname(element)==('.'+extention)){
                return element;
            }
        })
        callback(null,filteredList);
    })
    
} 
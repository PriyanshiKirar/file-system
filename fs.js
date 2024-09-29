// const fs=require("fs");
// fs.writeFile("./a.text","hellow gyes",function(err){
//     if(err) console.error(err);
//     else console.log("itst done")
// });


// Read file-read the data of another file
// const fs=require("fs");
// fs.readFile("./a.text","utf8",function(err,data){
//     if(err) console.log(err);
//     else console.log(data)
// });


//   Add the data in after
// const fs=require("fs");
// fs.appendFile("./a.text"," how are you",function(err){
// if(err) console.error(err);
// else console.log("add the data");
// });

//   delted the file
// const fs=require("fs");
// fs.unlink("a.text",function(err){
//     if(err) console.error(err);
//  else console.log("deleted"); 
// })

//  we do the data of another file
// const fs=require("fs");
// const { console } = require("inspector");
// fs.copyFile("./a.text","b.txt",function(err){
//     if(err) console.error(err);
//     else console.log("copied the data of from a.text");
// });



    //  Operating system

// const os=require("os");
// // end of line(EOl) it means \n dusri line m aa h
// console.log(os.EOL);

// const os=require("os");
// console.log(os.availableParallelism());

// architecture
// const os=require("os");
// console.log(os.arch());


const os=require("os");
console.log(os.cpus());
 

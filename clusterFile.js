const express = require("express");
const os=require('os');
const cluster=require('cluster');


const cpuNums=os.cpus().length;
if(cluster.isPrimary)
{
    for (let i = 0; i < cpuNums; i++) {
       cluster.fork();
    }
    cluster.on("exit",()=>{
        cluster.fork();
    })
}
else{
  const app = express()
  app.get('/', async(req,res)=>{
    let result  = 0
    for(let i =0; i<10000;i++){
      result+=i
  })

  return res.json({result, processId: process.pid})
  app.listen(5000, ()=>{
    console.log('Server running on port 5000')
  })
}

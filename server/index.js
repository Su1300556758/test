const Websocket=require('ws')
const wss=new Websocket.Server({port:8080})
// WebSocket 在线测试  输入ws:localhost:8080
// wss.on('connection',ws=>{
//     ws.send('welcome')
// })
let stocks={aa:100,bb:110,cc:120}
function randomInternal(min,max){ //获取最大值和最小值之间的随机值
    return Math.floor(Math.random()*(max-min+1)+min) 
}
function randomstockupdater(){
    for (let stock in stocks) {
        let randomval=randomInternal(-50,50)/100 
        stocks[stock]=(new Number(stocks[stock])+randomval).toFixed(2)    
    }
    setTimeout(()=>{
        randomstockupdater()
    },1000)
}
randomstockupdater()
wss.on('connection',ws=>{
    setInterval(()=>{
        ws.send(JSON.stringify(stocks))
        console.log('更新',JSON.stringify(stocks))
    },1000)
})
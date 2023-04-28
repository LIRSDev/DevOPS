const app = require('express')();
const appWs = require('express-ws')(app);

app.ws('/echo', ws => {
    ws.on('message', msg => {
        let ts = Date.now();
        let date_ob = new Date(ts);
        let date = date_ob.getDate();
        let month = date_ob.getMonth() + 1;
        let year = date_ob.getFullYear();
        let ora = date_ob.getHours();
        let min = date_ob.getMinutes();
        let sec = date_ob.getSeconds();
        console.log('Received: ', msg+" | "+year + "-" + month + "-" + date + "ora:"+ora+":"+min+"."+sec);
        ws.send("9");
    });
});

app.listen(1337, () => console.log('Server has been started'));
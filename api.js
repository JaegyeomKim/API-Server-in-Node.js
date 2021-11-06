const express = require('express');
const app = express();
const uuidAPIKey = require('uuid-apikey'); //uuid-apikey install


const server = app.listen(3001, () => {
    console.log('Start Server : localgost:3001')
});

const key = {
    apiKey: '58QDB5W-JPZ44W8-K0KYFT8-B37YSX8',
    uuid: '2a2ed597-95be-4271-9827-e7e958cfecf5'   //DB에 담고 있으면 됨
}


//req  사용자가 요청한것   res 요청에 대한 응답
app.get('/api/users/:apiKey/:type', async (req, res) => {
    let {apiKey,type} = req.params;

    if(!uuidAPIKey.isAPIKey(apiKey) || !uuidAPIKey.check(apiKey, key.uuid)){
        res.send('apikey is not valid')
    } else{

        console.log(type);

        if (type == 'Bellevue'){
            let data = [
            {name: "Kay", city:"Bellevue"},
            {name: "lala", city:"Bellevue"},
        ];
            res.send(data);
        } else if (type = 'Bothell'){
            let data = [
                {name: "Em", city:"Bothell"},
                {name: "sdsd", city:"Bothell"},
    
            ];
            res.send(data);
        }else{
            res.send('Worng type')
        }
    }
    
});
const request = require('request')

const getFood =(req ,res)=>{
    request.get(`https://www.themealdb.com/api/json/v1/1/random.php`,(err,response,body)=>{
        const bodyOpject =JSON.parse(body);
        
        res.send(bodyOpject);
    })
}
module.exports = getFood
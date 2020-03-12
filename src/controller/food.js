const request = require("request");
const fetch = require("node-fetch");


const getFood =  (req, res) => {
  request(foodApi+`search.php?s=${req.params.mealName}`,(err,response,body)=>{
    if(err){
            return res.status(500).send(err);
        }
        if(body!== null){
            res.send(body)} 
    })

//    getRequestData(() => {

//     console.log("finnni");
//   console.log(arr);
//   res.send(arr);
//   });

  
};


const randomurl ='https://www.themealdb.com/api/json/v1/1/random.php'

function getRandom() {
    return new Promise((resolve, reject) => {
      request(randomurl, (err, response, body) => {
        if (err) {
          return reject(err);
        }
        try {
          //resolve(data.push(JSON.parse(body)), console.log("inside", data));
          resolve(body);
        } catch (e) {
          reject(e);
        }
      });
    });
  }

module.exports ={ getFood ,getRandom};

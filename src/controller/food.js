const request = require("request");


const getFood =  (req, res) => {
   console.log("gghggg")
  request(foodApi+`search.php?s=${req.params.mealName}`,(err,response,body)=>{
    if(err){
            return res.status(500).send(err);
        }
        if(body!== null){
          console.log(body)
            res.send(body)} 
    })



//    getRequestData(() => {

//     console.log("finnni");
//   console.log(arr);
//   res.send(arr);
//   });

  
};



// async function  tt()
// {
//     let eeee =  await request.get(
//         `https://www.themealdb.com/api/json/v1/1/random.php`,(e,r,b)=>{

//            // console.log(JSON.parse(b))
//         })

//         console.log("ttt")
//         console.log(eeee)
// }


// function getRequestData(cb) {
//   // console.log(arr)
//   console.log("inside tiem iut");
//   request.get(
//     `https://www.themealdb.com/api/json/v1/1/random.php`,
//     (err, response, body) => {
//       const bodyOpject = JSON.parse(body);

//       arr.push({
//         strMeal: bodyOpject.meals[0].strMeal,
//         imgsrc: bodyOpject.meals[0].strMealThumb
//       });

//       console.log(arr);
//       if (arr.length < 4) {
//         getRequestData(cb);
//       } else {
//         cb();
//       }
//     }
//   );
// }

module.exports = getFood;

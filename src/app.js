const express = require("express");
const bodyParser = require("body-parser");
const compression = require("compression");
const path = require("path");
const app = express();
const errors = require("./controller/error");
const food = require("./controller/food");
const request = require("request");
const foodApi = "https://www.themealdb.com/api/json/v1/1/";
app.set("port", process.env.PORT || 3000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(compression());
app.disable("x-powered-by");
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});
const randomurl = "https://www.themealdb.com/api/json/v1/1/random.php";
app.get('/food',food.getFood);

app.use(
  express.static(path.join(__dirname, "..", "public"), { maxAge: "30d" })
);

app.get("/categories", (req, res) => {
  request(foodApi + "categories.php", (err, response, body) => {
    if (err) {
      return res.status(500).send(err);
    }
    if (body !== null) {
      res.send(body);
    }
  });
});
app.get("/categories/:categoryName", (req, res) => {
  request(
    foodApi + `filter.php?c=${req.params.categoryName}`,
    (err, response, body) => {
      if (err) {
        return res.status(500).send(err);
      }
      if (body !== null) {
        res.send(body);
      }
    }
  );
});

app.get("/api/meals/:mealName", (req, res) => {
  request(
    foodApi + `search.php?s=${req.params.mealName}`,
    (err, response, body) => {
      if (err) {
        return res.status(500).send(err);
      }
      if (body !== null) {
        res.send(body);
      }
    }
  );
});

app.get("/meals/:mealName", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public", "meals.html"));
  });
  
  app.get("/api/random", (req, res) => {
    const data = [];
  
    food.getRandom()
      .then(result => {
        data.push(JSON.parse(result));
        return food.getRandom();
      })
      .then(result => {
        data.push(JSON.parse(result));
        return food.getRandom();
      })
      .then(result => {
        data.push(JSON.parse(result));
        return food.getRandom();
      })
      .then(result => {
        data.push(JSON.parse(result));
        food.getRandom();
      })
      .then(result => {
        res.send(data);
      })
  
      .catch(err => {
        console.log(err);
      });
  });

app.use(errors.notFound);
app.use(errors.serverErr);
app.listen(app.get("port"));

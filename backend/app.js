const express = require('express');
const app = express();
const bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, PATCH, OPTIONS");

  next();

});


app.post("/api/posts", (req, res, next) => {

  const post = req.body;
  console.log(post);
  res.status(201).json({
    message: 'Post saved successly!'
  });

});

app.get("/api/posts", (req, res, next) => {

  const posts = [
    {
      id: 'dfsh232f',
      title: 'This is the First Post from the server!',
      content: 'This is the description of the First post.'
    },
    {
      id: 'dgh232f',
      title: 'This is the Second Post from the server!',
      content: 'This is the description of the Second post.'
    },
    {
      id: 'dfsh23rsdf2f',
      title: 'This is the Third Post from the server!',
      content: 'This is the description of the Third post.'
    },
    {
      id: 'dfsh232f',
      title: 'This is the Fourth Post from the server!',
      content: 'This is the description of the Fourth post.'
    }
  ];
  res.status(200).json({
    message: 'Posts fetched successfully',
    posts: posts
  });
});


module.exports = app;

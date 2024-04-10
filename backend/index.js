const RSSParser = require("rss-parser");
const express = require("express");
const app = express();

const cors = require("cors");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
const PORT = process.env.PORT || 1000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", (req, res) => {
  res.send(articles);
});

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`);
});

const feedURL = "https://feeds.feedburner.com/ndtvnews-top-stories";
let articles = [];
const parser = new RSSParser();

const parse = async (url) => {
  const feed = await parser.parseURL(url);

  feed.items.forEach((item) => {
    // console.log(`${item.title}\n${item.link}\n\n`);
    articles.push({ item });
  });
  // console.log(articles);
};

parse(feedURL);

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

app.get("/india", (req, res) => {
  res.send(articlesIndia);
});

app.get("/world", (req, res) => {
  res.send(articlesWorld);
});

app.get("/tech", (req, res) => {
  res.send(articlesTech);
});

app.get("/sports", (req, res) => {
  res.send(articlesSports);
});

app.get("/bussiness", (req, res) => {
  res.send(articlesBussiness);
});

app.get("/most", (req, res) => {
  res.send(articlesMost);
});

app.get("/enter", (req, res) => {
  res.send(articlesEnter);
});

app.get("/read", (req, res) => {
  res.send(articlesRead);
});

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`);
});

const feedURL = "https://timesofindia.indiatimes.com/rssfeedstopstories.cms";
let articles = [];
const parser = new RSSParser();

const parse = async (url) => {
  const feed = await parser.parseURL(url);

  feed.items.forEach((item) => {
    articles.push({ item });
  });
};

parse(feedURL);

const feedURLIndia =
  "https://timesofindia.indiatimes.com/rssfeeds/-2128936835.cms";
let articlesIndia = [];

const parseIndia = async (url) => {
  const feed = await parser.parseURL(url);

  feed.items.forEach((item) => {
    articlesIndia.push({ item });
  });
};

parseIndia(feedURLIndia);

const feedURLWorld =
  "https://timesofindia.indiatimes.com/rssfeeds/296589292.cms";
let articlesWorld = [];

const parseWorld = async (url) => {
  const feed = await parser.parseURL(url);

  feed.items.forEach((item) => {
    articlesWorld.push({ item });
  });
};

parseWorld(feedURLWorld);

const feedURLTech = "https://timesofindia.indiatimes.com/rssfeeds/66949542.cms";
let articlesTech = [];

const parseTech = async (url) => {
  const feed = await parser.parseURL(url);

  feed.items.forEach((item) => {
    articlesTech.push({ item });
  });
};

parseTech(feedURLTech);

const feedURLBussiness =
  "http://timesofindia.indiatimes.com/rssfeeds/1898055.cms";
let articlesBussiness = [];

const parseBussiness = async (url) => {
  const feed = await parser.parseURL(url);

  feed.items.forEach((item) => {
    articlesBussiness.push({ item });
  });
};

parseBussiness(feedURLBussiness);

const feedURLSports =
  "https://timesofindia.indiatimes.com/rssfeeds/4719148.cms";
let articlesSports = [];

const parseSports = async (url) => {
  const feed = await parser.parseURL(url);

  feed.items.forEach((item) => {
    articlesSports.push({ item });
  });
};

parseSports(feedURLSports);

const feedURLMost = "https://timesofindia.indiatimes.com/rssfeedmostrecent.cms";
let articlesMost = [];

const parseMost = async (url) => {
  const feed = await parser.parseURL(url);

  feed.items.forEach((item) => {
    articlesMost.push({ item });
  });
};

parseMost(feedURLMost);

const feedURLEnter =
  "http://timesofindia.indiatimes.com/rssfeeds/1081479906.cms";
let articlesEnter = [];

const parseEnter = async (url) => {
  const feed = await parser.parseURL(url);

  feed.items.forEach((item) => {
    articlesEnter.push({ item });
  });
};

parseEnter(feedURLEnter);

const feedURLRead = "http://timesofindia.indiatimes.com/rssfeedmostread.cms";
let articlesRead = [];

const parseRead = async (url) => {
  const feed = await parser.parseURL(url);

  feed.items.forEach((item) => {
    articlesRead.push({ item });
  });
};

parseRead(feedURLRead);

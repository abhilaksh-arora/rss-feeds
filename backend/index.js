const RSSParser = require("rss-parser");
const express = require("express");
const app = express();

const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 1000;

// Consolidated middleware
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Array of feed URLs and corresponding articles arrays
const feeds = [
  {
    path: "/",
    url: "https://timesofindia.indiatimes.com/rssfeedstopstories.cms",
    articles: [],
  },
  {
    path: "/india",
    url: "https://timesofindia.indiatimes.com/rssfeeds/-2128936835.cms",
    articles: [],
  },
  {
    path: "/world",
    url: "https://timesofindia.indiatimes.com/rssfeeds/296589292.cms",
    articles: [],
  },
  {
    path: "/tech",
    url: "https://timesofindia.indiatimes.com/rssfeeds/66949542.cms",
    articles: [],
  },
  {
    path: "/sports",
    url: "https://timesofindia.indiatimes.com/rssfeeds/4719148.cms",
    articles: [],
  },
  {
    path: "/bussiness",
    url: "http://timesofindia.indiatimes.com/rssfeeds/1898055.cms",
    articles: [],
  },
  {
    path: "/most",
    url: "https://timesofindia.indiatimes.com/rssfeedmostrecent.cms",
    articles: [],
  },
  {
    path: "/enter",
    url: "http://timesofindia.indiatimes.com/rssfeeds/1081479906.cms",
    articles: [],
  },
  {
    path: "/read",
    url: "http://timesofindia.indiatimes.com/rssfeedmostread.cms",
    articles: [],
  },
];

// Route to handle all paths
app.get("*", async (req, res) => {
  const path = req.path.toLowerCase();
  const feed = feeds.find((feed) => feed.path === path);
  if (feed) {
    if (feed.articles.length === 0) {
      await parseFeed(feed);
    }
    res.send(feed.articles);
  } else {
    res.status(404).send("Not Found");
  }
});

// Parse feed function
const parseFeed = async (feedObj) => {
  try {
    const parser = new RSSParser();
    const feed = await parser.parseURL(feedObj.url);
    feed.items.forEach((item) => {
      feedObj.articles.push({ item });
    });
  } catch (error) {
    console.error(`Error parsing feed ${feedObj.url}:`, error);
  }
};

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

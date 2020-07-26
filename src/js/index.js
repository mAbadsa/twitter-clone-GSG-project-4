import { Tweet } from "./models/tweet.model.js";

const state = [];

const tweets = [];

const $newFeedForm = document.getElementById("newfeed_form");

function createTweet() {}

// console.log($newFeedForm);

$newFeedForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  //   console.log(evt);
  let tweet = evt.target[0].value;
  const newTweet = new Tweet(
    `${tweet.substr(0, 2).toUpperCase()}_${Math.floor(Math.random() * 100000)}`,
    tweet
  );
  //   console.log(newTweet);
  tweets.push(newTweet);
  evt.target[0].value = "";
  console.log(tweets);
});

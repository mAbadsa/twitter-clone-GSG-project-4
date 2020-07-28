import { Tweet } from "./models/tweet.model.js";
import { initTweetArray } from "./initialTweets.js";
import { state } from "./state.js";
import { listTweet } from "./templates.js";
import showUserOption from "./user-options.js";

let tweetsArray = initTweetArray;

let $addComment;
let $newCommentFormBox;
let $addButton;
let $cancelButton;
let $commentInput;

const $mainTitle = document.querySelector(".newfeed__header h2");

$mainTitle.innerHTML =
  location.pathname.substr(1).split(".")[0].charAt(0).toUpperCase() +
    location.pathname.substr(1).split(".")[0].substr(1) || "Home";

if (!window.localStorage.getItem("tweet")) {
  window.localStorage.setItem("tweet", JSON.stringify(tweetsArray));
}

const $newFeedForm = document.getElementById("newfeed_form");

function renderListOfTweet() {
  var storageTweet = JSON.parse(window.localStorage.getItem("tweet"));

  if (location.pathname === "/tweet.html") {
    let tweet = storageTweet.filter((t) => {
      return t.id === location.search.substr(1) && t;
    })[0];
    listTweet(tweet, state);

    $addComment = document.querySelector(`#new-comment-icon_${tweet.id}`);
    // $addComment = document.querySelectorAll(`[id^=new-comment-icon_]`);
    $newCommentFormBox = document.querySelector(
      `.new-comment-form-box_${tweet.id}`
    );

    console.log($addComment);

    $addButton = document.querySelector(
      `.new-comment-form-box_${tweet.id} .form-group #new-comment-form #add-comment`
    );
    $cancelButton = document.querySelector(
      `.new-comment-form-box_${tweet.id} .form-group #new-comment-form #cancel-comment`
    );
    // $commentInput = document.querySelector(
    //   `.new-comment-form-box_${tweet.id} #new-comment-form .new-comment-input`
    // );

    $addComment.addEventListener("click", function (e) {
      //   console.log($newCommentFormBox);
      $newCommentFormBox = document.querySelector(
        `.new-comment-form-box_${tweet.id}`
      );
      $newCommentFormBox.classList.add("to-block");
    });

    $addButton.addEventListener("click", function (e) {
      e.preventDefault();
      tweetsArray = [...storageTweet];

      tweetsArray.filter((item) => {
        $commentInput = document.querySelector(
          `.new-comment-form-box_${item.id} #new-comment-form .new-comment-input`
        );

        return item.id === tweet.id && tweet.comments.push($commentInput.value);
      });

      window.localStorage.setItem("tweet", JSON.stringify(tweetsArray));

      //   $commentInput.value = "";

      $newCommentFormBox.classList.remove("to-block");

      window.location.reload();
    });

    $cancelButton.addEventListener("click", function (e) {
      e.preventDefault();
      $newCommentFormBox.classList.remove("to-block");
    });
  } else if (location.pathname === "/index.html" || location.pathname === "/") {
    storageTweet.forEach((tweet) => {
      // console.log(tweet);
      listTweet(tweet, state);

      $addComment = document.querySelector(`#new-comment-icon_${tweet.id}`);
      // $addComment = document.querySelectorAll(`[id^=new-comment-icon_]`);
      $newCommentFormBox = document.querySelector(
        `.new-comment-form-box_${tweet.id}`
      );

      console.log($addComment);

      $addButton = document.querySelector(
        `.new-comment-form-box_${tweet.id} .form-group #new-comment-form #add-comment`
      );
      $cancelButton = document.querySelector(
        `.new-comment-form-box_${tweet.id} .form-group #new-comment-form #cancel-comment`
      );
      $commentInput = document.querySelector(
        `.new-comment-form-box_${tweet.id} #new-comment-form .new-comment-input`
      );

      $addComment.addEventListener("click", function (e) {
        //   console.log($newCommentFormBox);
        $newCommentFormBox = document.querySelector(
          `.new-comment-form-box_${tweet.id}`
        );
        $newCommentFormBox.classList.add("to-block");
      });

      $addButton.addEventListener("click", function (e) {
        e.preventDefault();
        tweetsArray = [...storageTweet];

        tweetsArray.filter((item) => {
          $commentInput = document.querySelector(
            `.new-comment-form-box_${item.id} #new-comment-form .new-comment-input`
          );

          return (
            item.id === tweet.id && tweet.comments.push($commentInput.value)
          );
        });

        window.localStorage.setItem("tweet", JSON.stringify(tweetsArray));

        $commentInput.value = "";

        $newCommentFormBox.classList.remove("to-block");

        window.location.reload();
      });

      $cancelButton.addEventListener("click", function (e) {
        e.preventDefault();
        $newCommentFormBox.classList.remove("to-block");
      });
    });
  }
}

document.addEventListener("DOMContentLoaded", function (e) {
  e.preventDefault();
  if (location.pathname === "/index.html" || location.pathname === "/") {
    $newFeedForm.addEventListener("submit", function (evt) {
      evt.preventDefault();
      $tweetContainer.innerHTML = "";
      let tweet = evt.target[0].value;
      const newTweet = new Tweet(
        `${tweet.substr(0, 2).toUpperCase()}_${Math.floor(
          Math.random() * 100000
        )}`,
        tweet,
        "retweet",
        state.userlogin.name,
        state.userlogin.username,
        0,
        0,
        [],
        state.userlogin.avatar,
        new Date().toISOString()
      );
      //   console.log(newTweet);
      tweetsArray.push(newTweet);

      window.localStorage.setItem("tweet", JSON.stringify(tweetsArray));

      evt.target[0].value = "";

      console.log(tweetsArray);
      renderListOfTweet();
    });
  }

  renderListOfTweet();
});

showUserOption();
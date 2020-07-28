import { state } from "./state.js";

let initTweetArray = [
  {
    id: `${"New Tweet".substr(0, 2).toUpperCase()}_${Math.floor(
      Math.random() * 100000
    )}`,
    text: "New Tweet",
    tweetStatus: true,
    name: state.userlogin.name,
    username: state.userlogin.username,
    likes: 0,
    retweet: 0,
    comments: [],
    tweeterAvatar: state.userlogin.avatar,
    createdAt: new Date().toLocaleDateString(),
  },
  {
    id: `${"Second Tweet".substr(0, 2).toUpperCase()}_${Math.floor(
      Math.random() * 100000
    )}`,
    text: "Second Tweet",
    tweetStatus: false,
    name: state.userlogin.name,
    username: state.userlogin.username,
    likes: 0,
    retweet: 0,
    comments: [],
    tweeterAvatar: state.userlogin.avatar,
    createdAt: new Date().toLocaleDateString(),
  },
];

export { initTweetArray };

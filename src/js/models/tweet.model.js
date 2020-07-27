export class Tweet {
  constructor(
    id,
    text,
    tweetStatus,
    name,
    username,
    likes,
    retweet,
    comments,
    tweeterAvatar,
    createdAt
  ) {
    this.id = id;
    this.text = text;
    this.tweetStatus = tweetStatus;
    this.name = name;
    this.username = username;
    this.likes = likes;
    this.retweet = retweet;
    this.comments = comments;
    this.tweeterAvatar = tweeterAvatar;
    this.createdAt = createdAt;
  }
}

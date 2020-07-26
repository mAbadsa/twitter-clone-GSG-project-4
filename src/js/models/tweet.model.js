export class Tweet {
  constructor(
    id,
    text,
    tweetStatus,
    name,
    username,
    likes,
    retweet,
    comment,
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
    this.comment = comment;
    this.tweeterAvatar = tweeterAvatar;
    this.createdAt = createdAt;
  }
}

const $tweetContainer = document.getElementById("tweet-container");

function listTweet(tweet, state) {
  const tweetListTemplate = `<div class="tweet-box">
    ${tweet.tweetStatus ? tweetStatusTemplate() : ""}
        <div class="tweet-body-box">
        <div class="tweet-box__useravatar">
            <img
            src="${tweet.tweeterAvatar}"
            alt="user avatar"
            />
        </div>
        <div class="tweet-box__body">
            <div class="tweet-box__body_header">
            <div class="tweet-box_tweet-data">
                <a href="/${state.userlogin.username}" class="user_link">
                <div class="user-data">
                    <div class="user-name">
                    <h3 class="user-name_text">${state.userlogin.username}</h3>
                    </div>
                    <div class="user-username">
                    <h3 class="user-username_text">${
                      state.userlogin.username
                    }</h3>
                    </div>
                </div>
                </a>
                <div class="dot-box">
                <span class="dot"> . </span>
                </div>
                <div class="tweet_createdAt">
                <span> ${tweet.createdAt}</span>
                </div>
            </div>
            <div class="tweet-options">
                <div class="tweet-options__options">
                <div class="tweet-options_icons">
                    <svg viewBox="0 0 24 24">
                    <g>
                        <path
                        d="M20.207 8.147c-.39-.39-1.023-.39-1.414 0L12 14.94 5.207 8.147c-.39-.39-1.023-.39-1.414 0-.39.39-.39 1.023 0 1.414l7.5 7.5c.195.196.45.294.707.294s.512-.098.707-.293l7.5-7.5c.39-.39.39-1.022 0-1.413z"
                        ></path>
                    </g>
                    </svg>
                </div>
                </div>
            </div>
            </div>
            <div class="tweet-box__body_content">
            <p class="tweet-box__body_content_text">
                ${tweet.text}
            </p>
            <a href="tweet.html?${tweet.id}"></a>
            </div>
            <div class="tweet-box__body_footer">
            ${tweetFooterTemplate(tweet, state)}
            </div>
            </div>
            ${
              location.pathname === "/tweet.html"
                ? commentTemplate(tweet, state)
                : ""
            }
        </div>
      `;
  const $divContainer = document.createElement("div");
  $divContainer.innerHTML = tweetListTemplate;
  $divContainer.classList.add("showfeed-container-template");
  const tweetItem = $tweetContainer.appendChild($divContainer);
  return tweetItem;
}

const commentTemplate = (tweet, state) => {
  return `<div class="tweet_comments-container">
        ${tweet.comments.map((item) => {
          return `<div>
                    <div class="tweet-box__useravatar">
                        <img
                            src="${tweet.tweeterAvatar}"
                            alt="user avatar"
                        />
                    </div>
                    <div class="tweet-box__body_content">
                    <div class="tweet-box_tweet-data">
                    <a href="/${state.userlogin.username}" class="user_link">
                    <div class="user-data">
                        <div class="user-name">
                        <h3 class="user-name_text">${state.userlogin.username}</h3>
                        </div>
                        <div class="user-username">
                        <h3 class="user-username_text">${state.userlogin.username}</h3>
                        </div>
                    </div>
                    </a>
                    </div>
                        <p class="tweet-box__body_content_text">
                            ${item}
                        </p>
                    </div>
                    </div>`;
        })}
        </div>`;
};

const tweetStatusTemplate = () => {
  return `<div class="tweet-box_tweet-status">
    <div class="tweet-status-container">
        <div class="tweet-status_icon-box">
        <div class="tweet-status_icon-box_svgicon">
            <svg viewBox="0 0 24 24">
            <g>
                <path
                d="M23.615 15.477c-.47-.47-1.23-.47-1.697 0l-1.326 1.326V7.4c0-2.178-1.772-3.95-3.95-3.95h-5.2c-.663 0-1.2.538-1.2 1.2s.537 1.2 1.2 1.2h5.2c.854 0 1.55.695 1.55 1.55v9.403l-1.326-1.326c-.47-.47-1.23-.47-1.697 0s-.47 1.23 0 1.697l3.374 3.375c.234.233.542.35.85.35s.613-.116.848-.35l3.375-3.376c.467-.47.467-1.23-.002-1.697zM12.562 18.5h-5.2c-.854 0-1.55-.695-1.55-1.55V7.547l1.326 1.326c.234.235.542.352.848.352s.614-.117.85-.352c.468-.47.468-1.23 0-1.697L5.46 3.8c-.47-.468-1.23-.468-1.697 0L.388 7.177c-.47.47-.47 1.23 0 1.697s1.23.47 1.697 0L3.41 7.547v9.403c0 2.178 1.773 3.95 3.95 3.95h5.2c.664 0 1.2-.538 1.2-1.2s-.535-1.2-1.198-1.2z"
                ></path>
            </g>
            </svg>
        </div>
        </div>
            <div class="tweet-status__content">
            <a href="">
                <span>retweet</span>
            </a>
            </div>                    
    </div>
</div>`;
};

const tweetFooterTemplate = (tweet, state) => {
  return `<div class="tweet-interactive_box">
                    <div class="tweet-interactive_box_content">
                        <div class="icons" id="new-comment-icon_${tweet.id}">
                            <svg viewBox="0 0 24 24" class="coment">
                                <g>
                                <path
                                    d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"
                                ></path>
                                </g>
                            </svg>
                        </div>
                        <div class="tweet-interactive_value">
                            <span>${tweet.comments.length}</span>
                        </div>
                        <div class="new-comment-form-box_${tweet.id}">
                        <h2>Comment</h2>
                        ${commentTemplate(tweet, state)}
                     
                        <div class="form-group">
                            <div id="new-comment-form">
                                <input name="newComment" class="new-comment-input" placeholder="Type your comment." />
                                <button id="add-comment">Add</button>
                                <button id="cancel-comment">Cancel</button>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="tweet-interactive_box_content">
                        <div class="icons">
                        <svg viewBox="0 0 24 24" class="retweet">
                            <g>
                            <path
                                d="M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z"
                            ></path>
                            </g>
                        </svg>
                        </div>
                        <div class="tweet-interactive_value">
                        <span>${tweet.retweet}</span>
                        </div>
                    </div>
                    <div class="tweet-interactive_box_content">
                        <div class="icons">
                            <svg viewBox="0 0 24 24" class="like">
                                <g>
                                <path
                                    d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"
                                ></path>
                                </g>
                            </svg>
                        </div>
                        <div class="tweet-interactive_value">
                          <span>${tweet.likes}</span>
                        </div>
                    </div>
                    <div class="tweet-interactive_box_content">
                        <div class="icons">
                        <svg viewBox="0 0 24 24" class="options">
                            <g>
                            <path
                                d="M17.53 7.47l-5-5c-.293-.293-.768-.293-1.06 0l-5 5c-.294.293-.294.768 0 1.06s.767.294 1.06 0l3.72-3.72V15c0 .414.336.75.75.75s.75-.336.75-.75V4.81l3.72 3.72c.146.147.338.22.53.22s.384-.072.53-.22c.293-.293.293-.767 0-1.06z"
                            ></path>
                            <path
                                d="M19.708 21.944H4.292C3.028 21.944 2 20.916 2 19.652V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 1.264-1.028 2.292-2.292 2.292z"
                            ></path>
                            </g>
                        </svg>
                        </div>
                        <div class="tweet-interactive_value">
                            <span>1</span>
                        </div>
                    </div>
                </div>
            </div>`;
};

export { commentTemplate, listTweet };


# Live Demo

## <a href="https://www.youtube.com/watch?v=5TLihuk6wqQ">View on Youtube</a>

<img src="https://media.giphy.com/media/2xPSQl4hf3GO9Gj82K/giphy.gif" width="480" height="250" />

<img src="https://i.imgur.com/SeRNFiC.png" />

# How To Run App

To make testing easier for me, I decided to hold on to the code that extract access tokens that allow the app the execute requests to spotify's API. For this reason, if you want to run this app to see how it works, follow these instructions.

1. Go to https://developer.spotify.com/console/get-search-item/
2. Scroll down and click "Get Token"
3. Click "Request token"
4. Copy the Generated token
5. Back to project files, open newPost.js. The path is src -> containers -> NewPost -> NewPost.js
6. On line 13, paste the access token and make sure it's a string (it's inside quotation marks)

So the code should look like this:

state = {
  access_token: [access token that you generated from spotify]
}


This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

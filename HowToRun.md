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
  accessToken: [access token that you generated from spotify]
}
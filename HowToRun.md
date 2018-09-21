#How To Run App

Since I have not yet implemented code to extract access tokens that help users connect to spotify API's here are some instructions on how to run the app if you want to see how it works.

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
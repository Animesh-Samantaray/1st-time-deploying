require('dotenv').config();
const express = require('express')
const app = express()
 const port = 4000
const githubData = {
  "login": "hiteshchoudhary",
  "id": 11613311,
  "node_id": "MDQ6VXNlcjExNjEzMzEx",
  "avatar_url": "https://avatars.githubusercontent.com/u/11613311?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/hiteshchoudhary",
  "html_url": "https://github.com/hiteshchoudhary",
  "followers_url": "https://api.github.com/users/hiteshchoudhary/followers",
  "following_url": "https://api.github.com/users/hiteshchoudhary/following{/other_user}",
  "gists_url": "https://api.github.com/users/hiteshchoudhary/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/hiteshchoudhary/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/hiteshchoudhary/subscriptions",
  "organizations_url": "https://api.github.com/users/hiteshchoudhary/orgs",
  "repos_url": "https://api.github.com/users/hiteshchoudhary/repos",
  "events_url": "https://api.github.com/users/hiteshchoudhary/events{/privacy}",
  "received_events_url": "https://api.github.com/users/hiteshchoudhary/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Hitesh Choudhary",
  "company": null,
  "blog": "https://www.youtube.com/c/HiteshChoudharydotcom",
  "location": "India",
  "email": null,
  "hireable": null,
  "bio": "I make coding videos on youtube and for courses. My youtube channel explains my work more. Check that out",
  "twitter_username": "hiteshdotcom",
  "public_repos": 103,
  "public_gists": 5,
  "followers": 40398,
  "following": 0,
  "created_at": "2015-03-23T13:03:25Z",
  "updated_at": "2025-03-16T09:52:43Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/github',(req,res)=>{
  res.json(githubData);
})
app.get('/submit',(req,res)=>{
    res.send("I am submitting now .....");
});

app.get('/enroll',(req,res)=>{
    res.send(" <h2> Enroll here</h2>");
});

app.get('/login',(req,res)=>{
    res.send("<h1> You are on the login page</h1>");
});

app.listen(process.env.PORT, () => {
  console.log(`http://localhost:3000`);
});


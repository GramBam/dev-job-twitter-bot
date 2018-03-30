const twit = require('twit');

const config = {
  consumer_key: process.env.consumer_key,
  consumer_secret: process.env.consumer_secret,
  access_token: process.env.access_token,
  access_token_secret: process.env.access_token_secret
}

const Twitter = new twit(config);

let retweet = () => {
  let params = {
      q: '#jobs, #toronto',
      result_type: 'recent',
      lang: 'en'
  }
} 

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
  Twitter.get('search/tweets', params, (err, data) => {
      if (!err) {
        let rtId = data.statuses[0].id_str;
        Twitter.post('statuses/retweet/:id', {
          id: rtId
        }, (err, response) => {
          if (response) {
            console.log('Successfully retweeted');
          }
          if (err) {
            console.log(err);
            console.log(rtId);
          }
        });
      }
      else {
        console.log('Could not search tweets.');
      }
  });
} 
retweet();
setInterval(retweet, 600000);
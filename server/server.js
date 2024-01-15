
const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');

app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json());

app.listen(8000, () => {
    console.log(" -- Server Has Started -- ");
})

// Handle the ping request
app.get('/ping', (req, res) => {
    res.status(200).send('Ping successful');
});

app.get('/discover', (req, res) => {

    const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNTE2Yjk1NTA5ZTNiZjViNzIzNWY3N2NiMWZkM2FkNSIsInN1YiI6IjY1YTQyMmI0NmY0M2VjMDEyYjQ1YWQxZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TJ8Cw-ltY1-iUVBFq2qkt5W4YlbRctSuAMPXG7kQMvc'
        }
    };

    fetch(url, options)
        .then(response => response.json())
        .then(json => {
            let titles = [], posters = [];
            for (let i = 0; i < 20; i++) {
                titles.push(json['results'][i]['original_title']);
                posters.push(json['results'][i]['poster_path']);
            }

            // Send the posters array as the response
            res.status(200).json({ titles, posters });
        })
        .catch(err => {
            console.error('error:' + err);
            // Handle errors and send an appropriate response
            res.status(500).send('Internal Server Error');
        });
});

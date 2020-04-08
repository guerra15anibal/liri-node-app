require("dotenv").config();

var Spotify = require("node-spotify-api");
var fs = require("fs");
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);

var command = process.argv[2];
var input = process.argv[3];

if (command === "spotify-this-song") {
  songInfo(input);
}
function songInfo(input) {
  spotify.search({ type: "track", query: input }, function (err, data) {
    if (err) {
      return console.log("Error: " + err);
    }

    // console.log(JSON.parse(JSON.stringify(data.tracks.items[0].name)));
    console.log("Artist: " + data.tracks.items[0].artists[0].name);
    console.log("Song Name: " + data.tracks.items[0].name);
    console.log("Spotify Preview Link: " + data.tracks.items[0].href);
    console.log("Album: " + data.tracks.items[0].album.name);
  });
}

var axios = require("axios");

function movieInfo(input) {
  var url =
    "http://www.omdbapi.com/?t=" + input + "&y=&plot=short&apikey=trilogy";

  axios.get(url).then(function (response) {
    console.log("Title: " + response.data.Title);
    console.log("Release Year: " + response.data.Year);
    console.log("Rotten Tomatoes Rating: " + response.data.Ratings[1].Value);
    console.log("Country where movie was produced: " + response.data.Country);
    console.log("Language of the Movie: " + response.data.Language);
    console.log("Move Plot: " + response.data.Plot);
    console.log("Actors " + response.data.Actors);
  });
}

if (command === "movie-this") {
  movieInfo(input);
}

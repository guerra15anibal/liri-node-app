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
    console.log("Country Produced: " + response.data.Country);
    console.log("Language: " + response.data.Language);
    console.log("Move Plot: " + response.data.Plot);
    console.log("Actors " + response.data.Actors);
  });
}

if (command === "movie-this") {
  movieInfo(input);
}

function concertInfo(input) {
  var url =
    "https://rest.bandsintown.com/artists/" +
    input +
    "/events?app_id=codingbootcamp";

  axios.get(url).then(function (response) {
    // console.log(data);
    console.log("Venue Name: " + response.data[0].venue.name);
    console.log("Venue Location: " + response.data[0].venue.city);
    console.log("Date of Event: " + response.data[0].datetime);
  });
}

if (command === "concert-this") {
  concertInfo(input);
}

function doThis() {
  fs.readFile("random.txt", "utf8", function (error, data) {
    if (error) {
      return console.log(error);
    }

    var dataArr = data.split(",");

    if (dataArr[0] === "spotify-this-song") {
      var check = dataArr[1].slice(1, -1);
      songInfo(check);
    }
  });
}

if (command === "do-what-it-says") {
  doThis(input);
}

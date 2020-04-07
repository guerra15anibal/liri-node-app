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

require("dotenv").config();

var fs = require("fs");

var spotify = new Spotify(keys.spotify);

var keys = require("./keys.js");

var command = process.argv[2];

var input = process.argv[3];

function songInfo(input) {
  var Spotify = require("node-spotify-api");

  var spotify = new Spotify(keys.spotify);

  spotify.search({ type: "track", query: input }, function (err, data) {
    if (err) {
      return console.log("Error: " + err);
    }
    console.log("Artist(s): " + data.tracks.items[0].artists[0].name);
    console.log("Song Name: " + data.tracks.items[0].name);
    console.log("Spotify Preview Link: " + data.tracks.items[0].href);
    console.log("Album: " + data.tracks.items[0].album.name);
  });
}

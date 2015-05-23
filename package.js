Package.describe({
  "name": "stefcud:googlemaps-server",
  version: "1.0.1",
  summary: "NPM wrapper for node-googlemaps to be used in Meteor projects, google maps api for server side"
});

Npm.depends({
	googlemaps: "0.1.9"
});

Package.on_use(function (api) {
	api.export('googlemaps');

	api.add_files(['googlemaps-server.js'], ['server']);
});

// Package.on_test(function (api) {
//   api.use(['googlemaps'], ['server']);
//  //TODO api.add_files('test/...', ['server']);
// });

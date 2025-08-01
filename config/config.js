/* MagicMirror² Config Sample */

let config = {
  address: "0.0.0.0",
  port: 8080,
  basePath: "/",
  ipWhitelist: [], // Set [] to allow all IPs
  language: "en",
  timeFormat: 24,
  units: "metric",

  modules: [
    {

		module: "MMM-DigClock",
		position: "bottom_left",	// This can be any of the regions.
		config: {
			showDate: true,
			showWeek: false,
			showSeconds: false,
			dateFormat: "ddd, ll",
			timezone: "America/Chicago"
		}
    }
  ]
};

module.exports = config;


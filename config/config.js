let config = {
  address: "0.0.0.0",
  port: 8080,
  basePath: "/",
  ipWhitelist: [], // Set [] to allow all IPs
  language: "en",
  timeFormat: 12,
  units: "imperial",

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
	},
    {
      module: "compliments",
      position: "bottom_center",
      config: {
        compliments: {
          anytime: [
            "What do bees do after they are married? They go on a honeymoon."
          ]
        }
      }
    },
    {
      module: "weather",
      position: "bottom_right",
      config: {
        weatherProvider: "openweathermap",
        type: "current",
        location: "New York",
        locationID: "5128581", // Replace with your city ID
        apiKey: "YOUR_OPENWEATHER_API_KEY"
      }
    },
    {
      module: "weather",
      position: "bottom_right",
      config: {
        weatherProvider: "openweathermap",
        type: "forecast",
        location: "New York",
        locationID: "5128581",
        apiKey: "YOUR_OPENWEATHER_API_KEY"
      }
    },
    {
      module: "newsfeed",
      position: "top_left",
      config: {
        feeds: [
          {
            title: "Tech News",
            url: "https://rss.nytimes.com/services/xml/rss/nyt/Technology.xml"
          }
        ],
        showSourceTitle: true,
        showPublishDate: true,
        broadcastNewsFeeds: true,
        broadcastNewsUpdates: true
      }
    },
    {
      module: "newsfeed",
      position: "top_right",
      config: {
        feeds: [
          {
            title: "Space News",
            url: "https://www.nasa.gov/rss/dyn/breaking_news.rss"
          }
        ],
        showSourceTitle: true,
        showPublishDate: true
      }
    }
  ]
};

module.exports = config;



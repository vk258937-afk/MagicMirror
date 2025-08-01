let config = {
  address: "0.0.0.0",
  port: 8080,
  basePath: "/",
  language: "en",
  timeFormat: 24,
  units: "metric",

  modules: [
    { module: "clock", position: "top_left" },
    {
      module: "weather",
      position: "top_right",
      config: {
        location: "Prague",
        appid: "YOUR_OPENWEATHERMAP_API_KEY"
      }
    },
    {
      module: "newsfeed",
      position: "bottom_bar",
      config: {
        feeds: [
          { title: "TechCrunch", url: "https://techcrunch.com/feed/" },
          { title: "The Verge", url: "https://www.theverge.com/rss/index.xml" },
          { title: "Ars Technica", url: "https://arstechnica.com/feed/" }
        ],
        showSourceTitle: true,
        showPublishDate: true
      }
    }
  ]
};

if (typeof module !== "undefined") {
  module.exports = config;
}

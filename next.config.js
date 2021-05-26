const withTypescript = require("@zeit/next-typescript");
const withPlugins = require("next-compose-plugins");
const withBundleAnalyzer = require("@zeit/next-bundle-analyzer");

const withCSS = require("@zeit/next-css");
const withSass = require("@zeit/next-sass");
module.exports = withPlugins(
  [[withTypescript], [withCSS], [withSass], [withBundleAnalyzer]],
  {
    target: "serverless",
    analyzeBrowser: ["browser", "both"].includes(process.env.BUNDLE_ANALYZE),
    bundleAnalyzerConfig: {
      browser: {
        analyzerMode: "static",
        reportFilename: "../bundles/client.html",
      },
    },
  }
);

// module.exports = withTypescript(
//     withCSS(
//       withSass({
//         target: "serverless",
//       })
//     )
//   );

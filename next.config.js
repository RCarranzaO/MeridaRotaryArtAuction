// const withPlugins = require("next-compose-plugins");
// const nextImg = require("next-img/plugin");

// module.exports = withPlugins([
//   nextImg,
//   {
//     // specify the default breakpoints
//     breakpoints: [768]
//   }
// ]);

const withImages = require("next-images");

module.exports = withImages({
  images: {
    formats: ["image/avif", "image/webp"],
  },
});

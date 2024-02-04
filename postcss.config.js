module.exports = {
  plugins: [
    "tailwindcss",
    "postcss-flexbugs-fixes",
    [
      "postcss-preset-env",
      {
        autoprefixer: {
          flexbox: "no-2009"
        },
        "stag​e": 3,
        features: {
          "custom-properties": false
        }
      }
    ]
  ]
};

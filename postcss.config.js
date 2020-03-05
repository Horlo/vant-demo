module.exports = ctx => {
  const isVant = /\.css$/.test(ctx.file.basename) && /\bvant\b/.test(ctx.file.dirname);
  return {
    "plugins": {
      "postcss-aspect-ratio-mini": {},
      "postcss-write-svg": {
        "utf8": false
      },
      "postcss-preset-env": {},
      "postcss-px-to-viewport": {
        "viewportWidth": isVant ? 375 : 750,
        "unitPrecision": 3,
        "viewportUnit": "vw",
        "selectorBlackList": [],
        "minPixelValue": 1,
        "mediaQuery": false,
      },
      "cssnano": {
        "preset": "advanced",
        "autoprefixer": false,
        "postcss-zindex": false
      }
    }
  }
}
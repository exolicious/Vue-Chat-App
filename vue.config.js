module.exports = {
    css: {
      loaderOptions: {
        sass: {
          prependData: `
            @import "@/scss/colors.scss";
          `
        }
      }
    }
  };
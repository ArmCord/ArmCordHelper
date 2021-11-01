export const c = {
    log: function (msg) {
      console.log("%c[ArmCord]", "color: blue;", msg);
    },
    info: function (msg) {
      console.info("%c[ArmCord]", "color: blue;", msg);
    },
    warn: function (msg) {
      console.warn("%c[ArmCord]", "color: blue;", msg);
  },
  error: function (msg) {
  console.error("%c[ArmCord]", "color: blue;", msg);
    },
    sleep: function (ms) {
      return new Promise((resolve) => {
        setTimeout(resolve, ms);
      });
    },
  };
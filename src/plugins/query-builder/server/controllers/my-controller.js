'use strict';

module.exports = {
  index(ctx) {
    ctx.body = strapi
      .plugin('query-builder')
      .service('myService')
      .getWelcomeMessage();
  },
};

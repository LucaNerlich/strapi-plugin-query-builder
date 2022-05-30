'use strict';

module.exports = {
  async find(ctx) {
    try {
      return await strapi.plugin("query-builder").service("query-builder").find(ctx.query);
    } catch (err) {
      ctx.throw(500, err);
    }
  },
};

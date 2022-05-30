'use strict';

module.exports = {
  async getAll(ctx) {
    try {
      console.log("ping")
      return ctx.body = await strapi.plugin("query-builder").service("queryBuilder").getAll();
    } catch (err) {
      ctx.throw(500, err);
    }
  },
};

'use strict';

module.exports = ({strapi}) => ({
  async getAll() {
    console.log("query-builder service");
    return await strapi.db.config.models;
  },
})

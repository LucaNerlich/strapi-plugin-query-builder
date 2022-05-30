'use strict';

module.exports = ({strapi}) => ({
  async find(query) {
    console.log("query-builder service");
    return await strapi.contentTypes;
  },
})

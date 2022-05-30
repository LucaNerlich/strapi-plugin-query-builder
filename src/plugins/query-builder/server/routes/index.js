module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: 'myController.index',
    config: {
      policies: [],
    },
  },
  {
    method: "GET",
    path: "/getAll",
    handler: "queryBuilder.getAll",
    config: {
      policies: [],
      auth: false,
    },
  },
];

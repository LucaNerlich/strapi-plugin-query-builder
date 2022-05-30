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
    path: "/find",
    handler: "queryBuilder.find",
    config: {
      policies: [],
      auth: false,
    },
  },
];

let routeAPI = [
  ["/pokja", require("../entities/pokja/routes")],
  ["/user", require("../entities/user/routes")],
  ["/modul", require("../entities/modul/routes")]
];

module.exports.API = app => {
  routeAPI.forEach(el => {
    app.use(`/api` + el[0], el[1]);
  });

  app.use("*", (rq, rs) => rs.send("404 page not found"));

  return app;
};

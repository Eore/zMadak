let routeAPI = [
  ["/pokja", require("../entities/pokja/routes")],
  ["/user", require("../entities/user/routes")],
  ["/modul", require("../entities/modul/routes")]
];

module.exports.API = app => {
  app.use("/api", require("../modules/authRoute"));

  app.use((rq, rs, next) => {
    if (rq.signedCookies.usertoken) next();
    else rs.status(401).json({ message: "Login terdahulu" });
  });

  routeAPI.forEach(el => {
    app.use(`/api` + el[0], el[1]);
  });

  app.use((rq, rs, nx) => {});

  app.use("*", (rq, rs) => rs.send("404 page not found"));

  return app;
};

let routeAPI = ["/pokja", "/user", "/modul"];

module.exports.API = app => {
  app.use("/api", require("../modules/authRoute"));

  app.use((rq, rs, next) => {
    if (rq.signedCookies.usertoken) next();
    else rs.status(401).json({ message: "Login terdahulu" });
  });

  routeAPI.forEach(el => {
    app.use(`/api` + el, require(`../entities/${el.split("/")[1]}/routes`));
  });

  app.use("*", (rq, rs) => rs.send("404 route not found"));

  return app;
};

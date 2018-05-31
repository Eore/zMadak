module.exports.genUID = () =>
  Date.now().toString(16) + Math.floor(Math.random() * 1000).toString(16);

var checkAuth = (apiKey) => {
  if (apiKey === process.env.API_KEY) {
    console.log("auth successful");
    return true;
  } else {
    console.log("auth failure");
    return false;
  }
};

var checkShortcutAuth = (apiKey) => {
  if (apiKey === process.env.SHORTCUT_KEY) {
    console.log("auth successful");
    return true;
  } else {
    console.log("auth failure");
    return false;
  }
};

var auth = (req, res, next) => {
  if (req.query["shortcut-key"]) {
    let authenticated = checkShortcutAuth(req.query["shortcut-key"]);
    if (authenticated) {
      return next();
    } else {
      res.sendStatus(403);
    }
  } else if (req.headers["api-key"]) {
    let authenticated = checkAuth(req.headers["api-key"]);
    if (authenticated) {
      return next();
    } else {
      res.sendStatus(403);
    }
  } else {
    res.sendStatus(403);
  }
};

module.exports = auth;

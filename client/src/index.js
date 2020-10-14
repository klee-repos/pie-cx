import React from "react";
import ReactDOM from "react-dom";

import routes from "./config/routes";

// Redux
import store from "./redux";
import { Provider } from "react-redux";

if (process.env.NODE_ENV === "production") {
  let console = {};
  console.log = function () {};
  window.console = console;
  
}

ReactDOM.render(
  <Provider store={store}>{routes}</Provider>,
  document.getElementById("root")
);

// register service worker:
if (navigator.serviceWorker) {
  navigator.serviceWorker.register('/sw.js').then(function() {
    
    return navigator.serviceWorker.ready;
  })
  .then(function(registration) {
    
    console.log(registration); // service worker is ready and working...
  });
  
 
}

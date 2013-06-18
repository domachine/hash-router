
/**
 * Module dependencies.
 */

var Router = require('router');

/**
 * Module exports.
 */

module.exports = route;

// router instance

var router = new Router();

// merge all the hash-router properties into the bootstrap function to provide
// an API similar to page.js

for (var key in router) {
  route[key] = router[key];
}

/**
 * Binds the events necessary for routing.
 *
 * @param {Object} options
 *
 *  * `dispatch` - Perform initial dispatch [true] (see visionmedia/page.js).
 */

function route(options) {
  options = options || {};
  options.dispatch = options.dispatch || true;

  // register callback to react on hashchange (works with ie>=8 and all modern
  // chrome, safari, firefox browsers

  if ('onhashchange' in window) {
    window.onhashchange = function(evt){
      onhashchange(window.location.hash);
    };
  } else {

    // if the browser doesn't support 'onhashchange' use workaround
    // (http://stackoverflow.com/questions/2161906/handle-url-anchor-change-event-in-js)

    (function(){
      var storedHash = window.location.hash;
      window.setInterval(
        function(){
          if (window.location.hash != storedHash) {
            storedHash = window.location.hash;
            onhashchange(storedHash);
          }
        },
        100
      );
    })();
  }
  if (options.dispatch) onhashchange(window.location.hash);
}

/**
 * event handler to dispatch hash in url on change
 *
 * @param {String} hash
 * @api private
 */

function onhashchange(hash) {
  var uri = location.hash.substr(1);
  route.dispatch(uri);
};

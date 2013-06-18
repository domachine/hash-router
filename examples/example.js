
// simple routing example

var router = require('hash-router');

// build routing table (see component/router for usage)

router.get('/home', function(){
  document.querySelector('p')
    .textContent = 'This is home';
});
router.get('/about', function(){
  document.querySelector('p')
    .textContent = 'This is about';
});

// bind all the events and instantiate the router

router();

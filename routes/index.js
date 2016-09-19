var express = require('express');
var router = express.Router();
var queries = require('../db/queries');

router.get('/', getIndexPage);
router.get('/posts/:id', getPosts);

function getIndexPage(req, res, next) {
  res.render('index', { title: 'advKnexdb' });
});

function showSinglePost(req, res, next) {
  queries.getSinglePost(req.params.id)
  .then(function(data){
    res.render('index', {
      //  provided your query was accessible, every time data comes back
      //  it is an array, it might be an array of objects that match your
      //  requests
      data: data[0]
    })
  })
})

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'advKnexdb' });
// });

// router.get('/posts/:id', function(req, res, next){
//   queries.getSinglePost(req.params.id)
//   .then(function(data){
//     res.render('index', {
//       data: data[0]
//     })
//   })
// })

//  vs
//  router.post('/:id', function (req, res, next){
// getPosts()
// .where('id', req.params.id)
// .then(function(data){
// res.redirect('/')
// })
// })

module.exports = router;

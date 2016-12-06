
var usersData = require('./users-data');


app.get('/gpa/:user', function (req, res, next) {

  var person = usersData[req.params.user];
  if (person) {

    var weightedTotal=0;
    var totalCredits=0;
    var grade = 0;

    Object.keys(test.courses).forEach(function(key,index){
	     weightedTotal += (test.courses[key].grade * test.courses[key].credits);
       totalCredits += test.courses[key].credits;
})
  grade = weightedTotal/totalCredits;

  } else {

    // If we don't have info for the requested person, fall through to a 404.
    next();

  }

});

// If we didn't find the requested resource, send a 404 error.
app.get('*', function(req, res) {
  res.status(404).render('404-page', {
    pageTitle: '404'
  });
});

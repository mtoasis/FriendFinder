// * A POST routes `/api/friends`. This will be used to
//  handle incoming survey results. This route will also be used to handle the compatibility logic. 


var friends = require("../data/friends");

module.exports = function(app) {

  app.get("/api/friends", function(req,res){
      res.json(friends)
  })

  app.post("/api/friends", function(req, res) {
    
    var newScores = req.body.scores.split(" ");
    

    var newFriend = {
      name: req.body.name,
      photo: req.body.photo,
      scores: newScores
    }
    friends.push(newFriend)
    // console.log(friends[0].scores[0])
    console.log()
    // difference check
    var diff =[];
    for (var i=0, n=friends.length; i<n; i++){
      // console.log(friends[i].scores)
      for (var j=0; j<10; j++){
        // console.log(newScores[j])
      // diff[i] += Math.abs(Number(newScores[j])-Number(friends[i].scores[j])) 
      }
    }
    console.log(diff)

  });

};

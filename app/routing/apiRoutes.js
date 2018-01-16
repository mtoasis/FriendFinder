// * A POST routes `/api/friends`. This will be used to
//  handle incoming survey results. This route will also be used to handle the compatibility logic. 


var friends = require("../data/friends");

module.exports = function(app) {

  app.get("/api/friends", function(req,res){
      res.json(friends)
  })

  app.post("/api/friends", function(req, res) {    
    
    var newScores = req.body.scores.split("");    

    var newFriend = {
      name: req.body.name,
      photo: req.body.photo,
      scores: newScores
    }

    var diff =[];
    for (var i=0, n=friends.length; i<n; i++){
      var sum = 0;
      for (var j=0; j<10; j++){

        var c= Math.abs(Number(newScores[j])-Number(friends[i].scores[j]))
        sum = sum+c
        
      }
      diff[i] = Number(sum);
    }

    var minValue = Math.min.apply(null,diff);
    var matching = [];
    for (var i=0, n=diff.length; i<n; i++){
      if(diff[i] == minValue){
        matching.push(friends[i])
      }      
    }
    
    res.json(matching)

    friends.push(newFriend)
  });

};

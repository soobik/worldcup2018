var express = require('express');
var router = express.Router();

var groups = [
    {
        "name": "Group A",
        "winner": null,
        "runnerup": null,
        "matches": [
          {
            "name": 1,
            "type": "group",
            "home_team": 1,
            "away_team": 2,
            "home_result": null,
            "away_result": null,
            "date": "2018-06-14T18:00:00+03:00",
            "stadium": 1,
            "finished": false,
            "matchday": 1
          },
          {
            "name": 2,
            "type": "group",
            "home_team": 3,
            "away_team": 4,
            "home_result": null,
            "away_result": null,
            "date": "2018-06-15T17:00:00+05:00",
            "stadium": 12,
            "finished": false,
            "matchday": 1
          }
        ]
    }
];

router.get('/', function(req, res){
    res.json(groups);
})

module.exports = router
var express = require('express');
var router = express.Router();

var knockout = [
    {
        "round_16": {
          "name": "Round of 16",
          "matches": [
            {
              "name": 49,
              "type": "qualified",
              "home_team": "winner_a",
              "away_team": "runner_b",
              "home_result": null,
              "away_result": null,
              "home_penalty": null,
              "away_penalty": null,
              "winner": null,
              "date": "2018-06-30T17:00:00+03:00",
              "stadium": 11,
              "finished": false,
              "matchday": 4
            }
            ]
        }    
    }
];

router.get('/', function (req, res) { 
    res.json(knockout);
 });

 module.exports = router;
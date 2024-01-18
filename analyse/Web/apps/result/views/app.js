var app = angular.module("catsvsdogs", []);

var bg1 = document.getElementById("background-stats-1");
var bg2 = document.getElementById("background-stats-2");

app.controller("statsCtrl", function ($scope) {
  $scope.aPercent = 50;
  $scope.bPercent = 50;

  var updateScores = function () {
    getVotes().then((data) => {
      if (data && data.votes) {
        console.log(data.votes);
        var a = parseInt(data.votes.a || 0);
        var b = parseInt(data.votes.b || 0);

        var percentages = getPercentages(a, b);

        bg1.style.width = percentages.a + "%";
        bg2.style.width = percentages.b + "%";

        $scope.$apply(function () {
          $scope.aPercent = percentages.a;
          $scope.bPercent = percentages.b;
          $scope.total = a + b;
        });
      } else {
        console.error(`missing votes key in data:`, data);
      }
    });
  };

  var init = function () {
    document.body.style.opacity = 1;
    updateScores();
  };
  setInterval(() => {
    init();
  }, 2500);
});

async function getVotes() {
  return await fetch("/votes").then(async (response) => await response.json());
}

function getPercentages(a, b) {
  var result = {};

  if (a + b > 0) {
    result.a = Math.round((a / (a + b)) * 100);
    result.b = 100 - result.a;
  } else {
    result.a = result.b = 50;
  }

  return result;
}

myApp.controller('mainController', ['$scope', 'mainFactory', function($scope, mainFactory) {
    $scope.states = [];
    $scope.results = [];

    //: Get all data from factory
    mainFactory.index(function(data) {
        $scope.states = data;
    });

    //: Filter data based on selected date
    $scope.filterDate = function() {
        var temp = [];
        for (var i = 0; i < $scope.states.length; i++) {
            var tempdate = new Date($scope.states[i].date);
            if (tempdate <= $scope.fdate) {
                temp.push($scope.states[i].id);
            }
        }
        $scope.results = temp;
        $scope.fdate = "";
    }
}])

.directive('myMap', [function() {
    return {
        restrict: 'E',
        replace: true,
        template: '<div id="chartdiv"></div>',
        scope: {
            results: '='
        },
        link: function(scope, element, attrs) {
            //: Array of states used to make chart
            var states_arr = [
                {
                  "id": "US-AL",
                  "value": 0
                }, {
                  "id": "US-AK",
                  "value": 0
                }, {
                  "id": "US-AZ",
                  "value": 0
                }, {
                  "id": "US-AR",
                  "value": 0
                }, {
                  "id": "US-CA",
                  "value": 0
                }, {
                  "id": "US-CO",
                  "value": 0
                }, {
                  "id": "US-CT",
                  "value": 0
                }, {
                  "id": "US-DE",
                  "value": 0
                }, {
                  "id": "US-FL",
                  "value": 0
                }, {
                  "id": "US-GA",
                  "value": 0
                }, {
                  "id": "US-HI",
                  "value": 0
                }, {
                  "id": "US-ID",
                  "value": 0
                }, {
                  "id": "US-IL",
                  "value": 0
                }, {
                  "id": "US-IN",
                  "value": 0
                }, {
                  "id": "US-IA",
                  "value": 0
                }, {
                  "id": "US-KS",
                  "value": 0
                }, {
                  "id": "US-KY",
                  "value": 0
                }, {
                  "id": "US-LA",
                  "value": 0
                }, {
                  "id": "US-ME",
                  "value": 0
                }, {
                  "id": "US-MD",
                  "value": 0
                }, {
                  "id": "US-MA",
                  "value": 0
                }, {
                  "id": "US-MI",
                  "value": 0
                }, {
                  "id": "US-MN",
                  "value": 0
                }, {
                  "id": "US-MS",
                  "value": 0
                }, {
                  "id": "US-MO",
                  "value": 0
                }, {
                  "id": "US-MT",
                  "value": 0
                }, {
                  "id": "US-NE",
                  "value": 0
                }, {
                  "id": "US-NV",
                  "value": 0
                }, {
                  "id": "US-NH",
                  "value": 0
                }, {
                  "id": "US-NJ",
                  "value": 0
                }, {
                  "id": "US-NM",
                  "value": 0
                }, {
                  "id": "US-NY",
                  "value": 0
                }, {
                  "id": "US-NC",
                  "value": 0
                }, {
                  "id": "US-ND",
                  "value": 0
                }, {
                  "id": "US-OH",
                  "value": 0
                }, {
                  "id": "US-OK",
                  "value": 0
                }, {
                  "id": "US-OR",
                  "value": 0
                }, {
                  "id": "US-PA",
                  "value": 0
                }, {
                  "id": "US-RI",
                  "value": 0
                }, {
                  "id": "US-SC",
                  "value": 0
                }, {
                  "id": "US-SD",
                  "value": 0
                }, {
                  "id": "US-TN",
                  "value": 0
                }, {
                  "id": "US-TX",
                  "value": 0
                }, {
                  "id": "US-UT",
                  "value": 0
                }, {
                  "id": "US-VT",
                  "value": 0
                }, {
                  "id": "US-VA",
                  "value": 0
                }, {
                  "id": "US-WA",
                  "value": 0
                }, {
                  "id": "US-WV",
                  "value": 0
                }, {
                  "id": "US-WI",
                  "value": 0
                }, {
                  "id": "US-WY",
                  "value": 0
                }
            ];

            //: Watch for changes in $scope
            scope.$watch(
                'results',
                function(){
                    if (scope.results.length === 0) {
                        resetArr(states_arr);
                    } else {
                        resetArr(states_arr);
                        arr = states_arr;
                        for (var i = 0; i < arr.length; i++) {
                            for (var idx = 0; idx < scope.results.length; idx++) {
                                if (arr[i].id === scope.results[idx]) {
                                    arr[i].value = -1;
                                }
                            }
                        }
                    }
                    updateChart(states_arr);
            });

            //: Helper function to reset states array to default values
            function resetArr(arr) {
                for (var i = 0; i < arr.length; i++) {
                    arr[i].value = 0;
                }
            }

            //: Make the chart
            var chart = AmCharts.makeChart( "chartdiv", {
              "type": "map",
              "theme": "light",
              "colorSteps": 2,

              "dataProvider": {
                "map": "usaLow",
                "areas": states_arr
              },

              "areasSettings": {
                "autoZoom": true
              },

              "valueLegend": {
                "right": 25,
                "minValue": "match",
                "maxValue": "not a match"
              },

              "export": {
                "enabled": true
              }

            } );

            //: Helper function that updates the chart
            function updateChart(arr) {
                chart.dataProvider.areas = arr;
                chart.validateData();
            }
        }
    }
}]);

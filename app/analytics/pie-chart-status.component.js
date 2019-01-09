'use strict';

angular.
  module('EYAcquisition').
  component('pieChartStatus', {
    templateUrl: 'analytics/chart_status.template.html',
     controller: ['TargetListService','$scope',chartController] 
    
  });

function chartController(TargetListService,$scope)
{
    $scope.targets = {
        data : []
      };
  
      $scope.targets.data = TargetListService.query();

      
      
      $scope.show_status = 0;

      $scope.status_chart = function()
      
      {
          
        $scope.show_status = 1;
          //show pie chart

          $scope.colorsPie = ['#333333','#ffe600','#ffffff','#cccccc'];
          $scope.options_pie = {
              legend : {display: true},
             
          };
        var target_map = new Map();
        $scope.data = [];
          $scope.labels = [];

          var l = $scope.labels.length;
          var target_list_data = $scope.targets.data;

          target_list_data.forEach(element => { 

            if(!target_map.has(element.status))
            {
                target_map.set(element.status,1);
            }
            else
            {
                var c = target_map.get(element.status);
                c++;
                target_map.set(element.status,c);
            }
              
          });

          console.log(target_map);

          //populate labels and data from target_map
          var keys_itr = target_map.keys();
          var val_itr = target_map.values();
          let res = keys_itr.next();
          let val = val_itr.next();

          while(!res.done && !val.done)
          {
              console.log(res.value);
              $scope.labels.push(res.value);
              $scope.data.push(val.value);
              res = keys_itr.next();
              val = val_itr.next();
          }
          


        }
          
      
      $scope.bar_chart = function (){

        $scope.show_status = 0;
        //show bar chart
        $scope.colorsBar = ['#333333','#ffe600','#ffffff','#cccccc'];
        $scope.options_bar = {
            legend : {display: true},
           
        };
        $scope.series = ["comp1","comp2","comp3","comp4","comp5","comp6"];
        $scope.data = [
            [14,21,16,13],
            [25,18,31,40],
            [10,14,15,23],
            [14,32,16,22],
            [13,30,17,21],
            [12,21,18,19]
        ];
        $scope.labels = ["2015","2016","2017","2018"];

        var financial_perf = $scope.targets.data.financialPerformance;

        
      }


}

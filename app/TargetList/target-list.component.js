'use strict';

angular.
  module('EYAcquisition').
  component('targetList', {
    templateUrl: 'TargetList/target-list.template.html',
     controller: ['TargetListService','$uibModal',TargetListController] 
    
  });


  function TargetListController(TargetListService,$uibModal){
    //get target list from target-list.json
    this.targets = {
      data : []
    };

    this.targets.data = TargetListService.query();
    
    this.edit = function(index)
    {
     
      var $ctrl=this;
      $ctrl.dataforModal = $ctrl.targets.data[index];
      
      console.log($ctrl.dataforModal);
      
      $uibModal.open({
       templateUrl : 'Modal/targetModal.template.html',
        arialLabelledBy : 'modal-title',
        arialDescribedBy : 'modal-body',
        controller : edit_modal,
        resolve :{
          modalData : function(){
            return $ctrl.dataforModal;
          }
        }

      }).result.then(function(result){
        console.log(result);
      }),function(reason){
        console.log("Model was dismissed");
      }


      //console.log(this.targets.data[index]);
    }
    
    this.remove = function(index)
    {
      console.log(index);
      this.targets.data.splice(index,1);
      //delete this.targets.data[index];
    }

    this.view = function(index)
    {
      //show a modal window that shows company's financial performance

      var $ctrl=this;
      $ctrl.dataforModal = $ctrl.targets.data[index];
      console.log("Inside view function");
      console.log("Index:",index);
      console.log($ctrl.dataforModal);
      
      $uibModal.open({
       templateUrl : 'Modal/bar_chart.template.html',
        arialLabelledBy : 'modal-title',
        arialDescribedBy : 'modal-body',
        controller : viewfinancial_modal,
        size : 'lg',
        windowClass: 'my-bar-chart',
        resolve :{
          modalData : function(){
            return $ctrl.dataforModal;
          }
        }

      }).result.then(function(result){
        console.log(result);
      }),function(reason){
        console.log("Model was dismissed");
      }

    }
    

  }

  

  
angular.module('EYAcquisition')
.component('targetModal',{
    templateUrl : 'Modal/targetModal.template.html',
    bindings: {
        resolve : "<",
        modalInstance: "<"
    },
    controller: ['$uibModalInstance','modalData',function($uibModalInstance,modalData){
        var $ctrl = this;
        $ctrl.onInit = function(){
         /*   $ctrl.ModalData = modalData;
            $ctrl.data = "Data to be shown in modal";
            $ctrl.companyName = $ctrl.ModalData.companyInfo;
            $ctrl.status = $ctrl.ModalData.status;
            $ctrl.keyContacts = $ctrl.ModalData.keyContacts; */
            $ctrl.data = "Data in modal";
        }
        $ctrl.handleClose = function(){
            console.log("In Handle close");
            $uibModalInstance.close($ctrl.ModalData);
        }
        $ctrl.handleDismiss = function(){
            console.log("In Handle dismiss");
            $uibModalInstance.dismiss("cancel");
        }
    }

    ]
})
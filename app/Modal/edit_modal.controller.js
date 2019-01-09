  angular.module('EYAcquisition').controller('edit_modal',edit_modal);

    edit_modal.$inject = ['$uibModalInstance','$scope',modalData];

    function edit_modal($uibModalInstance,$scope,modalData)
    {
        function ed(){
            
            $scope.ModalData = modalData;
            $scope.target_status = ["Researching","Pending Approval","Approved","Declined"];

            $scope.ok = function(){
                $uibModalInstance.close(modalData);
            }
            $scope.cancel = function(){
                $uibModalInstance.dismiss('cancel');
            }
            $scope.updateData = function(){
              //  console.log($scope.ModalData.status);
                $uibModalInstance.close('ok');
            }
        }
        ed();
    }


   angular.module('EYAcquisition').controller('viewfinancial_modal',viewfinancial_modal);

    viewfinancial_modal.$inject = ['$uibModalInstance','$scope',modalData];

    function viewfinancial_modal($uibModalInstance,$scope,modalData)
    {
        function vf(){
            
            $scope.ModalData = modalData;
            $scope.keys = [];
            $scope.values=[];

            $scope.series = [];

            angular.forEach($scope.ModalData.financialPerformance, (r)=>{
                $scope.keys.push(r.Year);
                $scope.values.push(r.Revenue);
            });

            console.log('Keys:',$scope.keys);
            console.log('Values:',$scope.values);

            $scope.ok = function(){
                $uibModalInstance.close(modalData);
            }
            $scope.cancel = function(){
                $uibModalInstance.dismiss('cancel');
            }
          
        }
        vf();
    }


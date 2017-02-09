(function() {
    'use strict';

    angular
    .module('Note')
    .run(configureApp);

    configureApp.$inject = ['$state','BackService'];

    function configureApp($state, BackService) {

        document.addEventListener('deviceready', onDeviceReady, false);

        function onDeviceReady() {
          StatusBar.overlaysWebView(true);
          StatusBar.backgroundColorByHexString("#03a9f4");
            document.addEventListener('backbutton', onBackButton, false);
        };

        function onBackButton() {
            BackService.back($state.current);
        }
    }
})();

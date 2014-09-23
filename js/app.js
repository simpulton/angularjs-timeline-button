var app = angular.module('website', []);

app.directive('smoothButton', function(){
    var linker = function (scope, element, attrs) {
        var tl = new TimelineLite();
        tl.add(TweenLite.to(element.find('.red'), 0.4, {scaleX:1.8, scaleY:1.8, ease: Power2.easeOut}));
        tl.add(TweenLite.to(element.find('.orange'), 0.4, {scaleX:1.6, scaleY:1.6, ease: Power2.easeOut}), '-=0.2');
        tl.add(TweenLite.to(element.find('.yellow'), 0.4, {scaleX:1.4, scaleY:1.4, ease: Power2.easeOut}), '-=0.2');
        tl.stop();

        scope.play = function() {
            tl.play();
        };

        scope.reverse = function() {
            tl.reverse();
        };
    };

    return {
        scope: true,
        link: linker,
        templateUrl: 'smooth-button.tmpl.html'
    }
});

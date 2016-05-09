var svg_path = "ui.svg"

Proto.placeSVG(svg_path, init)

function init(){
    
    //$('body').removeClass('mobileready')

	Proto.coach('#wait', proceed)
    
    function proceed(){
        TweenMax.staggerTo('#gr > circle', 1.5, {attr:{r:10}, ease:Expo.easeInOut}, .1)
    }
    

}
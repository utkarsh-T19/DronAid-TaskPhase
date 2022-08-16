
function isVisibleInViewport(elem)
{
    var y = elem.offsetTop;
    var height = elem.offsetHeight;

    while ( elem = elem.offsetParent )
        y += elem.offsetTop;

    var maxHeight = y + height - 100;
    var isVisible = ( y < ( window.pageYOffset + window.innerHeight ) ) && ( maxHeight >= window.pageYOffset );
    return isVisible; 
}

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    var canvas1 = document.getElementById("section5");
    if (isVisibleInViewport(canvas1)) {
        document.getElementById("navBarTextAbout").style.color = "white";
        document.getElementById("HeaderAbout").style.cssText = "background-color : transparent ; border-bottom: 0px solid #808080; transition: background-color 0.2s;";
    }else {
        document.getElementById("navBarTextAbout").style.color = "black";
        document.getElementById("HeaderAbout").style.cssText = "background-color : white ; border-bottom: 0.25px solid #bfbfbf; transition: background-color 0.2s;";
  }
}
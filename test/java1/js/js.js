function showPic(whichpic){
    var source = whichpic.getAttribute("href");
    var bigimg = document.getElementById("bigimg");
    bigimg.setAttribute("src",source);
    var showText = whichpic.getAttribute("title");
    var imgName = document.getElementById("imgName");
    imgName.firstChild.nodeValue = showText; 
}
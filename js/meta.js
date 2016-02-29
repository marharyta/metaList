//returns a single active page Object with all the info as parameters

//variables
var pageObject = new Object();
var pageURL = location.href;
var titleTag;
var findTitle = document.getElementsByTagName("TITLE")[0];

var metaLength = document.getElementsByTagName("META").length;
var metaList = [];

var h1Length = document.getElementsByTagName("H1").length;
var h1List = [];

var h2Length = document.getElementsByTagName("H2").length;
var h2List = [];

var h3Length = document.getElementsByTagName("H3").length;
var h3List = [];

var h4Length = document.getElementsByTagName("H4").length;
var h4List = [];

var h5Length = document.getElementsByTagName("H5").length;
var h5List = [];

var h6Length = document.getElementsByTagName("H6").length;
var h6List = [];

var allHeadersLength = h1Length + h2Length + h3Length + h4Length + h5Length + h6Length;
var allHeaders = [];

var imageLength = document.getElementsByTagName("IMG").length;
var imageList = [];

var linkLength = document.getElementsByTagName("A").length;
var linkList = [];


//title
if(findTitle != " " && findTitle != null && findTitle != ""){
  titleTag = document.getElementsByTagName("TITLE")[0].innerText;
}
else{
  titleTag = "Title is missing!";
  titleTag.style.color = "red";
}


//metatags
for (var i = 0; i <= metaLength -1 ; i++) {
      var contentattribute = document.getElementsByTagName("META")[i].getAttribute("content");
      var nameattribute = document.getElementsByTagName("META")[i].getAttribute("name");
      var nameContent = [];
      if(nameattribute != null && (nameattribute.toLowerCase() == 'keywords' || nameattribute.toLowerCase() == "description" || nameattribute.toLowerCase() == "author" || nameattribute.toLowerCase() == "robot")){
        nameContent.push(nameattribute);
        nameContent.push(contentattribute);  
        metaList.push(nameContent);
      } 
      else{}
     
  };

//headers

//get all headers - TO BE DONE 

//h1     

if(h1Length > 0){
  for(var i = 0; i <= h1Length-1 ; i++) {
  var headingText = document.getElementsByTagName("H1")[i].innerText;
    if(headingText != ""){
      h1List.push(headingText); 
    }
  };
}


// h2

if(h2Length > 0){
  for (var i = 0; i <= h2Length-1 ; i++) {
  var headingText = document.getElementsByTagName("H2")[i].innerText;
  if(headingText != ""){
      h2List.push(headingText); 
    } 
  };
}

// h3

if(h3Length > 0){
  for (var i = 0; i <= h3Length-1 ; i++) {
    var headingText = document.getElementsByTagName("H3")[i].innerText;
    if(headingText != ""){
        h3List.push(headingText);
      }
  };
}

//h4

if(h4Length > 0){
  for (var i = 0; i <= h4Length-1 ; i++) {
    var headingText = document.getElementsByTagName("H4")[i].innerText;
    if(headingText != "" && headingText != " "){
        h4List.push(headingText);
      }
  };
}

//h5

if(h5Length > 0){
  for (var i = 0; i <= h5Length-1 ; i++) {
    var headingText = document.getElementsByTagName("H5")[i].innerText;
    if(headingText != "" && headingText != " "){
        h5List.push(headingText);
      }
  };  
}

//h6

if(h6Length > 0){
  for (var i = 0; i <= h6Length-1 ; i++) {
    var headingText = document.getElementsByTagName("H6")[i].innerText;
    if(headingText != "" && headingText != " "){
        h6List.push(headingText);
      }
  };
}

//images

if(imageLength > 0){
  for(var i = 0; i <= imageLength-1 ; i++){
    var imageURL = document.getElementsByTagName("IMG")[i].src;
    var imageALT = document.getElementsByTagName("IMG")[i].alt;
    var imageTITLE = document.getElementsByTagName("IMG")[i].title;
    var imageObject = new Object();
    imageObject.srcURL = imageURL;
    imageObject.altAttr = imageALT;
    imageObject.imgTitle = imageTITLE;
    imageList.push(imageObject);
  };
}


//links

if(linkLength > 0){
  for(var i = 0; i <= linkLength-1 ; i++){
    var linkHref = document.getElementsByTagName("A")[i].href;
    if(linkHref.indexOf(window.location.host) > -1){
      linkHref = window.location.pathname;
    }

    if(linkHref == "" || linkHref == " " ){
      linkHref = "empty href";
    }
    var linkObject = new Object();
    linkObject.hrefText = linkHref;
    linkList.push(linkObject);
  };
}


  pageObject.pageURL = pageURL; 
  pageObject.titleTag = titleTag;
  pageObject.metalist = metaList;
  pageObject.allHeaders = allHeaders;
  pageObject.h1List = h1List;
  pageObject.h2List = h2List;
  pageObject.h3List = h3List;
  pageObject.h4List = h4List;
  pageObject.h5List = h5List;
  pageObject.h6List = h6List;
  pageObject.imageList = imageList;
  pageObject.linkList = linkList;

  
  chrome.runtime.sendMessage(pageObject);

  



chrome.runtime.onMessage.addListener(function(pageObject){

  //variables

  // URL variables
  var url = pageObject.pageURL;

  //title variables
  var title = pageObject.titleTag;

  //metalist variables
  var listOfMetaObjects = pageObject.metalist;
  var lengthOfMetaList = listOfMetaObjects.length;
  var foundKeywords = false;
  var foundDescription = false;

  //headers variables
  var allHeaders = [];
  var listOfH1Objects = pageObject.h1List;
  var listOfH2Objects = pageObject.h2List;
  var listOfH3Objects = pageObject.h3List;
  var listOfH4Objects = pageObject.h4List;
  var listOfH5Objects = pageObject.h5List;
  var listOfH6Objects = pageObject.h6List;

  var lengthOfH1List = listOfH1Objects.length;
  var lengthOfH2List = listOfH2Objects.length;
  var lengthOfH3List = listOfH3Objects.length;
  var lengthOfH4List = listOfH4Objects.length;
  var lengthOfH5List = listOfH5Objects.length;
  var lengthOfH6List = listOfH6Objects.length;

  //image variables
  var imageList = pageObject.imageList;
  var lengthOfImageList = imageList.length;
  var noalttag = [];
  var notitletag = [];

  //link variables

  var linkList = pageObject.linkList;
  var lengthOfLinkList = linkList.length;
  var noHref = [];

  //URL
  document.getElementById("url").textContent = url;

  //title
  document.getElementById("title").textContent = title;
  document.getElementById("char").textContent = title.length + " characters";

  //metatags
  if(lengthOfMetaList > 0){
    for (var i = listOfMetaObjects.length - 1; i >= 0; i--) {
        node = document.createElement("LI");
        text = document.createElement("P");

        tagName = document.createTextNode(listOfMetaObjects[i][0] + ": ");
        tagContent = document.createTextNode(listOfMetaObjects[i][1]);

        text.appendChild(tagName);
        text.appendChild(tagContent);
        node.appendChild(text);

        document.getElementById("status").appendChild(node); 

        if(listOfMetaObjects[i][0].toLowerCase() == "keywords"){
          foundKeywords = true;

          //count words in keywards
          wordCount = listOfMetaObjects[i][1].toString().split(",").length;
          keyLength = document.createElement("P");
          keyLength.innerText = wordCount + " words";
          node.appendChild(keyLength);
        }
        if(listOfMetaObjects[i][0].toLowerCase() == "description"){
          foundDescription  = true;

          //count characters in description
          wordCount = listOfMetaObjects[i][1].toString().length;
          descLength = document.createElement("P");
          descLength.innerText = wordCount + " characters";
          node.appendChild(descLength);
          
          //text.innerText = text.innerText +" "+ wordCount + " characters";
        }
    };

  } else{}

  if(foundKeywords == false){
    node = document.createElement("LI");
    var warningKeywords = document.createTextNode("Keywords are missing!");
    node.style.color = "red";
    node.appendChild(warningKeywords);
    document.getElementById("status").appendChild(node);  
  } else{}

   if(foundDescription == false){
    node = document.createElement("LI");
    var warningDescription= document.createTextNode("Description is missing!");
     node.style.color = "red";
    node.appendChild(warningDescription);
    document.getElementById("status").appendChild(node);  
  } else{}

  //show headers in order

  //TO BE DONE



  //h1list
  document.getElementById("h1Length").innerHTML = lengthOfH1List;

  if(lengthOfH1List > 0){
    for (var i = lengthOfH1List - 1; i >= 0; i--) {
        node = document.createElement("LI");
        text = document.createTextNode("<h1> " + listOfH1Objects[i]);
        node.appendChild(text);
        document.getElementById("headers-h1").appendChild(node);  
    };
  }
  else{
    document.getElementById("headers-h1").innerHTML = "no h1 headers!";
  }
  
  //h2List 
  document.getElementById("h2Length").innerHTML = lengthOfH2List;

  if(lengthOfH2List > 0){
    for (var i = lengthOfH2List  - 1; i >= 0; i--) {
        node = document.createElement("LI");
        text = document.createTextNode("<h2> " + listOfH2Objects[i]);
        node.appendChild(text);
        document.getElementById("headers-h2").appendChild(node);  
    };

  }
  else{
    document.getElementById("headers-h2").innerHTML = "no h2 headers!";
  }

  //h3List
  document.getElementById("h3Length").innerHTML = lengthOfH3List;

  if(lengthOfH3List > 0){
    for (var i = lengthOfH3List - 1; i >= 0; i--) {
        node = document.createElement("LI");
        text = document.createTextNode("<h3> " + listOfH3Objects[i]);
        node.appendChild(text);
        document.getElementById("headers-h3").appendChild(node);  
    };

  }
  else{
    document.getElementById("headers-h3").innerHTML = "no h3 headers!";
  }

  //h4List
  document.getElementById("h4Length").innerHTML = lengthOfH4List;

  if(lengthOfH4List > 0){
    for (var i = lengthOfH4List - 1; i >= 0; i--) {
        node = document.createElement("LI");
        text = document.createTextNode("<h4> " + listOfH4Objects[i]);
        node.appendChild(text);
        document.getElementById("headers-h4").appendChild(node);  
    };

  }
  else{
    document.getElementById("headers-h4").innerHTML = "no h4 headers!";
  }

  //h5List
  document.getElementById("h5Length").innerHTML = lengthOfH5List;

  if(lengthOfH5List > 0){
    for (var i = lengthOfH5List - 1; i >= 0; i--) {
        node = document.createElement("LI");
        text = document.createTextNode("<h5> " + listOfH5Objects[i]);
        node.appendChild(text);
        document.getElementById("headers-h5").appendChild(node);  
    };

  }
  else{
    document.getElementById("headers-h5").innerHTML = "no h5 headers!";
  }

  //h6List 
  document.getElementById("h6Length").innerHTML = lengthOfH6List;

  if(lengthOfH6List > 0){
    for (var i = lengthOfH6List - 1; i >= 0; i--) {
        node = document.createElement("LI");
        text = document.createTextNode("<h6> " + listOfH6Objects[i]);
        node.appendChild(text);
        document.getElementById("headers-h6").appendChild(node);  
    };

  }
  else{
    document.getElementById("headers-h6").innerHTML = "no h6 headers!";
  }

  //imageList
  document.getElementById("imageLength").innerHTML = lengthOfImageList;

  if(lengthOfImageList > 0){
    for (var i = 0; i < lengthOfImageList - 1; i++) {
        node = document.createElement("LI");
        imageNode = document.createElement("IMG");
        imageAltNode = document.createElement("P");
        imageTitleNode = document.createElement("P");
        imageURLNode = document.createElement("P");
        imageNode.src = imageList[i].srcURL;

        imageURLNode.innerText = imageList[i].srcURL.toString();

        //check alt attribute
        if(imageList[i].altAttr.length > 0){
          imageAltNode.innerText = "alt: " + imageList[i].altAttr;
        }
        else{
          imageAltNode.innerText = "no alt attribute";
          imageAltNode.style.color = "red";
          noalttag.push(imageAltNode.innerText);
        }

        if(noalttag.length == 0){
          document.getElementById("noaltimages").style.color = "green";
          document.getElementById("noaltimages").innerText = "Great! No images without alt describtion";
        }
        else{
           document.getElementById("noaltimages").innerText = noalttag.length;
        }

        //check title attribute

        if(imageList[i].imgTitle.length > 0){
          imageTitleNode.innerText = "title: " + imageList[i].imgTitle;
        }
        else{
          imageTitleNode.innerText = "no title attribute";
          imageTitleNode.style.color = "red";
          notitletag.push(imageTitleNode.innerText);
        }

        if(notitletag.length == 0){
          document.getElementById("notitleimages").style.color = "green";
          document.getElementById("notitleimages").innerText = "Great! No images without title describtion";
        }
        else{
           document.getElementById("notitleimages").innerText = notitletag.length;
        }
        
        node.appendChild(imageNode);
        node.appendChild(imageAltNode);
        node.appendChild(imageTitleNode);
        node.appendChild(imageURLNode);
        document.getElementById("images").appendChild(node);  
    };
    
  }
  else{
    document.getElementById("images").innerHTML = "sorry! no images!";
  }


  //link list
  //still quite buggy, need to fix check properties
  //TODO: fx the empty link output
  //fix repeatinf links
  document.getElementById("linkLength").innerHTML = lengthOfLinkList;
  //see this solution on stackoverflow: http://stackoverflow.com/questions/12749200/how-to-count-array-elements-by-each-element-in-javascript

   linkList.sort();
    var current = null;
    var cnt = 0;

    for (var i = 0; i < linkList.length; i++) {
      if (linkList[i].hrefText != current) {
          if (cnt > 0) {
            node = document.createElement("LI");
            linkHrefNode = document.createElement("P");
            
            linkHrefNode.innerText = current;
            node.appendChild(linkHrefNode);
           
            if(cnt > 1){
              linkCountNode = document.createElement("SPAN");
              //linkCountNode.style.background = "red";
              linkCountNode.style.display = "block";
              linkCountNode.innerText = "we encounter this link " + cnt + " times";
              node.appendChild(linkCountNode);
            }
            
            document.getElementById("links").appendChild(node);
          }
          current = linkList[i].hrefText;
          cnt = 1;
      } else {
          cnt++;
      }
    }

  
});


window.onload = function() {
//version 2

  chrome.windows.getCurrent(function (currentWindow) {
    chrome.tabs.query({active: true, windowId: currentWindow.id},
          function(activeTabs) {
              chrome.tabs.executeScript(activeTabs[0].id, {file: 'js/meta.js'});
            }
    );

  });
};
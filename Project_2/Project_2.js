//The first Div
let superP = document.createElement("div");
superP.setAttribute("class", "super");

//The header
let header = document.createElement("header");
header.setAttribute("class", "header");
let pageName = document.createElement("p");
pageName.textContent = "My Website";
let pageLinks = document.createElement("ul");

let textsOfLinks = ["Home", "About", "service", "Contact"];
for (let i = 0; i < 4; i++) {
  let link = document.createElement("li");
  link.setAttribute("class", "listItem");
  link.textContent = textsOfLinks[i];
  link.style.cssText =
    "margin-right: 10px; font-size:large; display: flex; align-items: center; color:#9E9E9E";
  pageLinks.append(link);
}

superP.style.cssText =
  "display:flex; flex-direction:column; justify-content: space-between; height:97vh; background-color:rgb(194, 194, 194) ";
header.style.cssText =
  "display:flex; justify-content: space-between; background-color:white; height:12vh";
pageName.style.cssText =
  "color:#009688; font-size: larger; font-weight:bold; font-family:arial; display: flex; align-items: center";
pageLinks.style.cssText = "list-style: none; display: flex; margin:0";
document.body.style.margin = 0;

header.append(pageName);
header.append(pageLinks);
superP.append(header);
document.body.prepend(superP);

//The content
let content = document.createElement("div");
content.setAttribute("class", "content");

for (let i = 1; i < 16; i++) {
  let prod = document.createElement("div");
  prod.setAttribute("class", "product");
  let number = document.createElement("span");
  number.setAttribute("class", "prodNum");
  number.textContent = i;
  number.style.cssText = "font-size:larger";
  let textinside = document.createTextNode("Product");
  prod.style.cssText =
    "width:30vw; display:flex; background-color:white; flex-direction: column; align-items: center; height:70px; justify-content: space-evenly; ";
  prod.append(number);
  prod.append(textinside);
  content.append(prod);
}

content.style.cssText =
  "display:flex; flex-wrap: wrap; justify-content: space-evenly; height: 73vh; align-content: space-around;";

header.after(content);

//The footer
let foot = document.createElement("footer");
let copyR = document.createElement("span");
copyR.setAttribute("class", "feet");
copyR.textContent = "Copyright 2023";
foot.append(copyR);

foot.style.cssText =
  "height:9vh; background-color:#009668; display:flex; justify-content: center; align-items: center;";

content.after(foot);

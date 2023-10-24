let fields = document.getElementsByClassName("input");
let form = document.getElementsByTagName("form")[0];
let createButton = document.getElementsByTagName("input")[2];
let resultDiv = document.getElementsByClassName("results")[0];


form.onsubmit = function(e) {
    resultDiv.innerHTML = "";
    if(fields[0].value>0){
      for(let i = 1 ; i <= fields[0].value ; i++){
        let ele = document.createElement(fields[2].value);
        ele.textContent = fields[1].value;
        ele.setAttribute("class" , "box");
        ele.setAttribute("title" , "Element");
        ele.setAttribute("id" , `id-${i}`);
        resultDiv.appendChild(ele);
      }  
    }else{
      let p = document.createElement("p");
      p.textContent = "Inavlid Number";
      p.style.fontSize = "10px";
      p.style.margin = 0;
      fields[0].style.border = "2px solid #ff1100a6"
      form.insertBefore(p , fields[1]);
      Location.reload();
    }
    
  
  e.preventDefault();
}


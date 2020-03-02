fetch("data.json")
.then((response)=>{
     return response.json();       //the obtained response is converted to json abject by .json
}).then((data)=>{                  //data contains js object
     //console.log(data)
     display_info(data.basics);
})
var bodyelement=document.getElementsByClassName("root");
console.log(document.getElementsByClassName("root"));
  function display_info(info){
       //card view
     let cardele=document.createElement("div");
     cardele.classList.add("card");

     //heading and second line created
     let heading=document.createElement("h1");
     heading.textContent=info.name;
     let secline=document.createElement("h2");
     secline.textContent=info.role;
     let mail=document.createElement("a");
     mail.textContent=info.email;
     mail.href= "mailto:"+info.email;
     let line=document.createElement("hr");
     let mno = document.createElement("a");
     mno.href = "tel:"+info.mobile;
     mno.textContent = info.mobile;
     let linebreak=document.createElement("br");

     var btn = document.createElement("a");
     btn.textContent = "View Profile";
     btn.setAttribute("class","button");

     //card element added to body
     bodyelement[0].append(cardele);
      
     //headings added to card
     cardele.append(heading);

     cardele.append(secline);

     cardele.append(line);

     cardele.append(mail);

     cardele.append(linebreak);

     cardele.append(mno);
     
     cardele.append(btn);  

     

}
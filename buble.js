// // let add =document.getElementsByClassName("iten");
// //  for (let i = 0; i < add.length; i++) {
// //      const element = add[i];
// //      element.addEventListener("click", function(event){

// //         event.target.parentNode.removeChild(event.target);

// //      })
     
//  }
  document.getElementById("addNew").addEventListener("click",function(event){
       let addAnother = document.getElementById("my-first");
       let additem = document.createElement("li");
       additem.innerText = "add another list item";
       addAnother.appendChild(additem);


  })


  document.getElementById("my-first").addEventListener("click",function(event){
      event.target.parentNode.removeChild(event.target);
  })


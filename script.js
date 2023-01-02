const preload = document.getElementById("preloader");
const modal = document.querySelector(".modal-container")
const btn = document.querySelector('.sign-in');

window.addEventListener("load", () => {
  preload.style.opacity = "0";
  preload.style.zIndex = "-1";
})

window.addEventListener("click",function (evt) {
  if(evt.target == modal)
  {
    modal.style.display = "none";
  }
});

btn.onclick = () =>{
  modal.style.display = "flex";
}

var more = document.querySelectorAll("#more");

function display(more1){
    more1.addEventListener("click",()=>{
        var parent = more1.parentNode;
        var para = parent.nextSibling;
        para = para.nextSibling;
        para.style.display = "block";
        more1.addEventListener("click",()=>{
          var parent = more1.parentNode;
          var para = parent.nextSibling;
          para = para.nextSibling;
          para.style.display = "none";
          display(more1);
      });
      }); 
}

for (let i = 0; i < more.length; i++) {
      more[i].addEventListener("click",()=>{
        var parent = more[i].parentNode;
        var para = parent.nextSibling;
        para = para.nextSibling;
        para.style.display = "block";
        more[i].addEventListener("click",()=>{
          var parent = more[i].parentNode;
          var para = parent.nextSibling;
          para = para.nextSibling;
          para.style.display = "none";
          display(more[i]);
          for (let j = 0; j < more.length; j++) {
              if(j!=i)
              {
                var parent1 = more[j].parentNode;
                var para1 = parent1.nextSibling;
                para1 = para1.nextSibling;
                para1.style.display = "none";
              }
          }
      });
      });     
}
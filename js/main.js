let hamburger = document.querySelector (".hamburger");
let sideNave = document.querySelector (".side-drop-menu");

hamburger.addEventListener ("click", () => {

    hamburger.classList.toggle ("open");
    sideNave.classList.toggle ("show");
});


let newBlog = document.querySelector (".new-blog-4");
let blogNew = document.querySelector (".new-blog-3");
let bogNew = document.querySelector (".new-blog-7-11");
let nogNew = document.querySelector (".new-blog-3-111");
let newDate = new Date ();
newBlog.textContent = "By Himel" ;
blogNew.textContent = "On" + " " + newDate.getMonth() + " " + "june" + " " + newDate.getFullYear() + " " + "Business, Culture" ;
bogNew.textContent = "By Himel" ;
nogNew.textContent = "On" + " " + newDate.getMonth() + " " + "june" + " " + newDate.getFullYear() + " " + "Business, Culture" ;


//let hamburger = document.querySelector (".hamburger");

      //let sidenav = document.querySelector (".side-nav");


      //hamburger.addEventListener ("click", () => {

          //hamburger.classList.toggle ("open");
          //sidenav.classList.toggle ("show");

      //});

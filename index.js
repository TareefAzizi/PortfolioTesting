const toTop = document.querySelector(".to-top");

window.addEventListener("scroll" , () => {
  if(window.pageYOffset > 100){
    toTop.classListadd("active");
  }else{
    toTop.classListremove("active")
  }
})


// scroll animation



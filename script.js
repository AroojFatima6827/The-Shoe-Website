const Nav_links = document.querySelector('.nav-links');
const closeIcon = document.querySelector('.close-icon');
const hamburgerIcon = document.querySelector('.hamberger-icon');

hamburgerIcon.addEventListener("click",()=>{
    Nav_links.style.display = "flex";
    closeIcon.style.display = "block";
    hamburgerIcon.style.display = "none";
    Nav_links.style.flexDirection = "column";
    Nav_links.style.position = "absolute";
    Nav_links.style.left = "0";
    Nav_links.style.width = "100%";
    Nav_links.style.height = "auto";
    Nav_links.style.backgroundColor = "#fff";
    Nav_links.style.top = "150px";
    Nav_links.style.color= "#000";
    Nav_links.style.textAlign = "center";
    Nav_links.style.padding = "20px";
    Nav_links.style.borderRadius = "10px";
    Nav_links.style.lineHeight = "2.5";

});
closeIcon.addEventListener("click",()=>{
    Nav_links.style.display = "none";
    closeIcon.style.display = "none";
    hamburgerIcon.style.display = "block";
});
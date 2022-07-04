document.querySelector('.close-button').style.display = "none";

console.log("script");
document.querySelector('.nav-toggle').addEventListener("click",()=>{
    console.log("clicked");
    document.querySelector('.rightnavgroup').classList.toggle('sidebar-close');
    if(document.querySelector('.rightnavgroup').classList.contains('sidebar-close')){
        document.querySelector('.close-button').style.display = "none";
        document.querySelector('.open-button').style.display = "block";
    }
    else{
        document.querySelector('.close-button').style.display = "block";
        document.querySelector('.open-button').style.display = "none";
    }
})
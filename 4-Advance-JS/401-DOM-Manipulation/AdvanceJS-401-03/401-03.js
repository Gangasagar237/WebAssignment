// alert('this')
let flag =1;
function controller(x){
    flag+=x;
    slideshow(flag);
}
slideshow(flag)
function slideshow(num) {
    let sides=document.getElementsByClassName('side');
    if(num == sides.length){
        num = 0;
        flag=0;
    }
    if(num==-1){
        num=sides.length-1;
        flag=sides.length-1;
    }
    // console.log(slides)
}
for(let y of slides){
    y.style.display="none";
}
slides[num].style.display="block";

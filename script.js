

document.querySelector('.menu').addEventListener('click',()=>{
    document.querySelectorAll('.target').forEach((item,idx)=>{
        item.classList.toggle('change');
        console.log('click');
        
    });
});


const icons = document.querySelectorAll('.section-1_icons i');
let i=1;
setInterval(()=>{
    i++;
    const icon=document.querySelector('.section-1_icons .change');
    icon.classList.remove('change');
    if(i>icons.length){
        icons[0].classList.add('change');
        i=1
    }else{
    icon.nextElementSibling.classList.add('change');
    }
},1000);

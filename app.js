
const darkButton = document.getElementById('dark');
const lightButton = document.getElementById('light');
const solarButton = document.getElementById('solar');

const body = document.body;

const theme = localStorage.getItem('theme');


darkButton.onclick=()=>{
    if(body.classList.contains('solar')){
        body.classList.remove('solar')
        body.classList.remove('light')
        body.classList.add('dark')
    }else{

        body.classList.replace('light','dark')
    }
}
lightButton.onclick=()=>{
    if(body.classList.contains('solar')){
        console.log(body.classList.value)
        body.classList.remove('solar')
        body.classList.add('light')
    }else{
body.classList.replace('dark','light')
    }
    
}
solarButton.onclick=()=>{
    if((body.classList.value) == 'dark' ){
       console.log(body.classList.value)
       body.classList.remove('dark')
       body.classList.add('light')
       body.classList.add('solar')
    }
    else if(body.classList.value == 'light'){
        console.log(body.classList.value)
        body.classList.add('solar')

    }
}
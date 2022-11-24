const toggleSwitch=document.querySelector('input[type="checkbox"]');
const image1=document.getElementsByTagName('img')
const image2=document.getElementById('image2');
const image3=document.getElementById('image3');
const nav=document.getElementById('nav');
const toggleIcon=document.getElementById('toggle-icon');
const textBox=document.getElementById('text-box');

console.log(image1[0].src)
const s1=image1[0].src.split('_light').join('_dark').split('/');

console.log(s1)


function darkMode()
{
    nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    textBox.style.backgroundColor = 'rgb(255 255 255 / 60%)';

//    console.log(toggleIcon.children)
    toggleIcon.children[0].textContent = 'Dark Mode';
    toggleIcon.children[1].classList.replace('fa-sun','fa-moon');

    
}

function lightMode()
{

}

function switchTheme(event)
{
    // console.log(event.target.checked)
    if(event.target.checked)
    {
        document.documentElement.setAttribute('data-theme','dark');
        darkMode();
    }
    else
    {
        document.documentElement.setAttribute('data-theme','light');
        lightMode();

    }
}


toggleSwitch.addEventListener('change',switchTheme)
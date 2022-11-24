const toggleSwitch=document.querySelector('input[type="checkbox"]');
const nav=document.getElementById('nav');
const toggleIcon=document.getElementById('toggle-icon');
const textBox=document.getElementById('text-box');



function darkMode()
{
    nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    textBox.style.backgroundColor = 'rgb(255 255 255 / 60%)';

//    console.log(toggleIcon.children)
    toggleIcon.children[0].textContent = 'Dark Mode';
    toggleIcon.children[1].classList.replace('fa-sun','fa-moon');

    const images=document.getElementsByTagName('img');
    for (var i=0; i<images.length;i++)
    {
        let s1=images[i].src.split('_light').join('_dark').split('/');
        let s2=`${s1[3]}/${s1[4]}`;
        images[i].src=s2;
    }

    
}

function lightMode()
{
    nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor = 'rgb(0 0 0 / 60%)';

//    console.log(toggleIcon.children)
    toggleIcon.children[0].textContent = 'Light Mode';
    toggleIcon.children[1].classList.replace('fa-moon','fa-sun');

    const images=document.getElementsByTagName('img');
    for (var i=0; i<images.length;i++)
    {
        let s1=images[i].src.split('_dark').join('_light').split('/');
        let s2=`${s1[3]}/${s1[4]}`;
        images[i].src=s2;
    }

}

function switchTheme(event)
{
    // console.log(event.target.checked)
    if(event.target.checked)
    {
        document.documentElement.setAttribute('data-theme','dark');
        darkMode();
        localStorage.setItem('theme','dark');
    }
    else
    {
        document.documentElement.setAttribute('data-theme','light');
        lightMode();
        localStorage.setItem('theme','light');

    }
}


toggleSwitch.addEventListener('change',switchTheme)

const currentTheme = localStorage.getItem('theme')
if(currentTheme)
{
    document.documentElement.setAttribute('data-theme', currentTheme)
    if(currentTheme === 'dark')
    {
        toggleSwitch.checked = true;
        darkMode()
    }
}
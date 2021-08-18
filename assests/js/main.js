/*==================== MENU SHOW Y HIDDEN ====================*/
const navmenu=document.getElementById('nav-menu'),
      navtoggle=document.getElementById('nav-toggle'),
      navclose=document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navtoggle){
    navtoggle.addEventListener('click',() =>{
        navmenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navclose){
    navclose.addEventListener('click',() =>{
        navmenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navlink=document.querySelectorAll('.nav__link')

function linkaction(){
    const navmenu=document.getElementById('nav-menu')
    navmenu.classList.remove('show-menu')
}
navlink.forEach(n => n.addEventListener('click',linkaction))

/*==================== ACCORDION SKILLS ==================== 
const skillscontent=document.getElementsByClassName('skills__content'),
      skillsheader=document.querySelectorAll('.skills__header')
    
     function toggleskills(){
        let itemclass=this.parentnode.classname
        for(i=0;i<skillscontent.length;i++){
            skillscontent[i].classname='skills__content skills__close'
        }
    
        if(itemclass==='skills__content skills__close'){
            this.parentnode.classname='skill__content skills__open'
        }
    } 

    skillsheader.forEach((el) =>{
        
        el.addEventListener('click', toggleskills)
            
             } ) */


             const skillscontent=document.getElementById('a'),
                   skillsheader=document.getElementById('b')
    
             if(skillsheader){
                 skillsheader.addEventListener('click',()=>{
                    if(skillscontent.className==='skills__content skills__open')
                    {
                       skillscontent.className='skills__content skills__close'
                    }
                    else{
                       skillscontent.className='skills__content skills__open'
                    }
                 })
             }

             
             const content=document.getElementById('c'),
                   header=document.getElementById('d')
    
             if(header){
                 header.addEventListener('click',()=>{
                    if(content.className==='skills__content skills__open')
                    {
                       content.className='skills__content skills__close'
                    }
                    else{
                       content.className='skills__content skills__open'
                    }
                 })
             }

             const skillscontent2=document.getElementById('e'),
             skillsheader2=document.getElementById('f')

       if(skillsheader2){
           skillsheader2.addEventListener('click',()=>{
              if(skillscontent2.className==='skills__content skills__open')
              {
                 skillscontent2.className='skills__content skills__close'
              }
              else{
                 skillscontent2.className='skills__content skills__open'
              }
           })
       }
      
            
             
             
    
    



/*==================== QUALIFICATION TABS ====================*/
const tab=document.getElementById('education'),
     tabcontent =document.getElementById('g'),
     taba=document.getElementById('work'),
     tabacontent=document.getElementById('h')

if(tab){
 tab.addEventListener('click',()=>{
 if( tabcontent.className ==='qualification__content qualification__close')
 {   
     tab.className='qualification__button button--flex qualifications__button'
     taba.className='qualification__button button--flex'
     tabacontent.className='qualification__content qualification__close'
    tabcontent.className ='qualification__content qualification__active'
 }
 
 
})
}

if(taba){
    taba.addEventListener('click',() =>{
        if( tabacontent.className ==='qualification__content qualification__close')
 {  
    taba.className='qualification__button button--flex qualification__button'
    tab.className='qualification__button button--flex'
    tabcontent.className='qualification__content qualification__close'
    tabacontent.className='qualification__content qualification__active'
 }
 
    })
}



/*==================== SERVICES MODAL ====================*/
const modalview=document.querySelectorAll('.services__modal'),
      modalbtns=document.querySelectorAll('.services__button'),
      modalcloses=document.querySelectorAll('.services__modal-close')


let modal=function(modalclick){
    modalview[modalclick].classList.add('active-modal')
}
modalbtns.forEach((modalbtn, i) =>{
    modalbtn.addEventListener('click',() =>{
        modal(i)
    })
}) 
modalcloses.forEach((modalclose) =>{
    modalclose.addEventListener('click',() =>{
        modalview.forEach((modalview) =>{
            modalview.classList.remove('active-modal')
        }) 
    })
})

/*==================== PORTFOLIO SWIPER  ====================*/


/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/ 
function scrollup(){
    const scrollup = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 300) scrollup.classList.add('show-scroll'); else scrollup.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollup)

/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'fa-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'fa-moon' : 'fa-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'fa-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

 
const boxbutton=document.getElementById("submit"),
       boxa=document.getElementById("alertbox"),
       alertbutton=document.getElementById('alertbutton')

      
     

      
        boxbutton.addEventListener('click',() =>{
            { 
                var fname=document.getElementById('fname').value,
                    lemail=document.getElementById('lname').value

                if(fname.length != 0)
                if(lemail.length != 0){  
                {
                    boxa.className='services__modal active-modal'
                }}
            }
    
        })
    
    
    if(alertbutton){
        alertbutton.addEventListener('click',() =>{
            boxa.className='services__modal'
            window.location.reload()
        })
    }

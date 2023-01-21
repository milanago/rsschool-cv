console.log('1.Вёрстка соответствует макету. Ширина экрана 768px +24\n2.Вёрстка соответствует макету. Ширина экрана 380px +24\n3.Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +15\n4.На ширине экрана 380рх и меньше реализовано адаптивное меню +22\n')
(function(){
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header_nav');
    const menuCloseItem = document.querySelector('.header__nav-close');
    const menuLinks = document.querySelectorAll('.header__link');
    burgerItem.addEventListener('click', () => {
    menu.classList.add('header_nav_active');
    })
    menuCloseItem.addEventListener('click', () => {
    menu.classList.remove('header_nav_active')})
    
    if (window.innerWidth <= 760) {
        for( let i = 0; i < menuLinks.length; i++){
            menuLinks[i].addEventListener('click', () => {
            menu.classList.remove('header_nav_active');   
            })
        }
    
       
        (function () {
    
            const smoothScroll = function (targetEl, duration) {
                const headerElHeight =  document.querySelector('.header').clientHeight;
                let target = document.querySelector(targetEl);
                let targetPosition = target.getBoundingClientRect().top - headerElHeight;
                let startPosition = window.pageYOffset;
                let startTime = null;
            
                const ease = function(t,b,c,d) {
                    t /= d / 2;
                    if (t < 1) return c / 2 * t * t + b;
                    t--;
                    return -c / 2 * (t * (t - 2) - 1) + b;
                };
            
                const animation = function(currentTime){
                    if (startTime === null) startTime = currentTime;
                    const timeElapsed = currentTime - startTime;
                    const run = ease(timeElapsed, startPosition, targetPosition, duration);
                    window.scrollTo(0,run);
                    if (timeElapsed < duration) requestAnimationFrame(animation);
                };
                requestAnimationFrame(animation);
        
            };
        
            const scrollTo = function () {
                const links = document.querySelectorAll('.js-scroll');
                links.forEach(each => {
                    each.addEventListener('click', function () {
                        const currentTarget = this.getAttribute('href');
                        smoothScroll(currentTarget, 900);
                    });
                });
            };
            scrollTo();
        }());
    
    
    
    
    
    
          
     }
    }())                                                                                                                            
    
    
    
    
    const anchors = document.querySelectorAll('a[href*="#"]');
    anchors.forEach(anchor => {
        anchor.addEventListener("click", function (e) {
        if(!document.getElementById(this.getAttribute('href').substr(1))) return;
        e.preventDefault();
        
        const $blockTo = document.getElementById(this.getAttribute('href').substr(1));
        const marginScroll = Array.from(document.querySelectorAll(".js-margin-scroll")).map(item => item.offsetHeight).reduce((prev, current) => prev + current) || 0;
        
        window.scrollTo({ top: $blockTo.offsetTop - marginScroll, behavior: "smooth" });
        })
        });
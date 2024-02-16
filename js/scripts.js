window.addEventListener('DOMContentLoaded', event => {
    const cursor = document.querySelector(".mouse__cursor");
    const cursor2 = document.querySelector(".mouse__cursor2");

    // window.addEventListener("mousemove", (e) => {
    //     // 커서 효과 적용
    //     gsap.to(cursor, {
    //         duration: 0.5,
    //         left: e.pageX - cursor.clientWidth / 2,
    //         top: e.pageY - cursor.clientHeight / 2,
    //     });
    
    //     gsap.to(cursor2, {
    //         duration: 0.7,
    //         left: e.pageX - cursor2.clientWidth / 2,
    //         top: e.pageY - cursor2.clientHeight / 2,
    //     });
    // });
    
    // // 버튼 요소 제외한 부분에 대한 커서 효과 제거
    // document.querySelectorAll('.team-member .btn').forEach(button => {
    //     button.addEventListener('mouseenter', () => {
    //         cursor.style.display = 'none';
    //         cursor2.style.display = 'none';
    //     });
    //     button.addEventListener('mouseleave', () => {
    //         cursor.style.display = 'block';
    //         cursor2.style.display = 'block';
    //     });
    // });
    

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // 타이핑 효과 추가
    const content = "Hi 😊 I'm Minsun";
    const text = document.querySelector(".text");
    let i = 0;

    function typing() {
        let txt = content[i++];
        text.innerHTML += txt === "\n" ? "<br/>" : txt;
        if (i > content.length) {
            text.textContent = "";
            i = 0;
        }
    }
    setInterval(typing, 200);
});
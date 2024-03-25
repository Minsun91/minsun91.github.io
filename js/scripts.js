window.addEventListener("DOMContentLoaded", (event) => {
    // const cursor = document.querySelector(".mouse__cursor");
    // const cursor2 = document.querySelector(".mouse__cursor2");
    // window.addEventListener("mousemove", (e) => {
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

    window.addEventListener('load', function(){
        const loader = document.querySelector('.preloader');
        const content = document.querySelector('.content');
    
        loader.style.display = 'none';
        content.style.display = 'block';

    });


    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector("#mainNav");
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove("navbar-shrink");
        } else {
            navbarCollapsible.classList.add("navbar-shrink");
        }
    };

    // Shrink the navbar
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener("scroll", navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector("#mainNav");
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: "#mainNav",
            rootMargin: "0px 0px -40%",
        });
    }

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector(".navbar-toggler");
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll("#navbarResponsive .nav-link")
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener("click", () => {
            if (window.getComputedStyle(navbarToggler).display !== "none") {
                navbarToggler.click();
            }
        });
    });

    // Typing effect
    const content = "MINSUN KIM";
const text = document.querySelector(".text");
let i = 0;
function typing() {
    text.textContent += content[i++];
    if (i >= content.length) {
        clearInterval(intervalId);
    }
}

const intervalId = setInterval(typing, 500);


    //비디오 재생 관련
    const videoThumbnail = document.getElementById('video-thumbnail');
    videoThumbnail.addEventListener('click', playVideo);
    function playVideo(videoId, containerId) {
        var iframe = document.createElement('iframe');
        iframe.setAttribute('width', '560');
        iframe.setAttribute('height', '315');
        iframe.setAttribute('src', 'https://www.youtube.com/embed/' + videoId);
        iframe.setAttribute('frameborder', '0');
        iframe.setAttribute('allowfullscreen', '');

        var videoContainer = document.getElementById('video-container');
        var videoContainer = document.getElementById(containerId);
        if (videoContainer) {
            videoContainer.innerHTML = '';
            videoContainer.appendChild(iframe);
        } else {
            console.error('Video container element not found.');
        }
    }

    // 모달이 열릴 때 해당 비디오가 재생되도록 설정할 수 있습니다.
    document.getElementById('portfolioModal1').addEventListener('shown.bs.modal', function () {
        playVideo('HyVOByhXejk', 'video-container-1');
    });

    document.getElementById('portfolioModal3').addEventListener('shown.bs.modal', function () {
        playVideo('WTkQ1k11nWM', 'video-container-3');
    });
    document.getElementById('portfolioModal4').addEventListener('shown.bs.modal', function () {
        playVideo('C5cSWuhuU1I', 'video-container-4');
    });

  // Swiper 객체 생성
  var mySwiper = new Swiper('.swiper-container', {
    loop: true,
    speed: 1000,
    autoplay: {
        delay: 3000,
    },
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 0,
        stretch: 80,
        depth: 200,
        modifier: 1,
        slideShadows: false,
    },
    slidesPerView: 3,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    direction: 'horizontal',
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        320: {
            slidesPerView: 1,
        }
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

});

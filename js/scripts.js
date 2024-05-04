window.addEventListener("DOMContentLoaded", (event) => {
    // window.addEventListener('load', function(){
    //     const loader = document.querySelector('.preloader');
    //     const content = document.querySelector('.content');

    //     loader.style.display = 'none';
    //     content.style.display = 'block';

    // });

    window.addEventListener("DOMContentLoaded", (event) => {
        fetch("preloader.html")
            .then((response) => response.text())
            .then((html) => {
                const div = document.createElement("div");
                div.innerHTML = html;
                const preloader = div.firstElementChild;

                // 현재 문서의 body에 preloader를 추가합니다.
                document.body.insertBefore(preloader, document.body.firstChild);

                // 페이지가 완전히 로드되면 preloader를 숨깁니다.
                window.addEventListener("load", function () {
                    preloader.style.display = "none";
                });
            });
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
    const text = document.querySelector(".masthead-heading");
    const profileImage = document.querySelector(".profile-image");
    let i = 0;
    let isDeleting = false;
    let intervalId;
    const imageVisibleTime = 5000;
    
    function typing() {
        if (isDeleting) {
            profileImage.style.display = "none";
            text.textContent = text.textContent.slice(0, -1);
            if (text.textContent === "") {
                isDeleting = false;
                i = 0;
            }
        } else {
            if (i < content.length) {
                text.textContent += content[i++];
            }
            if (i === content.length) {
                isDeleting = true;
                profileImage.style.display = "inline";
                setTimeout(function() {
                    profileImage.style.display = "none";
                }, imageVisibleTime);
            }
        }
    }
    
    intervalId = setInterval(typing, 1500); 
    
      
    //비디오 재생 관련
    const videoThumbnail = document.getElementById("video-thumbnail");
    videoThumbnail.addEventListener("click", playVideo);

    function playVideo(videoId, containerId) {
        var iframe = document.createElement("iframe");
        iframe.setAttribute("width", "560");
        iframe.setAttribute("height", "315");
        iframe.setAttribute("src", "https://www.youtube.com/embed/" + videoId);
        iframe.setAttribute("frameborder", "0");
        iframe.setAttribute("allowfullscreen", "");

        var videoContainer = document.getElementById("video-container");
        var videoContainer = document.getElementById(containerId);
        if (videoContainer) {
            videoContainer.innerHTML = "";
            videoContainer.appendChild(iframe);
        } else {
            console.error("Video container element not found.");
        }
    }

    // 모달이 열릴 때 해당 비디오가 재생되도록 설정할 수 있습니다.
    document
        .getElementById("portfolioModal1")
        .addEventListener("shown.bs.modal", function () {
            playVideo("HyVOByhXejk", "video-container-1");
        });

    document
        .getElementById("portfolioModal3")
        .addEventListener("shown.bs.modal", function () {
            playVideo("WTkQ1k11nWM", "video-container-3");
        });
    document
        .getElementById("portfolioModal4")
        .addEventListener("shown.bs.modal", function () {
            playVideo("C5cSWuhuU1I", "video-container-4");
        });

    // Swiper 객체 생성
    var mySwiper = new Swiper(".swiper-container", {
        loop: true,
        speed: 1000,
        autoplay: {
            delay: 3000,
        },
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
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
        direction: "horizontal",
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            320: {
                slidesPerView: 1,
            },
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    //image preload
    function preloadAndLazyLoadImages() {
        const imageSources = [
            "./assets/img/team/1.jpg",
            "./assets/img/portfolio/1.png",
            "./assets/img/portfolio/2.png",
            "./assets/img/portfolio/3.png",
            "./assets/img/portfolio/4.png",
            "./assets/img/portfolio/5.jpg",
            "https://i.postimg.cc/Z5VvnNDJ/typescript.png",
            "https://i.postimg.cc/nrm2v2Q8/Database-copy-Amazon-Red-Shift-512.webp",
            "https://i.postimg.cc/CM9bjbN7/s3.png",
            "https://i.postimg.cc/W3307nCW/My-SQL-512.webp",
            "https://i.postimg.cc/Z5H9DNr1/postgresql-icon.webp",
            "https://i.postimg.cc/ZKmtKQBW/strapi-icon-512x505-3hl7a1v3.png",
            "https://i.postimg.cc/br5gnMv9/react-3.png",
            "https://i.postimg.cc/XYd3D6dm/hssjs.png",
            "https://i.postimg.cc/KvKwbqKB/1000-F-250305943-s-DC6la1-N1f-Dl3b-Lgf-Lx-Ok-Qw-It-Iodsd-Mb.jpg",
            "https://i.postimg.cc/rpWp2tWV/Slack-icon-2019-svg.png",
            "https://i.postimg.cc/k44htWc9/apps-jira-icon-2048x2048-u2czanhx.png",
        ];

        imageSources.forEach(function (imageSrc) {
            let img = new Image();
            img.src = imageSrc;
        });

        window.addEventListener("scroll", lazyLoadImages);
        lazyLoadImages(); // 초기 로딩 시 이미지 preload
    }

    // lazy loading을 위한 함수
    function lazyLoadImages() {
        const images = document.querySelectorAll("img[data-src]");

        images.forEach(function (img) {
            if (isElementInViewport(img)) {
                img.src = img.dataset.src;
                img.removeAttribute("data-src");
            }
        });
    }

    // 요소가 뷰포트 안에 있는지 확인하는 함수
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <=
                (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <=
                (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // 페이지 로드 시 이미지 preload 및 lazy loading을 수행
    document.addEventListener("DOMContentLoaded", preloadAndLazyLoadImages);
});


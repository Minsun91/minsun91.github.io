window.addEventListener("DOMContentLoaded", (event) => {
    const cursor = document.querySelector(".mouse__cursor");
    const cursor2 = document.querySelector(".mouse__cursor2");

// preloader를 표시하는 부분
document.addEventListener("DOMContentLoaded", function () {
    var preloader = document.querySelector(".loader");
    preloader.style.display = "block";

    // 2초 후 preloader를 숨기는 코드
    setTimeout(function () {
        preloader.style.display = "none";
    }, 2000); // 2초 설정
});

// 페이지 로딩이 완료된 후 preloader를 숨기는 부분
window.addEventListener("load", function () {
    var preloader = document.querySelector(".loader");
    preloader.style.display = "none";
});

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

    //  // Lenis 스크롤 효과 추가
    //  const lenis = new Lenis({
    //     wrapper: document.querySelector('.wrapper'),
    //     content: document.querySelector('.inner-wrapper'),
    // });

    // lenis.on('scroll', ScrollTrigger.update);

    // gsap.ticker.add(time => {
    //     lenis.raf(time * 1000);
    // });

    // gsap.ticker.lagSmoothing(0);

    // document.querySelector('html').style.cssText = `
    //     bottom: 0;
    //     left: 0;
    //     overflow: hidden;
    //     position: fixed;
    //     right: 0;
    //     top: 0;
    // `;

    // document.querySelector('.wrapper').style.cssText = `
    //     bottom: 0;
    //     left: 0;
    //     position: fixed;
    //     right: 0;
    //     top: 0;
    //     overflow: hidden;
    //     overflow-y: auto;
    //     width: 100%;
    // `;

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
});

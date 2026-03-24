// Swiper 초기화


var swiper = new Swiper(".mySwiper", {
    // 페이지네이션 설정 (분수 형태: 1 / 9)
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
    },
    // 좌우 이동 버튼 설정
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        
    },
    // 추가 팁: 자동 재생을 원한다면 아래 주석을 해제하세요
    
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    loop: true,
});





var swiper = new Swiper(".new", {
    
    navigation: {
        nextEl: "#new .swiper-button-next",
        prevEl: "#new .swiper-button-prev",
        
    },

    slidesPerView: 3,    // 한 번에 보여줄 슬라이드 개수
    spaceBetween: 30,    // 슬라이드 사이의 간격 (px)
    slidesPerGroup: 3,
    pagination: {
        el: "#new .swiper-pagination",
        clickable: true, // 점 클릭 시 이동 가능 여부
    },
    // 필요하다면 아래 옵션을 추가해 보세요
    loop: true,         // 무한 반복
    // autoplay: {         // 자동 재생
    //     delay: 2500,
    // },
    
    
});

var swiper = new Swiper(".best", {
    
    navigation: {
        nextEl: "#best .swiper-button-next",
        prevEl: "#best .swiper-button-prev",
        
    },

    slidesPerView: 5,    // 한 번에 보여줄 슬라이드 개수
    spaceBetween: 30,    // 슬라이드 사이의 간격 (px)
    slidesPerGroup: 5,
    pagination: {
        el: "#best .swiper-pagination",
        clickable: true, // 점 클릭 시 이동 가능 여부
    },
    // 필요하다면 아래 옵션을 추가해 보세요

    loop: true,         // 무한 반복
    // autoplay: {         // 자동 재생
    //     delay: 2500,
    // },
    
});



var swiper = new Swiper(".goods", {
    
    navigation: {
        nextEl: "#goods .swiper-button-next",
        prevEl: "#goods .swiper-button-prev",
        
    },
    slidesPerView: 3,    // 한 번에 보여줄 슬라이드 개수
    spaceBetween: 30, 
    slidesPerGroup: 3,   // 슬라이드 사이의 간격 (px)
    pagination: {
        el: "#goods .swiper-pagination",
        clickable: true, // 점 클릭 시 이동 가능 여부
    },
    // 필요하다면 아래 옵션을 추가해 보세요
 
    loop: true,         // 무한 반복
    // autoplay: {         // 자동 재생
    //     delay: 2500,
    // },
    
});
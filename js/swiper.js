// Swiper 초기화
var swiper = new Swiper(".mySwiper", {
    // 페이지네이션 설정 (분수 형태: 1 / 9)
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    // 좌우 이동 버튼 설정
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    // 추가 팁: 자동 재생을 원한다면 아래 주석을 해제하세요
    /*
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    */
});
  
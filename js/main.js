const TTB_KEY = "ttbqkrdpdls6031540001";

/**
 * 1. 알라딘 실시간 랭킹 (#rank)
 */
function getAladinRanking() {
    const url = `https://www.aladin.co.kr/ttb/api/ItemList.aspx?ttbkey=${TTB_KEY}&QueryType=Bestseller&MaxResults=5&start=1&SearchTarget=Book&output=js&Version=20131101&callback=renderRanking`;
    const script = document.createElement('script');
    script.src = url;
    script.className = "aladin-ranking-script";
    document.body.appendChild(script);
}

function renderRanking(data) {
    if (!data || !data.item) return;
    const rankList = document.querySelector("#rank ol");
    if (!rankList) return;

    rankList.innerHTML = "";
    data.item.forEach((book, index) => {
        // 랭킹은 텍스트 위주이므로 제목을 20자로 제한
        const shortTitle = book.title.length > 20 ? book.title.substring(0, 20) + "..." : book.title;
        const li = document.createElement('li');
        li.innerHTML = `
            <a href="${book.link}" target="_blank">
                <span class="num">${index + 1}</span> 
                <span class="txt">${shortTitle}</span>
            </a>`;
        rankList.appendChild(li);
    });
    document.querySelector(".aladin-ranking-script")?.remove();
}

/**
 * 2. 알라딘 신간 추천 (#new)
 */
function getAladinNewBooks() {
    const url = `https://www.aladin.co.kr/ttb/api/ItemList.aspx?ttbkey=${TTB_KEY}&QueryType=ItemNewAll&MaxResults=12&start=1&SearchTarget=Book&output=js&Version=20131101&callback=renderNewBooks`;
    const script = document.createElement('script');
    script.src = url;
    script.className = "aladin-new-script";
    document.body.appendChild(script);
}

function renderNewBooks(data) {
    if (!data || !data.item) return;
    const newWrapper = document.querySelector("#new .swiper-wrapper");
    if (!newWrapper) return;

    newWrapper.innerHTML = "";
    data.item.forEach((book) => {
        const slide = document.createElement('div');
        slide.className = "swiper-slide";
        // 지은이 가공: (지은이) 등 괄호 내용 제거 후 첫 번째 사람만 추출
        const cleanAuthor = book.author.replace(/\s*\(.*?\)/g, "").split(',')[0];
        
        slide.innerHTML = `
            <img src="${book.cover}" alt="${book.title}">
            <div class="slider_content">
                <h4 title="${book.title}">${book.title}</h4>
                <h6 title="${book.author}">${cleanAuthor} 등</h6> 
            </div>`;
        newWrapper.appendChild(slide);
    });

    new Swiper("#new .swiper", {
        slidesPerView: 3,
        spaceBetween: 25,
        slidesPerGroup: 3,
        loop: true,
        navigation: { nextEl: "#new .swiper-button-next", prevEl: "#new .swiper-button-prev" },
        pagination: { el: "#new .swiper-pagination", clickable: true },
    });
    document.querySelector(".aladin-new-script")?.remove();
}

/**
 * 3. 알라딘 베스트셀러 (#best)
 */
function getAladinBestBooks() {
    const url = `https://www.aladin.co.kr/ttb/api/ItemList.aspx?ttbkey=${TTB_KEY}&QueryType=Bestseller&MaxResults=10&start=1&SearchTarget=Book&output=js&Version=20131101&callback=renderBestBooks`;
    const script = document.createElement('script');
    script.src = url;
    script.className = "aladin-best-script";
    document.body.appendChild(script);
}

function renderBestBooks(data) {
    if (!data || !data.item) return;
    const bestWrapper = document.querySelector("#best .swiper-wrapper");
    if (!bestWrapper) return;

    bestWrapper.innerHTML = "";
    data.item.forEach((book) => {
        const slide = document.createElement('div');
        slide.className = "swiper-slide";
        const cleanAuthor = book.author.replace(/\s*\(.*?\)/g, "").split(',')[0];
        
        slide.innerHTML = `
            <img src="${book.cover}" alt="${book.title}">
            <div class="slider_content">
                <h4 title="${book.title}">${book.title}</h4>
                <h6 title="${book.author}">${cleanAuthor} 등</h6> 
            </div>`;
        bestWrapper.appendChild(slide);
    });

    new Swiper("#best .swiper", {
        slidesPerView: 5,
        spaceBetween: 30,
        slidesPerGroup: 5,
        loop: true,
        navigation: { nextEl: "#best .swiper-button-next", prevEl: "#best .swiper-button-prev" },
        pagination: { el: "#best .swiper-pagination", clickable: true },
    });
    document.querySelector(".aladin-best-script")?.remove();
}

// 초기 실행
getAladinRanking();
getAladinNewBooks();
getAladinBestBooks();
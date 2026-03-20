async function getBooks(query) {
    const REST_API_KEY = 'b30c8fbac4a4a5fac8a7b7ad20568496'; // 본인의 REST API 키 입력
    const url = `https://dapi.kakao.com/v2/search/book?query=${encodeURIComponent(query)}&size=5`;

    const response = await fetch(url, {
        headers: {
            Authorization: `KakaoAK ${REST_API_KEY}`
        }
    });
    const data = await response.json();
    renderSlides(data.documents);
}
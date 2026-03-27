document.addEventListener("DOMContentLoaded", async () => {
    const query = "살찌지 않는 몸";
    const API_KEY = "b30c8fbac4a4a5fac8a7b7ad20568496";

    try {
        const response = await fetch(`https://dapi.kakao.com/v3/search/book?query=${encodeURIComponent(query)}`, {
            method: 'GET',
            headers: {
                Authorization: `KakaoAK ${API_KEY}`
            }
        });

        const data = await response.json();
        const book = data.documents[0];

        if (!book) {
            console.error("도서 정보를 찾을 수 없습니다.");
            return;
        }

        // [1] 상단 정보 출력
        const authorsEl = document.getElementById('authors');
        if (authorsEl) authorsEl.innerText = `${book.authors.join(", ")} (지은이)`;

        const datetimeEl = document.getElementById('datetime');
        if (datetimeEl) datetimeEl.innerText = `${book.datetime.slice(0, 10)} 출간`;

        // [2] 가격 정보 출력
        const basePriceEl = document.getElementById('base_price');
        const actualPriceEl = document.getElementById('actual_price');

        if (basePriceEl) {
            basePriceEl.innerText = book.price.toLocaleString() + "원";
        }

        if (actualPriceEl) {
            const salePrice = book.sale_price > 0 ? book.sale_price : book.price;
            const discountRate = Math.round((1 - salePrice / book.price) * 100);
            actualPriceEl.innerText = `${discountRate}% ${salePrice.toLocaleString()}원`;
        }

    } catch (error) {
        console.error("API 호출 중 에러:", error);
    }



    try {
        const response = await fetch("./txt/sub1_1.txt");
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.text();
        document.getElementById('select').innerHTML = data;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }

    try {
        const response = await fetch("./txt/sub1_2.txt");
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.text();
        document.getElementById('introduce').innerHTML = data;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }


    try {
        const response = await fetch("./txt/sub1_3.txt");
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.text();
        document.getElementById('contents').innerHTML = data;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }

    try {
        const response = await fetch("./txt/sub1_4.txt");
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.text();
        document.getElementById('in_books').innerHTML = data;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }

    
    try {
        const response = await fetch("./txt/sub1_5.txt");
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.text();
        document.getElementById('main_info').innerHTML = data;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }

});

document.querySelector('.book-container').addEventListener('click', function () {
    this.classList.toggle('flipped');
});


var swiper = new Swiper(".mySwiper", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

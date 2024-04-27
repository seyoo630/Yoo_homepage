// 좋아요 및 공유 기능 구현
document.querySelectorAll('.post').forEach(post => {
    let isLiked = false; // 좋아요 상태를 추적하는 변수
    let likeCount = 0; // 초기 좋아요 카운트

    const likeBtn = post.querySelector('.like-btn');
    const likeCountSpan = post.querySelector('.like-count'); // 숫자를 표시할 span 요소

    likeBtn.addEventListener('click', () => {
        if (!isLiked) {
            // 좋아요 추가
            isLiked = true;
            likeCount++;
            likeCountSpan.textContent = likeCount; // 좋아요 카운트 업데이트
            likeBtn.textContent = 'Unlike';
        } else {
            // 좋아요 취소
            isLiked = false;
            likeCount--;
            likeCountSpan.textContent = likeCount; // 좋아요 카운트 업데이트
            likeBtn.textContent = 'Like';
        }
    });

    const shareBtn = post.querySelector('.share-btn');

    shareBtn.addEventListener('click', () => {
        // 현재 페이지 URL 복사
        const postURL = window.location.href;
        navigator.clipboard.writeText(postURL);
        alert('Post URL copied to clipboard.');
    });
});

// 검색 기능 구현
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');

searchForm.addEventListener('submit', function (event) {
    event.preventDefault(); // 기본 이벤트(페이지 새로고침) 방지

    const searchTerm = searchInput.value.toLowerCase(); // 검색어를 소문자로 변환

    // 각 포스트의 제목을 검색어와 비교하여 일치하는 포스트를 보여줌
    document.querySelectorAll('.post').forEach(post => {
        const title = post.querySelector('h3').textContent.toLowerCase(); // 포스트 제목을 소문자로 변환

        if (title.includes(searchTerm)) {
            post.style.display = 'block'; // 검색어가 포함된 포스트는 보여줌
        } else {
            post.style.display = 'none'; // 검색어가 포함되지 않은 포스트는 숨김
        }
    });
});
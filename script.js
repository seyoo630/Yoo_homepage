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

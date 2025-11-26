// CSS 애니메이션 시간(3초)에 맞춰 로딩 화면을 숨기고 메인 콘텐츠를 표시합니다.
// 실제 프로젝트에서는 데이터 로드 완료 후 이 코드를 실행해야 합니다.
setTimeout(() => {
    // 로딩 화면을 숨깁니다.
    document.getElementById('loading-screen').style.display = 'none';
    
    // 메인 콘텐츠를 표시합니다.
    document.getElementById('main-content').style.display = 'block';
}, 3000); // 3000밀리초 = 3초
document.addEventListener("DOMContentLoaded", function() {
  const body = document.body;
  
  // 이미지 경로 (404 방지를 위해 상대 경로 './' 권장)
  const cursors = [
    "url('./images/cursor_1.png'), auto", // Zygote
    "url('./images/cursor_2.png'), auto", // Embryo
    "url('./images/cursor_3.png'), auto"  // Fetus
  ];
  
  let currentIndex = 0;

  // 커서를 변경하는 함수
  function updateCursor() {
    const currentCursor = cursors[currentIndex];
    
    // body에 적용
    body.style.cursor = currentCursor;
    
    // 상호작용 요소들(링크, 버튼, 그리드 박스)에 강제 적용
    const interactiveElements = document.querySelectorAll('a, button, .grid > div, .grid > section');
    interactiveElements.forEach(el => {
      el.style.setProperty('cursor', currentCursor, 'important');
    });

    currentIndex = (currentIndex + 1) % cursors.length;
  }

  // 1. 페이지 로드 즉시 한 번 실행
  updateCursor();

  // 2. 이후 2초마다 반복 실행
  setInterval(updateCursor, 2000);
});

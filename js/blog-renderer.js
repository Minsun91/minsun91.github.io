// index.html용: 카테고리별 최신 3개씩
function renderHomepagePosts() {
    const categories = ['travel', 'life', 'tech'];
    
    categories.forEach(category => {
      const container = document.querySelector(`#${category}-posts-container`);
      if (!container) return;
      
      const posts = getLatestPosts(category, 3);
      container.innerHTML = posts.map(post => createBlogCard(post, false)).join('');
    });
  }
  
  // blog.html용: 전체 포스트 (필터링 가능)
  function renderBlogPagePosts() {
    const container = document.getElementById('blogGrid');
    if (!container) return;
    
    const posts = getAllPosts();
    container.innerHTML = posts.map(post => createBlogCard(post, true)).join('');
  }
  
  // 페이지 로드 시 자동 실행
  document.addEventListener('DOMContentLoaded', function() {
    // index.html인지 blog.html인지 확인
    if (document.getElementById('blogGrid')) {
      renderBlogPagePosts();
    } else if (document.querySelector('[id$="-posts-container"]')) {
      renderHomepagePosts();
    }
  });
// js/posts-data.js
const blogPosts = [
    {
      title: "Sri Lanka 🇱🇰",
      intro: "Two weeks of wild animals, coconuts, and swimming in the island that runs on chai and smiles.",
      category: "travel",
      region: "asia",
      href: "/posts/travel/asia/sri-lanka.html",
      image: "assets/img/post/travel/sigiriya.jpg",
      date: "2025-09-09"
    },
    {
      title: "Sri Lanka 🇱🇰",
      intro: "Two weeks of wild animals, coconuts, and swimming in the island that runs on chai and smiles.",
      category: "travel",
      region: "asia",
      href: "/posts/travel/asia/sri-lanka-ella.html",
      image: "assets/img/post/travel/sri.jpg",
      date: "2025-09-09"
    },
    {
      title: "Slovenia 🇸🇮",
      intro: "Silence, Beauty, and Sticker Shock",
      category: "travel",
      region: "europe",
      href: "/posts/travel/europe/slovenia.html",
      image: "/assets/img/post/travel/slovenia.jpg",
      date: "2025-01-10"
    },
    {
      title: "Wales 🏴󠁧󠁢󠁷󠁬󠁳󠁿",
      intro: "Skomer Island: Like Germany, Only Wilder (and Full of Puffins)",
      category: "travel",
      region: "europe",
      href: "https://blog.naver.com/kms91716/223514759280",
      image: "/assets/img/post/travel/wales.jpeg",
      date: "2025-01-05"
    },
    {
      title: "Sicily 🏴󠁧󠁢󠁷󠁬󠁳󠁿",
      intro: "My personal favourite place in Europe",
      category: "travel",
      region: "europe",
      href: "/posts/travel/europe/sicily.html",
      image: "https://postfiles.pstatic.net/MjAyNTA0MDhfMTYz/MDAxNzQ0MDUzNDAwNTk1.H8rZq7cuVARIciAKAgKk3pzWSqaLC2IUOg-zmZ9K2Skg.oWjirYq9HezRx-nBMnrYCWYWzWAbsXH5QnFlGrjpP-4g.JPEG/IMG_2698.jpg?type=w773",
      date: "2025-04-01"
    },
    {
      title: "My Favorite Scents",
      intro: "Soft, clean, and quietly addictive. A look into perfumes that smell like calm mornings.",
      category: "life",
      region: "perfume-review",
      href: "posts/life/shopping/perfume-review.html",
      image: "assets/img/post/life/perfume.jpg",
      date: "2025-01-12"
    },
    {
      title: "Running Essentials",
      intro: "The gear, routes, and playlists that keep me going mile after mile.",
      category: "life",
      region: "running",
      href: "posts/life/hobbies/running.html",
      image: "assets/img/post//life/running.jpg",
      date: "2025-05-08"
    },
    {
      title: "Weekend Hikes",
      intro: "Trails, peaks, and the quiet moments between breaths.",
      category: "life",
      region: "hiking",
      href: "/posts/life/daily/weekend-vibes.html",
      image: "assets/img/post/life/hiking.jpg",
      date: "2025-01-03"
    },
    {
      title: "Automating Life with n8n",
      intro: "From Notion cover syncs to TMDb connections — how I'm making my digital life run itself.",
      category: "tech",
      region: "automation",
      href: "posts/tech/automation.html",
      image: "assets/img/tech/automation.jpg",
      date: "2025-01-14"
    },
    {
      title: "My AI placeground",
      intro: "How to make your imagine into real",
      category: "tech",
      region: "ai-image",
      href: "posts/tech/ai.html",
      image: "assets/img/tech/notion-setup.jpg",
      date: "2025-01-07"
    },
    {
      title: "Tools That Actually Work",
      intro: "The apps, shortcuts, and workflows that save me hours every week.",
      category: "tech",
      region: "productivity-tools",
      href: "posts/tech/productivity-tools.html",
      image: "assets/img/tech/productivity-tools.jpg",
      date: "2025-01-02"
    }
  ];
  
  // 카테고리별 뱃지 색상
  const categoryBadges = {
    travel: { class: "badge-travel", color: "#3498db" },
    life: { class: "badge-life", color: "#e74c3c" },
    tech: { class: "badge-tech", color: "#2ecc71" }
  };
  
  // 카드 생성 함수
  function createBlogCard(post, showBadge = false) {
    const badge = showBadge ? 
      `<span class="category-badge ${categoryBadges[post.category].class}">${post.category.charAt(0).toUpperCase() + post.category.slice(1)}</span>` 
      : '';
  
    return `
      <div class="col-lg-4 col-md-6 mb-4 blog-item" data-category="${post.category}">
        <div class="card bg-dark border-0 h-100 blog-card">
          <img src="${post.image}" class="card-img-top" alt="${post.title}">
          <div class="card-body">
            ${badge}
            <h5 class="card-title" style="color: beige;">${post.title}</h5>
            <p class="card-text" style="color: #ccc;">${post.intro}</p>
            <a href="${post.href}" class="btn btn-outline-light btn-sm">Read more →</a>
          </div>
        </div>
      </div>
    `;
  }
  
  // 최신 포스트 가져오기
  function getLatestPosts(category = null, limit = 3) {
    let filtered = category 
      ? blogPosts.filter(post => post.category === category)
      : blogPosts;
    
    return filtered
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, limit);
  }
  
  // 전체 포스트 가져오기
  function getAllPosts() {
    return blogPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
  }
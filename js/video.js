document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("videoContainer");
  
    videos.forEach(video => {
      const html = `
        <div class="video-card" data-aos="fade-up">
          <div class="video-thumb">
            <iframe src="${video.videoUrl}" allowfullscreen></iframe>
          </div>
          <div class="video-info">
            <h3>${video.title}</h3>
            <p>${video.description}</p>
          </div>
        </div>
      `;
      container.insertAdjacentHTML("beforeend", html);
    });
  });
  
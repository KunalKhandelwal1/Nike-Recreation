//Banner
const bannerItems = [
    { id: 1, text: "New Styles Upto 40% Off !!" },
    { id: 2, text: "SHop, Explore and Have Fun!" },
    { id: 3, text: "I want to kill myself !" },
  ];
  
  let currentIndex = 0;
  

  function renderBannerItems() {
    const container = document.getElementById('banner-container');
    container.innerHTML = ''; 
  
    bannerItems.forEach(item => {
      const bannerItemDiv = document.createElement('div');
      bannerItemDiv.classList.add('banner-item');
      bannerItemDiv.textContent = item.text; 
      container.appendChild(bannerItemDiv);
    });
  
    updateScrollPosition(); 
  }
  

  renderBannerItems();
  

  document.getElementById('nextBtn').addEventListener('click', function() {
    if (currentIndex < bannerItems.length - 1) {
      currentIndex++;
    } else {
      currentIndex = 0; 
    }
    updateScrollPosition();
  });
  
  document.getElementById('prevBtn').addEventListener('click', function() {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = bannerItems.length - 1; 
    }
    updateScrollPosition();
  });
  

  function updateScrollPosition() {
    const container = document.querySelector('.scroll-container');
    const items = document.querySelectorAll('.banner-item');
    const itemWidth = items[0] ? items[0].clientWidth : 0;
    container.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
  }
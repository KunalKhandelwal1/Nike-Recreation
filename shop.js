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

//Sort By buton
const dropdownItems = document.querySelectorAll('.dropdown-item');
const dropdownButton = document.getElementById('selected-option');

dropdownItems.forEach(item => {
  item.addEventListener('click', function() {
      const selectedOption = item.getAttribute('data-sort');
      dropdownButton.textContent = `Sort By: ${selectedOption}`;
      dropdownButton.classList.add('selected');
  });
});

//Like Button
const heartLinks = document.querySelectorAll('.icon-hover');

heartLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault();  
        link.classList.toggle('liked');
    });
});

var btn1 = document.querySelectorAll(".btn1");
btn1.forEach((btn1)=>{
  btn1.addEventListener("click", () => {
      let icon = btn1.querySelector("i");
      if (icon.classList.contains("text-secondary")) {
          icon.classList.remove("text-secondary");
          icon.classList.add("text-danger");
      } else {
          icon.classList.remove("text-danger");
          icon.classList.add("text-secondary");
      }
  });

});
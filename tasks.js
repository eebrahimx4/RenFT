
// open model for wallet
const modal = document.getElementById("walletModal");

document.querySelectorAll('.open-modal').forEach(card => {
  card.addEventListener('click', () => {
    modal.style.display = 'flex';
  });
});

function closeModal() {
  modal.style.display = 'none';
}

window.onclick = function(event) {
  if (event.target === modal) {
    closeModal();
  }
}

// Data For Carts
const matches = [
  {
    id: 1,
    title: "Today's fruits",
    subtitle: "fruits",
    year: "2025",
    time: "00:00:00",
    league: "Strawberry To Jackson",
    img1: "/image_products/33.jpg",
    team1: "Strawberry",
    img2: "/image/profilee.jpg",
    team2: "Jackson",
    bg: "/image/aaa.jpg"
  },
  {
    id: 2,
    title: "Veggie Match",
    subtitle: "vegetables",
    year: "2025",
    time: "12:30:00",
    league: "Broccoli vs Carrot",
    img1: "/image_products/31.jpg",
    team1: "Broccoli",
    img2: "/image/profilee.jpg",
    team2: "Carrot",
    bg: "/image/ccc.jpg"
  },
  {
    id: 3,
    title: "Veggie Match",
    subtitle: "vegetables",
    year: "2025",
    time: "12:30:00",
    league: "Broccoli vs Carrot",
    img1: "/image_products/31.jpg",
    team1: "Broccoli",
    img2: "/image/profilee.jpg",
    team2: "Carrot",
    bg: "/image/ccc.jpg"
  },
  {
    id: 4,
    title: "Veggie Match",
    subtitle: "vegetables",
    year: "2025",
    time: "12:30:00",
    league: "Broccoli vs Carrot",
    img1: "/image_products/31.jpg",
    team1: "Broccoli",
    img2: "/image/profilee.jpg",
    team2: "Carrot",
    bg: "/image/ccc.jpg"
  },
  {
    id: 5,
    title: "Veggie Match",
    subtitle: "vegetables",
    year: "2025",
    time: "12:30:00",
    league: "Broccoli vs Carrot",
    img1: "/image_products/31.jpg",
    team1: "Broccoli",
    img2: "/image/profilee.jpg",
    team2: "Carrot",
    bg: "/image/ccc.jpg"
  },
];



function getCurrentDateTime() {
  const now = new Date();
  const dateOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  const timeOptions = {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  };
  
  return {
    date: now.toLocaleDateString('ar-EG', dateOptions),
    time: now.toLocaleTimeString('ar-EG', timeOptions)
  };
}

// عرض الماتشات
const container = document.getElementById("matchesContainer");

for(let i = 0; i < matches.length; i++) {
  const current = getCurrentDateTime();
  
  let cartona = `
  <div class="open-modal">
        <div class="match-card">
            <div class="card-header">
              <span>ID: ${matches[i].id}</span>
              <span class="copy-icon">📋</span>
            </div>
      
            <div class="player-section">
              <img src="${matches[i].bg}" alt="Cover of matches" class="player-bg">
              <div class="overlay">
                <div class="top-info">
                  <span>${current.date}</span>
                  <span>${current.time} ⏱️</span>
                </div>
                <div class="player-info">
                  <h3>${matches[i].title}</h3>
                  <p>${matches[i].subtitle}</p>
                </div>
              </div>
            </div>
      
            <div class="league-title">${matches[i].league}</div>
      
            <div class="match-teams">
              <div class="team">
                <img src="${matches[i].img1}" alt="Team 1">
                <p>${matches[i].team1}</p>
              </div>
              <div class="vs">VS</div>
              <div class="team">
                <img src="${matches[i].img2}" alt="Team 2">
                <p>${matches[i].team2}</p>
              </div>
            </div>
        </div>
      </div>
  `;
  container.innerHTML += cartona;
}

// دالة التحديث التلقائي
function updateAllTimes() {
  const current = getCurrentDateTime();
  const dateElements = document.querySelectorAll('.top-info span:first-child');
  const timeElements = document.querySelectorAll('.top-info span:last-child');
  
  dateElements.forEach(el => el.textContent = current.date);
  timeElements.forEach(el => {
    el.innerHTML = current.time + ' <span class="clock-icon">⏱️</span>';
    el.style.color = '#4CAF50';
    setTimeout(() => el.style.color = '', 500);
  });
}

// تحديث كل ثانية
setInterval(updateAllTimes, 1000);
updateAllTimes();






// searchInput
const searchInput = document.getElementById("searchInput");

function renderMatches(data) {
  container.innerHTML = ''; 

  for (let i = 0; i < data.length; i++) {
    let cartona = `
    <div class="open-modal">
      <div class="match-card">
        <div class="card-header">
          <span>ID: ${data[i].id}</span>
          <span class="copy-icon">📋</span>
        </div>

        <div class="player-section">
          <img src="${data[i].bg}" alt="Cover of matches" class="player-bg">
          <div class="overlay">
            <div class="top-info">
              <span>${data[i].year}</span>
              <span>${data[i].time} ⏱️</span>
            </div>
            <div class="player-info">
              <h3>${data[i].title}</h3>
              <p>${data[i].subtitle}</p>
            </div>
          </div>
        </div>

        <div class="league-title">${data[i].league}</div>

        <div class="match-teams">
          <div class="team">
            <img src="${data[i].img1}" alt="Team 1">
            <p>${data[i].team1}</p>
          </div>
          <div class="vs">VS</div>
          <div class="team">
            <img src="${data[i].img2}" alt="Team 2">
            <p>${data[i].team2}</p>
          </div>
        </div>
      </div>
    </div>
    `;
    container.innerHTML += cartona;
  }
}
renderMatches(matches);
searchInput.addEventListener("input", () => {
  const value = searchInput.value.trim();
  if (value === "") {
    renderMatches(matches); 
  } else {
    const filtered = matches.filter(item => item.id == value);
    renderMatches(filtered); 
  }
});


// 


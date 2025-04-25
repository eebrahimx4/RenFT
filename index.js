const modal = document.getElementById("walletModal");

document.querySelectorAll(".open-modal").forEach((card) => {
  card.addEventListener("click", () => {
    modal.style.display = "flex";
  });
});

function closeModal() {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target === modal) {
    closeModal();
  }
};

// تغير صورة الوجهه
const images = ["/image/cover.jpg", "/image/test1.jpg", "/image/test3.jpg"];

let currentIndex = 0;
const imgElement = document.getElementById("slideshow");

setInterval(() => {
  currentIndex = (currentIndex + 1) % images.length;
  imgElement.classList.remove("logo"); // علشان نعيد الأنيميشن
  void imgElement.offsetWidth; // ترست للأنيميشن
  imgElement.src = images[currentIndex];
  imgElement.classList.add("logo");
}, 4000);

// عرض السحوبات

// بيانات المستخدمين (50 اسم)
const users = [
  { name: " أحمد", order: "withdraw-" + Math.floor(Math.random() * 900 + 10000) },
  { name: "محمد", order: "Deposit-" + Math.floor(Math.random() * 700 + 13000) },
  { name: "علي", order: "withdraw-" + Math.floor(Math.random() * 870 + 10000) },
  { name: "محمود", order: "Deposit-" + Math.floor(Math.random() * 450 + 4500) },
  { name: "خالد", order: "withdraw-" + Math.floor(Math.random() * 360 + 10000) },
  { name: "عمر", order: "withdraw-" + Math.floor(Math.random() * 360 + 6000) },
  { name: "ياسين", order: "Deposit-" + Math.floor(Math.random() * 360 + 4600) },
  { name: "إبراهيم", order: "withdraw-" + Math.floor(Math.random() * 360 + 4600) },
  { name: "مصطفى", order: "Deposit-" + Math.floor(Math.random() * 450 + 7000) },
  { name: "عماد", order: "withdraw-" + Math.floor(Math.random() * 1500 + 6500) },
  { name: "نور", order: "withdraw-" + Math.floor(Math.random() * 1500 + 7000) },
  { name: "مريم", order: "Deposit-" + Math.floor(Math.random() * 1500 + 5000) },
  { name: "فاطمة", order: "withdraw-" + Math.floor(Math.random() * 800 + 8000) },
  { name: "زينب", order: "Deposit-" + Math.floor(Math.random() * 800 + 9000) },
  { name: "هناء", order: "withdraw-" + Math.floor(Math.random() * 800 + 12200) },
  { name: "آية", order: "Deposit-" + Math.floor(Math.random() * 430 + 5000) },
  { name: "سارة", order: "Deposit-" + Math.floor(Math.random() * 430 + 6000) },
  { name: "دنيا", order: "withdraw-" + Math.floor(Math.random() * 430 + 2000) },
  { name: "منى", order: "Deposit-" + Math.floor(Math.random() * 2200 + 100) },
  { name: "هبة", order: "withdraw-" + Math.floor(Math.random() * 2200 + 600) },
  { name: "طارق", order: "withdraw-" + Math.floor(Math.random() * 2200 + 800) },
  { name: "باسم", order: "Deposit-" + Math.floor(Math.random() * 6000 + 2000) },
  { name: "حسام", order: "withdraw-" + Math.floor(Math.random() * 6000 + 3000) },
  { name: "رامي", order: "Deposit-" + Math.floor(Math.random() * 6000 + 7000) },
  { name: "وائل", order: "withdraw-" + Math.floor(Math.random() * 870 + 7000) },
  { name: "صلاح", order: "withdraw-" + Math.floor(Math.random() * 870 + 7000) },
  { name: "نبيل", order: "Deposit-" + Math.floor(Math.random() * 3100 + 10000) },
  { name: "سمير", order: "Deposit-" + Math.floor(Math.random() * 3100 + 8500) },
  { name: "كريم", order: "withdraw-" + Math.floor(Math.random() * 3100 + 3000) },
  { name: "بكر", order: "Deposit-" + Math.floor(Math.random() * 4000 + 8400) },
  { name: "جمال", order: "withdraw-" + Math.floor(Math.random() * 4100 + 14400) },
  { name: "رافت", order: "Deposit-" + Math.floor(Math.random() * 4200 + 4500) },
  { name: "سامح", order: "withdraw-" + Math.floor(Math.random() * 970 + 16000) },
  { name: "عادل", order: "withdraw-" + Math.floor(Math.random() * 970 + 15000) },
  { name: "فاروق", order: "withdraw-" + Math.floor(Math.random() * 970 + 11000) },
  { name: "بهاء", order: "Deposit-" + Math.floor(Math.random() * 200 + 18300) },
  { name: "أسامة", order: "Deposit-" + Math.floor(Math.random() * 200 + 11000) },
  { name: "حمدي", order: "Deposit-" + Math.floor(Math.random() * 200 + 10000) },
  { name: "سعيد", order: "withdraw-" + Math.floor(Math.random() * 240 + 10000) },
  { name: "عبدالله", order: "Deposit-" + Math.floor(Math.random() * 240 + 10000) },
  { name: "مازن", order: "withdraw-" + Math.floor(Math.random() * 240 + 10000) },
  { name: "هشام", order: "Deposit-" + Math.floor(Math.random() * 8000 + 8700) },
  { name: "وليد", order: "withdraw-" + Math.floor(Math.random() * 8400 + 1000) },
  { name: "يوسف", order: "Deposit-" + Math.floor(Math.random() * 8600 + 800) },
  { name: "زكريا", order: "withdraw-" + Math.floor(Math.random() * 4700 + 3000) },
  { name: "شريف", order: "Deposit-" + Math.floor(Math.random() * 4700 + 2000) },
  { name: "أيمن", order: "withdraw-" + Math.floor(Math.random() * 4700 + 7100) },
  { name: "خليل", order: "withdraw-" + Math.floor(Math.random() * 21000 + 600) },
  { name: "رؤوف", order: "Deposit-" + Math.floor(Math.random() * 24500 + 2000) },
  { name: "سليم", order: "withdraw-" + Math.floor(Math.random() * 2600 + 1000) },
];

const container = document.getElementById("usersContainer");
let currentIndexx = 0;

function displayUsers() {
  container.innerHTML = "";

  // عرض 4 مستخدمين فقط لتوفير المساحة
  for (let i = 0; i < 4; i++) {
    const userIndex = (currentIndexx + i) % users.length;
    const user = users[userIndex];

    const userCard = document.createElement("div");
    userCard.className = "user-card";
    userCard.innerHTML = `
      <span class="user-name">${user.name}</span>
      <span class="order-number">${user.order}</span>
    `;

    container.appendChild(userCard);
  }

  currentIndexx = (currentIndexx + 1) % users.length; // تحريك واحد فقط كل مرة
}

displayUsers();
setInterval(displayUsers, 4000);

// 



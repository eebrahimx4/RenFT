function copyLink() {
    const link = document.getElementById('referralLink').textContent;
    navigator.clipboard.writeText(link).then(() => {
      const msg = document.getElementById('copySuccess');
      msg.style.display = 'block';
      setTimeout(() => msg.style.display = 'none', 2000);
    });
  }
  
  function shareLink() {
    const link = document.getElementById('referralLink').textContent;
    if (navigator.share) {
      navigator.share({
        title: 'انضم إلى الموقع',
        text: 'سجل من خلال الرابط ده وخد بونص 🔥',
        url: link,
      });
    } else {
      alert("المتصفح لا يدعم المشاركة التلقائية، انسخ الرابط يدويًا.");
    }
  }
  





  document.addEventListener("DOMContentLoaded", () => {
    // هنا بتحط الأعداد حسب الداتا اللي جاية من الباك إند لاحقًا
    document.getElementById("level1Count").textContent = 3;
    document.getElementById("level2Count").textContent = 5;
    document.getElementById("level3Count").textContent = 2;
  });
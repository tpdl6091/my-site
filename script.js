// 푸터의 연도를 현재 연도로 채움
document.getElementById("year").textContent = new Date().getFullYear();

// 스크롤 시 섹션이 부드럽게 나타나는 효과
const sections = document.querySelectorAll(".section");

sections.forEach((el) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(20px)";
  el.style.transition = "opacity 0.6s, transform 0.6s";
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

sections.forEach((el) => observer.observe(el));

// 天真汉堡 · 个人站脚本
document.addEventListener('DOMContentLoaded', () => {
  // 年份
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // 移动端菜单
  const btn = document.getElementById('menuBtn');
  const links = document.getElementById('links');
  if (btn && links) {
    btn.addEventListener('click', () => links.classList.toggle('open'));
    links.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => links.classList.remove('open'))
    );
  }

  // 滚动出现动画
  const items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('on');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    items.forEach(el => io.observe(el));
  } else {
    items.forEach(el => el.classList.add('on'));
  }
});

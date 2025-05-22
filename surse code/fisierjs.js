document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.section a');
  links.forEach(link => {
    link.addEventListener('mouseenter', () => {
      link.style.boxShadow = `0 0 10px rgba(245, 158, 11, ${Math.random() * 0.3 + 0.2})`;
    });
    link.addEventListener('mouseleave', () => {
      link.style.boxShadow = 'none';
    });
  });

  const jsKeywords = ['function', 'const', 'let', 'return', 'if', 'else', 'for', 'while', 'map', 'filter'];
  const container = document.body;

  for (let i = 0; i < 12; i++) {
    const keyword = document.createElement('div');
    keyword.textContent = jsKeywords[Math.floor(Math.random() * jsKeywords.length)];
    keyword.style.position = 'fixed';
    keyword.style.color = `rgba(245, 158, 11, ${Math.random() * 0.3 + 0.1})`;
    keyword.style.fontFamily = "'Fira Code', monospace";
    keyword.style.fontSize = `${Math.random() * 14 + 10}px`;
    keyword.style.left = `${Math.random() * 100}%`;
    keyword.style.top = `${Math.random() * 100}%`;
    keyword.style.pointerEvents = 'none';
    keyword.style.zIndex = '-1';
    keyword.style.opacity = '0';
    keyword.style.transition = 'opacity 1s, transform 8s linear';
    container.appendChild(keyword);

    setTimeout(() => {
      keyword.style.opacity = '0.7';
    }, 100);

    setInterval(() => {
      keyword.style.transform = `translate(${Math.random() * 60 - 30}px, ${Math.random() * 60 - 30}px) rotate(${Math.random() * 20 - 10}deg)`;
    }, 8000);
  }
});
document.querySelectorAll('.section-header').forEach(header => {
  header.addEventListener('click', () => {
    const section = header.parentElement;
    section.classList.toggle('active');

    if (section.classList.contains('active')) {
      document.querySelectorAll('section').forEach(s => {
        if (s !== section) s.classList.remove('active');
      });
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('body');
  const codeTags = ['<html>', '<div>', '<p>', '<a>', '<img>', '<form>'];

  for (let i = 0; i < 15; i++) {
    const tag = document.createElement('div');
    tag.textContent = codeTags[Math.floor(Math.random() * codeTags.length)];
    tag.style.position = 'fixed';
    tag.style.color = `rgba(56, 189, 248, ${Math.random() * 0.3 + 0.1})`;
    tag.style.fontFamily = "'Fira Code', monospace";
    tag.style.fontSize = `${Math.random() * 16 + 12}px`;
    tag.style.left = `${Math.random() * 100}%`;
    tag.style.top = `${Math.random() * 100}%`;
    tag.style.pointerEvents = 'none';
    tag.style.zIndex = '-1';
    tag.style.opacity = '0';
    tag.style.transition = 'opacity 1s, transform 5s linear';
    container.appendChild(tag);

    setTimeout(() => {
      tag.style.opacity = '1';
    }, 100);

    setInterval(() => {
      tag.style.transform = `translate(${Math.random() * 40 - 20}px, ${Math.random() * 40 - 20}px)`;
    }, 5000);
  }
});

const menu = document.querySelector('.menu');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    menu.style.backgroundColor = '#fff';
    menu.style.color = '#333';
    menu.querySelectorAll('a').forEach(link => link.style.color = '#333');
  } else {
    menu.style.backgroundColor = '#333';
    menu.style.color = '#fff';
    menu.querySelectorAll('a').forEach(link => link.style.color = '#fff');
  }
});

menu.querySelectorAll('a').forEach(link => {
  link.addEventListener('mouseover', () => {
    menu.style.backgroundColor = '#fff';
    menu.style.color = '#333';
    link.style.color = '#ccc';
  });

  link.addEventListener('mouseout', () => {
    if (window.scrollY <= 50) {
      menu.style.backgroundColor = '#333';
      menu.style.color = '#fff';
      link.style.color = '#fff';
    }
  });
});
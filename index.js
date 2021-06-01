const navBtnEl = document.querySelector('.nav-toggle');
const navEl = document.querySelector('nav');

let menuOpen = false;

navBtnEl.addEventListener('click', () => {
  if (!menuOpen) {
    navBtnEl.classList.add('open');
    navEl.classList.remove('d-none');
    setTimeout(() => {
      navEl.classList.remove('hidden');
    }, 200);
    document.body.classList.add('disable-scroll');
    menuOpen = true;
  } else {
    navBtnEl.classList.remove('open');

    navEl.classList.add('hidden');
    setTimeout(() => {
      navEl.classList.add('d-none');
    }, 300);

    document.body.classList.remove('disable-scroll');
    menuOpen = false;
  }
});

const x = screen.width;
if (x > 769) {
  navEl.classList.remove('hidden');
  navEl.classList.remove('d-none');
}
console.log(x);

// IntersetionAPI

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('add-animation');
    }
  });
});

observer.observe(document.querySelector('.hero__container '));
observer.observe(document.querySelector('.view-container'));
observer.observe(document.querySelector('.work__container'));

# Frontend Mentor - Insure landing page solution

This is a solution to the [Insure landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/insure-landing-page-uTU68JV8). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)

## Overview

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- IntersectionObserver API

### What I learned

```js
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

}
```

### Continued development

I will work on my animation skills a bit more. I need to imporve my skills on animation and make wesbsite look more appealing and iteractive. This is my first time implementing IntersectionObserver API, I hope I can improve on that.

### Useful resources

- [Example resource 1](https://coolcssanimation.com/how-to-trigger-a-css-animation-on-scroll/#:~:text=Add%20the%20class%20when%20the,element%20is%20scrolled%20into%20view.) - This helped me for implementaion of IntersectionObserver API.

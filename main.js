const headers = new Headers();
const init = { method: 'GET', headers: headers, mode: 'cors', cache: 'default' }

window.onload = () => {
  const section_gh_projects__ul = document.querySelector(".section__gh--projects ul");
  const div_img_profile__figure__figcaption = document.querySelector(".div__image--profile figure figcaption");

  const open = document.querySelector('.open-menu');
  const close = document.querySelector('.close-menu');
  const nav = document.querySelector('.navbar');
  const navlinks = document.querySelectorAll('.navbar a');
  const menu = document.querySelector('.menu-active');

  open.addEventListener('click', () => {
    nav.classList.add('menu-active');
  });

  close.addEventListener('click', () => {
    nav.classList.remove('menu-active');
  });

  navlinks.forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('menu-active');
    });
  });

  nav.onclick = function (event) {
    if (event.target != menu) {
      nav.classList.remove('menu-active');
    }
  };

  
  fetch('https://api.github.com/users/brunoanhaia')
    .then(response => response.json())
    .then(data => {
      console.log(div_img_profile__figure__figcaption)
      div_img_profile__figure__figcaption.innerHTML += `${data.name}`;
      
    })
    .catch(error => console.error(error))
    
  fetch('https://api.github.com/users/brunoanhaia/repos')
    .then(response => response.json())
    .then(data => {
      data.forEach((e) => {
        console.log(section_gh_projects__ul)
        section_gh_projects__ul.innerHTML += `<li><a href='${e.html_url}'>${e.name}</li>`;
      });
    })
    .catch(error => console.error(error))
};
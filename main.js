const headers = new Headers();
const init = { method: 'GET', headers: headers, mode: 'cors', cache: 'default' }
const personal_data = {
  name: "Bruno Anhaia",
  age: "26",
  education: [
      {
          institution: "Sorocaba Technological College (FATEC)",
          status: "in progress",
          name: "System Analysis and Development - Information Technology"
      },
      {
          institution: "University of Campinas (UNICAMP)",
          status: "in progress",
          name: "Masters in Electrical Engineering"
      },
      {
          institution: "Sorocaba College of Engineering (FACENS)",
          status: "finished",
          name: "Bachelor in Electrical Engineering"
      },
      {
          institution: "TOkyo University of Electrical Communications (UEC)",
          status: "finished",
          name: "Sandwich degree"
      },
  ],
  work: [
      {
          company: "FIT - Institute of Technology",
          period: "2019/01 ~ NOW",
          experience: "C/C++, Python, Batch"
      },
      {
          company: "VA Engenharia",
          period: "2018/03 ~ 2019/01",
          experience: "PHP, MySQL, jQuery, JavaScript, HTML, SASS, Python Flask"
      }
  ]
}

window.onload = () => {
  const gh_projects__ul = document.querySelector(".section__gh--projects ul");
  
  const main_img_profile__figure__figcaption = document.querySelector(".div__image--profile figure figcaption");
  const main_img_profile__figure__company = document.querySelector(".div__image--profile figure .company");
  const main_img_profile__figure__image_profile = document.querySelector(".div__image--profile figure .image--profile");

  const resume__wrapper__pre = document.querySelector(".section__resume .wrapper pre");
  
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
      main_img_profile__figure__figcaption.innerHTML += `${data.name}`;
      main_img_profile__figure__company.innerHTML += `${data.company}`;
      main_img_profile__figure__image_profile.setAttribute("src",`${data.avatar_url}`);
    })
    .catch(error => console.error(error))
    
  fetch('https://api.github.com/users/brunoanhaia/repos')
    .then(response => response.json())
    .then(data => {
      data.forEach((e) => {
        gh_projects__ul.innerHTML += `<li><a href='${e.html_url}'>${e.name}</li>`;
      });
    })
    .catch(error => console.error(error))

    resume__wrapper__pre.innerHTML = JSON.stringify(personal_data, null, '  ');

};

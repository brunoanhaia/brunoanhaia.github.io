const headers = new Headers();
const init = { method: 'GET', headers: headers, mode: 'cors', cache: 'default' }



window.onload = () => {
  const section_gh_projects = document.querySelector(".section__gh--projects");

  fetch('https://api.github.com/users/brunoanhaia/repos')
    .then(response => response.json())
    .then(data => {
      data.forEach((e)=>{
        console.log(section_gh_projects)
        section_gh_projects.innerHTML += `<li>${e.name}</li>`;
      });
    })
    .catch(error => console.error(error))
};
/*-----------Menu-----------*/
var menu = document.querySelector('.hamburger');

//method
function toggleMenu (event) {
  this.classList.toggle('is-active');
  document.querySelector( ".menuppal" ).classList.toggle("is_active");
  event.preventDefault();
}

//event
menu.addEventListener('click', toggleMenu, false);


/*-----------Api github-----------*/
const UserUrl = "https://api.github.com/users/PaulaZP";
function githubUser(){
  fetch(UserUrl, {
    method: "GET"
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.status);
      }

      return response.json();
    })
    .then((data) => {
      githubApi(data);
      console.log(data);
    })
    .catch((error) => {
      console.log("error", error);
    });
};

githubUser();

function githubApi(data){
  const repos = document.querySelector('#repo');
  repos.innerText = `Public repositories: ${data.public_repos}`;
}

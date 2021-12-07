console.log('sanity check')

  // search-box open close js code
  let navbar = document.querySelector(".navbar");
  let searchBox = document.querySelector(".search-box .bx-search");
  // let searchBoxCancel = document.querySelector(".search-box .bx-x");
  
  searchBox.addEventListener("click", ()=>{
    navbar.classList.toggle("showInput");
    if(navbar.classList.contains("showInput")){
      searchBox.classList.replace("bx-search" ,"bx-x");
    }else {
      searchBox.classList.replace("bx-x" ,"bx-search");
    }
  });
  
  // sidebar open close js code
  let navLinks = document.querySelector(".nav-links");
  let menuOpenBtn = document.querySelector(".navbar .bx-menu");
  let menuCloseBtn = document.querySelector(".nav-links .bx-x");
  menuOpenBtn.onclick = function() {
  navLinks.style.left = "0";
  }
  menuCloseBtn.onclick = function() {
  navLinks.style.left = "-100%";
  }
  
  
  // sidebar submenu open close js code
  let htmlcssArrow = document.querySelector(".about-arrow");
  htmlcssArrow.onclick = function() {
   navLinks.classList.toggle("show1");
  }
  let moreArrow = document.querySelector(".more-arrow");
  moreArrow.onclick = function() {
   navLinks.classList.toggle("show2");
  }
  let jsArrow = document.querySelector(".services-arrow");
  jsArrow.onclick = function() {
   navLinks.classList.toggle("show3");
  }

// The rootElement is the element we are appending all of our content to
const rootElement = document.getElementById('rootElement');

// Array of objects
const team = [
  {name: 'Bo Scarim (they/she)', role: 'test', image: './../team/Hazel.jpg', bio: 'test'},
  {name: 'Phoebe Hall (she/her)', role: 'test', image: 'Hazel.jpg', bio: 'test'},
  {name: 'Ellis Schwamm (he/they)', role: 'test', image: 'test', bio: 'test'},
  {name: 'Hazel Moffatt (any pronouns)', role: 'test', image: 'test', bio: 'test'},
  {name: 'Liz Anderson(she/they)', role: 'test', image: 'test', bio: 'test'},
  {name: 'Angelica Thorne (she/her)', role: 'test', image: 'test', bio: 'test'},
  {name: 'Jasmine Phillips (she/her)', role: 'test', image: 'test', bio: 'test'},
  {name: 'Jaxson Benjamin (they/she)', role: 'test', image: 'test', bio: 'test'},
  {name: 'Nat DiFrank (they/them', role: 'test', image: 'test', bio: 'test'},
  {name: 'DeHaven Mays(they/them)', role: 'test', image: 'test', bio: 'test'},
  {name: 'Renee Willett(she/her)', role: 'test', image: 'test', bio: 'test'},
  {name: 'Isy Abraham-Raveson (She/They)', role: 'test', image: 'test', bio: 'test'},
  {name: 'Rebecca Klein (she/they)', role: 'test', image: 'test', bio: 'test'},
  {name: 'Natalie Smyth', role: 'test', image: 'test', bio: 'test'},
  {name: 'Ashley Edwards', role: 'Board President', image: 'test', bio: 'test'},
  {name: 'Eve Gutman', role: 'Fundraising Coordinator ', image: 'test', bio: 'test'},
  {name: 'test', role: 'test', image: 'test', bio: 'test'},
]

// Create a template to plug each object into
// Function expression
// Instead of declaring a function, we are going to express it: meaning, we are writing the code that expresses some value, and THAT value is what we have to express.
// We are creating a variable, set it equal to a function = () and it takes in a userObj, or props for properties.
const getTeamTemplate = (props) => {
  return `
      <div class="card">
          <h4>${props.name}</h4>
          <p>${props.role}</p>
          <p>${props.image}</p>
          <p>${props.bio}</p>
      </div>
  `;
};

// Instead of manually creating a template for each user andmanually append each one to the DOM, lets automate that process with a function
const renderTeam = (teamArray) => {
  // first we enpty it so we don't continually add content and make a giant mess
  rootElement.innerHTML = '';
// map will iterate over our array and return a new array
// We pass the each team member 
  const teamTemplates = teamArray.map((team) => {
      return getTeamTemplate(team);
  }).join('');
  
  console.log(teamTemplates)

  rootElement.insertAdjacentHTML('beforeend', teamTemplates);
}

// Team displays on click
teamBtn.addEventListener('click', () => {
  renderTeam(team);
});

console.log(teamBtn.value)

// function toggleTeam() {
//   const 
// }


function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
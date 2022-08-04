// const body = document.querySelector('body');
// const projectData = [{
//   id: 'project1',
//   name: 'Keeping track of hundreds of components',
//   image: ['images/Snapshoot Portfolio.png', 'images/Snapshoot Portfolio copy.png'],
//   description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown",
//   technologies: ['Ruby on rails', 'CSS', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
//   live_link: 'https://ilynette.github.io/my-portfolio',
//   source_link: 'https://github.com/iLynette/my-portfolio',
// },
// {
//   id: 'project2',
//   name: 'Keeping track of hundreds of components',
//   image: ['images/Snapshoot Portfolio.png', './images/Snapshoot Portfolio copy.png'],
//   description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown",
//   technologies: ['Ruby on rails', 'CSS', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
//   live_link: 'https://ilynette.github.io/my-portfolio',
//   source_link: 'https://github.com/iLynette/my-portfolio',
// },
// {
//   id: 'project3',
//   name: 'Keeping track of hundreds of components',
//   image: ['./images/Snapshoot Portfolio.png', './images/Snapshoot Portfolio copy.png'],
//   description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown",
//   technologies: ['Ruby on rails', 'CSS', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
//   live_link: 'https://ilynette.github.io/my-portfolio',
//   source_link: 'https://github.com/iLynette/my-portfolio',
// },
// {
//   id: 'project4',
//   name: 'Keeping track of hundreds of components',
//   image: ['./images/Snapshoot Portfolio.png', './images/Snapshoot Portfolio copy.png'],
//   description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown",
//   technologies: ['Ruby on rails', 'CSS', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
//   live_link: 'https://ilynette.github.io/my-portfolio',
//   source_link: 'https://github.com/iLynette/my-portfolio',
// },
// {
//   id: 'project5',
//   name: 'Keeping track of hundreds of components',
//   image: ['./images/Snapshoot Portfolio.png', './images/Snapshoot Portfolio copy.png'],
//   description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown",
//   technologies: ['Ruby on rails', 'CSS', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
//   live_link: 'https://ilynette.github.io/my-portfolio',
//   source_link: 'https://github.com/iLynette/my-portfolio',
// },
// {
//   id: 'project6',
//   name: 'Keeping track of hundreds of components',
//   image: ['./images/Snapshoot Portfolio.png', './images/Snapshoot Portfolio copy.png'],
//   description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown",
//   technologies: ['Ruby on rails', 'CSS', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
//   live_link: 'https://ilynette.github.io/my-portfolio',
//   source_link: 'https://github.com/iLynette/my-portfolio',
// },
// ];
// const projectBtn = document.querySelectorAll('.see-project button');
// const popUp = document.createElement('div');
// popUp.classList.add('mobile-popup');
// const btnName = Array.from(projectBtn);
// function mobilePopup(projectNumber) {
//   popUp.style.display = 'block';
//   body.appendChild(popUp);
//   popUp.innerHTML = `
//     <div class="section-class">
//     <div class="pic">
//         <i class="fa fa-times x" id="close-popUp" aria-hidden="true"></i>
//         <img src="./images/mobilePopup.png" id="img1" alt="mobile pic">
//         <img src="./images/desktopPopup.png" id="img2" alt="pic">
//     </div>
//     <div class="track">
//         <div class="track-one">
//             <h3>${projectData[projectNumber].name}</h3>
//             <div class="icons-desktop-popups">
//             <button>
//             <a href="${projectData[projectNumber].live_link}">See Live <img src="./images/icon.svg" alt="See live"></i></a>
//             </button>
//             <button>
//             <a href="${projectData[projectNumber].source_link}">See Source <img src="./images/github.png" alt="Github icon"></a>
//             </button>
//             </div>
//         </div>
//         <ul class="stack-lang">
//         <li>${projectData[projectNumber].technologies[0]}</li>
//         <li>${projectData[projectNumber].technologies[1]}</li>
//         <li>${projectData[projectNumber].technologies[2]}</li>
//         <li>${projectData[projectNumber].technologies[3]}</li>
//         <li>${projectData[projectNumber].technologies[4]}</li>
//         <li>${projectData[projectNumber].technologies[5]}</li>
//         </ul>
//         <p>${projectData[projectNumber].description}</p>
//     </div>
//     <div class="see-btn">
//     <button>
//     <a href="${projectData[projectNumber].live_link}">See Live <img src="./images/icon.svg" alt="See live"></i></a>
//     </button>
//     <button>
//     <a href="${projectData[projectNumber].source_link}">See Source <img src="./images/github.png" alt="Github icon"></a>
//     </button>
//     </div>
//     </div>
// </div>
//     `;
//   document.addEventListener('click', (action) => {
//     if (action.target.id === 'close-popUp') {
//       popUp.style.display = 'none';
//     }
//   });
// }
// function desktopPopUp(projectNumber) {
//   popUp.style.display = 'block';
//   body.appendChild(popUp);
//   popUp.innerHTML = `
//     <div class="section-class">
//                     <div class="pic">
//                         <i class="fa fa-times x" id="close-popUp" aria-hidden="true"></i>
//                         <img src="./images/mobilePopup.png" id="img1" alt="mobile pic">
//                         <img src="./images/desktopPopup.png" id="img2" alt="pic">
//                     </div>
//                     <div class="track">
//                         <div class="track-one">
//                             <h3>${projectData[projectNumber].name}</h3>
//                             <div class="icons-desktop-popups">
//                             <button>
//                             <a href="${projectData[projectNumber].live_link}">See Live <img src="./images/icon.svg" alt="See live"></i></a>
//                             </button>
//                             <button>
//                             <a href="${projectData[projectNumber].source_link}">See Source <img src="./images/github.png" alt="Github icon"></a>
//                             </button>
//                             </div>
//                         </div>
//                         <ul class="stack-lang">
//                         <li>${projectData[projectNumber].technologies[0]}</li>
//                         <li>${projectData[projectNumber].technologies[1]}</li>
//                         <li>${projectData[projectNumber].technologies[2]}</li>
//                         <li>${projectData[projectNumber].technologies[3]}</li>
//                         <li>${projectData[projectNumber].technologies[4]}</li>
//                         <li>${projectData[projectNumber].technologies[5]}</li>
//                         </ul>
//                         <p>${projectData[projectNumber].description}</p>
//                     </div>
//                     <div class="see-btn">
//                     <button>
//                     <a href="${projectData[projectNumber].live_link}">See Live <img src="./images/icon.svg" alt="See live"></i></a>
//                     </button>
//                     <button>
//                     <a href="${projectData[projectNumber].source_link}">See Source <img src="./images/github.png" alt="Github icon"></a>
//                     </button>
//                     </div>
//                     </div>
//             </div>
//     `;
//   document.addEventListener('click', (action) => {
//     if (action.target.id === 'close-popUp') {
//       popUp.style.display = 'none';
//     }
//   });
// }
// for (let i = 0; i < btnName.length; i += 1) {
//   btnName[i].addEventListener('click', () => {
//     mobilePopup(i);
//   });
//   btnName[i].addEventListener('click', () => {
//     desktopPopUp(i);
//   });
// }

// const form = document.getElementById('my-form');

// function validation() {
//   const email = document.getElementById('email');
//   const error = document.getElementById('error-message');
//   if (email.value === email.value.toLowerCase()) {
//     return true;
//   }
//   error.innerHTML = 'Invalid Email, please use small letters!.';
//   return false;
// }
// form.addEventListener('submit', (event) => {
//   if (!validation()) {
//     event.preventDefault();
//   }
// });

const divMenu = document.querySelector('.nav-menu');
const crossButton = document.querySelector('.cross-button');
const hamburgerButton = document.querySelector('.fa-bars');
const navLink = document.querySelector('.nav-link');

const openMenu = () => {
  divMenu.classList.toggle('show');
};

crossButton.addEventListener('click', () => {
  openMenu();
});

hamburgerButton.addEventListener('click', () => {
  openMenu();
});

navLink.addEventListener('click', () => {
  openMenu();
});

function showDetails(project) {
  //container for the popup-window
  const popupContainer = document.createElement('div');
  popupContainer.classList.add('popup-container');
  popupContainer.id = 'popup-contianer';
  const popupImgContainer = document.createElement('div');
  popupImgContainer.classList.add('popupimg-container');

  //img
  const imgDiv = document.createElement('div');
  imgDiv.classList.add('image-container');
  const img = document.createElement('img');
  img.classList.add('img');
  img.src = project.image;
  img.alt = 'Portfolio Project Image';
  imgDiv.append(img);
  //div.image-container>
  //img.img>scr="project.image">alt="Portfolio Project Image"
  
  //container for title and btnClose
  
  //Title
  const title = document.createElement('h2');
  title.classList.add('project-title');
  title.textContent = project.name;
  //h2.project-title> project.name
  
  //btnClose
  const btnContainer = document.createElement('div');
  btnContainer.classList.add('btn-container');
  const btnClose = document.createElement('i');
  btnClose.classList.add('fa-solid', 'fa-x');
  btnClose.addEventListener('click', () => {
    document.getElementById('popup-contianer').remove();
  });
  btnContainer.append(btnClose);
  //div.btn-container> img#close-btn>src="images/cross2.svg">alt...
  //event = btnClose-> #popup-container.remove()

// --------------------------------------------------------

  // Descriptions
  const description = document.createElement('p');
  description.classList.add('description');
  description.textContent = project.description;
  //p.discription <- project.description

  // detail Footer
  const detailFooter = document.createElement('div');
  detailFooter.classList.add('detail-footer');
  //div.detail-footer

  //Creating list of programming languages
  const technologies = document.createElement('ul');
  technologies.classList.add('program');
  for(let i = 0 ; i < project.technologies.length; i +=1){
    const list = document.createElement('li');
    list.classList.add('language');
    list.textContent = project.technologies[i];
    technologies.append(list);
  }
  //ul.tag > li.lang> <- project.technologies[i]

  // Buttons
  const buttonLive = document.createElement('button');
  buttonLive.classList.add('btn');
  buttonLive.type = 'button';
  //button.btn>type="button"

  const txtBtnLive = document.createElement('p');
  txtBtnLive.textContent = 'See Live';
  //p <- "See Live"

  const imgBtnLive = document.createElement('img');
  imgBtnLive.src = 'images/live-Icon.svg';
  imgBtnLive.alt = 'Button Live';
  buttonLive.append(txtBtnLive);
  buttonLive.append(imgBtnLive);
  //button.btn>type="button">p <- "See Live">img>src..>alt..

  const buttonSource = document.createElement('button');
  buttonSource.classList.add('btn');
  buttonSource.type = 'button';

  const txtBtnSource = document.createElement('p');
  txtBtnSource.textContent = 'See Source';

  const imgBtnSource = document.createElement('img');
  imgBtnSource.src = 'images/github-Icon.svg';
  imgBtnSource.alt = 'Button Source';
  buttonSource.append(txtBtnSource);
  buttonSource.append(imgBtnSource);
  //button.btn>type="button">p <- "See Source">img>src..>alt..

  //under div detailfooter
  detailFooter.append(buttonLive);
  detailFooter.append(buttonSource);
  //div.detail-footer >
    //ul.classification > li.lang> a>href="#" <- project.technologies[i]
    //button.btn>type="button">p <- "See Live">img>src..>alt..
    //button.btn>type="button">p <- "See Source">img>src..>alt..

  // Add all element into the container
  popupImgContainer.append(imgDiv);
  popupImgContainer.append(btnContainer);
  popupImgContainer.append(title);
  popupImgContainer.append(technologies);
  popupImgContainer.append(description);
  popupImgContainer.append(detailFooter);

  popupContainer.append(popupImgContainer);
  document.body.append(popupContainer);
}



// List of project card details
const defaultDescription = 'A daily section of privately personalized reads; no accounts or sign-ups required.';
const listProject = [
  {
    name: 'Multi-Post Stories Gain+Glory', description: defaultDescription, image: 'images/Project-1.png', technologies: ['Ruby on rails', 'css', 'JavaScript', 'html'], link: { live: '', source: '' },
  },
  {
    name: 'Multi-Post Stories Gain+Glory', description: defaultDescription, image: 'images/Project-1.png', technologies: ['Ruby on rails', 'css', 'JavaScript', 'html'], link: { live: '', source: '' },
  },
  {
    name: 'Multi-Post Stories Gain+Glory', description: defaultDescription, image: 'images/Project-1.png', technologies: ['Ruby on rails', 'css', 'JavaScript', 'html'], link: { live: '', source: '' },
  },
  {
    name: 'Multi-Post Stories Gain+Glory', description: defaultDescription, image: 'images/Project-1.png', technologies: ['Ruby on rails', 'css', 'JavaScript', 'html'], link: { live: '', source: '' },
  },
  {
    name: 'Multi-Post Stories Gain+Glory', description: defaultDescription, image: 'images/Project-1.png', technologies: ['Ruby on rails', 'css', 'JavaScript', 'html'], link: { live: '', source: '' },
  },
  {
    name: 'Multi-Post Stories Gain+Glory', description: defaultDescription, image: 'images/Project-1.png', technologies: ['Ruby on rails', 'css', 'JavaScript', 'html'], link: { live: '', source: '' },
  },
];

//Cards Container
const work = document.getElementById('work');
let index = 0;

listProject.forEach((project) => {
  const workContainer = document.createElement('div');
  workContainer.classList.add('work-card');
  //div.work-card

  const img = document.createElement('img');
  img.classList.add('img');
  img.src = project.image;
  img.alt = "Project Images";
  //img.img>src..>alt..

  const title = document.createElement('h2');
  title.classList.add('project-title');
  title.textContent = project.name;
  //h2.project-title

  //Creating list of programming languages
  const technologies = document.createElement('ul');
  technologies.classList.add('tag');
  for(let i = 0 ; i < project.technologies.length; i +=1){
    const list = document.createElement('li');
    list.classList.add('lang');
    list.textContent = project.technologies[i];
    technologies.append(list);
  }

  //btn for the popup-detailed project
  const buttonDiv = document.createElement('div');
  const button = document.createElement('button');
  button.classList.add('btn');
  button.type = 'button';
  button.textContent = 'See Project';

  //On click event to show details
  button.addEventListener('click', () => {
    showDetails(project);
  });

  buttonDiv.append(button);

  //add all elements

  workContainer.append(img);
  workContainer.append(title);
  workContainer.append(technologies);
  workContainer.append(buttonDiv);
  
  //add project to the work container
  work.append(workContainer)
  index += 1;
});
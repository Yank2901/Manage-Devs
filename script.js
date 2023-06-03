// Icons
const html_icon = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png'
const js_icon = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Javascript-shield.png/640px-Javascript-shield.png'
const css_icon = 'https://i.pinimg.com/originals/eb/7e/20/eb7e20e646f5b7ec9ed4f8f78a5dee8f.png'
const node_icon = 'https://icon-library.com/images/node-js-icon/node-js-icon-8.jpg'
const mongo_icon = 'https://ih1.redbubble.net/image.438910675.6211/st,small,507x507-pad,600x600,f8f8f8.u2.jpg'

// Developer List
const developerList = [
  {name:'Carla',
  photo:'https://i.pinimg.com/236x/6d/5e/38/6d5e38d19bf4c0c9554b1e6beab75952.jpg',
  bio: 'Hola, soy desarrolladora front-end desde hace 5 años...',
  languages: {
    html: true,
    javascript: true,
    css: true,
    node: false,
    mongodb: false
  }},
  {name:'Erick',
  photo:'https://i.pinimg.com/564x/e9/57/2a/e9572a70726980ed5445c02e1058760b.jpg',
  bio: 'Hi, I am back-end developer from ten years ago, and ...',
  languages: {
    html: true,
    javascript: true,
    css: false,
    node: true,
    mongodb: true
  }},
  {name:'Maria',
  photo:'https://i.pinimg.com/564x/ed/be/19/edbe19b1fd4866b2d458aaabf8c02073.jpg',
  bio: 'Hola, soy DevOps en Facebook ...',
  languages: {
    html: false,
    javascript: false,
    css: false,
    node: true,
    mongodb: true
  }},
];

function generateNewDev() {
  const name = document.getElementById('name-textField').value;
  const photo = document.getElementById('url-avatar').value || './user-icon.png';
  const bio = document.getElementById('user-bio').value;
  const html = document.getElementById('lang-HTML').checked;
  const javascript = document.getElementById('lang-JS').checked;
  const css = document.getElementById('lang-CSS').checked;
  const node = document.getElementById('lang-Node').checked;
  const mongodb = document.getElementById('lang-MongoDB').checked;

  const dev = {name:name,
  photo:photo,
  bio: bio,
  languages: {
    html: html,
    javascript: javascript,
    css: css,
    node: node,
    mongodb: mongodb
  }};

  return dev;
}

function generateListDev() {
  const textHTML = developerList.map(item => {
    const htmlIcon = item.languages.html ? '<img src="'+html_icon+'" alt="html-icon" class="icons">' : '';
    const jsIcon = item.languages.javascript ? '<img src="'+js_icon+'" alt="js-icon" class="icons">' : '';
    const cssIcon = item.languages.css ? '<img src="'+css_icon+'" alt="css-icon" class="icons">' : '';
    const nodeIcon = item.languages.node ? '<img src="'+node_icon+'" alt="node-icon" class="icons">' : '';
    const mongoIcon = item.languages.mongodb ? '<img src="'+mongo_icon+'" alt="mongodb-icon" class="icons">' : '';

    return '<div class="user">'+
      '<div class="dev-data">'+
      '<div class="dev-avatar">'+
      '<img src="'+item.photo+'" alt="dev1-avatar">'+
      '</div>'+
      '<div class="dev-information">'+
      '<div class="dev-name-link">'+
      '<a href="#" class="link-name">'+item.name+'</a>'+
      '</div>'+
      '<div class="icon-lang">'+
      htmlIcon +
      jsIcon +
      cssIcon +
      nodeIcon +
      mongoIcon +
      '</div>'+
      '</div>'+
      '</div>'+
      '<div class="dev-description">'+
      item.bio+
      '</div>'+
      '</div>';
  }).join('');

  return textHTML;
}

function resetFields() {
  document.getElementById('name-textField').value = '';
  document.getElementById('url-avatar').value = '';
  document.getElementById('user-bio').value = '';
  document.getElementById('lang-HTML').checked = false;
  document.getElementById('lang-JS').checked = false;
  document.getElementById('lang-CSS').checked = false;
  document.getElementById('lang-Node').checked = false;
  document.getElementById('lang-MongoDB').checked = false;
}

var listHTML = document.getElementById('list-devs');

document.addEventListener('DOMContentLoaded', function() {
  var listHTML = document.getElementById('list-devs');
  listHTML.innerHTML = generateListDev();
});

var insertButton = document.getElementById("register-dev");
insertButton.addEventListener("click", function() {
  const newDev = generateNewDev();
  if (newDev.name.length === 0) {
    alert("Nombre requerido");
    return;
  }
  if (newDev.bio.length ===0) {
    alert("Biografía requerida");
    return;
  }
  developerList.push(newDev);
  var listHTML = document.getElementById('list-devs');
  listHTML.innerHTML = generateListDev();
  resetFields();
});
const casesField = document.querySelector('.cases span');
const deathField = document.querySelector('.deaths span');
const alert = document.querySelector('.alert');

//Display searchable countries. XMLHttpRequest just for fun, instead of fetch
window.addEventListener('load', () => {
  let xhr = new XMLHttpRequest();
  xhr.open('GET','https://api.covid19api.com/countries', true);
  xhr.onload = () => {
    if(xhr.status === 200) {
      console.log(xhr.responseText)
    }
  }
  xhr.send();
});

document.querySelector('.send').addEventListener('click', () => {

  let cases;
  let deaths;
  
  let country = document.getElementById('country').value;
  let days = document.getElementById('number').value;
  
  fetch(`https://api.covid19api.com/dayone/country/${country}`)
    .then(res => res.json())
    .then(data => {
      cases = data[`${days}`].Confirmed;
      deaths = data[`${days}`].Deaths;
      casesField.textContent = cases;
      deathField.textContent = deaths;
      alert.style.display = 'visible';
    }).catch(err => {
    if(err.status == '404') {
    alert.style.display = 'visible';
    }
    });
  }
)

  
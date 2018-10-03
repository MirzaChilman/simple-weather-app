const API_KEY = '5050f7017daf2a12a24a51bc1511dffb'
const URL = 'https://api.openweathermap.org/data/2.5/'
const cors = 'https://cors-anywhere.herokuapp.com/'

function getCityData(){

  byName = async (cityName) => {
    await fetch(`${cors}${URL}weather?q=${cityName}&appid=${API_KEY}`)
    .then(res => res.json())
    .then(res => {return createNewElement(res)})
  }

  byId = async (id) => {
    await fetch(`${cors}${URL}weather?id=${id}&appid=${API_KEY}`)
    .then(res => res.json())
    .then(res => console.log(res))
  }

  byZip = async (ZipCode) => {
    await fetch(`${cors}${URL}weather?zip=${ZipCode}&appid=${API_KEY}`)
    .then(res => res.json())
    .then(res => console.log(res))
  }

  return {
    byName,
    byId,
    byZip
  } 
}

function getForeCast(){
  byName = async (cityName) => {
    await fetch(`${cors}${URL}forecast?q=${cityName}&appid=${API_KEY}`)
    .then(res => res.json())
    .then(res => console.log(res))
  }
  byId = async (id) => {
    await fetch(`${cors}${URL}forecast?id=${id}&appid=${API_KEY}`)
    .then(res => res.json())
    .then(res => console.log(res))
  }

  byZip = async (ZipCode) => {
    await fetch(`${cors}${URL}forecast?zip=${ZipCode}&appid=${API_KEY}`)
    .then(res => res.json())
    .then(res => res)
  }

  return {
    byName,
    byId,
    byZip
  } 
}


const search = document.getElementById('weather')
const btnSubmit = document.getElementById('btnSubmit')

btnSubmit.addEventListener('click', getValue)

async function getValue(e){
  e.preventDefault()

  const val = search.value
  let data = await getCityData().byName(val)
  return data
}

function createNewElement(data){
  const parentNode = document.getElementById('data-lists')

  const codeNode = document.createElement('code')
  const pNode = document.createElement('p')
  
  
  const textNode = document.createTextNode(JSON.stringify(data))

  pNode.appendChild(textNode)
  codeNode.appendChild(pNode)
  parentNode.appendChild(codeNode)

}


//createNewElement('asd')
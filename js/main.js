const API_KEY = '6185e3cd5e50107a101c4273e4da6a12' //=> api key
const temperature = document.getElementById("temperature");
const cityField = document.querySelector('.form-control')
const cityName = document.getElementById('city-name')
let city = 'dhaka'

const getData = async ()=>{
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const data = await fetch(url)
    const jsonData = await data.json();
    displayUIData(jsonData)
}



const displayUIData = (data)=>{
    console.log(data)

    temperature.innerText = data.main.temp;
}

const getCity = () =>{
    if(cityField.value){
        city = cityField.value;
        cityName.innerText =city;
        getData()
    }else(alert("please enter your city"))
}

getData()
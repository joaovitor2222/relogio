// crie 3 constante com o nome horas minutos e segundos

const caixaHoras = document.getElementById("horas");

const caixaMinutos = document.getElementById("minutos");

const caixaSegundos = document.getElementById("segundos");

const caixaDate = document.getElementById("date");

const options = { weekday:'long', year: 'numeric' ,
month: 'short' , day: 'numeric'};

// crie uma constante relógio e atribua setInterval

const relogio = setInterval(() => {
    // crie uma variável let chamada dateToday e atribua newDate



    let dateToday = new Date();

    // criar 3 variáveis chamadas hr min e seg e atribua dateToday a cada uma
    let date = dateToday.toLocaleDateString("pt-br", options);
    

    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let seg = dateToday.getSeconds();
    
    // utilizar o textContent para mostrar as hr, min, sec na tela, lembre-se de chamar a caixa de cada campo.

    if (hr < 10) hr = "0" + hr;
    if (min < 10) min = "0" + min;
    if (seg < 10) seg = "0" + seg;
    
    caixaDate.textContent = date;
    caixaHoras.textContent = hr;
    caixaMinutos.textContent = min;
    caixaSegundos.textContent = seg;
    

}, 10);
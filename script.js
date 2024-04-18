const convertButton = document.querySelector('.convertButton')
const currencySelect = document.querySelector('.currency-select')

async function conertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value

    const currencyValue = document.querySelector(".currency-value")

    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")

    
   const data= await fetch(" https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response=>response.json())
    console.log(data)

    const dolarToday = data.USDBRL.high

    const euroToday = data.EURBRL.high

    

    const bitcoinToday = data.BTCBRL.high


    if (currencySelect.value === "dolar") {
        currencyValue.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
        
    }

    if (currencySelect.value === "euro") {
        currencyValue.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
        
    }

   

    if (currencySelect.value === "bitcoin") {
        currencyValue.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday)
       
    }



    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)


   





}

function changeCurrency() {
    const currencyToConvert = document.querySelector('.currency-to-convert')
    const flag = document.querySelector('.flag')

    
    if (currencySelect.value === "dolar") {
        flag.src = "img/estados-unidos (1) 1.png"
        currencyToConvert.innerHTML = "Dólar"
    }

    if (currencySelect.value === "euro") {
        flag.src = "img/euro.png"
        currencyToConvert.innerHTML = "Euro"
    }

    if (currencySelect.value === "libra") {
        flag.src = "img/libra 1.png"
        currencyToConvert.innerHTML = "Libra"
    }

    if (currencySelect.value === "bitcoin") {
        flag.src = "img/bitcoin 1.png"
        currencyToConvert.innerHTML = "Bitcoin"
    }

    conertValues()
}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", conertValues)

const convertButton = document.querySelector(".botao-convert")
const moedaSelect = document.querySelector(".currency-select")
const firstSelector = document.querySelector(".selector-first")


function convertValores() {
    const inputValores = document.querySelector(".input-value").value
    const moedaToConvert = document.querySelector(".value-moeda-to-covert") //Valor para converter
    const moedaConverted = document.querySelector(".value-moeda")
    

    const dolarToday = 4.96
    const euroToday = 5.38
    const libraToday = 6.27
    const bitcoinToday = 306689.00

    if (moedaSelect.value == "dolar") {
        moedaConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValores / dolarToday)
    }

    if (moedaSelect.value == "euro") {
        moedaConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValores / euroToday)
    }

    if (moedaSelect.value == "libra") {
        moedaConverted.innerHTML = new Intl.NumberFormat("it-CH", {
            style: "currency",
            currency: "GBP"
        }).format(inputValores / libraToday)
    }

    if (moedaSelect.value == "bitcoin") {
        moedaConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputValores / bitcoinToday)
    }

    if (firstSelector.value == "Dólar-U$") {
        moedaConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValores * dolarToday)
    }

    if (firstSelector.value == "Euro-DE") {
        moedaConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValores * euroToday)
    }

    if (firstSelector.value == "Libra-ES") {
        moedaConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValores * libraToday)
    }

    if (firstSelector.value == "Bit-coin") {
        moedaConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValores / bitcoinToday)
    }

    if (firstSelector.value == "Dólar-U$") {
        moedaToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValores)
    }

    if (firstSelector.value == "Euro-DE") {
        moedaToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValores)
    }

    if (firstSelector.value == "Real-BR") {
        moedaToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValores)
    }

    if (firstSelector.value == "Libra-ES") {
        moedaToConvert.innerHTML = new Intl.NumberFormat("it-CH", {
            style: "currency",
            currency: "GBP"
        }).format(inputValores)
    }

    if (firstSelector.value == "Bit-coin") {
        moedaToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputValores)
    }
}

function firstChange() {
    const textCurrency = document.getElementById("text-first")
    const firstImage = document.getElementById("img-first")
    const iconesFirst = document.querySelector(".value-moeda-to-covert")

    if (firstSelector.value == "Dólar-U$") {
        textCurrency.innerHTML = "Dólar americano"
        firstImage.src = "./assets/dolar-Us.png"
        iconesFirst.innerHTML = "US$ 0.00"
    }

    if (firstSelector.value == "Real-BR") {
        textCurrency.innerHTML = "Real brasileiro"
        firstImage.src = "./assets/real-Brasil.png"
        iconesFirst.innerHTML = "R$ 0.00"
    }

    if (firstSelector.value == "Euro-DE") {
        textCurrency.innerHTML = "Euro"
        firstImage.src = "./assets/euro-icon.png"
        iconesFirst.innerHTML = "0.00 €"
    }

    if (firstSelector.value == "Libra-ES") {
        textCurrency.innerHTML = "Libra"
        firstImage.src = "./assets/libra-icon.png"
        iconesFirst.innerHTML = "0.00 £"
    }

    if (firstSelector.value == "Bit-coin") {
        textCurrency.innerHTML = "Bitcoin"
        firstImage.src = "./assets/bitcoin-icon.png"
        iconesFirst.innerHTML = "₿ 0.00"
    }
}

function changeMoeda() {
    const nameCurrency = document.getElementById("name-currency")
    const moedaImage = document.querySelector(".moeda-img")
    const iconesText = document.querySelector(".value-moeda")

    if (moedaSelect.value == "dolar") {
        nameCurrency.innerHTML = "Dólar americano"
        moedaImage.src = "./assets/dolar-Us.png"
        iconesText.innerHTML = "US$ 0.00"
    }

    if (moedaSelect.value == "euro") {
        nameCurrency.innerHTML = "Euro"
        moedaImage.src = "./assets/euro-icon.png"
        iconesText.innerHTML = "0.00 €"
    }

    if (moedaSelect.value == "Real") {
        nameCurrency.innerHTML = "Real brasileiro"
        moedaImage.src = "./assets/real-Brasil.png"
        iconesText.innerHTML = "R$ 0.00"
    }

    if (moedaSelect.value == "libra") {
        nameCurrency.innerHTML = "Libra"
        moedaImage.src = "./assets/libra-icon.png"
        iconesText.innerHTML = "£ 0.00"
    }

    if (moedaSelect.value == "bitcoin") {
        nameCurrency.innerHTML = "Bitcoin"
        moedaImage.src = "./assets/bitcoin-icon.png"
        iconesText.innerHTML = "₿ 0.00"
    }

    convertValores()
}

firstSelector.addEventListener("change", firstChange)
moedaSelect.addEventListener("change", changeMoeda)
convertButton.addEventListener("click", convertValores)








const convertButton = document.querySelector(".botao-convert")
const moedaSelect = document.querySelector(".currency-select")

function convertValores() {
    const inputValores = document.querySelector(".input-value").value
    const moedaToConvert = document.querySelector(".value-moeda-to-covert") //Valor para converter
    const moedaConverted = document.querySelector(".value-moeda")

    const dolarToday = 4.96
    const euroToday = 5.38

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

    moedaToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputValores)
}

function changeMoeda() {
    const nameCurrency = document.getElementById("name-currency")
    const moedaImage = document.getElementById("image-moeda")
    const iconEuroText = document.getElementById("iconEuro")

    if (moedaSelect.value == "dolar") {
        nameCurrency.innerHTML = "Dólar americano"
        moedaImage.src = "./assets/dolar-Us.png"
        iconEuroText.innerHTML = "US$ 0.0"
    }

    if (moedaSelect.value == "euro") {
        nameCurrency.innerHTML = "Euro"
        moedaImage.src = "./assets/euro-icon.png"
        iconEuroText.innerHTML = "0.00 €"
    }

    convertValores()
}
moedaSelect.addEventListener("change", changeMoeda)
convertButton.addEventListener("click", convertValores)







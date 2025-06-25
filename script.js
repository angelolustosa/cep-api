
const consultarCep = () => {
    console.log('chamou a api')
    const cep = document.getElementById('cep').value

    let uri = `https://cep.awesomeapi.com.br/json/${cep}`

    console.log(`URI: ${uri}`)
    fetch(uri)
      .then(response => response.json())
      .then(json => {
        console.log(json)

        document.getElementById('logradouro').value = json.address
        document.getElementById('bairro').value = json.district
        document.getElementById('uf').value = json.state
    })
}

/* function consultarCep() {

} */
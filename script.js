
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
      document.getElementById('ddd').value = json.ddd
      document.getElementById('uf').value = json.state
      document.getElementById('localidade').value = json.city
    })
}


const fetchEstados = () => {
  let uri = `https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome`

  console.log(`URI: ${uri}`)

  fetch(uri)
    .then(response => response.json())
    .then(data => {
      console.log(data)

      let options = '<option selected disabled>Selecione...</option>'

      data.forEach(estado => {
        options = options + `<option value="${estado.sigla}">${estado.nome}</option>`
      });

      document.getElementById('uf').innerHTML = options 
      //' <option value="AC">Acre (AC)</option>  <option value="AL">Alagoas (AL)</option> <option value="AP">Amapá (AP)</option>'

    })
}

fetchEstados()

const fetchMunicipios = (event) => {
  console.log(event.target.value);

  const uf = event.target.value

  fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`)
    .then(response => response.json())
    .then(json => {
      console.log(json)

      let options = '<option selected disabled>Selecione...</option>'

      json.forEach(municipio => {
        options = options + `<option value="${municipio.nome}">${municipio.nome}</option>`
      })  

      document.getElementById('localidade').innerHTML = options 

    })    
  
}

//fetchMunicipios()

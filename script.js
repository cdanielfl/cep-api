const consultarCep = () => {
    const cep = document.getElementById('cep').value;
    fetch(`https://cep.awesomeapi.com.br/json/${cep}`)
        .then(response => response.json())
        .then(json => {
            console.log(json)
            document.getElementById('logradouro').value = json.address
            document.getElementById('bairro').value = json.district
            document.getElementById('uf').value = json.state
            // Localidade será preenchida via select de municípios
            ConsultarMunicipios(json.state);


        })
        .catch(error => console.error('Erro:', error));
}

const ConsultarEstados = () => {
    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados`)
        .then(response => response.json())
        .then(json => {
            let options = '<option selected disabled value="">Selecione...</option>'

            json.forEach(estado => {
                options = options + `<option value="${estado.sigla}">${estado.sigla}</option>`
            })

            document.getElementById('uf').innerHTML = options
        })
        .catch(error => console.error('Erro:', error));
}

ConsultarEstados()

const ConsultarMunicipios = (uf) => {
    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`)
        .then(response => response.json())
        .then(json => {
            console.log(json)

            let options = '<option selected disabled value="">Selecione...</option>'

            json.forEach(municipio => {
                options = options + `<option value="${municipio.nome}">${municipio.nome}</option>`
            })

            document.getElementById('localidade').innerHTML = options

        })
        .catch(error => console.error('Erro:', error));
}   
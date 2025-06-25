const consultarCep = () => {
    const cep = document.getElementById('cep').value
    fetch(`https://cep.awesomeapi.com.br/json/${cep}`)
        .then(response => response.json())
        .then(json => {console.log(json)
             document.getElementById('logradouro').value = json.address
             document.getElementById('bairro').value = json.district
             document.getElementById('uf').value = json.state
             

        })
}



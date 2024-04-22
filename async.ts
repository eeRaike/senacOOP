//Define uma função async
/*
async function fetchData(){
    //Espera uma resposta da API
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return data;
}

fetchData().then(function(data){
    console.log(data);
    
});

//Neste exemplo, fetchdata é uma função async que faz uma solicitação de rede usando fetch. Usando awaitm pausamos a execução até que a solicitação seja concluída e obtemos a resposta.
//Em seguida usamos await novamente para converter a resposta em json.
//Em resumo, async permite que escrevamos código async(ou seja, que realiza operações que levam um tempo). Await permite que você trabalhe com estes resultados depois que conseguir eles.
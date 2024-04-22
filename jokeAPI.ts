import axios from 'axios';

async function getRandomJoke(): Promise<string> {
    try{
        const response = await axios.get('https://v2.jokeapi.dev/joke/Any?lang=es&blacklistFlags=racist,sexist');

        if (!response.data || response.data.error) {
            throw new Error('Não foi possivel obter a piada');
        }

        if (response.data.type === 'single'){
            return response.data.joke;
        } else if (response.data.type === 'twopart'){
            return `${response.data.setup} ${response.data.delivery}`
        } else {
            throw new Error('Tipo de piada desconhecido')
        }
           
    }catch (error) {
        console.error('Erro ao obter piadas:', error )
        throw new Error('Erro ao obter piada')
    }
}


getRandomJoke()
.then(joke => {
    console.log('Piada aleatória',joke);
    
})
.catch(error => {
    console.log('Erro:',error.message);
    
})
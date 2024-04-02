import { historico } from "./historico";

const hist = new historico

console.log("Mostrando historico");
hist.showHistory()

console.log("acessando sites");

hist.acessSite('Site exemplo 1')
hist.acessSite('Site exemplo 2')
hist.acessSite('Site exemplo 3')
hist.acessSite('Site exemplo 4')
hist.acessSite('Site exemplo 5')
hist.acessSite('Site exemplo 6')

console.log("Mostrando historico");
hist.showHistory()

console.log("deletando o ultimo acesso");

hist.deleteLast()

console.log("Mostrando historico");

hist.showHistory()

import { listaGar } from "./listaGar";
import { pedido } from "./pedido";
import { tipoPedido } from "./tipoPedido";

const teste1 = new pedido("teste1",tipoPedido.sobremesa,)
const teste2 = new pedido("teste2",tipoPedido.pratoPrinc,)
const teste3 = new pedido("teste3",tipoPedido.bebida,)
const teste4 = new pedido("teste4",tipoPedido.sobremesa,)

const testGar = new listaGar()

testGar.listInsert(teste1)
testGar.listInsert(teste2)
testGar.listInsert(teste3)
testGar.listInsert(teste4)


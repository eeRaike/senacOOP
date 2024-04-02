import { Carlos } from "./Carlos";
import { Joana } from "./Joana";
import { Manoel } from "./Manoel";

const manoel = new Manoel("Manoel",87,true);
const carlos = new Carlos("Carlos",56,true,"castanho");
const joana = new Joana("Joana",18,true,"castanho-claro","shhhh é secreto");

manoel.agir()
carlos.agir()
joana.agir()

carlos.rir()
joana.dancar()



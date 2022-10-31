import { useContext } from "react";
import { PersonContext }  from "../contexts/PersonContextProvider";

export default function ImcView() {
    const { person } = useContext(PersonContext);

    function translateImcToText(imcPerson) {
        return imcPerson.imc + " - [" + imcPerson.imcDescription + "]";
    }

    if (person === null || person === undefined || person.imc === null || person.imc === undefined)
            return <div class="result"></div>;

    return (
        <div class="result">
            <span>Seu IMC &eacute;: 
                <label id="imc">{translateImcToText(person)}</label>
            </span>
        </div>
    );
}
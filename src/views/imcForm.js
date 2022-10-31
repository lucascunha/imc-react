import { useContext } from "react"
import { PersonContext } from "../contexts/PersonContextProvider";
import { useInput } from "../hooks/useInput.hook";

export default function ImcForm({ onSubmit }) {
    const { person } = useContext(PersonContext);
    const [height, hProps, resetHeight] = useInput(0.00);
    const [weight, wProps, resetWeight] = useInput(0.00);

    const submit = (evt) => {
        evt.preventDefault();
        onSubmit(height, weight);
        resetHeight();
        resetWeight();
    }

    return (
        <form onSubmit={submit}>
            <div className="row">
                <label>Altura</label>
                <input id="altura"
                    placeholder="digite sua altura..."
                    {...hProps}
                />
            </div>
            <div className="row">
                <label>Peso</label>
                <input id="peso"
                    placeholder="digite seu peso..."
                    {...wProps}
                />
            </div>
            <div className="row">
                <button
                    type="submit"
                    id="main-action"
                >
                    Calcular...
                </button>
            </div>
            <hr />
            <span>{JSON.stringify(person)}</span>
        </form>
    );
}
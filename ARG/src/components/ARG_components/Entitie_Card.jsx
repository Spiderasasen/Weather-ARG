import entities from "../../data/entities.json"
import {useEffect, useState} from "react";

function Entitie_Card() {
    const [texts, setTexts] = useState([]);

    useEffect(() => {
        async function load() {
            // Load your JSON
            const json = await fetch(entities).then(r => r.json());

            // Load each text file listed in the JSON
            const loadedTexts = await Promise.all(
                json.files.map(path =>
                    fetch(path).then(r => r.text())
                )
            );

            setTexts(loadedTexts);
        }

        load();
    }, []);

    return(
        <div>
            {texts.map((t, i) => (
                <pre key={i}>{t}</pre>
            ))}
        </div>
    );
}
export default Entitie_Card;
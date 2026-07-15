import entities from "../../data/entities.json"
import {useEffect, useState} from "react";

function Entitie_Card() {
    const [loreText, setLoreText] = useState({});

    useEffect(() => {
        async function loadLore() {
            const results = {};

            for(const entity of entities) {
                try {
                    const text = await fetch(entity.lore).then(r => r.text());
                    results[entity.id] = text;
                }
                catch{
                    results[entity.id] = "Error loading lore";
                }
            }
            setLoreText(results);
        }
        loadLore();
    }, [])

    return(
        <div>
            {entities.map((entity) => (
                <div key={entity.id}>
                    <h2>{entity.name}</h2>
                    <h3>Active: {entity.active}</h3>
                    <p>{entity.summary}</p>
                    <p>
                        <strong>How to Survive:</strong>
                        <br/>
                        <em>{entity.How_to_survive}</em>
                    </p>
                    <p>{loreText[entity.id] || "Loading Lore..."}</p>
                </div>
            ))}
        </div>
    );
}
export default Entitie_Card;
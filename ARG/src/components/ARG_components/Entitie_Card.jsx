import entities from "../../data/entities.json"
import {useEffect, useState} from "react";
import "../../styles/entity.css"

function Entitie_Card() {
    const [loreText, setLoreText] = useState({});
    const [openLore, setOpenLore] = useState(null);

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
                <div key={entity.id} className="entity-card" onClick={() => setOpenLore(entity.id)}>
                    <h2>{entity.name}</h2>
                    <h3>Active: {entity.active}</h3>
                    <p>{entity.summary}</p>
                    <p>
                        <strong>How to Survive:</strong>
                        <br/>
                        <em>{entity.How_to_survive}</em>
                    </p>

                    {openLore !== null && (
                        <div className="lore-modal" onClick={() => setOpenLore(null)}>
                            <div className={"lore-content"} onClick={(e) => e.stopPropagation()}>
                                <h2>{entities.find(e => e.id === openLore).name} Lore</h2>
                                <p>{loreText[openLore]}</p>
                                <button onClick={() => setOpenLore(null)}>Close</button>
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
export default Entitie_Card;
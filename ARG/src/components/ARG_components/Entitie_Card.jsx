import entities from "../../data/entities.json"
import {useEffect, useState} from "react";

function Entitie_Card() {
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
                    <p>{entity.lore}</p>
                </div>
            ))}
        </div>
    );
}
export default Entitie_Card;
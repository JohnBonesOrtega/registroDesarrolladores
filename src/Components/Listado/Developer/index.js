import React, { useContext } from 'react';
import DevelopersContext from '../../../State';
import Axios from 'axios';

export default (props) => {
    const developers = useContext(DevelopersContext);
    async function deleteDeveloper() {
        await Axios.delete(`https://developers-backend.herokuapp.com/api/developers/${props.developer._id}`);
        developers.setDevelopers([
            ...developers.developers.slice(0, props.index),
            ...developers.developers.slice(props.index + 1),
        ]);
    }
    return (
        <div className="rootDeveloper">
            <div className="infoDeveloper" onClick={props.onClick}>
                <span>Nombres: {props.developer.nombres_completos}</span>
                <span>Link Github: {props.developer.link_github}</span>
                <div>
                    <span>Tecnologias: </span>{props.developer.tecnologias_conocidas.map((tc, index) => <span key={index} className="tech">{tc}</span>)}
                </div>
            </div>
            <div className={"optionsContainer"}>
                <button onClick={() => {
                    deleteDeveloper();
                }}>Eliminar</button>
            </div>
        </div>);
}
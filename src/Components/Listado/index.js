import React, { useEffect, useContext, useState } from 'react';
import Developer from './Developer';
import DeveloperContext from '../../State';
import Axios from 'axios';

export default (props) => {
    const developers = useContext(DeveloperContext);
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        async function getDevelopers() {
            try {
                setLoading(true);
                const result = await Axios.get('https://developers-frontend.herokuapp.com/api/developers/');
                developers.setDevelopers(result.data.developers);
                setLoading(false);
            } catch (error) {
                setLoading(false);
                console.log(error);
            }
        }
        getDevelopers();
    }, []);
    return (
        <div className="rootListado">
            <h3>Registrados</h3>
            {!loading && developers.developers.length > 0  && developers.developers.map((developer, index) =>
                <Developer
                    key={developer._id}
                    developer={developer}
                    index={index}
                    onClick={() => {
                        developers.setDeveloperEdit(developer);
                    }}
                />)}
                {!loading && developers.developers.length === 0 && <div>No se han registrado desarrolladores</div>}
            {loading && <div>Cargando...</div>}
        </div>)
}
import React, { useState, useContext, useEffect } from 'react';
import Axios from 'axios';
import DeveloperContext from '../../State';

export default (props) => {
    const developers = useContext(DeveloperContext);
    const [nombre, setNombre] = useState('');
    const [link, setLink] = useState('');
    const [tecnologias, setTecnologias] = useState(['']);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        function setInitialState() {
            if (developers.developerEdit) {
                setNombre(developers.developerEdit.nombres_completos);
                setLink(developers.developerEdit.link_github);
                setTecnologias(developers.developerEdit.tecnologias_conocidas);
            }
        }
        setInitialState();
    }, [developers]);

    async function addDeveloper() {
        try {
            setLoading(true);
            const result = await Axios.post('https://developers-frontend.herokuapp.com/api/developers/', { nombres_completos: nombre, link_github: link, tecnologias_conocidas: tecnologias });
            const newDevelopers = developers.developers;
            newDevelopers.push(result.data.developer);
            developers.setDevelopers([...newDevelopers]);
            developers.setDeveloperEdit(undefined);
            clearState();
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    async function updateDeveloper() {
        try {
            setLoading(true);
            const result = await Axios.put(`https://developers-frontend.herokuapp.com/api/developers/${developers.developerEdit._id}`, { nombres_completos: nombre, link_github: link, tecnologias_conocidas: tecnologias });
            const newDeveloper = result.data.developer;
            const index = developers.developers.findIndex(dev => dev._id === newDeveloper._id);
            developers.setDevelopers([
                ...developers.developers.slice(0, index),
                newDeveloper,
                ...developers.developers.slice(index + 1),
            ]);
            developers.setDeveloperEdit(undefined);
            clearState();
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    }

    function clearState() {
        setNombre('');
        setLink('');
        setTecnologias(['']);
    }
    return (
        <div className='Form-Developer'>
            <h2>{developers.developerEdit ? 'Editar' : 'Nuevo'} desarrollador</h2>
            <div className='Input-Form-Developer'>
                <input className="Input-Form" placeholder='Nombre del Desarrollador' value={nombre} onChange={(e) => setNombre(e.target.value)} />
                <input className="Input-Form" placeholder='Link de Github' value={link} onChange={(e) => setLink(e.target.value)} />
                {tecnologias.map((tecnologia, index) =>
                    <input
                        key={index}
                        className="Input-Form"
                        placeholder={`Tecnologia ${index + 1}`}
                        value={tecnologia}
                        onChange={(e) => {
                            if (index === tecnologias.length - 1) {
                                tecnologias.push('');
                            }
                            setTecnologias([
                                ...tecnologias.slice(0, index),
                                e.target.value,
                                ...tecnologias.slice(index + 1)
                            ])
                        }}
                        onBlur={() => {
                            if (tecnologias.length > 1 && index !== tecnologias.length - 1 && tecnologia === '') {
                                setTecnologias([
                                    ...tecnologias.slice(0, index),
                                    ...tecnologias.slice(index + 1)
                                ])
                            }
                        }}
                    />)}

            </div>
            <button onClick={() => {
                developers.developerEdit ? updateDeveloper() : addDeveloper();
            }}
                disabled={loading}
            >{developers.developerEdit ? 'Actualizar' : 'Agregar'}</button>
            {developers.developerEdit &&
                <button onClick={() => {
                    developers.setDeveloperEdit(undefined);
                    clearState();
                }}>Cancelar</button>}
        </div>
    );
}
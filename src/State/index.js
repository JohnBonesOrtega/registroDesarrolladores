import React from 'react';

const DeveloperContext = React.createContext({
    developers: [],
    setDevelopers: () => { },
    developerEdit: undefined,
    setDeveloperEdit: () => { }
});

export default DeveloperContext;
import React from 'react';
import { 
    BrowserRouter as Router,
    Route,
    Routes
} from 'react-router-dom';

import ListaBooks from '../pages/ListaBooks';
import ListaAdministrar from '../pages/ListaAdministrar';
import Cadastrar from '../pages/Cadastrar';
import Editar from '../pages/Editar';
import NotFound from '../pages/NotFound';

const Root = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={ <ListaBooks />} />
                <Route path="/administrar" element={ <ListaAdministrar />} />
                <Route path="/administrar/cadastrar" element={ <Cadastrar />} />
                <Route path="/administrar/editar/:id" element={ <Editar />} />
                <Route path="*" element={ <NotFound />} />
            </Routes>
        </Router>
    );
}

export default Root;
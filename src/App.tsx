import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { TodosPage } from './components/TodosPage'



const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <div className="container">
                <Switch>
                    <Route component={TodosPage} path='/' exact />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;

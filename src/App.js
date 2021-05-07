import React from 'react';
import { ProductList } from './components/ProductList';
import {Route, Switch} from "react-router-dom";
import { Detail } from './components/Detail';


function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/:id' component={Detail}/>
        <Route path='/' component={ProductList}/>
      </Switch>
    </div>
  );
}

export default App;

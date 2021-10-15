import React from 'react';
import {Switch, Route} from 'react-router-dom';


import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Admin from '../pages/Admin';
import AdminList from '../Components/ListAdmin';
import ViewFilme from '../Components/ViewFilme';

// {/* <Route path="/list/:type" exact component={Home}/> */}
const AppRoutes= () =>{
  return (
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/profile" exact component={Profile}/>
      <Route path="/admin" exact component={Admin}/>
      <Route path="/update/:id" exact component={Admin}/>
      <Route path="/admin/list" exact component={AdminList}/>
      <Route path="/filme/:id" exact component={ViewFilme}/>
    </Switch>

  )
  
}

export default AppRoutes;
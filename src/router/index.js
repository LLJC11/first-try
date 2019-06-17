import React from 'react';
import {Route,Switch} from 'react-router-dom';

// 引入三个路由页面
import Child1 from '../components/Child1'
import Child2 from '../components/Child2'
import Child3 from '../components/Child3'

class Router extends React.Component{
  render(){
    return(
      <div className="router">
         <Switch>
            <Route exact path="/" component={Child1}></Route>
            <Route path="/child1" component={Child1}></Route>
            <Route path="/child2" component={Child2}></Route>
            <Route path="/child3" component={Child3}></Route>
         </Switch>
      </div>  
    )  
  }
} 
export default Router
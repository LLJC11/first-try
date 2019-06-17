import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Router from './router/index';
import {NavLink} from 'react-router-dom'
class App extends React.Component{

  close(){
    this.refs.bban.style.display='none'
  }
  render(){
  return (
    <div className="App">
      <header className="top_box">
            <div className="top_box__bd">
                <img className="logo" width="120" src="//y.gtimg.cn/mediastyle/mod/mobile/img/logo_ch.svg?max_age=2592000" alt="QQ音乐" />
                <a className="top_box__btn" href="javascript:;">下载APP</a>
            </div>
      </header>
      <nav className="nav">
        <NavLink to="/child1" activeClassName="active">推荐</NavLink>
        <NavLink to="/child2" activeClassName="active">排行榜</NavLink>
        <NavLink to="/child3" activeClassName="active">搜索</NavLink>
      </nav> 
      <div className='ban' ref={'bban'}>
        <div className='go'><img src={require('./state/set.png')} alt=""/></div>
        <b onClick={this.close.bind(this)}></b>
      </div>
      <div className='dowlon'>
          <p>安装QQ音乐 发现更多精彩</p>
      </div>
      <Router></Router>
    </div>
  );
}
}

export default App;

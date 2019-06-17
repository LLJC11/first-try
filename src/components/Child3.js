import React from 'react'
import './child3.css'
  

const lis=[{name:'华岩爱情故事集'},{name:'蔡徐坤'},{name:'吴亦凡'},{name:'R1SE'},{name:'心要让你听见'},{name:'公子向北走'},{name:'那个女孩对我说'},{name:'放个大招给你看'}]
class Child3 extends React.Component{

noo(){
  this.refs.no.style.display='block'
}
yes(){
  this.refs.no.style.display='none'
}
  render(){
    return (
      <div className='big'>
          <div className='search'>
            <i></i>
            <input type="text" onClick={this.noo.bind(this)} placeholder='搜索歌曲,歌单,专辑'/>
            <span ref={'no'} onClick={this.yes.bind(this)}>取消</span>
          </div>
          <div className='ddown'>
            <p>热门搜索</p>
            <div className='search-box'>
              {lis.map((item,index)=>{
                return(
                  <a href="#">{item.name}</a>
                )
              })}
              
                
            </div>
          </div>
        </div>
      
    )  
  }  
}
export default Child3
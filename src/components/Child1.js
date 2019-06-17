import React from 'react'

import Swiper from 'swiper/dist/js/swiper.js'
 
import 'swiper/dist/css/swiper.min.css'
import './child1.css'



const radio=[
  {name:'热歌',src:require('../state/radio-1.jpg')},
  {name:'一人一首招牌歌',src:require('../state/radio-2.jpg')}
]

const hot=[
  {name:'催泪大杀器！盘点演唱会经典万人大合唱',src:require('../state/hot-1.jpg'),href:'https://i.y.qq.com/n2/m/share/details/taoge.html?ADTAG=myqq&from=myqq&channel=10007100&id=2646688496'},
  {name:'纳尼？这些华语歌手竟然会唱日语歌！',src:require('../state/hot-2.jpg'),href:'https://i.y.qq.com/n2/m/share/details/taoge.html?ADTAG=myqq&from=myqq&channel=10007100&id=2646688496'},
  {name:'精选内地十大民谣歌手代表作',src:require('../state/hot-3.jpg'),href:'https://i.y.qq.com/n2/m/share/details/taoge.html?ADTAG=myqq&from=myqq&channel=10007100&id=2646688496'},
  {name:'2016billboard嘻哈榜',src:require('../state/hot-4.jpg'),href:'https://i.y.qq.com/n2/m/share/details/taoge.html?ADTAG=myqq&from=myqq&channel=10007100&id=2646688496'},
  {name:'催泪大杀器！盘点演唱会经典万人大合唱',src:require('../state/hot-5.jpg'),href:'https://i.y.qq.com/n2/m/share/details/taoge.html?ADTAG=myqq&from=myqq&channel=10007100&id=2646688496'},
  {name:'trip-hop单曲大推荐',src:require('../state/hot-6.jpg'),href:'https://i.y.qq.com/n2/m/share/details/taoge.html?ADTAG=myqq&from=myqq&channel=10007100&id=2646688496'}
]
class Child1 extends React.Component{
  
  constructor(props){
    super(props)
    this.state={
      aa:false 
    }
  }
componentDidMount () {
    
  var mySwiper = new Swiper('.swiper-container', {
    autoplay: true,
    loop: true,
    pagination : {
        el: '.swiper-pagination',
    }
  });
}
// cl(){
//   return this.aa===true?'ban close':'ban'
// }
  // bb(){
    
  //   this.state.aa=true
  //   console.log(111)
  //       this.setState({
    
  //       })
  // }

  // close(){
  //   this.refs.bban.style.display='none'
  // }
render() {
  return (
    <div>
      {/* <div className='ban' ref={'bban'}>
        <div className='go'><img src={require('../state/set.png')} alt=""/></div>
        <b onClick={this.close.bind(this)}></b>
      </div> */}


      {/* <div className={this.cl()}>
        <div className='go'><img src={require('../state/set.png')} alt=""/></div>
        <b onClick={this.bb.bind(this)}></b>
      </div> */}



      
      <div className="swiper-container">
        <div className="swiper-wrapper">
          <div className="swiper-slide"><img src={require('../state/tab-1.jpg')} alt=""/></div>
          <div className="swiper-slide"><img src={require('../state/tab-2.jpeg')} alt=""/></div>
          <div className="swiper-slide"><img src={require('../state/tab-3.jpg')} alt=""/></div>
        </div>
        <div className='swiper-pagination'></div>
      </div>
      {/* 电台 */}
      <div className='midd'>
        <p>电台</p>
        {radio.map((item,index)=>{
          return(
            
            <div className='box' key={index}>
              
              <div><img src={item.src} alt=""/></div>
              <span>{item.name}</span>
              <b></b>
            </div>
          )
        })}
      </div>

      {/* 热门歌单 */}
      <div className='midd'>
        <p>热门歌单</p>
        
        {hot.map((item,index)=>{
          return(
            
            <a href={item.href} className='box'  key={index}>
            
              <div><img src={item.src} alt=""/></div>
              <span>{item.name}</span>
              <b></b>
            </a>
            
          )
        })}
        
      </div>

      <div className='under'>
          <a href="https://y.qq.com/?ADTAG=myqq&nomobile=1#type=index">查看电脑版</a>
          <i></i>
          <p>Copyright © 1998 - 2019  Tencent. All Rights Reserved.</p>
          <p>联系电话：0755-86013388 QQ群：55209235</p>
      </div>
    </div>
  );
}
}
export default Child1
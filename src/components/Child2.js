import React from 'react'
import './child2.css'
const Ranking=[
  {
  src:'https://y.gtimg.cn/music/photo_new/T003R300x300M000004cq8rO33Xzta.jpg?max_age=2592000',
  tic:"巅峰榜·流行指数",
  song1:'耿',
  singer1:'- 汪苏泷',
  song2:'我的名字',
  singer2:'- 焦迈奇',
  song3:'说谎',
  singer3:'- 林宥嘉',
  },
  {
  src:'https://y.gtimg.cn/music/photo_new/T003R300x300M000004QFCnC0zsgZP.jpg?max_age=2592000',
  tic:"巅峰榜·热歌",
  song1:'来自天堂的魔鬼',
  singer1:'- G.E.M. 邓紫棋',
  song2:'你的酒馆对我打了烊',
  singer2:'- 陈雪凝',
  song3:'我的名字',
  singer3:'- 焦迈奇',
  },
  {
  src:'https://y.gtimg.cn/music/photo_new/T003R300x300M000004cOwJb0NE1tV.jpg?max_age=2592000',
  tic:"巅峰榜·新歌",
  song1:'耿',
  singer1:'- 汪苏泷',
  song2:'Call You Mine',
  singer2:'- The Chainsmokers/Bebe Rexha',
  song3:'Never Really Over',
  singer3:'- Katy Perry',
  },
  {
  src:'https://y.gtimg.cn/music/photo_new/T003R300x300M000002wOJPE3SBzYz.jpg?max_age=2592000',
  tic:"说唱榜",
  song1:'TELL ME WHY',
  singer1:'- 孟子坤',
  song2:'大碗宽面',
  singer2:'- 吴亦凡',
  song3:'改变',
  singer3:'- MC HotDog/张震岳',
  },
  {
  src:'https://y.gtimg.cn/music/photo_new/T003R300x300M000001DG9yR2Q9eMb.jpg?max_age=2592000',
  tic:"电音榜",
  song1:'Call You Mine',
  singer1:'- The Chainsmokers/Bebe Rexha',
  song2:'Not Ok',
  singer2:'- Kygo/Chelsea Cutler',
  song3:'Waiting',
  singer3:'- Vicetone/Daisy Guttridge/Eric Leva',
  },
  // 5个一组重复的
  {
  src:'https://y.gtimg.cn/music/photo_new/T003R300x300M000004cq8rO33Xzta.jpg?max_age=2592000',
  tic:"巅峰榜·流行指数",
  song1:'耿',
  singer1:'- 汪苏泷',
  song2:'我的名字',
  singer2:'- 焦迈奇',
  song3:'说谎',
  singer3:'- 林宥嘉',
  },
  {
  src:'https://y.gtimg.cn/music/photo_new/T003R300x300M000004QFCnC0zsgZP.jpg?max_age=2592000',
  tic:"巅峰榜·热歌",
  song1:'来自天堂的魔鬼',
  singer1:'- G.E.M. 邓紫棋',
  song2:'你的酒馆对我打了烊',
  singer2:'- 陈雪凝',
  song3:'我的名字',
  singer3:'- 焦迈奇',
  },
  {
  src:'https://y.gtimg.cn/music/photo_new/T003R300x300M000004cOwJb0NE1tV.jpg?max_age=2592000',
  tic:"巅峰榜·新歌",
  song1:'耿',
  singer1:'- 汪苏泷',
  song2:'Call You Mine',
  singer2:'- The Chainsmokers/Bebe Rexha',
  song3:'Never Really Over',
  singer3:'- Katy Perry',
  },
]
class Child2 extends React.Component{
  render(){
    return (
      <div>
        <ul>
          {Ranking.map((item,index)=>{
            return(
              <li>
            <div className='list'>
              <a href="#"> <img src={item.src} alt=""/></a>
              <div className='title'>
                <div>
                  <p>{item.tic}</p>
                  <p>1.{item.song1}-{item.singer1}</p>
                  
                  <p>2.{item.song2}-{item.singer2}</p>
                  
                  <p>3.{item.song3}-{item.singer3}</p>
                  
                </div>
              </div>
            </div>
          </li>
            )
          })}
          
        </ul>

      </div>
    )  
  }  
}
export default Child2
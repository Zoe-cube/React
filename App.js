import React, { Component, Fragment } from 'react'
import Func from './func'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      list: ['网页介绍','网页特性','开发者']
    }
  }
  render() {
    return (
      <Fragment>
        <div>
          <input value={this.state.inputValue} onChange={this.inputChange.bind(this)} /> 
          <button onClick={this.addlist.bind(this)}>添加功能</button>  
        </div>
        <ul className='func'>
          {//循环list，用map+箭头函数,item指代项目，输出。key是为了避免混乱
            this.state.list.map((item,index)=>{
              return (
              //<li key={index+item}>{item}</li>，下面是传递content内容到子组件
              
                <Func
                 content={item}
                 key={index+item}
                 index={index}
                 />
              
              )
            })
          }
        </ul>
      </Fragment>
    )
  }
  //e是个参数。setstate更新状态为target.value
  inputChange(e){
    this.setState({
      inputValue:e.target.value
    })
  }
  //...为扩展运算符,先扩展再增加元素
  addlist(){
    this.setState({
      list:[...this.state.list,this.state.inputValue],
      inputValue:''//输入之后清空input
    })
  }
}

// import React from 'react';

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { items: [], text: '' };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   render() {
//     return (
//       <div>

//         <Add items={this.state.items} />
//         <form onSubmit={this.handleSubmit}>
//           <input
//             id="addinfo"
//             onChange={this.handleChange}
//             value={this.state.text}
//           />
//           <button>
//             添加功能
//           </button>
//         </form>
//       </div>

//     );
//   }

//   handleChange(e) {
//     this.setState({ text: e.target.value });
//   }

//   handleSubmit(e) {
//     e.preventDefault();
//     if (!this.state.text.length) {
//       return;
//     }
//     const newItem = {
//       text: this.state.text,
//       id: Date.now()
//     };
//     this.setState(state => ({
//       items: state.items.concat(newItem),
//       text: ''
//     }));
//   }
// }

// class Add extends React.Component {
//   render() {
//     return (
//       <ul>
//         {this.props.items.map(item => (
//           <li key={item.id}>{item.text}</li>
//         ))}
//       </ul>
//     );
//   }
// }




export default App;

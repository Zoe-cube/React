import React, { Component, Fragment } from 'react';






class Func extends Component {

    constructor(props) {
        super(props)
        this.state = {
            list: ['我是一个单页应用', '我是一个设计非常美观，实用性非常强的网页', '是一个特别菜的人写的网页', '别再输入了', '别再输入了', '别再输入了']
        }
    }
    render() {
        return (

            <li >
                {this.props.content}{/*将父组件的值传进来*/}
            </li>



        );
    }
}

export default Func;
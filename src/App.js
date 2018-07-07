import React, { Component } from 'react';
import './App.css';
import Box from './component/Box';



class App extends Component {
  constructor(props){
    super(props);
    this.state={
      dataSource:[
        // {
        //   question:'这是个问题1？',
        //   list:[
        //     {
        //       title:'答案1',
        //       isTrue:true
        //     },{
        //       title:'答案2',
        //       isTrue:true
        //     }
        //   ]
        // },
        // {
        //   auestion:'这是个问题2？',
        //   list:[
        //     {
        //       title:'答案1',
        //       isTrue:true
        //     }
        //   ]
        // }
      ]
    }
    this.addProblem=this.addProblem.bind(this);
    this.addOption=this.addOption.bind(this);
    this.deleteOption=this.deleteOption.bind(this);
  }

  addProblem(){
    const { dataSource } = this.state;
    dataSource.push({question:'这是个问题'+Number(dataSource.length+1),list:[]})
    this.setState({
      dataSource
    })
  }
  addOption(index){
    console.log(index)
    const { dataSource } = this.state;
    const list=dataSource[index].list;
    list.push({title:'答案'+Number(list.length+1),isTrue:true});
    dataSource.list=list;
    console.log(dataSource[index].list)
    this.setState({
      dataSource
    })


  }
  deleteOption(index,listIndex){
    console.log(index,listIndex)
    const { dataSource } = this.state;
    const list=dataSource[listIndex].list;
    list.splice(index,1);
    dataSource.list=list;
    this.setState({
      dataSource
    })

  }

  render() {
    const { dataSource } = this.state;
    return (
      <div className='container'>
        <a className='addProblem' onClick={this.addProblem}>+</a>
        <Box addOption={this.addOption} dataSource={dataSource}  deleteOption={this.deleteOption}  />
      </div>
    );
  }
}

export default App;

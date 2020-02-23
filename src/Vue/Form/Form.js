import React, { Component } from 'react'
import { Modal, Button } from 'antd';
import Uuid from 'uuid/v4';

export default class Form extends Component {
    constructor(props){
        super(props)
            this.state={
                text:"",
                url:"",
                date_sortie:"",
                rate:""

            }  
    }
    state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
      text:e.target.value,
      url:e.target.value,
      date_sortie:e.target.value,
      
      
    });
    this.props.add({id:Uuid(),title:this.state.text,url:this.state.url,date_sortie:this.state.date_sortie,rate:this.state.rate})
  };

  handleChange1=(e)=>{
    this.setState({
        text:e.target.value
    })
  }

  handleChange2=(e)=>{
    this.setState({
        url:e.target.value
    })
  }

  handleChange3=(e)=>{
    this.setState({
      date_sortie:e.target.value
    })
  }

  handleChange4=(e)=>{
    this.setState({
        rate:e.target.value
    })
  }
  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };
 
    render() {
        
        return (
            <div>
                <Button type="primary" onClick={this.showModal}>
                    Add a movie
          </Button>

                <Modal
                    title="Add new movie"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <form className="w3-container">
                    
                       Title of movie: <input name="title" placeholder="Enter title" type="text" value={this.state.text} onChange={this.handleChange1} />
                       <br/><br/>
                       URL of movie: <input name="url" placeholder="Enter url" type="text" value={this.state.url} onChange={this.handleChange2} />
                       <br/><br/>
                       Date: <input name="date" placeholder="date" type="text" value={this.state.date_sortie} onChange={this.handleChange3} />
                       <br/><br/>
                       Rating: <input name="rate" placeholder="rate" type="text" value={this.state.rate} onChange={this.handleChange4} />
                       <br/><br/>
                    
                      
                    </form>
                    
                </Modal>
            </div>
        )
    }
}

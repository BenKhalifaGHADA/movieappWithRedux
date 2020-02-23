import React, { Component } from 'react'
import { Modal,Rate, Card, Col, Row, Button } from 'antd';
import Spinner from '../spinner/Spinner';
import { connect } from 'react-redux'
import { deleteMovie,editMovie } from '../../actions/Action'
class CardMovie extends Component {
  state = {
    visible: false,
    url:this.props.data.url,
    title:this.props.data.title,
    year:this.props.data.date_sortie,
    rating:this.props.data.rate,
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleChange=(e)=>{
    this.setState({
        [e.target.name]:e.target.value
    })
  }
  render() {
    return (
      <div >
        <Row gutter={16}>
          {this.props.data.map(el => (
            <Col key={el.id} span={8}>
              <Card title={el.title} cover={<img alt="example" src={el.url} />} bordered={false}>
                Date de sortie: {el.date_sortie}
                <br />
                <Rate onChange={() => this.handlechange(el.rate)} value={el.rate} />
                <br /><br />
                <Button variant="primary">
                  Movie Description
                </Button>
                <br /><br />
              
                <Button variant="primary" onClick={() => this.props.handleDelete(this.props.data.id)}>
                  Supprimer
                </Button>
                <Button variant="primary" onClick={this.showModal}>
                  Modifier
                </Button>

                <Modal
                  title="Basic Modal"
                  visible={this.state.visible}
                  onOk={() => { this. handleCancel(); this.props.edit(this.props.id, this.state.value) }}
                  onCancel={this.handleCancel}>
                URL:<input placeholder="Inserer l'image" name="images" type="text" onChange={this.handleChange} value={this.state.url}/>
                <br/><br/>
                Title:<input className="input" placeholder="Inserer le titre" name="title"type="text" onChange={this.handleChange} value={this.state.title}/>
                <br/><br/>
                Year:<input className="input" placeholder="Inserer l'année de sortie"  name="year" type="text" onChange={this.handleChange}  value={this.state.year}/>
                <br/><br/>
                Rate:<input className="input" placeholder="Inserer le rate"  name="rating" type="text" onChange={this.handleChangeRating}  value={this.state.rate}/>
                <br/><br/>
              </Modal>
              </Card>
            </Col>
          ))}
        </Row>

      </div>
    )
  }

}
const mapStateToProps = state => ({
  data: state.Movies,
  
});
const mapDispatchToProps = dispatch => {
  return {
    handleDelete: (id) => dispatch(deleteMovie(id)),
    edit: (id, newValue) => dispatch(editMovie(id, newValue))


  }
}
  ;

export default connect(mapStateToProps, mapDispatchToProps)(Spinner(CardMovie));
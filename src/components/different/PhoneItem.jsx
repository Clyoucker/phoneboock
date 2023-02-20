import React from "react"

export default class PhoneItem extends React.Component{
    
  constructor(props){
    super(props);
    this.state={
      id:props.id,
      phone:props.phone,
      name:props.name,
      surname:props.surname,
    };
  }



  render(){
    return(
      <div data-key={this.state.id} onMouseOver = {() => this.props.onMouseOver(this.state.phone)} onMouseOut = {() => this.props.onMouseOut()} className="phoneboock__item">
        <h2 className="title title_phoneboock_item">{this.props.index}</h2>
        <h2 className="title title_phoneboock_item">{this.state.name}</h2>
        <h2 className="title title_phoneboock_item">{this.state.surname}</h2>
        <h2 className="title title_phoneboock_item">{this.state.phone}</h2>
        <button onClick={() => this.props.delPhone(this.state.id)} className={`button ${this.props.status === false ? "hiden" : "show"}`}>X</button>
      </div>
    )
  }
}

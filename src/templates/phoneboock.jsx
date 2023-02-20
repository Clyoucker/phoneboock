import React from "react";

import data from "../assets/jsons/phoneboock.json";
import PhoneItem from "../components/different/PhoneItem";

export default class phoneboock extends React.Component{
    
    constructor(props){
        super(props);
        this.state={
            title: "Lite Solid Core",
            phones: data["phoneboock"],
            delPhones: false,
            addPhone: false,
            currentPhone: "",
            currentName: "",
            currentSurname: "",
        };
        this.onMouseOver.bind(this);
        this.onMouseOut.bind(this);
        this.delPhone.bind(this);
    }

    getRandomInRange = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    getRandomString = (length) => {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()+';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
          counter += 1;
        }
        console.log(result)
        return result;
    }


    onMouseOver = value  => {this.setState({title : value})}
    
    onMouseOut = () => {this.setState({title : "Lite Solid Core"})}

    showAdd = () => {
        let status = this.state.addPhone;
        this.setState({addPhone:!status})
    }

    showDel = () => {
        let status = this.state.delPhones;
        this.setState({delPhones:!status})
    }
    
    addPhobe = (name,surname,phone) => {
        let id = this.getRandomString(this.getRandomInRange(24,36));
        let array = this.state.phones;
        const obj = {"id":id,"name":name,"surname":surname,"phone":phone}
        array.push(obj)
        this.setState({phones:array,currentPhone:"",currentName:"",currentSurname:""})
    }

    delPhone = id => {
        let array = this.state.phones
        for (let i = 0; i < array.length; i++){
            if (array[i]["id"] === id){
                array.splice(i,1)
            }
        }
        this.setState({phones:array})
    }

    render(){
        return(
          <main className="main">
            <section className="section section-phoneboock">
                <h1 className="title section_title">{this.state.title}</h1>
                <div className="btns">
                    <button onClick = {() => this.showAdd()} className="button button_phoneboock button_add">Add Phone</button>
                    <button className="button button_phoneboock button_change">Change Phone</button>
                    <button onClick = {() => this.showDel()} className="button button_phoneboock button_del">Del Phone</button>
                </div>
                <div className={`added ${this.state.addPhone === true ? "show" : "hiden"}`} style={{display:`${this.state.addPhone === true ? "grid" : "none"}`}}>
                    <div className="added__item">
                        <label className="label">Phone Number</label>
                        <input onChange={(e) => this.setState({currentPhone:e.target.value})} className="input" type="tel" placeholder="+7(901)703 45 86" value={this.state.currentPhone}/>
                    </div>
                    <div className="added__item">
                        <label className="label">Name</label>
                        <input onChange={(e) => this.setState({currentName:e.target.value})} className="input" type="text" placeholder="Clyoucker" value={this.state.currentName}/>
                    </div>
                    <div className="added__item">
                        <label className="label">Surname</label>
                        <input onChange={(e) => this.setState({currentSurname:e.target.value})} className="input" type="text" placeholder="Dron" value={this.state.currentSurname}/>
                    </div>
                    <button onClick={() => this.addPhobe(this.state.currentName,this.state.currentSurname,this.state.currentPhone)} className="button">Add New Phone</button>
                </div>
                <div className="section__content">
                    <div className="phoneboock__header">
                        <h2 className="title title_header">ID</h2>
                        <h2 className="title title_header">NAME</h2>
                        <h2 className="title title_header">SURNAME</h2>
                        <h2 className="title title_header">PHONE NUMBER</h2>
                    </div>
                    <div className="phoneboock__body">
                        {this.state.phones.map((item,index) => <PhoneItem onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut} key={item.id} delPhone={this.delPhone} id={item.id} index={index} name={item.name} surname={item.surname} phone={item.phone} status={this.state.delPhones} />)}
                    </div>
                </div>
            </section>
          </main>
        )
    }
}

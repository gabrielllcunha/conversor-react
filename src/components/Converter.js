import React, { Component } from 'react';
import './Converter.css';
export default class Converter extends Component {

    constructor(props){
        super(props);

        this.state = {
            currency1_value: "",
            currency2_value: 0,
        }

        this.converter = this.converter.bind(this);
    }
    
    converter() {
        let from_to = `${this.props.currency1}_${this.props.currency2}`;
        let url = `https://free.currconv.com/api/v7/convert?q=${from_to}&compact=ultra&apiKey=0d7d4095696e105c8fc7`;

        fetch(url)
        .then(res=>{

            return res.json()

        })
        .then(json => {
            let price = json[from_to];
            let currency2_value = ( parseFloat (this.state.currency1_value * price)).toFixed(2)
            this.setState({currency2_value});
        })
    }

    render(){
        return(
            <div className="converter">
                <h2>{this.props.currency1} para {this.props.currency2}</h2>
                <input type="text" onChange={(event)=>{this.setState({currency1_value:event.target.value})}}></input>
                <button className="button" type="button" value="convert" onClick={this.converter}>Converter</button>
                <h2>{this.state.currency2_value}</h2>
            </div>
        )
    }
}

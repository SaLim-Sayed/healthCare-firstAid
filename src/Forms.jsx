import React, { Component } from 'react';
import axios from "axios";
import { HiSearch } from "react-icons/hi";
export class Forms extends Component {
    state = {
        value: "",
        prediction: ''
    }



    predictionHandle = async () => {
        const baseURL = 'https://nlp-firstaid-api.herokuapp.com/predict/?text= ' + this.state.value;
        await axios.get(baseURL).then((response) => {
            this.setState({
                prediction: response.data
            });
            console.log(response.data);


        }).catch(err => console.log('err'))
    }

    setValue = e => {
        this.setState({
            value: e.target.value
        })
    }
    render() {
        return (
            

                
            <div className="App">
                <div className='container bord'>
                    <div className="check">
                        <h1 className=' lbl'>
                            {/*  <input    value={this.state.value}  onKeyUp={() => this.predictionHandle()} onChange={this.setValue} /> */}
                            <button className='btn  mx-2  ' onClick={() => this.predictionHandle()}>  <input placeholder='Enter a description of your pain ' value={this.state.value} onKeyUp={() => this.predictionHandle()} onChange={this.setValue} />
                                <button className='btn btn-success mx-2'><HiSearch /></button>
                            </button>
                        </h1>
                    </div>
                    {/* <p className='source-text '>
                        <div className="src-en">
                            <i>{this.state.prediction.source_text}</i> 
                        </div>
                        <div >
                            <i><u>{this.state.prediction.translation}</u></i>
                        </div>
                    </p> */}

                    <div className="pred container   ">
                        <p className='firstAid1'>
                            <h3 className="src-ar px-3 bg-dark"> <i>{this.state.prediction.translation}</i> </h3>
                            {this.state.prediction.firstaid_instructions}</p>
                        <p className='firstAid2 '>
                            <h3 className="src-ar px-3 bg-dark"><u>{this.state.prediction.source_text}</u></h3>
                            {this.state.prediction.firstaid_instructions_in_arabic}</p>
                    </div>
                </div>
            </div>

        );
    }
}

export default Forms;

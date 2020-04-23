import * as React from "react";
import '../style.css'
import Calculator from './Calculator'
import Formula from './Formula'
export interface HelloProps { 
    compiler: string; 
    framework: string;
    
}
interface MyState{
    n: number; 
    r: number; 
    currentView:string;
}

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.

export class Hello extends React.Component<HelloProps, MyState> {
    constructor(props){
        super(props);
        this.state={
            n: 7,
            r: 3,
            currentView:"Calculator"
        }
    }
    handleChange = e => {
        this.setState<never>({
          [e.target.id]: e.target.value
        });
      };
    buttonPlus = e =>{
        this.setState<never>({
            [e.target.id]: Number(e.target.value)+1
        })
    }
    buttonMinus = e =>{
        this.setState<never>({
            [e.target.id]: Number(e.target.value)-1
        })
    }
    setCurrentview=e=>{
        this.setState<never>({
            currentView:e.target.id
        })
    }
    render() {
        
        return (
            <div>
                <div className="header">
                Discrete Math Calculator
                </div>
                <div className="flex-container">
                    {/* <div>
                        <h3>Discrete Math Calculator</h3>
                        <h3>Hello from {this.props.compiler} and {this.props.framework}!</h3>
                    </div> */}
                    <div>
                        n = <input
                            type="number"
                            id="n"
                            onChange={this.handleChange}
                            placeholder='n'
                            min={1}
                            value={this.state.n}
                            />
                            <button className='button-plus' id="n" value={this.state.n} onClick={this.buttonPlus}>
                                +
                            </button>
                            <button className='button-minus'id="n" value={this.state.n} onClick={this.buttonMinus}>
                                -
                            </button>
                            <br/>
                        r =  <input
                            type="number"
                            id="r"
                            onChange={this.handleChange}
                            placeholder='r'
                            min={0}
                            value={this.state.r}
                            />
                             <button className='button-plus'id="r"value={this.state.r} onClick={this.buttonPlus}>
                                +
                            </button>
                            <button className='button-minus' id="r" value={this.state.r} onClick={this.buttonMinus}>
                                -
                            </button>

                    </div>   
                        <button className='button-current-view' id="Calculator" onClick={this.setCurrentview}>
                        Calculation
                        </button>
                         
                        <button className='button-current-view' id="Formula" onClick={this.setCurrentview}>
                        Formula
                        </button>
                    <div>
                        {this.state.currentView=='Calculator'&&
                            <Calculator 
                                n={this.state.n}
                                r={this.state.r}
                            />     
                        }
                        {this.state.currentView=='Formula'&&
                            <Formula />
                        }
                    </div>
                </div>
                {/* <div className="footer">
                    2020 Angel Lee:
                    <a href="https://github.com/angellee0102/discrete-math"> GitHub repo</a>
                </div> */}
            </div>
        )
    }
}
import * as React from "react";
import '../style.css'
import Calculator from './Calculator'
export interface HelloProps { 
    compiler: string; 
    framework: string;
    
}
interface MyState{
    n: number; 
    r: number; 
}

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.

export class Hello extends React.Component<HelloProps, MyState> {
    constructor(props){
        super(props);
        this.state={
            n: 7,
            r: 3
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
    render() {
        
        return (
            <div>
                <div className="flex-container">
                    <div>
                        <h2>Discrete Math Calculator</h2>
                        <h3>Combinations and Permutations</h3>
                        {/* <h3>Hello from {this.props.compiler} and {this.props.framework}!</h3> */}
                    </div>
                    <div>
                        n = <input
                            type="number"
                            id="n"
                            onChange={this.handleChange}
                            placeholder='n'
                            min={1}
                            value={this.state.n}
                            />
                            <button id="n" value={this.state.n} onClick={this.buttonPlus}>
                                Plus
                            </button>
                            <button id="n" value={this.state.n} onClick={this.buttonMinus}>
                                Minus
                            </button>
                            <br/>
                        r = <input
                            type="number"
                            id="r"
                            onChange={this.handleChange}
                            placeholder='r'
                            min={0}
                            value={this.state.r}
                            />
                             <button id="r" value={this.state.r} onClick={this.buttonPlus}>
                                Plus
                            </button>
                            <button id="r" value={this.state.r} onClick={this.buttonMinus}>
                                Minus
                            </button>

                    </div>
                <div>
                    <Calculator 
                        n={this.state.n}
                        r={this.state.r}
                    />     
                </div>
                    </div>
            </div>
        )
    }
}
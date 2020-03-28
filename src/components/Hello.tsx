import * as React from "react";
import '../style.css'
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
    permutation = (n, r)  => {
        let output = 1;
        for (let i = 0; i < r; i++){
            output = output * n
            n = n -1
        }
        return output
    }
    combination = (n,r) =>{
        let output = 1;
        for (let i=0;i<r;i++){
            output = output * n
            n = n - 1
        }
        let divider = 1;
        for (let i=0;i<r;i++){
            divider= divider * r
            r = r - 1
        }
        output=output/divider
        return output;
    }
    handleChange = e => {
        this.setState<never>({
          [e.target.id]: e.target.value
        });
      };
    render() {
        const permutation_result=this.permutation(this.state.n,this.state.r)
        const combination_result=this.combination(this.state.n,this.state.r)
        console.log('permutation', permutation_result)
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
                            />
                            <br/>
                        r = <input
                            type="number"
                            id="r"
                            onChange={this.handleChange}
                            placeholder='r'
                            />

                    </div>
                <div>
                    permutation = {permutation_result}
                    <br/>
                    combination = {combination_result}
                </div>
                    </div>
            </div>
        )
    }
}
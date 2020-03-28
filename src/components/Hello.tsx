import * as React from "react";

export interface HelloProps { 
    compiler: string; 
    framework: string;
    
}
interface MyState{
    counter: number; 
}

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.

export class Hello extends React.Component<HelloProps, MyState> {
    constructor(props){
        super(props);
        this.state={
            counter:1
        }
    }
    render() {
        return (
            <div>

                <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>
                <h3>Hi there welcome</h3>
                {this.state.counter}
            </div>
        )
    }
}
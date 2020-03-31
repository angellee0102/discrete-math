import  * as React from 'react'

interface MyProps{
    n;
    r;
}
export default class Calculator extends React.Component <MyProps,{}>{
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
    arrangementWithRepetition = (n, r) =>{
        let output = 1;
        for (let i = 0; i<r; i++){
            output = output * n
        }
        return output;
    }
    selectionWithRepetition = (n, r) => {
        let output=this.combination((Number(n)+r)-1,r)
        return output;
    }
    render() {
        const permutation_result=this.permutation(this.props.n, this.props.r)
        const combination_result=this.combination(this.props.n, this.props.r)
        const arrangementWithRepetition_result=this.arrangementWithRepetition(this.props.n, this.props.r)
        const selectionWithRepetition_result=this.selectionWithRepetition(this.props.n, this.props.r)
        return (
            <div>
              
               permutation = {permutation_result}
                <br/>
                combination = {combination_result}
                <br/>
                n^r = {arrangementWithRepetition_result}
                <br/>
                C(r+n-1, r) = {selectionWithRepetition_result}
            </div>
        )
    }
}

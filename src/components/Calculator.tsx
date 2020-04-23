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
        n = Number(n)
        let output = 1;
        if (r > n)return 0
        for (let i = 1; i < (n+1); i++){
            output = output * i
        }
        let divider = 1;
        for (let i = 1; i < (r+1); i++){
            divider = divider * i
        }
        for (let i = 1; i < (Number(n-r)+1);i++){
            divider = divider * i
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
    nthCatalan = (n)=>{
        if (n <= 1)return 1; 
        let output=0
        for (let i=0;i<n;i++){
            output += this.nthCatalan(i)*this.nthCatalan(n-i-1)
        }
        return output
    }
    nthTriangular = (n)=>{
        if (n <= 1)return 1;
        let output=0
        for (let i=1;i<n+1;i++){
            output+=i
        }
        return output
    }
    nthHarmonic=(n)=>{
        if (n <= 1)return 1;
        let output:number=1.00
        for (let i=2;i<n+1;i++){
            output+= (1/i)
        }
        return output
    }
    nthFibonacci=(n)=>{
        if (n <= 1)return 0;
        if (n == 2)return 1;
        return (this.nthFibonacci(n-1)+this.nthFibonacci(n-2))
    }
    nthLucas=(n)=>{
        if (n < 0)return 0
        if (n == 0)return 2;
        if (n == 1)return 1;
        return (this.nthLucas(n-1)+this.nthLucas(n-2))
    }
    eulerian=(n,m)=>{
        if (m >= n || n == 0)return 0;
        if (m == 0)return 1;
        if (n <= 1)return 0;
        return ((n-m)*this.eulerian(n-1, m-1) 
                + (m+1)*this.eulerian(n-1,m))
    }
    stirling=(n,k)=>{
        if (n <= 1)return 1;
        if (k <= 1 || k == n)return 1;
        return (this.stirling(n-1,k-1) + k*this.stirling(n-1,k))
    }
    render() {
        let n = Number(this.props.n)
        let r = Number(this.props.r)
        const permutation_result=this.permutation(n, r)
        const combination_result=this.combination(n, r)
        const arrangementWithRepetition_result=this.arrangementWithRepetition(n, r)
        const selectionWithRepetition_result=this.selectionWithRepetition(n, r)
        const catalan_result = n<1 ? 'NaN' : n>17?'Please choose a smaller n':this.nthCatalan(n)
        const triangular_result = n<1 ? 'NaN' : this.nthTriangular(n)
        const harmonic_result = n<1 ? 'NaN' : this.nthHarmonic(n).toFixed(4)
        const fibonacci_result = n<1 ? 'NaN' : n>35?'Please choose a smaller n':this.nthFibonacci(n)
        const lucas_result = n<1 ? 'NaN' : n>35?'Please choose a smaller n': this.nthLucas(n)
        const eulerian_result=n<1 ? 'NaN': r>6?'Please choose a smaller r':this.eulerian(n, r)
        const stirling_result=n<1 ? 'NaN': r>7?'Please choose a smaller r':this.stirling(n, r)
        var t0 = performance.now()
        
        var t1 = performance.now()
        // console.log("Call to stirling took " + (t1 - t0) + " milliseconds.")
        
        
        return (
            <div>

            <div className='flex-container-Calculator'>
                <div>
                    <h4>With (n, r)=({this.props.n}, {this.props.r})</h4>
                    permutation = {permutation_result}
                    <br/>
                    combination = {combination_result}
                    <br/>
                    n^r = {arrangementWithRepetition_result}
                    <br/>
                    C(r+n-1, r) = {selectionWithRepetition_result}
                </div>

                <div>
                    <h4>With n = {this.props.n}</h4>
                    The {this.props.n}th Catalan = {catalan_result}
                    <br/>
                    The {this.props.n}th Triangular number = {triangular_result}
                    <br/>
                    The {this.props.n}th Harmonic number = {harmonic_result}
                    <br/>
                    The {this.props.n}th Fibonacci number = {fibonacci_result}
                    <br/>
                    The {this.props.n}th Lucas number = {lucas_result}
                </div>

                <div>
                    <h4>With (n, r) = ({this.props.n}, {this.props.r})</h4>
                    Eulerian numbers = {eulerian_result}
                    <br/>
                    Stirling numbers of the 2nd kind  = {stirling_result}
                </div>
            </div>
            <div className="footer">
                last updated 2020.04.24 by Angel Lee  
                <a> </a>
                <a href="https://github.com/angellee0102/discrete-math">GitHub repo</a>
            </div>
            </div>
        )
    }
}

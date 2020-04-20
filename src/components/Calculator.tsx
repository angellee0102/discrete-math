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
        if (n == 0)return 2;
        if (n == 1)return 1;
        return (this.nthLucas(n-1)+this.nthLucas(n-2))
    }
    eulerian=(n,m)=>{
        if (m >= n || n == 0)return 0;
        if (m == 0)return 1;
        return ((n-m)*this.eulerian(n-1, m-1) 
                + (m+1)*this.eulerian(n-1,m))
    }
    stirling=(n,k)=>{
        if (k == 1 || k == n)return 1;
        return (this.stirling(n-1,k-1)+k*this.stirling(n-1,k))
    }
    render() {
        const permutation_result=this.permutation(this.props.n, this.props.r)
        const combination_result=this.combination(this.props.n, this.props.r)
        const arrangementWithRepetition_result=this.arrangementWithRepetition(this.props.n, this.props.r)
        const selectionWithRepetition_result=this.selectionWithRepetition(this.props.n, this.props.r)
        const catalan_result=this.props.n>17?'Please choose a smaller n':this.nthCatalan(this.props.n)
        const triangular_result=this.nthTriangular(this.props.n)
        const harmonic_result=this.nthHarmonic(this.props.n)
        const fibonacci_result=this.nthFibonacci(this.props.n)
        const lucas_result=this.nthLucas(this.props.n)
        const eulerian_result=this.eulerian(this.props.n, this.props.r)
        const stirling_result=this.stirling(this.props.n, this.props.r)
        return (
            <div>
              <h3>With respect to n and r</h3>
               permutation = {permutation_result}
                <br/>
                combination = {combination_result}
                <br/>
                n^r = {arrangementWithRepetition_result}
                <br/>
                C(r+n-1, r) = {selectionWithRepetition_result}

                <h3>With respect to n</h3>
                The {this.props.n}th Catalan = {catalan_result}
                <br/>
                The {this.props.n}th Triangular number = {triangular_result}
                <br/>
                The {this.props.n}th Harmonic number = {harmonic_result}
                <br/>
                The {this.props.n}th Fibonacci number = {fibonacci_result}
                <br/>
                The {this.props.n}th Lucas number = {lucas_result}
                <h3>With respect to n and m</h3>
                Eulerian numbers with (n,m) == ({this.props.n},{this.props.r})  result = {eulerian_result}
                <br/>
                Stirling numbers of the second kind with (n,m) == ({this.props.n},{this.props.r})  result = {stirling_result}

                {/* (4) Stirling number of the second kind with respect to m, n for 1<=n<=m (i.e., S_sub(m,1), S_sub(m,2), ... , a_sub(m,m) ) */} 
            </div>
        )
    }
}
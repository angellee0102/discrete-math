import  * as React from 'react'


export default class Formula extends React.Component {
    render() {
        return (
            <div>
                <div>
                    P(n, r):Permutations of size r from n distinct objects
                    <br/>
                    C(n, r): Selections/Combinations of size r from n distinct objects
                    <br/>
                    n^r: Arrangements with repetition of size r from n distinct objects
                    <br/>
                    C(r+n-1,r): Selections with repetition of size r from n distinct objects
                    <br/>
                    <br/>
                    Catalan number: C(k) = C(2k,k)/(2k+1)
                    <br/>
                    Triangular number: T(k) = C(k+1,2)
                    <br/>
                    Harmonic number: H(k) = C(k+1,2)/k!
                    <br/>
                    Fibonacci: F(k) = F(k-1) + F(k-2)
                    <br/>
                    Lucas number: L(0)=2; L(1)=1;  L(k)=L(k-2)+L(k-1)
                    <br/>
                    <br/>
                    Eulerian numbers: A(n,r) = (n-r)A(n-1,m-1) + (m+1)A(n-1,m)
                    <br/>
                    Stirling numbers of the 2nd kind: S(n,r) = S(n-1, r-1) + r * S(n-1,r)

                </div>
            </div>
        )
    }
}

import React, { useMemo } from 'react';
const products = [
  {
    id: 1, name:'Mouse', price: 200
  },
  {
    id: 2, name: 'Keyboard', price: 800
  },
  {
    id: 3, name: 'Speaker', price: 1400
  }
] 
    
function ProductList() {
  const productList = useMemo(() => {
    return products.map(product => {
      const priceWithTax = product.price * 1.1; // add 10% tax
      return (
        <div key={product.id}>
          <div>{product.name}</div>
          <div>Price (incl. tax): {priceWithTax}</div>
        </div>
      );
    });
  }, [products]);

  return <div>{productList}</div>;
}

export default ProductList

// import React, { useState, useMemo } from 'react';

// function productList() {
//   const [count, setCount] = useState(0);
//   const [text, setText] = useState('');

//   // This function will only be recalculated if either `count` or `text` changes.
//   const expensiveFunction = useMemo(() => {
//     console.log('Calculating expensive function...');
//     let result = 0;
//     for (let i = 0; i < count; i++) {
//       result += i;
//     }
//     return result;
//   }, [count,text]);

//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={() => setCount(count + 1)}>Increment Count</button>
//       <input value={text} onChange={e => setText(e.target.value)} />
//       <p>Result of expensive function: {expensiveFunction}</p>
//     </div>
//   );
// }

// export default  productList;


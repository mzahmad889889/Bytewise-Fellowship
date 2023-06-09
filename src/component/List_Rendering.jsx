import React, { useEffect,useState } from 'react'

const users = [
  {
    id:1,
    name:"zubair",
    contact:'04384858394'
  },
  {
    id:2,
    name:"khan",
    contact:'043848748394'
  }
]


function List_Rendering() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('https://dummyjson.com/products/')
       .then((response) => response.json())
       .then((data) => {
          setProducts(data.products);
       });
  }, []);
  return (
    <div>
      <h2>Rendering list in React</h2>
        {users.map(user => {
           return(
        <div className='item' key={user.id}>
            <h4>{user.name}</h4>
        </div>
           )
       })}
       <h2>New Data form API</h2> 
       {products.map(product => {
         return (
            <div key={product.id}>
               <h3 className="title">{product.title}</h3>
               <p className="desccription">{product.description}</p>
               <h3 className="price">{product.price}</h3>  
            </div>
          );
      })}
      <h2>UseMemo </h2> 
    </div>
  )
}

export default List_Rendering

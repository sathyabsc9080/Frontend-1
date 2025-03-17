import React from 'react'

const Interview = () => {   
    const products = [
        { name: 'Shirt', price: 100, quantity: 5 },
        { name: 'Pant', price: 200, quantity: 3 },
        { name: 'Tshirt', price: 150, quantity: 7 },
    ];

    const calculation = (price , quantity) => {
      const Sale = price * quantity;
      const gst = Sale * 0.18 ;
      return Sale + gst;
    }

    const totalSalesAmount = products
        .map(products => calculation(products.price , products.quantity))
        .reduce((a,b)=>(a+b),0)
    return (
        <div>
            <h2>Our Details</h2>
            {products.map((product)=>(
              <div key={product.name}>
                  <h3>Product : {product.name}</h3>
                  <p>Price : {product.price}</p>
                  <p>Quantity : {product.quantity}</p>
                  <p>Total Sale Amount (GST) : {calculation(product.price , product.quantity)}</p>
              </div>
            ))}
            <h3>Total Sale Amount Of The Day:{totalSalesAmount}</h3>
        </div>
    );
};

export default Interview;

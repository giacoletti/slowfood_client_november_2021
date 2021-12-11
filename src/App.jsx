import React, { useState, useEffect } from 'react'
import Products from './modules/Products'
import Orders from './modules/Orders'

const App = () => {
  const [products, setProducts] = useState([])
  const [order, setOrder] = useState()
  // const [message, setMessage] = useState()

  useEffect(() => {
    Products.index().then((data) => {
      setProducts(data)
    })
  }, [])

  const addToOrder = (product_id) => {
    Orders.create(product_id, 1).then((response) => {
      debugger
      setOrder(response.order)
    })
  }

  const productsList = products.map((product) => {
    return (
      <div key={products.id}>
        {product.name} - {`${product.price}`}{' '}
        <button data-cy="button_select" onClick={() => addToOrder(product.id)}>
          Add to Order
        </button>
      </div>
    )
  })

  return (
    <>
      <h1>Slowfood</h1>
      <h3 data-cy="message-box">{order}</h3>
      <div data-cy="product-list">{productsList}</div>
    </>
  )
}

export default App

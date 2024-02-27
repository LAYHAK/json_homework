'use strict'

import { getData } from '../store/fetchApi.js'
import cardProduct from '../components/cardProduct.js'
import cardUser from '../components/cardUser.js'

const renderProductArea = document.querySelector('#render-product-area')

const products = await getData('products')
products.map((product) => {
    renderProductArea.innerHTML += cardProduct(product)
})
const renderUserArea = document.querySelector('#render-user-area')
const users = await getData('users')
users.map((user) => {
    renderUserArea.innerHTML += cardUser(user)
})

// fetch(BASE_URL, {
//     method: 'GET',
//     headers: {
//         'Content-Type': 'application/json',
//         Accept: 'application/json',
//     },
// })
//     .then((response) => response.json())
//     .then((data) => {
//         console.log(data)
//         renderArea.innerHTML = data.map((product) => cardProduct(product))
//     })
//     .catch((error) => console.log(error))

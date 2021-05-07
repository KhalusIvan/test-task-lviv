import React, {useState, useEffect} from 'react'
import { AddNew } from './AddNew'
import { Product } from './Product'

export const ProductList = () => {
    const [productList, setProductList] = useState([])

    useEffect(()=>{
        getProducts()
    }, [])

    async function getProducts() {
        const result = await fetch('https://60955b88e806f60017116688.mockapi.io/api/v1/products', {
            method: 'GET'
        })
        const status = await result.status
        const products = await result.json()
        console.log(status)
        console.log(products)
        if (status === 200 || status === 201) {
            setProductList(products)
        } else if (status === 400) {
            alert("Не знайдена сторінка")
        } else {
            alert("Помилка сервера")
        }
    }

    function GenerateProductList() {
        let list = productList.map(el => {
            return <Product key={el.id} product={el} productList={productList} setProductList={setProductList} />
        })
        return list
    }

    return (
        <>
            {productList.length !== 0 ? (
                <>
                    <table className="table">
                        <thead>
                            <tr className="w-100">
                                <th scope="col-3">Фото</th>
                                <th scope="col-2">Назва</th>
                                <th scope="col-3">Короткий опис</th>
                                <th scope="col-2">Кількість</th>
                                <th scope="col-1">Деталі</th>
                                <th scope="col-1">Видалити</th>
                            </tr>
                        </thead>
                        <tbody>
                            <GenerateProductList />
                        </tbody>
                    </table>
                    <button className="position-fixed" style={{bottom:"5%", right:"5%"}}> addNew </button>
                </>
            ) : (
                <>
                    <div>Loading</div>
                    
                </>
            )}
        </>
    )
}

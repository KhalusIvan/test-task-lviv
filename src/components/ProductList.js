import React, {useState, useEffect} from 'react'
import { AddNew } from './AddNew'
import { Product } from './Product'

export const ProductList = () => {
    const [productList, setProductList] = useState([])
    const [sort, setSort] = useState({how:null, field:null})

    useEffect(()=>{
        getProducts()
    }, [])

    useEffect(()=>{
        let productArray = productList.slice(0)
        console.log(sort.field)
        productArray.sort((a, b) => {
            console.log(b[sort.field])
            if(sort.how === "asc") {
                if(a[sort.field] < b[sort.field]) { return -1; }
                else { return 1; }
            }
            else{
                if(a[sort.field] > b[sort.field]) { return -1; }
                else { return 1; }
            }

        });
        setProductList(productArray)
    }, [sort])

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

    function sorting(field) {
        if (field === sort.field) {
            sort.how === "asc" ? setSort({field:field, how: "desc"}) : setSort({field:field, how: "asc"})
        } else {
            setSort({field:field, how: "asc"})
        }
    }

    return (
        <>
            {productList.length !== 0 ? (
                <>
                    <table className="table">
                        <thead>
                            <tr className="w-100">
                                <th scope="col-3">Фото</th>
                                <th scope="col-2">
                                    <button onClick={()=>{sorting("name")}}>Назва</button>
                                </th>
                                <th scope="col-3">Короткий опис</th>
                                <th scope="col-2">
                                    <button onClick={()=>{sorting("count")}}>Кількість</button>
                                    </th>
                                <th scope="col-1">Деталі</th>
                                <th scope="col-1">Видалити</th>
                            </tr>
                        </thead>
                        <tbody>
                            <GenerateProductList />
                        </tbody>
                    </table>
                    <button type="button" className="position-fixed" style={{bottom:"5%", right:"5%"}} data-bs-toggle="modal" data-bs-target="#addModal">
                        addNew
                    </button>
                    <AddNew productList={productList} setProductList={setProductList}  />
                </>
            ) : (
                <>
                    <div>Loading</div>
                    
                </>
            )}
        </>
    )
}

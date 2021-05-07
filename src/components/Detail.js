import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";

export const Detail = () => {
    const history = useHistory()
    const [isEdit, setIsEdit] = useState(false)
    const [product, setProduct] = useState(false)
    const id = history.location.pathname.split('/')[1]
    useEffect(()=>{
        getProduct()
    }, [])

    async function getProduct() {
        const result = await fetch('https://60955b88e806f60017116688.mockapi.io/api/v1/products/' + id, {
            method: 'GET'
        })
        const status = await result.status
        const products = await result.json()
        if (status === 200 || status === 201) {
            setProduct(products)
        } else if (status === 400) {
            alert("Не знайдена сторінка")
        } else {
            alert("Помилка сервера")
        }
    }
    return (
        <div>
         {
             product === false ? (
                <div>loading</div>
             ) : (
               <>
               <form className="w-75 m-auto mt-4">
                {
                    isEdit ? (
                        <>
                            <div className="mb-3">
                                <label htmlFor="imageUrl" className="form-label">Зображення</label>
                                <input type="text" id="imageUrl" className="form-control" value={product.imageUrl} />
                            </div>
                            <div className="mb-3 d-flex justify-content-between">
                                <div className="w-75">
                                    <label htmlFor="name" className="form-label">Назва</label>
                                    <input type="text" id="name" className="form-control" value={product.name} />
                                </div>
                                <div>
                                    <label htmlFor="count" className="form-label">Кількість</label>
                                    <input type="number" id="count" className="form-control" value={product.count} />
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">Опис</label>
                                <input type="text" id="description" className="form-control" value={product.description} />
                            </div>
                            <div className="mb-3 d-flex justify-content-between w-100">
                                <div className="w-25">
                                    <label htmlFor="height" className="form-label">Висота</label>
                                    <input type="number" id="height" className="form-control" value={product.size.height} />
                                </div>
                                <div className="w-25">
                                    <label htmlFor="width" className="form-label">Ширина</label>
                                    <input type="number" id="width" className="form-control" value={product.size.width} />
                                </div>
                                <div className="w-25">
                                    <label htmlFor="weight" className="form-label">Вага</label>
                                    <input type="number" id="weight" className="form-control" value={product.weight} />
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="mb-3">
                                <label htmlFor="imageUrl" className="form-label">Зображення</label>
                                <input type="text" id="imageUrl" className="form-control" value={product.imageUrl} disabled />
                            </div>
                            <div className="mb-3 d-flex justify-content-between">
                                <div className="w-75">
                                    <label htmlFor="name" className="form-label">Назва</label>
                                    <input type="text" id="name" className="form-control" value={product.name} disabled />
                                </div>
                                <div>
                                    <label htmlFor="name" className="form-label">Кількість</label>
                                    <input type="text" id="name" className="form-control" value={product.count} disabled />
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">Опис</label>
                                <input type="text" id="description" className="form-control" value={product.description} disabled />
                            </div>
                            <div className="mb-3 d-flex justify-content-between w-100">
                                <div className="w-25">
                                    <label htmlFor="height" className="form-label">Висота</label>
                                    <input type="number" id="height" className="form-control" value={product.size.height} disabled />
                                </div>
                                <div className="w-25">
                                    <label htmlFor="width" className="form-label">Ширина</label>
                                    <input type="number" id="width" className="form-control" value={product.size.width} disabled />
                                </div>
                                <div className="w-25">
                                    <label htmlFor="weight" className="form-label">Вага</label>
                                    <input type="number" id="weight" className="form-control" value={product.weight} disabled />
                                </div>
                            </div>
                        </>
                    )
                }

            </form>
            <div className="m-auto d-flex justify-content-end w-75">
                <button className="me-3" onClick={() => setIsEdit(true)}>Редагувати</button>
                <button>Коментувати</button>
            </div>
               </>  
             )
         }
        </div>
    )
}

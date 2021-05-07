import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import { AddComment } from './AddComment';

export const Detail = () => {
    const history = useHistory()
    const [isEdit, setIsEdit] = useState(false)
    const [product, setProduct] = useState(false)
    const [name, setName] = useState('')
    const [url, setUrl] = useState('')
    const [description, setDescription] = useState('')
    const [count, setCount] = useState('')
    const [width, setWidth] = useState('')
    const [height, setHeight] = useState('')
    const [weight, setWeight] = useState('')
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
            setName(products.name)
            setUrl(products.imageUrl)
            setDescription(products.description)
            setCount(products.count)
            setWidth(products.size.width)
            setHeight(products.size.height)
            setWeight(products.weight)
        } else if (status === 400) {
            alert("Не знайдена сторінка")
        } else {
            alert("Помилка сервера")
        }
    }

    async function update() {
        const result = await fetch('https://60955b88e806f60017116688.mockapi.io/api/v1/products/' + id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                imageUrl:url,
                name:name,
                description:description,
                count:count,
                weight:weight,
                size:{
                    height:height,
                    width:width
                },
                comments:[]
            })
        })
        const status = await result.status
        const products = await result.json()
        if (status === 200 || status === 201) {
            console.log(products)
            history.push('/')
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
                                <input type="text" id="imageUrl" className="form-control" value={url} onChange={(e)=>{setUrl(e.target.value)}} />
                            </div>
                            <div className="mb-3 d-flex justify-content-between">
                                <div className="w-75">
                                    <label htmlFor="name" className="form-label">Назва</label>
                                    <input type="text" id="name" className="form-control" value={name} onChange={(e)=>{setName(e.target.value)}} />
                                </div>
                                <div>
                                    <label htmlFor="count" className="form-label">Кількість</label>
                                    <input type="number" id="count" className="form-control" value={count} onChange={(e)=>{setCount(e.target.value)}} />
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">Опис</label>
                                <input type="text" id="description" className="form-control" value={description} onChange={(e)=>{setDescription(e.target.value)}} />
                            </div>
                            <div className="mb-3 d-flex justify-content-between w-100">
                                <div className="w-25">
                                    <label htmlFor="height" className="form-label">Висота</label>
                                    <input type="number" id="height" className="form-control" value={height} onChange={(e)=>{setHeight(e.target.value)}} />
                                </div>
                                <div className="w-25">
                                    <label htmlFor="width" className="form-label">Ширина</label>
                                    <input type="number" id="width" className="form-control" value={width} onChange={(e)=>{setWidth(e.target.value)}} />
                                </div>
                                <div className="w-25">
                                    <label htmlFor="weight" className="form-label">Вага</label>
                                    <input type="number" id="weight" className="form-control" value={weight} onChange={(e)=>{setWeight(e.target.value)}} />
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="mb-3">
                                <label htmlFor="imageUrl" className="form-label">Зображення</label>
                                <input type="text" id="imageUrl" className="form-control" value={url} disabled />
                            </div>
                            <div className="mb-3 d-flex justify-content-between">
                                <div className="w-75">
                                    <label htmlFor="name" className="form-label">Назва</label>
                                    <input type="text" id="name" className="form-control" value={name} disabled />
                                </div>
                                <div>
                                    <label htmlFor="name" className="form-label">Кількість</label>
                                    <input type="text" id="name" className="form-control" value={count} disabled />
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">Опис</label>
                                <input type="text" id="description" className="form-control" value={description} disabled />
                            </div>
                            <div className="mb-3 d-flex justify-content-between w-100">
                                <div className="w-25">
                                    <label htmlFor="height" className="form-label">Висота</label>
                                    <input type="number" id="height" className="form-control" value={height} disabled />
                                </div>
                                <div className="w-25">
                                    <label htmlFor="width" className="form-label">Ширина</label>
                                    <input type="number" id="width" className="form-control" value={width} disabled />
                                </div>
                                <div className="w-25">
                                    <label htmlFor="weight" className="form-label">Вага</label>
                                    <input type="number" id="weight" className="form-control" value={weight} disabled />
                                </div>
                            </div>
                        </>
                    )
                }

            </form>
            <div className="m-auto d-flex justify-content-end w-75">
                <button className="me-3" onClick={() => setIsEdit(true)}>Редагувати</button>
                { isEdit ? <button className="me-3" onClick={() => update()}>Зберегти</button> :
                <button className="me-3" disabled>Зберегти</button>}
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addComment">
                    Коментувати
                </button>
                <AddComment id={id} />
            </div>
               </>  
             )
         }
        </div>
    )
}

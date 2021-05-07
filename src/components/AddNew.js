import React, {useState} from 'react'

export const AddNew = (props) => {
    const [name, setName] = useState('')
    const [url, setUrl] = useState('')
    const [description, setDescription] = useState('')
    const [count, setCount] = useState('')
    const [width, setWidth] = useState('')
    const [height, setHeight] = useState('')
    const [weight, setWeight] = useState('')

    async function save() {
        let sizeStr = {
                height:height,
                width:width
            }
        const result = await fetch('https://60955b88e806f60017116688.mockapi.io/api/v1/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                imageUrl:url,
                name:name,
                description:description,
                count:count,
                weight:weight,
                size:sizeStr,
                comments:[]
            })
        })
        const status = await result.status
        const products = await result.json()
        if (status === 200 || status === 201) {
            let productArray = props.productList.slice(0)
            productArray.push(products)
            props.setProductList(productArray)
        } else if (status === 400) {
            alert("Не знайдена сторінка")
        } else {
            alert("Помилка сервера")
        }
    }

    return (
        <div className="modal fade" id="addModal" tabIndex="-1" aria-labelledby="addModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="addModalLabel">Створення продукту</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                <form>
                    <div className="mb-3">
                        <label htmlFor="imageUrl" className="form-label">Зображення</label>
                        <input type="text" id="imageUrl" className="form-control" placeholder="Введіть url зображення" value={url} onChange={(e)=>{setUrl(e.target.value)}} />
                    </div>
                    <div className="mb-3 d-flex justify-content-between">
                                <div className="w-50">
                                    <label htmlFor="name"  className="form-label">Назва</label>
                                    <input type="text" id="name" className="form-control" placeholder="Введіть назву продукту" value={name} onChange={(e)=>{setName(e.target.value)}} />
                                </div>
                                <div>
                                    <label htmlFor="count" className="form-label">Кількість</label>
                                    <input type="number" id="count" className="form-control" placeholder="Введіть кількість продукту" value={count} onChange={(e)=>{setCount(e.target.value)}} />
                                </div>
                            </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Опис</label>
                        <input type="text" id="description" className="form-control" placeholder="Введіть опис продукту" value={description} onChange={(e)=>{setDescription(e.target.value)}} />
                    </div>
                    Розміри
                    <div className="mb-3 d-flex justify-content-between w-100">
                        <input type="number" id="height" className="form-control w-25" placeholder="Висота" value={height} onChange={(e)=>{setHeight(e.target.value)}} />
                        <input type="number" id="width" className="form-control w-25" placeholder="Ширина" value={width} onChange={(e)=>{setWidth(e.target.value)}} />  
                        <input type="number" id="weight" className="form-control w-25" placeholder="Вага" value={weight} onChange={(e)=>{setWeight(e.target.value)}} />
                    </div>
                </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-primary" onClick={()=>{save()}} data-bs-dismiss="modal">Зберегти</button>
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Закрити</button>
                </div>
                </div>
            </div>
        </div>
    )
}

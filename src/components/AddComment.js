import React, {useState} from 'react'

export const AddComment = (props) => {
    const [comment, setComment] = useState('')

    async function save() {
        /*const result = await fetch('https://60955b88e806f60017116688.mockapi.io/api/v1/products' + props.id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                comments:[{"date":new Date(), "comment":comment}]
            })
        })
        const status = await result.status
        const products = await result.json()
        console.log(status)
        console.log(products)
        if (status === 200 || status === 201) {
            let productArray = props.productList.slice(0)
            productArray.push(products)
            props.setProductList(productArray)
        } else if (status === 400) {
            alert("Не знайдена сторінка")
        } else {
            alert("Помилка сервера")
        }*/
    }

    return (
        <div className="modal fade" id="addComment" tabIndex="-1" aria-labelledby="addCommentLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="AddCommentLabel">Додати коментар</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                <form>  
                    <div className="mb-3">
                        <label htmlFor="comment" className="form-label">Коментар</label>
                        <textarea type="text" id="comment" className="form-control" placeholder="Введіть коментар до продукту" value={comment} onChange={(e)=>{setComment(e.target.value)}} />
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

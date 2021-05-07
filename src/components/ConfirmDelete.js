import React from 'react'

export const ConfirmDelete = (props) => {

    async function confirmation() {
        const result = await fetch('https://60955b88e806f60017116688.mockapi.io/api/v1/products/' + props.id, {
            method: 'DELETE'
        })
        const status = await result.status
        if (status === 200 || status === 201) {
            let index = props.productList.findIndex(el => el.id === props.id) 
            let productArray = props.productList.slice();
            productArray.splice(index, 1)
            props.setProductList(productArray)
        } else if (status === 404) {
            alert("Не знайдена сторінка")
        } else {
            alert("Помилка сервера")
        }
         
    }

    return (
        <div className="modal fade" id={"deleteModal"+props.id} tabIndex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="deleteModalLabel">Підтвердження видалення</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body m-auto w-50 text-center">
                    <h5 className="mt-2 mb-3">Видалити продукт</h5>
                    <div className="d-flex justify-content-between mt-4 mb-3">
                        <button type="button" className="btn btn-secondary mr-3" onClick={()=>confirmation()} data-bs-dismiss="modal">Так</button>
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Ні</button>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Закрити</button>
                </div>
                </div>
            </div>
        </div>
    )
}

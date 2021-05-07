import React from 'react'
import { ConfirmDelete } from './ConfirmDelete'
import {useHistory} from "react-router-dom";

export const Product = (props) => {
    const product = props.product
    const history = useHistory()
    

    return (
        <tr>
            <th>
                <img alt="product__photo" src={product.imageUrl} />
            </th>
            <td>{product.name}</td>
            <td>{product.description}</td>
            <td>{product.count}</td>
            <td>
                <button onClick={()=>{history.push("/" + product.id)}}>деталі</button>
            </td>
            <td>
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={"#deleteModal"+product.id}>
                    delete
                </button>
                <ConfirmDelete id={product.id} productList={props.productList} setProductList={props.setProductList}/>
            </td>
        </tr>
    )
}

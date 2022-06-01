import { useEffect,useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import {producto} from '../../utils/productsMock'
const ItemDetailContainer=()=>{
    const [product,setProduct]=useState({})
    const getItem=()=>{
        return new Promise((result,reject)=>{
            setTimeout(()=>{
                result(producto)
            },2000)
        })
    }
    useEffect(()=>{
        getItem()
        .then((res)=>{
            console.log("Producto: ",res)
            setProduct(res)
        })
    },[])
    
    return(
        <div>
            
            <ItemDetail data={product}></ItemDetail>
        </div>
    )
}
export default ItemDetailContainer
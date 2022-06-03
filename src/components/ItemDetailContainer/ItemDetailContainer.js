import { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import {producto} from '../../utils/productsMock'
import backendProducts from '../../utils/productsMock'
import Productos from '../../pages/Productos'
import { findAllByAltText } from '@testing-library/react'
const ItemDetailContainer=()=>{
    const {id}=useParams()
    const [product,setProduct]=useState({})
  
    useEffect(()=>{
     setProduct(   backendProducts.find((product)=>{
            return product.id==id
        })
     )
    },[])
    
    return(
        <div>
            <ItemDetail data={product}></ItemDetail>
        </div>
    )
}
export default ItemDetailContainer
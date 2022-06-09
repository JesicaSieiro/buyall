import { useEffect, useState } from "react"
/* import CardList from "../components/CardList/CardList" */
import backendProducts from "../utils/productsMock"

import CardListContainer from "../components/CardListContainer/CardListContainer"
const Productos=()=>{
   
    return(
        <div>
            <CardListContainer title="Productos más vendidos"  />
        </div>
        
    )
}
export default Productos
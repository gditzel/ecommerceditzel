import React from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import ItemDetail from '../items/ItemDetail'

const ItemDetailContainer = () => {

  const { idProduct } = useParams();

  console.log(idProduct);

  useEffect(()=>{
    
  })

  return (
    <>
      <ItemDetail/>
    </>
  )
}

export default ItemDetailContainer
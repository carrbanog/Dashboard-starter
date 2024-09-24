import React from 'react'
import BasicTable from './Table';
// table값 변경
const Data2 = () => {

  const product = [
    {
      name: "요거트",
      calories: 159,
      fat: 6,
      carbs: 24,
      protein: 4
    }
  ]
  return (
    <BasicTable product={product}/>
  )
}

// export default Data2
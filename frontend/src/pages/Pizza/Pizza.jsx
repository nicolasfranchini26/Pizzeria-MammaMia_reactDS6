import { useEffect, useState } from "react"
import {useParams} from "react-router-dom"
import CardPizza from "../../components/CardPizza/CardPizza"
import Header from "../../components/Header/Header"

const Pizza = () => {
  const [pizza, setPizza] = useState(null)
  const {id} = useParams();

  useEffect (() => {
   const pizzaId = async () => {
    const url = `http://localhost:5000/api/pizzas/${id}`
    const response = await fetch(url)
    const data = await response.json()
    setPizza(data)
   }
   pizzaId ()
  }, [id])

  if (!pizza) {
    return <div>Cargando...</div>
  }

  return (
    <>
    <Header/>
      <div className="pizza d-flex justify-content-center mb-4">    
        <CardPizza
        id={pizza.id}
        name={pizza.name}
        price={pizza.price}
        ingredients={pizza.ingredients}
        img={pizza.img}
        desc={pizza.desc}
        />
      </div>
    </>
  )
}

export default Pizza

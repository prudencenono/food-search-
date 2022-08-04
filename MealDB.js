import React, {useState, useEffect} from 'react'
import Header from './Header'
import MealCard from './MealCard'
import axios from 'axios'
import { useDispatch } from 'react-redux'
const MealDB = () => {
const[meal, setMeal] = useState("");
const[mealInput, setMealInput] = useState("")
const dispatch  = useDispatch();
    const handleChange = (e)=> {
        setMeal(e.target.value);
        
    }

    const handleClick = () => {
        setMealInput(meal)
        setMeal("")
    }

const searchMeal = async () => {
const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealInput}`)
.catch((error)=>{
    console.log("No data found:", error)
})
console.log(response.data.meals)
dispatch({
    type:"addMeal",
    payload: response.data.meals,
})
}

useEffect(()=>{
    searchMeal();
}, [mealInput])

  return (
    <div>
        <Header handleChange = {handleChange} handleClick={handleClick} meal={meal}/>
        <div className='displayMeal'>
        <MealCard />
        </div>
       
    </div>
  )
}

export default MealDB
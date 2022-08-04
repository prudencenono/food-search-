import React from 'react'
import { useSelector } from 'react-redux';

const MealCard = () => {
    const meals = useSelector((state)=> state.allMeal.meals)
    console.log(meals)

    const render = meals.map((meal, index)=>{
        const {idMeal,strMealThumb, strMeal, strArea, strInstructions, strSource, strYoutube} = meal
        
        return(
            <div className='card' key={index}>
                <img src={strMealThumb} alt={strMeal}></img>
                <h2>{strMeal}</h2>
                <h3>{strArea}</h3>
                <p>{strInstructions}</p>
                <a href={strSource} target="_blank">Source</a>
                <a href={strYoutube} target="_blank">Your Tube Video</a>
            </div>
        )
    })

  return (
    <>
    {render}
    </>
  )
}

export default MealCard
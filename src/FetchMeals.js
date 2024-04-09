import axios from 'axios';

const getAllMeals = (setMeal) =>{
    // axios.get(`http://localhost:4000`)
    axios.get(`https://meal-plan-abab.onrender.com`)
    .then(({data}) => {console.log(data)
        setMeal(data);}

)}
const addMeal = (title, setMeal, setTitle) => {
    axios.post(`https://meal-plan-abab.onrender.com/saveMeals`, {title} )
    .then((data) => {
        console.log(data);
        setTitle("");
        getAllMeals(setMeal)
    })
}

const editMeal = (mealId, title, setMeal, setTitle, setEditing) => {
    axios.post(`https://meal-plan-abab.onrender.com/editMeal`, {_id: mealId, title })
    .then((data) => {
        console.log(data)
        setTitle("")
        setEditing(false)
        getAllMeals(setMeal)
    })
}

const deleteMeal = (_id, setMeal) => {
    axios.post(`https://meal-plan-abab.onrender.com/deleteMeal`, {_id})
    .then((data) => {
        console.log(data)
        getAllMeals(setMeal)
    })
}
export  { getAllMeals, addMeal, editMeal, deleteMeal };
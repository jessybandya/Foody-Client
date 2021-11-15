import {useEffect, useState} from 'react';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';
import { db } from "../Meals/MealItem/firebase"

const AvailableMeals = () => {
	const [meals, setMeals] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [httpError, setHttpError] = useState();

	    const [data, setData] = useState({})

    useEffect(() => {
        db.child("menu").on("value", (snapshot) => {
            if(snapshot.val()!== null){
                setMeals({...snapshot.val()})
            }else{
                setMeals({})
            }
        });

        return() =>{
            setMeals({})
        }
    }, [])

	useEffect(() => {
		const fetchMeals = async () => {
			const response = await fetch('https://react-http-4e5dc-default-rtdb.firebaseio.com/meals.json');

			if (!response.ok) {
				throw new Error('Something went wrong!');
			}

			const responseData = await response.json();

			const loadedMeals = [];

			for (const key in responseData) {
				loadedMeals.push({
					id: key,
					name: responseData[key].name,
					description: responseData[key].description,
					price: responseData[key].price
				});
			}

			// setMeals(loadedMeals);
			setIsLoading(false);
		};


		  

		

		fetchMeals().catch(error => {
			setIsLoading(false);
			setHttpError(error.message);
		});
	}, []);

	if (isLoading) {
		return (
			<section className = {classes.MealsLoading}>
				<p>Loading...</p>
			</section>
		);
	}

	if (httpError) {
		return (
			<section className = {classes.MealsError}>
				<p>{httpError}</p>
			</section>
		);
	}


	
	return (
		<section className = {classes.meals}>
			<ul style={{display: "flex",flexWrap: "wrap"}}>
				{
					Object.keys(meals).map((id, index) => (
						<MealItem
						    postId= {id}
							name = {meals[id].name}
							image= {meals[id].image}
							key = {id} 
							// name = {meal?.name}
							description = {meals[id].restaurant}
							price = {meals[id].price} 
						/>
					))
				}
			</ul>
		</section>
	);
};

export default AvailableMeals;
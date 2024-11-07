import { useEffect, useState } from "react";
import OurOrder from "../ourOrder/OurOrder";

interface Top{
	
		name: string;
		img: string;
	
}
interface Ninjas {
	name: string;
	img: string;
	pizzaToppings: Top[]
};

const Ninjas = () => {
	const [ninjas, setNinjas] = useState<Ninjas[]>([]);
	const [order, setOrder] = useState<Top[]>([])

	useEffect(() => {
		fetch("/data.json")
			.then((response) => response.json())
			.then((data) => setNinjas(data))
			.catch((error) => console.error("Error data:", error))
	}, [])

	const addNewOrder = (newOrder:{
		name: string;
		img: string;}
	) => {
		setOrder([...order, newOrder])
	}

	return (
		<div>
			<OurOrder
				ninja={ninjas}
				showOrder={addNewOrder}
			/>
			{
				order.map(t=>(
					<><h1>{t.name}</h1><p>{t.img}</p></>
				))
			}
		</div>
	)
}

export default Ninjas
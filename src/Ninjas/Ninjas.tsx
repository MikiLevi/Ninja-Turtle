import { useEffect, useState } from "react";
import OurOrder from "./OurOrder";

interface Ninjas {
	name: string;
	img: string;
	pizzaToppings: [{
		name: string;
		img: string;
	},
		{
			name: string;
			img: string;
		}
	]
};

const Ninjas = () => {
	const [ninjas, setNinjas] = useState<Ninjas[]>([]);

	useEffect(() => {
		fetch("/data.json")
			.then((response) => response.json())
			.then((data) => setNinjas(data))
			.catch((error) => console.error("Error data:", error))
	}, [])


	return (
		<div>
			<OurOrder ninja={ninjas} />
		</div>
	)
}

export default Ninjas
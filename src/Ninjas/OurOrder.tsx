import Ninjas from "./Ninjas";

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

interface Props {
	ninja: Ninjas[];
}

const OurOrder = (ningas: Props) => {
	return (
		<div>
			<h1>Our order pizza:</h1>
			
		</div>
	)
}

export default OurOrder
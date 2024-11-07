import { MouseEventHandler, useState } from "react";
// import Ninjas from "../ningas/Ninjas";
interface Top{
	
	name: string;
	img: string;

}
interface Ninjas {
	name: string;
	img: string;
	pizzaToppings: Top[]
};

interface Props {
	ninja: Ninjas[];
	showOrder:(ninja:{
		name: string;
		img: string;
	}) => void
}

const OurOrder = (props: Props) => {

	return (
	    <>
      <div style={{display:"flex", justifyContent:"space-between"}}>
        {props.ninja.map((ninja) => (
          <div key={ninja.name} className="card">
            <h3>{ninja.img}</h3>
            <img
              src={ninja.img}
              alt={`${ninja.name}'s avatar`}
              style={{ width: "100px", height: "100px" }}
			  />
			{
				ninja.pizzaToppings.map((top)=>(
					<button onClick={()=>props.showOrder(top)}>{top.name}</button>
				))
			}
          </div>
        ))}
      </div>
    </>
	)
}

export default OurOrder
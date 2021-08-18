import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer({ sushi }) {
  //const [name, image, price] = sushi
  //something to control only 4 displayed?
  return (
    <div className="belt">
      {/* Render Sushi components here! */}
      {/* {sushi.map(sushi => console.log(sushi))} */}
      {/* {sushi.map((sushi) => (console.log(<Sushi key={sushi.id} sushi={sushi} price={sushi.price}/>)))} */}
      {sushi.map((sushi) => (
        <Sushi
          key={sushi.id}
          name={sushi.name}
          price={sushi.price}
          sushi={sushi}
          image={sushi.img_url}
        />))}
      <MoreButton />
    </div>
  );
}

export default SushiContainer;

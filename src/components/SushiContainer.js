import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ sushis, handleMoreClick, handleEatSushi }) {
  return (
    <div className="belt">
      {/* Render Sushi components here! */}
      {/* {sushi.map(sushi => console.log(sushi))} */}
      {/* {sushi.map((sushi) => (console.log(<Sushi key={sushi.id} sushi={sushi} price={sushi.price}/>)))} */}
        {sushis.map((sushi) => (
          <Sushi key={sushi.id} sushi={sushi} handleEatSushi={handleEatSushi} />
            // name={sushi.name}
            // price={sushi.price}
            // image={sushi.img_url}
          ))}
          <MoreButton handleMoreClick={handleMoreClick} />
    </div>
  );
}

export default SushiContainer;

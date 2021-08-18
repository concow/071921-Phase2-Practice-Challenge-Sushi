import React from "react";

//trouble destructuring in argument. props work though
function Sushi({ id, name, image, price }) {
  //const [name, image, price] = sushi
  function handleSushi(e) {
    //console.log(e.target.remove())
    e.target.remove()
  }
  return (
    <div className="sushi">
      <div className="plate" onClick={handleSushi}>
        {/* Tell me if this sushi has been eaten! */}
        {false ? null : (
          <img
            src={image}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;

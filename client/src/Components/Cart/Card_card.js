import React, { useEffect } from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import "./cart.css";

function Card({
  img_url,
  name,
  description,
  quantity,
  price,
  id,
  updateFeilds,
}) {
  return (
    <>
      <div class="item">
        <img src={img_url} alt={name} />
        <p>{name}</p>
        <p>${price}</p>
        <div
          className="minus-item"
          onClick={() => updateFeilds(id, quantity - 1)}>
          <RemoveIcon />
        </div>
        <p>Quantity: {quantity}</p>
        <div onClick={() => updateFeilds(id, quantity + 1)}>
          <AddIcon className="add-item" />
        </div>
        <div onClick={() => updateFeilds(id)}>
          <DeleteIcon className="delete" />
        </div>
      </div>
    </>
  );
}

export default Card;

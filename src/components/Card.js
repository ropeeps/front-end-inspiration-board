import React from "react";
import { useState } from "react";
import axios from "axios";
import "./Card.css";

const Card = (props) => {
  const card = props.singleCard;
  const deleteCard = props.deleteCardCallback;

  const [cardLikeCount, setCardLikeCount] = useState(card.likes_count);

  const likeCard = (card) => {
    let likeCardsEndpoint =
      "https://team-lovelace-api.herokuapp.com/cards/" + card.card_id + "/like";

    axios
      .put(likeCardsEndpoint)
      .then((response) => {
        setCardLikeCount(response.data.new_like_count);
        console.log(response);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="cards bg-info text-center">
      <p className="card-content">{card.message}</p>
      <p className="card-content">Likes: {cardLikeCount}</p>
      <button
        className="card-content btn btn-light"
        cardId={card.card_id}
        onClick={() => likeCard(card)}
      >
        Like
      </button>
      <button className="card-content" onClick={() => deleteCard(card)}>
        Delete
      </button>
    </div>
  );
};
export default Card;

import { useState } from "react";

export default function LikeButton() {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <button onClick={toggleLike} aria-label={liked ? "Retirer le like" : "Ajouter un like"} className=" favorite-button-details duration-200 border rounded bg-transparent ">
      <i className={`bi ${liked ? "bi-discord text-red-500" : "bi-heart text-gray-400"} text-xl transition-all duration-200 bg-transparent`}></i>
    </button>
  );
}

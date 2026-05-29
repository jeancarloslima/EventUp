import { useEffect, useState } from "react";
import styles from "./event-card.css";

export default function EventCard({ event }) {
  const getFavoritesList = () => {
    const saved = localStorage.getItem("favorites-events");
    return saved ? JSON.parse(saved) : [];
  };

  const [favorited, setFavorited] = useState(() => {
    const favorites = getFavoritesList();
    return favorites.some((fav) => fav.id === event.id);
  });

  const handleToggleFavorite = () => {
    const favorites = getFavoritesList();
    let updatedList;

    if (favorited) {
      updatedList = favorites.filter((fav) => fav.id !== event.id);
    } else {
      updatedList = [...favorites, event];
    }

    localStorage.setItem("favorites-events", JSON.stringify(updatedList));
    setFavorited(!favorited);
  };

  return (
    <div className={`card-container ${favorited ? "card-favorited" : ""}`}>
      <div className="card-content">
        <span className="category">{event.category}</span>
        <h3 className="card-title">{event.title}</h3>
        <p className="card-text">
          {event.date} | {event.location}
        </p>
      </div>

      <button
        className={`btn-favorite ${favorited ? "active" : ""}`}
        onClick={handleToggleFavorite}
      >
        <i className="fa-solid fa-heart"></i>
      </button>
    </div>
  );
}

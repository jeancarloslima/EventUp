import EventCard from "../../assets/EventCard";
import "./favorite-event-list.css";

export default function FavoriteEventListPage() {
  const getFavoritesList = () => {
    const saved = localStorage.getItem("favorites-events");
    return saved ? JSON.parse(saved) : [];
  };

  const events = getFavoritesList();

  return (
    <div className="favorite-event-list-container">
      <h2>Eventos Favoritados</h2>
      {events.length === 0 && <p>Nenhum evento encontrado</p>}
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}

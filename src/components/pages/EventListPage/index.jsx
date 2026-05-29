import { useEffect, useState } from "react";
import EventCard from "../../assets/EventCard";
import "./event-list.css";

export default function EventListPage() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const response = await fetch("/api/events.json");

        if (!response.ok) {
          throw new Error("Requisition error");
        }

        const data = await response.json();
        setEvents(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="event-list-container">
      <h2>Próximos Eventos</h2>
      {loading && <p>Carregando...</p>}
      {error && <p>{error}</p>}
      {!loading && events?.length <= 0 && <p>Nenhum evento encontrado</p>}
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}

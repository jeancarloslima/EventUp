import "./styles.css";
import EventListPage from "./components/pages/EventListPage";
import { useState } from "react";
import FavoriteEventListPage from "./components/pages/FavoriteEventListPage";

export default function App() {
  const [page, setPage] = useState(<EventListPage />);

  function navigate(targetPage) {
    switch (targetPage) {
      case "home":
        setPage(<EventListPage />);
        break;
      case "favorites":
        setPage(<FavoriteEventListPage />);
        break;
      default:
        break;
    }
  }

  return (
    <div className="app">
      <header>
        <div className="header-container">
          <h1 className="title" onClick={() => navigate("home")}>
            EventUp
          </h1>
          <button
            className="btn-open-favorites"
            onClick={() => navigate("favorites")}
          >
            Favoritos
          </button>
        </div>
      </header>

      <main>{page}</main>
    </div>
  );
}

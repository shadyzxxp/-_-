import { useMemo, useState } from "react";
import s from "./home.module.css";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// Fix لأيقونة marker في Vite
import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

type Store = { id: number; name: string; category: string; floor: number; lat: number; lng: number };

export default function Home() {
  const [q, setQ] = useState("");
  const stores: Store[] = useMemo(
    () => [
      { id: 1, name: "Zara", category: "Одежда", floor: 1, lat: 56.8389, lng: 60.6057 },
      { id: 2, name: "KFC", category: "Еда", floor: 2, lat: 56.8393, lng: 60.6062 },
      { id: 3, name: "Cinema", category: "Развлечения", floor: 3, lat: 56.8391, lng: 60.6053 },
    ],
    []
  );

  const filtered = stores.filter((x) => x.name.toLowerCase().includes(q.toLowerCase()));

  return (
    <div className={s.page}>
      <div className={s.topbar}>SmartMall</div>

      <aside className={s.sidebar}>
        <div className={s.card}>
          <div className={s.cardTitle}>Поиск магазина</div>
          <input
            className={s.input}
            placeholder="Введите название..."
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
          <div style={{ marginTop: 10, fontSize: 13, opacity: 0.85 }}>
            {filtered.length ? `Найдено: ${filtered.length}` : "Ничего не найдено"}
          </div>
        </div>

        <div className={s.card}>
          <div className={s.cardTitle}>Маршрут</div>
          <div style={{ fontSize: 13, opacity: 0.9 }}>
            Выберите магазин на карте или из поиска для построения маршрута.
          </div>
        </div>

        <div className={s.card}>
          <div className={s.cardTitle}>Акции и мероприятия</div>
          <div style={{ fontSize: 13, lineHeight: 1.6 }}>
            • Скидка 30% — Zara <br />
            • 2 по цене 1 — KFC
          </div>
        </div>
      </aside>

      <main className={s.main}>
        <div className={s.mapWrapper}>
          <div className={s.mapTitle}>Карта ТЦ</div>

          <div className={s.mapBox}>
            <MapContainer className={s.leaflet} center={[56.8391, 60.6058]} zoom={17} scrollWheelZoom>
              <TileLayer
                attribution="&copy; OpenStreetMap contributors"
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              {filtered.map((store) => (
                <Marker key={store.id} position={[store.lat, store.lng]}>
                  <Popup>
                    <strong>{store.name}</strong>
                    <br />
                    {store.category}, этаж {store.floor}
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>
      </main>
    </div>
  );
}

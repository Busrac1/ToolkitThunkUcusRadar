import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import { useSelector } from "react-redux";
import { Polyline } from "react-leaflet";
const MapView = ({openModal}) => {
  const store = useSelector((store) => store);

  return (
    <div>
      <MapContainer
        center={[38.728587, 35.173275]}
        zoom={7}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* her bir uçuş için ekrana marker basar */}
        {store.flights.map((flight) => (
          <Marker
            // icon={planeIcon}
            key={flight.id}
            position={[flight.lat, flight.lng]}
          >
           <Popup>
              <div className="popup">
                <span>Kod: {flight.code}</span>
                <button onClick={() => openModal(flight.id)}>
                  Detay Gör
                </button>
              </div>
            </Popup> 
          </Marker>
        ))}

        <Polyline positions={store.route}/>
      </MapContainer>
    </div>
  );
};

export default MapView;

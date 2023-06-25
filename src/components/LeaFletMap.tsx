import { MapContainer, TileLayer, Popup, Marker, useMap } from "react-leaflet";
import 'leaflet/dist/leaflet.css'
import '../../src/index.css'
import { useEffect, useState } from "react";
const LeaFletMap = (props) => {

    const pos = [-props.position[1], -props.position[0]]

    
    const zoomLevel = 8;

    function SetViewOnClick( {coords} ) {
        console.log(coords)
        const map = useMap();
        map.setView(pos, zoomLevel);

        return null;
    }
      
        

    return (
        <div>
            <MapContainer center={pos} zoom={zoomLevel} scrollWheelZoom={true} whenCreated={map => console.log(map)}>
                <SetViewOnClick coords={pos} />
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={pos}>
                    <Popup>
                        {props.country}
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default LeaFletMap;
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Mapa = () => {

    const position = [-12.087050, -77.025137];
    const zoom = 18;
    const marker = position;

    return (

        <div>
            <MapContainer center={position} zoom={zoom} className="seccion-6__container__ubicacion__mapa">
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={marker}>
                    <Popup>
                        Veterinaria PetCity.
                    </Popup>
                </Marker>
            </MapContainer>
        </div >

    );
}

export default Mapa;
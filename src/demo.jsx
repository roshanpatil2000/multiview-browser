import React, { useEffect, useState } from "react";
import { useGeolocated } from "react-geolocated";

const Demo = () => {
    const [location, setLocation] = useState(null);

    const { coords, isGeolocationAvailable, isGeolocationEnabled } =
        useGeolocated({
            positionOptions: {
                enableHighAccuracy: false,
            },
            userDecisionTimeout: 5000,
        });

    useEffect(() => {
        if (coords) {
            fetch(
                `https://nominatim.openstreetmap.org/reverse?format=json&lat=${coords.latitude}&lon=${coords.longitude}`
            )
                .then((res) => res.json())
                .then((data) => {
                    setLocation({
                        city:
                            data.address.city ||
                            data.address.town ||
                            data.address.village,
                        country: data.address.country,
                        state_district: data.address.state_district,
                        country: data.address.country,
                    });
                });
        }
    }, [coords]);

    return !isGeolocationAvailable ? (
        <div>Your browser does not support Geolocation</div>
    ) : !isGeolocationEnabled ? (
        <div>Geolocation is not enabled</div>
    ) : coords ? (
        <div>
            <p>Latitude: {coords.latitude}</p>
            <p>Longitude: {coords.longitude}</p>
            {location && <p>Location: {location?.city} | {location?.state_district} | {location?.country}</p>}
        </div>
    ) : (
        <div>Getting the location data…</div>
    );
};

export default Demo;
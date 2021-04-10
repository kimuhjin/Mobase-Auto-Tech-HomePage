import React, { useEffect } from 'react';
import "./KakaoMap.css"
function KakaoMap({
    location,
    infoWindowMessage,
    markerOn,
    infoWindowOn,
    level,
}) {
    const script = document.createElement('script');
    useEffect(() => {
        DrawMap();
    }, []);

    const DrawMap = () => {
        script.async = true;
        script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=d23fa844d8e5d9295ae0ecdc9d050cfc&autoload=false`;
        document.head.appendChild(script);
        script.onload = () => {
            const { kakao } = window;
            kakao.maps.load(() => {
                let container = document.getElementById('map');
                let LatLng = new kakao.maps.LatLng(location.x, location.y);
                let options = {
                    center: LatLng,
                    level: level,
                };
                const map = new kakao.maps.Map(container, options);
                /*마커*/
                const markerPosition = new kakao.maps.LatLng(
                    location.x,
                    location.y
                );
                const marker = new kakao.maps.Marker({
                    position: markerPosition,
                });
                if (markerOn) {
                    marker.setMap(map);
                }
                /*---*/

                /*인포윈도우*/
                const checkMarkerOn = markerOn
                    ? `<div className="overlay-box-marker-on"><a href="https://place.map.kakao.com/1680619307" target="_blank" class="link"><a/></div>`
                    : `<div className="overlay-box-marker-off"><a href="https://place.map.kakao.com/1680619307" target="_blank" class="link"><a/></div>`;
                const content =
                    checkMarkerOn +
                    `<a href="https://place.map.kakao.com/1961084349" target="_blank" class="link-map">${infoWindowMessage}</a>` +
                    '';
                const position = LatLng;
                const infoWindow = new kakao.maps.CustomOverlay({
                    position: position,
                    content: content,
                });
                if (infoWindowOn) {
                    infoWindow.setMap(map);
                }
                /*--------*/
            });
        };
    };

    return <div id="map" className="map" />;
}

export default KakaoMap;
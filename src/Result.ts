interface Coordinates {
    lon: number;
    lat: number;
}

interface Weather {
    id: number;
    main: string;
    description: string;
}

interface Metadata {
    temp: number;
    humidity: number;
}

interface Wind {
    speed: number;
}

interface Clouds {
    all: number; // percentage
}

interface Downfall {
    '3h': number; // rain volume for last 3 hours
}

interface Result {
    coord: Coordinates;
    weather: Weather;
    main: Metadata;
    wind?: Wind;
    clouds?: Clouds;
    rain?: Downfall;
    snow?: Downfall;
}

export default Result;

// {
//     "coord": {
//         "lon": 24.11,
//         "lat": 56.95
//     },
//     "weather": [
//         {
//             "id": 800,
//             "main": "Clear",
//             "description": "clear sky",
//             "icon": "01d"
//         }
//     ],
//     "base": "stations",
//     "main": {
//         "temp": 297.15,
//         "pressure": 1019,
//         "humidity": 27,
//         "temp_min": 297.15,
//         "temp_max": 297.15
//     },
//     "visibility": 10000,
//     "wind": {
//         "speed": 2.6,
//         "deg": 150
//     },
//     "clouds": {
//         "all": 0
//     },
//     "dt": 1527861000,
//     "sys": {
//         "type": 1,
//         "id": 7368,
//         "message": 0.0158,
//         "country": "LV",
//         "sunrise": 1527817102,
//         "sunset": 1527879930
//     },
//     "id": 456172,
//     "name": "Riga",
//     "cod": 200
// }

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
    name: string,
    coord: Coordinates;
    weather: Weather;
    main: Metadata;
    wind?: Wind;
    clouds?: Clouds;
    rain?: Downfall;
    snow?: Downfall;
}

export default Result;

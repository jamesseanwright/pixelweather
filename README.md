# PixelWeather

![Screencap of PixelWeather](https://raw.githubusercontent.com/jamesseanwright/pixelweather/master/misc/screencap.gif)

A TypeScript and Canvas frontend for the [OpenWeatherMap API](https://www.openweathermap.org/api), interactively displaying the weather for a given city. I developed this to accompany my [FrontCon](https://frontcon.lv/) talk, _Composing Classes with TypeScript_.

This branch, `master`, contains the composed version of the app. The initial implementation in which entity behaviours are reused via inheritance can be found in the `inheritance` branch.

## Running PixelWeather Locally

To display live data, you'll need to grab an API key by [signing up for an OpenWeatherMap account](https://home.openweathermap.org/users/sign_up). Then one can follow these steps:

```shell
git clone https://github.com/jamesseanwright/pixelweather.git
cd pixelweather
nvm install/use
npm i
OWM_API_KEY=<your API key> npm run dev
```

The test script, `npm test`, will lint the TypeScript source and run any unit tests.

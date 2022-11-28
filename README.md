# Pokedex App


This is a mobile app built over the course of Udemy React Native - Fernando Herrera. This works as a guide on how to consume an API with different requests, and how to use it efficiently in order that when a component it's unmounted you don't have to look for its information (see PokemonCard component), It was also a debouncer developed so when you are searching for a pokemon you don't have to make request every time a key is typed.
\
\
![****](/screen-app.png)

As it can see in the picture this app shows us dark and light modes. This feature can be changed from the app itself or from the phone settings. A Splash Screen was also developed.

Features:

- [Pokemon API](https://pokeapi.co/) - obtain pokemon data
- [ImageColors](https://github.com/osamaqarem/react-native-image-colors) - change the card of a pokemon according to the image color
- [Themes](https://reactnavigation.org/docs/themes/) - change between dark/light mode
- [StatusBar](https://reactnative.dev/docs/statusbar) - see the color of battery, hour, etc when dark/light mode is changed
- [SplashScreen](https://dev.to/lloyds-digital/how-to-add-a-splash-screen-to-a-react-native-app-the-easy-way-3ego#:~:text=A%20splash%20screen%20is%20the,app%20is%20ready%20to%20launch) - implement a splash screen (check android/app/src/main/res/values/styles.xml there is another line added to make it better )
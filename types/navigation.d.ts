type RootStackParamList = {
  HomeScreen: undefined;
  DetailsScreen: {
    cityName: WeatherForecast['city']['name'];
    weatherForecast: DailyForecast[]; // Forecast of the day
  };
};

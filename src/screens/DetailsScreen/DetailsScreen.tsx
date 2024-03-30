import { Container } from '@components/Container';
import React, { useMemo } from 'react';
import { Dimensions, FlatList, ScrollView } from 'react-native';
import { Typography } from '@components/Typography';
import { Icon } from '@components/Icon';
import { texts } from './texts';
import { Spacer } from '@components/Spacer';
import { Icons } from '@assets/iconName';
import { useTheme } from '@shopify/restyle';
import { Theme } from '@styles/theme';

const DetailsScreen = () => {
  const mockupFlatListData = [
    {
      hour: '21:00',
      weatherIcon: Icons.fewCloudsDay,
      temp: '26',
      precipitationIcon: Icons.probabilityOfPrecipitation,
      precipitation: '7',
    },
    {
      hour: '21:00',
      weatherIcon: Icons.fewCloudsDay,
      temp: '26',
      precipitationIcon: Icons.probabilityOfPrecipitation,
      precipitation: '7',
    },
    {
      hour: '21:00',
      weatherIcon: Icons.fewCloudsDay,
      temp: '26',
      precipitationIcon: Icons.probabilityOfPrecipitation,
      precipitation: '7',
    },
    {
      hour: '21:00',
      weatherIcon: Icons.fewCloudsDay,
      temp: '26',
      precipitationIcon: Icons.probabilityOfPrecipitation,
      precipitation: '7',
    },
    {
      hour: '21:00',
      weatherIcon: Icons.fewCloudsDay,
      temp: '26',
      precipitationIcon: Icons.probabilityOfPrecipitation,
      precipitation: '7',
    },
    {
      hour: '21:00',
      weatherIcon: Icons.fewCloudsDay,
      temp: '26',
      precipitationIcon: Icons.probabilityOfPrecipitation,
      precipitation: '7',
    },
    {
      hour: '21:00',
      weatherIcon: Icons.fewCloudsDay,
      temp: '26',
      precipitationIcon: Icons.probabilityOfPrecipitation,
      precipitation: '7',
    },
    {
      hour: '21:00',
      weatherIcon: Icons.fewCloudsDay,
      temp: '26',
      precipitationIcon: Icons.probabilityOfPrecipitation,
      precipitation: '7',
    },
  ];
  const deviceWidth = Dimensions.get('window').width;

  const theme = useTheme<Theme>();

  const scroolViewStyles = useMemo(
    () => ({
      containerStyle: {
        backgroundColor: theme.colors.mainBackground,
        flexGrow: 1,
      },
    }),
    [theme.colors.mainBackground],
  );

  const flatListStyles = useMemo(
    () => ({
      containerStyle: {
        borderRadius: theme.spacing.m,
        paddingVertical: theme.spacing.s,
      },
    }),
    [theme.spacing.m, theme.spacing.s],
  );

  return (
    <ScrollView contentContainerStyle={scroolViewStyles.containerStyle}>
      <Container
        justifyContent="center"
        alignItems="center"
        marginBottom="m"
        paddingHorizontal="m">
        <Container justifyContent="center" alignItems="center" marginBottom="s">
          <Typography variant="h3" color="white">
            Fortaleza
          </Typography>
          <Typography variant="p1" color="white">
            Tuesday, March 26
          </Typography>
        </Container>
        <Container
          backgroundColor="white"
          paddingHorizontal="l"
          paddingVertical="l"
          borderRadius="m"
          width={deviceWidth - 3 * theme.spacing.m}>
          <Container flex={1} alignItems="center">
            <Typography variant="h4" color="black">
              clear sky
            </Typography>
          </Container>

          <Container flex={1} flexDirection="row" marginBottom="s">
            <Spacer horizontal="l" />
            <Container flex={1}>
              <Icon name="clearSkyDay" width={100} height={100} />
            </Container>

            <Container flex={1} alignItems="center" justifyContent="center">
              <Container
                flexDirection="row"
                alignItems="center"
                justifyContent="center">
                <Icon name="thermometer" width={24} height={24} color="black" />
                <Typography variant="h2" color="darkBlue">
                  22°
                </Typography>
              </Container>
              <Typography variant="p1">22°/28°</Typography>
            </Container>
          </Container>

          <Container
            flex={1}
            flexDirection="row"
            justifyContent="space-between">
            <Spacer horizontal="xl" />
            <Container
              flex={1}
              flexDirection="row"
              gap="s"
              paddingVertical="s"
              marginBottom="s">
              <Icon name="feelsLike" width={20} height={20} color="black" />
              <Container alignItems="center" justifyContent="center">
                <Typography variant="p2" color="darkBlue">
                  {texts.feelsLike}
                </Typography>
              </Container>
            </Container>
            <Container
              flex={1}
              alignItems="center"
              paddingVertical="s"
              marginBottom="s">
              <Typography variant="p2">30</Typography>
            </Container>
          </Container>

          <Container
            flex={1}
            flexDirection="row"
            justifyContent="space-between">
            <Spacer horizontal="xl" />
            <Container
              flex={1}
              flexDirection="row"
              gap="s"
              paddingVertical="s"
              marginBottom="s">
              <Icon name="wind" width={20} height={20} color="black" />
              <Container alignItems="center" justifyContent="center">
                <Typography variant="p2" color="darkBlue">
                  {texts.wind}
                </Typography>
              </Container>
            </Container>
            <Container
              flex={1}
              alignItems="center"
              paddingVertical="s"
              marginBottom="s">
              <Typography variant="p2">30</Typography>
            </Container>
          </Container>

          <Container
            flex={1}
            flexDirection="row"
            justifyContent="space-between">
            <Spacer horizontal="xl" />
            <Container
              flex={1}
              flexDirection="row"
              gap="s"
              paddingVertical="s"
              marginBottom="s">
              <Icon name="humidity" width={20} height={20} color="black" />
              <Container alignItems="center" justifyContent="center">
                <Typography variant="p2" color="darkBlue">
                  {texts.humidity}{' '}
                </Typography>
              </Container>
            </Container>
            <Container
              flex={1}
              alignItems="center"
              paddingVertical="s"
              marginBottom="s">
              <Typography variant="p2">30</Typography>
            </Container>
          </Container>

          <Container
            flex={1}
            flexDirection="row"
            justifyContent="space-between">
            <Spacer horizontal="xl" />
            <Container
              flex={1}
              flexDirection="row"
              gap="s"
              paddingVertical="s"
              marginBottom="s">
              <Icon name="visibility" width={20} height={20} color="black" />
              <Container alignItems="center" justifyContent="center">
                <Typography variant="p2" color="darkBlue">
                  {texts.visibility}
                </Typography>
              </Container>
            </Container>
            <Container
              flex={1}
              alignItems="center"
              paddingVertical="s"
              marginBottom="s">
              <Typography variant="p2">30</Typography>
            </Container>
          </Container>

          <Container
            flex={1}
            flexDirection="row"
            justifyContent="space-between">
            <Spacer horizontal="xl" />
            <Container
              flex={1}
              flexDirection="row"
              gap="s"
              paddingVertical="s"
              marginBottom="s">
              <Icon
                name="probabilityOfPrecipitation"
                width={20}
                height={20}
                color="black"
              />
              <Container alignItems="center" justifyContent="center">
                <Typography variant="p2" color="darkBlue">
                  {texts.precipitation}
                </Typography>
              </Container>
            </Container>
            <Container
              flex={1}
              alignItems="center"
              paddingVertical="s"
              marginBottom="s">
              <Typography variant="p2">30</Typography>
            </Container>
          </Container>
        </Container>
      </Container>
      <Container paddingLeft="l">
        <Typography variant="p1" color="white">
          {texts.nexHours}
        </Typography>
        <FlatList
          horizontal={true}
          data={mockupFlatListData}
          contentContainerStyle={flatListStyles.containerStyle}
          renderItem={({ item }) => (
            <>
              <Container
                backgroundColor="white"
                alignItems="center"
                paddingVertical="s"
                borderRadius="m"
                width={80}>
                <Typography variant="p2">{item.hour}</Typography>
                <Icon name="fewCloudsDay" width={28} height={28} />
                <Typography variant="p2" color="black">
                  {item.temp}
                </Typography>
                <Container flexDirection="row">
                  <Icon
                    name="probabilityOfPrecipitation"
                    width={14}
                    height={14}
                  />
                  <Spacer horizontal="s" />
                  <Typography>{item.precipitation}</Typography>
                </Container>
              </Container>
              <Spacer vertical="s" />
            </>
          )}
        />
      </Container>
    </ScrollView>
  );
};

export { DetailsScreen };

import { TextInputProps } from 'react-native/types';
import { TextInput } from 'react-native';
import { Container } from './Container';
import React, { useMemo } from 'react';
import {
  BackgroundColorProps,
  SpacingProps,
  backgroundColor,
  composeRestyleFunctions,
  spacing,
  layout,
  useRestyle,
  LayoutProps,
  border,
  BorderProps,
  useTheme,
} from '@shopify/restyle';
import { Theme } from '@styles/theme';
import { Icon } from './Icon';
import { FontName } from '@assets/fonts/fontName';

type RestyleProps = SpacingProps<Theme> &
  BackgroundColorProps<Theme> &
  LayoutProps<Theme> &
  BorderProps<Theme>;

const restyleFunctions = composeRestyleFunctions<Theme, RestyleProps>([
  spacing,
  backgroundColor,
  layout,
  border,
]);

type SearchInputProps = RestyleProps & TextInputProps;

const SearchInput = (searchInputProps: SearchInputProps) => {
  const props = useRestyle(restyleFunctions, searchInputProps);

  const theme = useTheme<Theme>();

  const styles = useMemo(
    () => ({
      input: {
        flexGrow: 1,
        fontFamily: FontName['Poppins-Regular'],
        color: theme.colors.iconGrey,
      },
    }),
    [theme.colors.iconGrey],
  );

  return (
    <Container height={50} flexDirection="row" alignItems="center" {...props}>
      <Icon name="search" width={20} height={20} color="iconGrey" />
      <TextInput
        placeholderTextColor={theme.colors.iconGrey}
        placeholder={props.placeholder}
        onChangeText={props.onChangeText}
        style={styles.input}
        value={props.value}
      />
    </Container>
  );
};

export { SearchInput };

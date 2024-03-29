import { TextInputProps } from 'react-native/types';
import { TextInput, StyleSheet } from 'react-native';
import { Container } from './Container';
import React from 'react';
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
} from '@shopify/restyle';
import { Theme } from '@styles/theme';
import { Icon } from './Icon';

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

const styles = StyleSheet.create({
  input: {
    flexGrow: 1,
  },
});

type SearchInputProps = RestyleProps & TextInputProps;

const SearchInput = (searchInputProps: SearchInputProps) => {
  const props = useRestyle(restyleFunctions, searchInputProps);

  return (
    <Container height={50} flexDirection="row" alignItems="center" {...props}>
      <Icon name="search" width={20} height={20} color="iconGrey" />
      <TextInput placeholder={props.placeholder} style={styles.input} />
    </Container>
  );
};

export { SearchInput };

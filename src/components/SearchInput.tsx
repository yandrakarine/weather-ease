import { FontName } from '@assets/fonts/fontName';
import { useTheme } from '@shopify/restyle';
import { Theme } from '@styles/theme';
import React, { useMemo } from 'react';
import { TextInput } from 'react-native';
import { TextInputProps } from 'react-native/types';
import { Container } from './Container';
import { Icon } from './Icon';

const SearchInput = (searchInputProps: TextInputProps) => {
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
    <Container
      height={50}
      flexDirection="row"
      alignItems="center"
      backgroundColor="white"
      borderRadius={'xl'}
      paddingHorizontal="l">
      <Icon name="search" width={16} height={16} color="iconGrey" />
      <TextInput
        {...searchInputProps}
        placeholderTextColor={theme.colors.iconGrey}
        style={styles.input}
      />
    </Container>
  );
};

export { SearchInput };

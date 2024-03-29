import { useTheme } from '@shopify/restyle';
import { Theme } from '@styles/theme';
import React, { useMemo } from 'react';
import { View } from 'react-native';

type SpacerProps = {
  vertical?: keyof Theme['spacing'];
  horizontal?: keyof Theme['spacing'];
};

const Spacer = ({ horizontal, vertical }: SpacerProps) => {
  const theme = useTheme<Theme>();

  const styles = useMemo(
    () => ({
      spacer: {
        ...(horizontal && { width: theme.spacing[horizontal] }),
        ...(vertical && { width: theme.spacing[vertical] }),
      },
    }),
    [horizontal, theme.spacing, vertical],
  );

  return <View style={styles.spacer} />;
};

export { Spacer };

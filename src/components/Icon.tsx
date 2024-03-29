import React, { useMemo } from 'react';
import { IconName, Icons } from '@assets/iconName';
import {
  Image as RNImage,
  ImageProps as RNImageProps,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import theme, { Theme } from '@styles/theme';

type IconProps = Omit<RNImageProps, 'source' | 'tintColor'> &
  Partial<MediaDimensions> & {
    name: IconName;
    touchProps?: TouchableOpacityProps;
    color?: keyof Theme['colors'];
  };

const Icon = ({ name, touchProps, color, ...props }: IconProps) => {
  const styles = useMemo(
    () => ({
      dimensions: {
        width: props.width,
        height: props.height,
      },
    }),
    [props.height, props.width],
  );

  const tintColor = useMemo(
    () => (color ? theme.colors[color] : undefined),
    [color],
  );

  if (touchProps) {
    return (
      <TouchableOpacity {...touchProps}>
        <RNImage
          source={Icons[name]}
          {...props}
          style={styles.dimensions}
          tintColor={tintColor}
        />
      </TouchableOpacity>
    );
  }

  return (
    <RNImage
      source={Icons[name]}
      {...props}
      style={styles.dimensions}
      tintColor={tintColor}
    />
  );
};

export { Icon };

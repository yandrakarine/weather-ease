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
    image: IconName;
    touchProps?: TouchableOpacityProps;
    color: keyof Theme['colors'];
  };

const Icon = ({ image, touchProps, color, ...props }: IconProps) => {
  const styles = useMemo(
    () => ({
      dimensions: {
        width: props.width,
        height: props.height,
      },
    }),
    [props.height, props.width],
  );

  if (touchProps) {
    return (
      <TouchableOpacity {...touchProps}>
        <RNImage
          source={Icons[image]}
          {...props}
          style={styles.dimensions}
          tintColor={theme.colors[color]}
        />
      </TouchableOpacity>
    );
  }

  return (
    <RNImage
      source={Icons[image]}
      {...props}
      style={styles.dimensions}
      tintColor={theme.colors[color]}
    />
  );
};

export { Icon };

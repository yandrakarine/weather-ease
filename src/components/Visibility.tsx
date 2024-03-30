import React, { ReactNode } from 'react';

type VisibilityProps = {
  children: ReactNode;
  isVisible: boolean;
};

const Visibility = ({ children, isVisible }: VisibilityProps) => {
  if (!isVisible) {
    return null;
  }

  return <>{children}</>;
};

export { Visibility };

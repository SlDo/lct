import React, {
  forwardRef,
  type PropsWithChildren
} from 'react';

import { COLORS } from '../../lib/theme/constants';

import { StyledBadge } from './styled';
import { BadgeSize, type BadgeProps, BadgeVariant } from './types';

export const Badge = forwardRef<HTMLDivElement, PropsWithChildren<BadgeProps>>(({
  children,
  color = COLORS.BASE_COLORS.GREY[700],
  size = BadgeSize.DF,
  variant = BadgeVariant.PRIMARY,
  ...props
}, ref) => {
  return (
      <StyledBadge.Badge
          {...props}
          $color={color}
          $size={size}
          $variant={variant}
      >
        {children}
      </StyledBadge.Badge>
  );
});

Badge.displayName = 'Badge';

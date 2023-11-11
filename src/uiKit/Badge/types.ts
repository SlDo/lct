import { type HTMLAttributes } from 'react';

export enum BadgeVariant {
  PRIMARY = 1,
  SECONDARY
}

export enum BadgeSize {
  SM = 1,
  DF,
  MD,
  LG,
}

export interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  color?: string
  size?: BadgeSize
  variant?: BadgeVariant
}

import { css, styled } from 'styled-components';

import { type BadgeProps, BadgeSize, BadgeVariant } from './types';

const getBadgeSizeCSS = {
  [BadgeSize.SM]: css`
    padding: ${({ theme }) => `${theme.spacings.x4}px ${theme.spacings.x12}px`};
  `,
  [BadgeSize.DF]: css`
    padding: ${({ theme }) => `${theme.spacings.x8}px ${theme.spacings.x16}px`};
  `,
  [BadgeSize.MD]: css`
    padding: ${({ theme }) => `${theme.spacings.x12}px ${theme.spacings.x20}px`};
  `,
  [BadgeSize.LG]: css`
    padding: ${({ theme }) => `${theme.spacings.x16}px ${theme.spacings.x24}px`};
  `
};

const getBadgeVariantCSS = {
  [BadgeVariant.PRIMARY]: css`
    color: ${({ $color }: { $color: string | undefined }) => $color};
    border: 1px solid ${({ $color }: { $color: string | undefined }) => $color}};
  `,
  [BadgeVariant.SECONDARY]: css`
    background: ${({ theme }) => theme.colors.base.grey[800]};
    color: ${({ $color }: { $color: string | undefined }) => $color};
  `
};

const Badge = styled.div<{
  $color?: BadgeProps['color']
  $size: BadgeProps['size']
  $variant: BadgeProps['variant']
}>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: ${({ theme }) => `${theme.radiuses.sm}px`};
  
  ${({ $size }) => $size && getBadgeSizeCSS[$size]}
  ${({ $variant }) => $variant && getBadgeVariantCSS[$variant] as any}
`;

export const StyledBadge = {
  Badge
};

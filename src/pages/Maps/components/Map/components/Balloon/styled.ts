import styled from 'styled-components';

import { hexToRgba } from '@lib/hexToRgba';
import { theme } from '@lib/theme';
import { RADIUSES } from '@lib/theme/constants';

const Wrapper = styled.div`
  background: #fff;
  box-sizing: border-box;
  width: 320px;
  padding: 16px;
  border-radius: 16px;
  box-shadow: 0px 0px 64px 0px rgba(0, 0, 0, 0.16);
`;

const Link = styled.a`
  cursor: pointer;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${RADIUSES.DEFAULT}px;
  padding: 16px 24px;
  line-height: 24px;
  box-sizing: border-box;
  transition: 0.25s;
  font-weight: 500;
  background: #222;
  border: 1px solid transparent;
  height: 50px;
  font-size: 1rem;
  color: #fff;

  &:hover {
    background: ${hexToRgba(theme.colors.base.secondary, 0.5)};
  }
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
`;

export const Styled = {
  Wrapper,
  Link,
  Image
};

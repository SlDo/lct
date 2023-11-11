import styled from 'styled-components';

const Card = styled.div`
  background: ${({ theme }) => theme.colors.base.light};
  border-radius: ${({ theme }) => theme.radiuses.md}px;
  padding: ${({ theme }) => theme.spacings.x16}px;
`;

export const Styled = {
  Card
};

import styled from 'styled-components';

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacings.x24}px;
  list-style-type: none;
  padding-inline-start: 0;
`;

export const Styled = {
  List
};

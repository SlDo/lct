import styled from 'styled-components';

const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacings.x16}px;
`;

const Image = styled.img`
  width: 48px;
  height: 48px;
`;

export const Styled = {
  Image,
  ListItem
};

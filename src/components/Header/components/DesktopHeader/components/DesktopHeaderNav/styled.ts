import styled from 'styled-components';

const LinkList = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
  gap: ${({ theme }) => theme.spacings.x60}px;
  margin-block-start: 0;
  margin-block-end: 0;
`;

const LinkListItem = styled.li``;

export const Styled = {
  LinkList,
  LinkListItem
};

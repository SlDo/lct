import styled from 'styled-components';

import { Flex, Image } from '@uiKit';

import { RADIUSES } from '@lib/theme/constants';

const Container = styled(Flex)`
  min-width: 435px;
`;

const Head = styled(Flex)`
  height: 50px;
`;

const FragmentImage = styled(Image)``;

const FileUploadButton = styled.label`
  width: 100%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${RADIUSES.DEFAULT}px;
  color: ${({ theme }) => theme.colors.base.light};
  padding: 16px 24px;
  border: 0;
  line-height: 24px;
  box-sizing: border-box;
  transition: 0.25s;
  font-weight: 500;
  height: 50px;
  font-size: 1rem;
  max-width: 435px;

  background: ${({ theme }) => theme.colors.base.secondary};

  &:hover {
    background: ${({ theme }) => theme.colors.additional.brand_blue};
  }

  &:disabled {
    background: ${({ theme }) => theme.colors.base.grey[350]};
  }
`;

export const Styled = {
  Container,
  Head,
  FragmentImage,
  FileUploadButton
};

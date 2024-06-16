import React, { type FC } from 'react';

import { NavLink } from 'react-router-dom';

import { Link } from '@uiKit';

import { LinkSize } from '@uiKit/Link/types';

import { ROUTES } from '@router/routes/constants';

import { Styled } from './styled';

export const DesktopHeaderNav: FC = () => {
  return (
      <nav>
          <Styled.LinkList>
              <Styled.LinkListItem>
                  <Link size={LinkSize.LG} as={NavLink} to={ROUTES.home.path}>Дашборд видео</Link>
              </Styled.LinkListItem>
              <Styled.LinkListItem>
                  <Link size={LinkSize.LG} as={NavLink} to={ROUTES.detection.path}>Детекция</Link>
              </Styled.LinkListItem>
          </Styled.LinkList>
      </nav>
  );
};

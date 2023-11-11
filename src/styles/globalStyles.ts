import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  * {
    font-family: 'Manrope', sans-serif;
  }
  
  :root {
    --layout-padding-side: clamp(16px, 8vw, 135px);
    --max-width: 1690px;
  }
  
  .stopScroll {
    overflow: hidden;
  }
`;

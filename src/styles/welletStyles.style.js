import { css } from '@emotion/react';

export const welletStyles = css`
  html {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
  }

  body {
    height: 100%;
  }

  button,
  a {
    cursor: pointer;
  }

  button {
    padding: 0;
    border: none;
    background-color: transparent;
  }

  a {
    text-decoration: none;
    -webkit-user-drag: none;
  }

  button,
  input,
  textarea,
  select,
  meter,
  progress {
    appearance: none;
  }

  b {
    font-weight: 700;
  }

  #root {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-width: 320px;
    height: 100vh;
    max-width: 768px;
    margin: 0 auto;
    background-color: white;
    overflow-y: auto;
  }

  :root {
    /* Primary color */
    --color-1: #ebf3fe;
    --color-2: #1c77ff;
    --primary: #2d29ff;

    /* Secondary Color */
    --Color-4-1: #ffe6f2;
    --color-4: #ffa6cf;
    --linear: linear-gradient(180deg, #2d29ff 0%, #721cff 100%);

    /* Gray Color */
    --whit: #fff;
    --grey1: #c8c8c8;
    --grey2: #949494;
    --grey3: #555;
    --grey4: #1a1a1a;
  }
`;

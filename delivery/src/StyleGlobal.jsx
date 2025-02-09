import {createGlobalStyle } from 'styled-components'

export const Global = createGlobalStyle`
/* Reset CSS */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Fonte padrão */
body {
  font-family: "Open sans", sans-serif;
  background-color: #f8f5f5;
  color: #333;
  overflow-x: hidden;
  position: relative;
}

/* Remove decoração de links */
a {
  text-decoration: none;
  color: inherit;
}

/* Remove estilo padrão de listas */
ul, ol {
  list-style: none;
}

/* Ajustes para botões */
button {
  border: none;
  cursor: pointer;
}

`;
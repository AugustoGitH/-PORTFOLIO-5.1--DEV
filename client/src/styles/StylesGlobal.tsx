

import { createGlobalStyle } from "styled-components";
import roots from "./roots";


export const StylesGlobal = createGlobalStyle`

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
ul {
  list-style: none;
}
a {
  all: unset;
}
html {
  scroll-behavior: smooth;
}
body {
  color: ${roots.color.LIGHT};
  font-family: ${roots.font.family.POPPINS};
  background-color: ${roots.color.PRIMARY};
}
body::-webkit-scrollbar {
  width: 5px;
  background-color: #000000c7;
}
body::-webkit-scrollbar-thumb {
  width: 100%;
  height: 90px;
  border-radius: 1rem;
  background-color: #e8e5e52c;
}
body *::-webkit-scrollbar {
  width: 5px;
  background-color: #c9abab1a;
}
body *::-webkit-scrollbar-thumb {
  width: 100%;
  height: 90px;
  border-radius: 1rem;
  background-color: #ffffff2c;
}
.overflowY-none {
  overflow: hidden;
}


`
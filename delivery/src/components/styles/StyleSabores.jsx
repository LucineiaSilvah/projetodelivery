import styled from "styled-components";

export const StyleSabores=styled.div`
 width: 100%;
 display: flex;
 flex-direction: column;
 height: auto;
 color: gray;
 .Conteiner{
display: flex;
flex-direction: column;
padding: 2rem;
 }
div{
  height: auto;

  display: grid;
  gap: 1rem;
  grid-template-columns: 2fr 2fr;
}

div img{
  width: 100%;
}
@media (max-width: 768px) {
 div{
  grid-template-columns: 1fr;
 
 }

  }
`
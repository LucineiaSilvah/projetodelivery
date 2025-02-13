import styled from "styled-components";

export const StyleCard=styled.div`
display: flex;
width: auto;
align-items: center;

 padding: 1rem;
 background: #f8f7f7;
 color: #090909;
 border-radius: 1rem;
 border: 1px solid #cccc;
 .box{
  display:flex;
  flex-direction: column;
 }
 div{
  display: block;
  width: 100%;
  height: 100%;
padding: 1rem;
 
 }
 hr{
  opacity:.4;
 }
 p{
  margin: 1rem 0;
 }
 img{
 width: 60%;
 border-radius: 1rem;

 object-fit: cover;
 }
 p{
  display: flex; align-items: center;
 }
 .price{
  color: red;
  font-size: 1.5rem;
 }
 span{
  display: flex;
  gap: 1rem;
 }
 .mais{
  background:red;
  width: 40px;
  height: 40px;
  border-radius: 50%;
 }
  @media (max-width: 768px) {
    flex-direction: column;
   width: auto;
img{
width: 100%;
 }

  }
`
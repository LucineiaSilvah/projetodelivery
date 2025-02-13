import styled from "styled-components";


export const StyleNav= styled.nav`
 width: 70%;
 height: 60px;
 display: flex;
 align-items: center;

 ul{
  width: 100%;
  display: flex;
  align-items: center;

  justify-content: space-around;
 }
 a:hover{
  color:#E01C29;
 }
 div{
  display: flex;
 }
.menu{
  display: none;
}
 span{
  
  border-radius: 5px;
  padding: .7rem 2rem;
  display:flex;
  align-items: center;
  border: 1px solid #000;
 }
 input{
  padding: 1rem;
 }
 button{
  margin:0  0.50rem ;
  padding: 1rem;
  background-color: red;
  color: #fff;
  border-radius: 5px;
  
 }
 @media (max-width: 768px) {

  ul{
 flex-direction: column;
 position: absolute;
 left: 0;
 height: 260px;
 transition: 1s ease-in;
 top: 5.5rem;
 width: 150px;
 background:#F8F5F5;
 align-items: start;
 display: none;
 }
 .menu{
  display: flex;
align-items: center;
padding: .5rem;
 }
 .busca{
  display: none;
 }
  }

`
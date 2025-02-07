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
 div + div{
 
  border-radius: 5px;
  padding: .7rem 2rem;
  border: 1px solid #000;
 }
 span{
  display:flex;
  align-items: center;

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
`
import styled from "styled-components";

export const StyleHighlight=styled.div`
background:#490A0E;
color: #fff;
height: 450px;
h1{
  padding: 2rem;
  font-size: 2.1rem;
}
.swiper-button-next,
.swiper-button-prev {
  color: red; /* Cor desejada */
}

@media (max-width: 768px) {
height: auto;
padding: 2rem;
 .swiper-wrapper {
  display: flex;
 gap: 10px;

}

.swiper-slide {
  
 
}
}
`
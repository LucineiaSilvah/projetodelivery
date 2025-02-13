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
  background: red;
  color: #f8f5f5; 
  height: 60px;
  border-radius: 50%;
  width: 60px;
scale: 0.7;

}

@media (max-width: 768px) {
height: auto;
padding: 1rem;
justify-content: center;
 .swiper-wrapper {
  display: flex;


}

.swiper-slide {
  
 
}
}
`
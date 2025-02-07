import styled from 'styled-components'

export const StyleBanner = styled.section`
display: flex;
align-items:center ;
justify-content: center;
flex-direction: column;
padding:4rem ;
gap: .6rem;

@media (max-width: 768px) {
  padding:1rem;
  h1{
    font-size: 1.6rem;
  }
  h2{
    text-align: center;
    font-size: 1rem;
  }

   span{
    font-size: .8rem;

}
img{
  width:350px;
}
.star{
 width: 200px;
}
}
h2{
 color:red;
 
}
h2 ~ h2{
  color: #232F41;
  font-weight: 300;
  opacity: .9;
}
div{
  display: flex;
  align-items: center;
  justify-content: center;
    flex-wrap: wrap;
}
span{
  border-radius: 5px;
  padding: .5rem;
  margin: 1rem;
  border:1px solid #3d3f4288;
  color: #3d3f4288;
}

`
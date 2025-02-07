import React from "react";
import { StyleHighlight } from "../styles/StyleHighlight";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import { imagens } from "../../capas/destaque";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Card from "../Card/Card";
const Highlight = () => { 
 console.log(imagens[0]);
 
 const itens = [
  {
    nome: "Pizza Portuguesa",
    imagem: imagens[0].img1,
    descricao: "Molho de tomate, mussarela, azeitonas e ervilhas",
    tamanho: "Grande de 8 pedaços",
    preco: 30.90
  },
  {
    nome: "Pizza Portuguesa",
    imagem: imagens[0].img2,
    descricao: "Molho de tomate, mussarela, azeitonas e ervilhas",
    tamanho: "Grande de 8 pedaços",
    preco: 30.90
  },
  {
    nome: "Pizza Portuguesa",
    imagem: imagens[0].img3,
    descricao: "Molho de tomate, mussarela, azeitonas e ervilhas",
    tamanho: "Grande de 8 pedaços",
    preco: 30.90
  },
  {
    nome: "Pizza Portuguesa",
    imagem: imagens[0].img4,
    descricao: "Molho de tomate, mussarela, azeitonas e ervilhas",
    tamanho: "Grande de 8 pedaços",
    preco: 30.90
  },
  {
    nome: "Pizza Portuguesa",
    imagem: imagens[0].img5,
    descricao: "Molho de tomate, mussarela, azeitonas e ervilhas",
    tamanho: "Grande de 8 pedaços",
    preco: 30.90
  },
  {
    nome: "Pizza Portuguesa",
    imagem: imagens[0].img6,
    descricao: "Molho de tomate, mussarela, azeitonas e ervilhas",
    tamanho: "Grande de 8 pedaços",
    preco: 30.90
  },
  {
    nome: "Pizza Portuguesa",
    imagem: imagens[0].img7,
    descricao: "Molho de tomate, mussarela, azeitonas e ervilhas",
    tamanho: "Grande de 8 pedaços",
    preco: 30.90
  },
  {
    nome: "Pizza Portuguesa",
    imagem: "https://delivery2.lucrowebpro.com/wp-content/uploads/2024/07/pizza13.jpg",
    descricao: "Molho de tomate, mussarela, azeitonas e ervilhas",
    tamanho: "Grande de 8 pedaços",
    preco: 30.90
  }
];


  return (
    <>
      <StyleHighlight>
        <h1>Destaque</h1>

        <div>
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
            spaceBetween={50}
          
            slidesPerView={2}
            navigation
            autoplay
         
           
          
          >
            {itens.map((item) => (
              <SwiperSlide>
                <Card 
                key={item.nome}
                nome={item.nome} 
                imagem={item.imagem} 
                descricao={item.descricao}
                tamanho={item.tamanho}
                preco={item.preco}
                />
                
              
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </StyleHighlight>
    </>
  );
};

export default Highlight;

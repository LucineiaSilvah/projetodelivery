import { useState } from "react";
import Card from "../Card/Card";
import { StyleSabores } from "../styles/StyleSabores";
import { useNavigate } from "react-router-dom";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import {  SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { StyledSwiper } from "../styles/StyleSwiper";
import { StyleHeader } from "../styles/StyleHeader";
import { StyleHighlight } from "../styles/StyleHighlight";
const Sabores = ({ addToCart }) => {
  const [unidades, setUnidades] = useState(0);
  const [cont, setcont] = useState(0);
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const menu = {
    destaques: [
      {
        nome: "Pizza Portuguesa",
        imagem: "https://delivery2.lucrowebpro.com/wp-content/uploads/2024/07/pizza13.jpg",
        descricao: "Molho de tomate, mussarela, azeitonas e ervilhas",
        tamanho: "Grande de 8 pedaços",
        preco: 30.9,
      },
      {
        nome: "Pizza Portuguesa",
        imagem: "https://delivery2.lucrowebpro.com/wp-content/uploads/2024/07/pizza13.jpg",
        descricao: "Molho de tomate, mussarela, azeitonas e ervilhas",
        tamanho: "Grande de 8 pedaços",
        preco: 30.9,
      },
      {
        nome: "Pizza Portuguesa",
        imagem: "https://delivery2.lucrowebpro.com/wp-content/uploads/2024/07/pizza13.jpg",
        descricao: "Molho de tomate, mussarela, azeitonas e ervilhas",
        tamanho: "Grande de 8 pedaços",
        preco: 30.9,
      },
      {
        nome: "Pizza Portuguesa",
        imagem:
          "https://delivery2.lucrowebpro.com/wp-content/uploads/2024/07/pizza13.jpg",
        descricao: "Molho de tomate, mussarela, azeitonas e ervilhas",
        tamanho: "Grande de 8 pedaços",
        preco: 30.9,
      },
      {
        nome: "Pizza Portuguesa",
        imagem:
          "https://delivery2.lucrowebpro.com/wp-content/uploads/2024/07/pizza13.jpg",
        descricao: "Molho de tomate, mussarela, azeitonas e ervilhas",
        tamanho: "Grande de 8 pedaços",
        preco: 30.9,
      },
      {
        nome: "Pizza Portuguesa",
        imagem:
          "https://delivery2.lucrowebpro.com/wp-content/uploads/2024/07/pizza13.jpg",
        descricao: "Molho de tomate, mussarela, azeitonas e ervilhas",
        tamanho: "Grande de 8 pedaços",
        preco: 30.9,
      },
      {
        nome: "Pizza Portuguesa",
        imagem:
          "https://delivery2.lucrowebpro.com/wp-content/uploads/2024/07/pizza13.jpg",
        descricao: "Molho de tomate, mussarela, azeitonas e ervilhas",
        tamanho: "Grande de 8 pedaços",
        preco: 30.9,
      },
      {
        nome: "Pizza Portuguesa",
        imagem:
          "https://delivery2.lucrowebpro.com/wp-content/uploads/2024/07/pizza13.jpg",
        descricao: "Molho de tomate, mussarela, azeitonas e ervilhas",
        tamanho: "Grande de 8 pedaços",
        preco: 30.9,
      },
    ],
    escolhaSabor: [
      {
        nome: "Pizzas Doces",
        imagem:
          "https://delivery2.lucrowebpro.com/wp-content/uploads/2024/07/pizza1.jpg",
        descricao: "escolhas os sabores",
        tamanho: "Grande de 8 pedaços",
        preco: 30.9,
        qnt: 1,
      },
      {
        nome: "Pizzas Salgadas",
        imagem:
          "https://delivery2.lucrowebpro.com/wp-content/uploads/2024/07/pizza7.jpg",
        descricao: "escolha os sabores",
        tamanho: "Grande de 8 pedaços",
        preco: 30.9,
        qnt: 1,
      },
    ],
    salgadas: [
      {
        nome: "Pizza Frango com Catupiry",
        imagem:
          "https://delivery2.lucrowebpro.com/wp-content/uploads/2024/07/pizza14.jpg",
        descricao: "Frango desfiado, catupiry, molho de tomate e mussarela.",
        tamanho: "Grande de 8 pedaços",
        preco: 32.9,
        qnt: 1,
      },
      {
        nome: "Pizza Portuguesa",
        imagem:
          "https://delivery2.lucrowebpro.com/wp-content/uploads/2024/07/pizza13.jpg",
        descricao:
          "Molho de tomate, mussarela, presunto, ovos, cebola, azeitonas e ervilhas.",
        tamanho: "Grande de 8 pedaços",
        preco: 34.9,
        qnt: 1,
      },
      {
        nome: "Pizza Pepperoni",
        imagem:
          "https://delivery2.lucrowebpro.com/wp-content/uploads/2024/07/pizza12.jpg",
        descricao: "Molho de tomate, mussarela e fatias de pepperoni..",
        tamanho: "Grande de 8 pedaços",
        preco: 34.9,
        qnt: 1,
      },
      {
        nome: "Pizza Marguerita",
        imagem:
          "https://delivery2.lucrowebpro.com/wp-content/uploads/2024/07/pizza10.jpg",
        descricao: "Molho de tomate, mussarela, manjericão e azeite.",
        tamanho: "Grande de 8 pedaços",
        preco: 34.9,
        qnt: 1,
      },
      {
        nome: "Pizza Queijo",
        imagem:
          "https://delivery2.lucrowebpro.com/wp-content/uploads/2024/07/pizza9.jpg",
        descricao: "Molho de tomate, mussarela e fatias de pepperoni..",
        tamanho: "Grande de 8 pedaços",
        preco: 34.9,
        qnt: 1,
      },
      {
        nome: "Pizza Calabresa",
        imagem:
          "https://delivery2.lucrowebpro.com/wp-content/uploads/2024/07/pizza11.jpg",
        descricao: "Molho de tomate, mussarela e fatias de pepperoni..",
        tamanho: "Grande de 8 pedaços",
        preco: 34.9,
        qnt: 1,
      },
    ],
    doces: [
      {
        nome: "Pizza de Chocolate",
        imagem:
          "https://delivery2.lucrowebpro.com/wp-content/uploads/2024/07/pizza13.jpg",
        descricao: "Chocolate derretido sobre massa crocante",
        tamanho: "Grande de 8 pedaços",
        preco: 35.9,
        qnt: 1,
      },
      {
        nome: "Pizza de Banana com Canela",
        imagem:
          "https://delivery2.lucrowebpro.com/wp-content/uploads/2024/07/pizza13.jpg",
        descricao: "Banana caramelizada com canela e açúcar",
        tamanho: "Grande de 8 pedaços",
        preco: 33.9,
        qnt: 1,
      },
    ],
    brotos: [
      {
        nome: "Broto 4Pedaços doce",
        imagem:
          "https://delivery2.lucrowebpro.com/wp-content/uploads/2024/07/pizza1.jpg",
        descricao: "dkffkhtilx",
        tamanho: "Broto (4 pedaços)",
        preco: 19.9,
        qnt: 1,
      },
      {
        nome: "Broto Quatro Queijos",
        imagem:
          "https://delivery2.lucrowebpro.com/wp-content/uploads/2024/07/pizza6.jpg",
        descricao: "Mussarela, provolone, parmesão e catupiry",
        tamanho: "Broto (4 pedaços)",
        preco: 22.9,
        qnt: 1,
      },
    ],
    bebidas: [
      {
        nome: "Refrigerante lata 350ml",
        imagem:
          "https://delivery2.lucrowebpro.com/wp-content/uploads/2024/07/refrigerante-lata.jpg",
        descricao: "Refrigerante lata 350ml",
        tamanho: "350ml",
        preco: 3.0,
        qnt: 1,
      },
      {
        nome: "Garrafa 600ml",
        imagem:
          "https://delivery2.lucrowebpro.com/wp-content/uploads/2024/07/garrafa-600ml.jpg",
        descricao: "Refrigerante 600ml",
        tamanho: "600ml",
        preco: 7.5,
        qnt: 1,
      },
      {
        nome: "Garrafa 600ml",
        imagem:
          "https://delivery2.lucrowebpro.com/wp-content/uploads/2024/07/garrafa-2-litros.jpg",
        descricao: "Refrigerante 2Lt",
        tamanho: "2lt",
        preco: 14.5,
        qnt: 1,
      },
    ],
  };

  return (
    <>
     <StyleHighlight>
       <h1>Destaques</h1>
      <StyledSwiper 
         modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
        navigation
        autoplay
         spaceBetween={60}
         breakpoints={{
           320: { slidesPerView: 1 },
           768: { slidesPerView: 2 },
           1024: { slidesPerView: 2 },
         }}
        
        
        >
        {menu.destaques.map((item,index) => (
              <SwiperSlide>
                <Card 

                key={index}
                nome={item.nome} 
                imagem={item.imagem} 
                descricao={item.descricao}
                tamanho={item.tamanho}
                preco={item.preco}
                onClick={()=>addToCart(item)}
                />
                
              
              </SwiperSlide>
            ))}
        </StyledSwiper>
     </StyleHighlight>
      
      <StyleSabores>
        <div className="Conteiner">
          <h2>Escolha Sabor</h2>
          <div>
            {menu.escolhaSabor.map((item, index) => (
              <Card
                key={index}
                nome={item.nome}
                imagem={item.imagem}
                descricao={item.descricao}
                tamanho={item.tamanho}
                preco={item.preco}
                onClick={() => addToCart(item)}
              />
            ))}
          </div>
        </div>
        <div className="Conteiner">
          <h2>Pizzas Salgadas</h2>
          <div>
            {menu.salgadas.map((item, index) => (
              <Card
                key={index}
                nome={item.nome}
                imagem={item.imagem}
                descricao={item.descricao}
                tamanho={item.tamanho}
                preco={item.preco}
                onClick={() => addToCart(item)}
              />
            ))}
          </div>
        </div>
        <div className="Conteiner">
          <h2>Pizzas Doces</h2>
          <div className="box">
            {menu.doces.map((item, index) => (
              <Card
                key={index}
                nome={item.nome}
                imagem={item.imagem}
                descricao={item.descricao}
                tamanho={item.tamanho}
                preco={item.preco}
                onClick={() => addToCart(item)}
              />
            ))}
          </div>
        </div>
        <div className="Conteiner">
          <h2>Brotos</h2>
          <div className="Box">
            {menu.brotos.map((item, index) => (
              <Card
                width={"200px"}
                key={index}
                nome={item.nome}
                imagem={item.imagem}
                descricao={item.descricao}
                tamanho={item.tamanho}
                preco={item.preco}
                onClick={() => addToCart(item)}
              />
            ))}
          </div>
        </div>
        <div className="Conteiner">
          <h2>Bebidas</h2>
          <div>
            {menu.bebidas.map((item, index) => (
              <Card
                key={index}
                nome={item.nome}
                imagem={item.imagem}
                descricao={item.descricao}
                tamanho={item.tamanho}
                preco={item.preco}
                onClick={() => addToCart(item)}
              />
            ))}
          </div>
        </div>
      </StyleSabores>
      <div>
      
      </div>
    </>
  );
};

export default Sabores;

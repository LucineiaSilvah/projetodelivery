import { useState } from "react";
import Card from "../Card/Card";
import { StyleSabores } from "../styles/StyleSabores";
import { useNavigate } from 'react-router-dom'
import { StyleButtonCart } from "../styles/StyleButtonCart";
const Sabores = ({addToCart}) => {

 const [unidades,setUnidades] = useState(0)
 const [cont,setcont] = useState(0)
const [cart,setCart] = useState([])
 const navigate = useNavigate();


  const menu = {
    escolhaSabor: [
      {
        nome: "Pizzas Doces",
        imagem: "https://delivery2.lucrowebpro.com/wp-content/uploads/2024/07/pizza1.jpg",
        descricao: "escolhas os sabores",
        tamanho: "Grande de 8 pedaços",
        preco: 30.90,
        qnt:1,
      
      },
      {
        nome: "Pizzas Salgadas",
        imagem: "https://delivery2.lucrowebpro.com/wp-content/uploads/2024/07/pizza7.jpg",
        descricao: "escolha os sabores",
        tamanho: "Grande de 8 pedaços",
        preco: 30.90,
        qnt:1,
      
      },
    ],
    salgadas: [
      {
        nome: "Pizza Frango com Catupiry",
        imagem:"https://delivery2.lucrowebpro.com/wp-content/uploads/2024/07/pizza14.jpg",
        descricao: "Frango desfiado, catupiry, molho de tomate e mussarela.",
        tamanho: "Grande de 8 pedaços",
        preco: 32.90
        ,
        qnt:1,
      
      },
      {
        nome: "Pizza Portuguesa",
        imagem: "https://delivery2.lucrowebpro.com/wp-content/uploads/2024/07/pizza13.jpg",
        descricao: "Molho de tomate, mussarela, presunto, ovos, cebola, azeitonas e ervilhas.",
        tamanho: "Grande de 8 pedaços",
        preco: 34.90,
        qnt:1,
      
      },
      {
        nome: "Pizza Pepperoni",
        imagem: "https://delivery2.lucrowebpro.com/wp-content/uploads/2024/07/pizza12.jpg",
        descricao: "Molho de tomate, mussarela e fatias de pepperoni..",
        tamanho: "Grande de 8 pedaços",
        preco: 34.90,
        qnt:1,
      
      },
      {
        nome: "Pizza Marguerita",
        imagem: "https://delivery2.lucrowebpro.com/wp-content/uploads/2024/07/pizza10.jpg",
        descricao: "Molho de tomate, mussarela, manjericão e azeite.",
        tamanho: "Grande de 8 pedaços",
        preco: 34.90,
        qnt:1,
      
      },
      {
        nome: "Pizza Queijo",
        imagem: "https://delivery2.lucrowebpro.com/wp-content/uploads/2024/07/pizza9.jpg",
        descricao: "Molho de tomate, mussarela e fatias de pepperoni..",
        tamanho: "Grande de 8 pedaços",
        preco: 34.90,
        qnt:1,
      
      },
      {
        nome: "Pizza Calabresa",
        imagem: "https://delivery2.lucrowebpro.com/wp-content/uploads/2024/07/pizza11.jpg",
        descricao: "Molho de tomate, mussarela e fatias de pepperoni..",
        tamanho: "Grande de 8 pedaços",
        preco: 34.90,
        qnt:1,
      
      },
    ],
    doces: [
      {
        nome: "Pizza de Chocolate",
        imagem: "https://delivery2.lucrowebpro.com/wp-content/uploads/2024/07/pizza13.jpg",
        descricao: "Chocolate derretido sobre massa crocante",
        tamanho: "Grande de 8 pedaços",
        preco: 35.90,
        qnt:1,
      
      },
      {
        nome: "Pizza de Banana com Canela",
        imagem: "https://delivery2.lucrowebpro.com/wp-content/uploads/2024/07/pizza13.jpg",
        descricao: "Banana caramelizada com canela e açúcar",
        tamanho: "Grande de 8 pedaços",
        preco: 33.90,
        qnt:1,
      
      }
    ],
    brotos: [
      {
        nome: "Broto 4Pedaços doce",
        imagem: "https://delivery2.lucrowebpro.com/wp-content/uploads/2024/07/pizza1.jpg",
        descricao: "dkffkhtilx",
        tamanho: "Broto (4 pedaços)",
        preco: 19.90,
        qnt:1,
      
      },
      {
        nome: "Broto Quatro Queijos",
        imagem: "https://delivery2.lucrowebpro.com/wp-content/uploads/2024/07/pizza6.jpg",
        descricao: "Mussarela, provolone, parmesão e catupiry",
        tamanho: "Broto (4 pedaços)",
        preco: 22.90,
        qnt:1,
      
      }
    ],
    bebidas: [
      {
        nome: "Refrigerante lata 350ml",
        imagem: "https://delivery2.lucrowebpro.com/wp-content/uploads/2024/07/refrigerante-lata.jpg",
        descricao: "Refrigerante lata 350ml",
        tamanho:"350ml",
        preco: 3.00,
        qnt:1,
      
      },
      {
        nome: "Garrafa 600ml",
        imagem: "https://delivery2.lucrowebpro.com/wp-content/uploads/2024/07/garrafa-600ml.jpg",
        descricao: "Refrigerante 600ml",
        tamanho:"600ml",
        preco: 7.50,
        qnt:1,
      
      },
      {
        nome: "Garrafa 600ml",
        imagem: "https://delivery2.lucrowebpro.com/wp-content/uploads/2024/07/garrafa-2-litros.jpg",
        descricao: "Refrigerante 2Lt",
        tamanho:"2lt",
        preco: 14.50,
        qnt:1,
      
        
        
      },
    ]
  };
  

  return (
    <>
    <StyleSabores>
      <div className="Conteiner">

      <h2>Escolha Sabor</h2>
      <div>
      
      {menu.escolhaSabor.map((item,index)=>(
  <Card key={index} nome={item.nome} imagem={item.imagem} descricao={item.descricao} tamanho={item.tamanho} preco={item.preco} onClick={()=>addToCart(item)} />
))}
      </div>
      </div>
      <div className="Conteiner">

      <h2>Pizzas Salgadas</h2>
      <div>

      {menu.salgadas.map((item,index)=>(
  <Card key={index} nome={item.nome} imagem={item.imagem} descricao={item.descricao} tamanho={item.tamanho} preco={item.preco}  onClick={()=>addToCart(item)} />
  
))}
      </div>
      </div>
      <div className="Conteiner">

      <h2>Pizzas Doces</h2>
      <div className="box">

      {menu.doces.map((item,index)=>(
  <Card key={index} nome={item.nome} imagem={item.imagem} descricao={item.descricao} tamanho={item.tamanho}  preco={item.preco}  onClick={()=>addToCart(item)} />
))}
      </div>
      </div>
      <div className="Conteiner">

      <h2>Brotos</h2>
      <div className="Box">

      {menu.brotos.map((item,index)=>(
  <Card width={'200px'} key={index} nome={item.nome} imagem={item.imagem} descricao={item.descricao} tamanho={item.tamanho} preco={item.preco}  onClick={()=>addToCart(item)}/>
))}
      </div>
      </div>
      <div className="Conteiner">

      <h2>Bebidas</h2>
      <div>

      {menu.bebidas.map((item,index)=>(
  <Card key={index} nome={item.nome} imagem={item.imagem} descricao={item.descricao} tamanho={item.tamanho} preco={item.preco}  onClick={()=>addToCart(item)} />
))}
      </div>
      </div>



    </StyleSabores>
    <div>
    {/* <StyleButtonCart onClick={()=> handleCart()}>
      
      <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="9" cy="21" r="1"></circle>
    <circle cx="20" cy="21" r="1"></circle>
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H5"></path>
    
  </svg>
  <p>{unidades}
    
  </p>
          </span>
      </StyleButtonCart> */}
    </div>
    </>
    
  );
}

export default Sabores;

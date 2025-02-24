import { motion, useScroll, useTransform } from "framer-motion";
import { StyleAnimation } from "../styles/StyleAnimation";

const AnimatedText = () => {
  const { scrollY } = useScroll();

  const x = useTransform(scrollY, [0, 500], ["100vw", "-100vw"]); // Rola da direita para a esquerda
 

  return (
    <motion.div style={{ x, position: "absolute",top:"910px"}}>
      <StyleAnimation  >

        <div  style={{ overflow: "hidden", width: "100%", display: "flex", justifyContent: "space-between" }}>
          <div style={{ whiteSpace: "nowrap", display: "flex", gap: "10px" }}>
            <p>Entrega rápida</p>
            <p>-</p>
            <p>Pedido online</p>
            <p>-</p>
            <p>Vários sabores</p>
            <p>-</p>
            <p>Qualidade garantida</p>
            <p>-</p>
            <p>Entrega rápida</p>
            <p>-</p>
            <p>Pedido online</p>
            <p>-</p>
            <p>Entrega rápida</p>
            <p>-</p>
            <p>Vários sabores</p>
            <p>Entrega rápida</p>
            <p>-</p>
            <p>Pedido online</p>
            <p>-</p>
            <p>Entrega rápida</p>
            <p>-</p>
            <p>Vários sabores</p>
            <p>Entrega rápida</p>
            <p>-</p>
            <p>Pedido online</p>
            <p>-</p>
            <p>Entrega rápida</p>
            <p>-</p>
            <p>Vários sabores</p>
            <p>Entrega rápida</p>
            <p>-</p>
            <p>Pedido online</p>
            <p>-</p>
            <p>Entrega rápida</p>
            <p>-</p>
            <p>Vários sabores</p>
          </div>
        </div>
      </StyleAnimation>
    </motion.div>
  );
};

export default AnimatedText;

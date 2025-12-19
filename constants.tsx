
import { Pizza, Advantage } from './types';

export const PIZZARIA_DATA = {
  name: "Pizza Master",
  address: "Avenida Brasil Norte, nº 3003 – Ilha Solteira – SP",
  phone: "(18) 99999-9999",
  whatsappMsg: "Olá! Quero fazer um pedido 🍕",
  whatsappLink: "https://wa.me/5518999999999?text=Olá!%20Quero%20fazer%20um%20pedido%20🍕",
  googleMapsLink: "https://www.google.com/maps/search/?api=1&query=Avenida+Brasil+Norte+3003+Ilha+Solteira+SP"
};

export const PIZZAS: Pizza[] = [
  {
    id: 1,
    name: "Calabresa Suprema",
    description: "Massa artesanal, molho de tomate fresco, queijo derretido e calabresa crocante com cebola roxa.",
    price: "R$ 49,90",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=800",
    tag: "A Queridinha",
    ingredients: ["Massa Artesanal", "Molho de Tomate Pelati", "Mussarela Premium", "Calabresa Especial", "Cebola Roxa", "Azeitonas Pretas", "Orégano"]
  },
  {
    id: 3,
    name: "Frango com Catupiry",
    description: "Frango desfiado temperado na hora com uma camada generosa de Catupiry legítimo.",
    price: "R$ 52,90",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=800",
    tag: "Clássica",
    ingredients: ["Massa Artesanal", "Frango Desfiado", "Catupiry Original", "Mussarela", "Milho Selecionado", "Orégano"]
  },
  {
    id: 4,
    name: "Portuguesa Especial",
    description: "Presunto, ovos, cebola, ervilha e azeitonas pretas sobre uma camada de queijo derretido.",
    price: "R$ 53,90",
    image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&q=80&w=800",
    tag: "Completa",
    ingredients: ["Massa Artesanal", "Presunto Cozido", "Ovos", "Ervilhas", "Cebola Branca", "Mussarela", "Palmito", "Azeitonas"]
  },
  {
    id: 5,
    name: "Marguerita Gourmet",
    description: "Molho de tomate italiano, mussarela premium, fatias de tomate fresco, manjericão orgânico e azeite extravirgem.",
    price: "R$ 48,90",
    image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?auto=format&fit=crop&q=80&w=800",
    tag: "Clássica Premium",
    ingredients: ["Massa Artesanal", "Molho de Tomate Pelati", "Mussarela de Búfala", "Tomate Cereja", "Manjericão Fresco", "Azeite de Oliva Extravirgem"]
  }
];

export const ADVANTAGES: Advantage[] = [
  {
    id: 1,
    title: "Ingredientes Premium",
    description: "Selecionamos os melhores produtores para garantir o sabor autêntico.",
    icon: "UtensilsCrossed"
  },
  {
    id: 2,
    title: "Massa Artesanal",
    description: "Longa fermentação natural para uma massa leve, crocante e aerada.",
    icon: "Wind"
  },
  {
    id: 3,
    title: "Forno a Lenha",
    description: "O calor intenso que sela o sabor e derrete o queijo com perfeição.",
    icon: "Flame"
  },
  {
    id: 4,
    title: "Entrega Ninja",
    description: "Sua pizza chega quentinha em Ilha Solteira em tempo recorde.",
    icon: "Timer"
  }
];
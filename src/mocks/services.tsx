import serviceIcon from '../assets/icons/service-icon.svg';
import foodIcon from '../assets/icons/food-icon.svg';
import devIconIcon from '../assets/icons/dev-icon.svg';
import eletricistaImg from '../assets/images/eletricista.png';
import encanadorImg from '../assets/images/encanador.png';
import construcaoImg from '../assets/images/construcao.png';
import eletronicoImg from '../assets/images/tecnologia.png';
import acouguesImg from '../assets/images/acougue.png';

export type Services = {
  icon: string
  name: string
  describe: string
  img: string
}

export const services: Services[] = [
  {
    icon: serviceIcon, 
    name: '⚡ Eletricistas',
    describe: 'Instalações, reparos e manutenção elétrica para sua casa ou negócio.',
    img: eletricistaImg
  },
  {
    icon: serviceIcon, 
    name: '🚰 Encanadores',
    describe: 'Conserto de vazamentos, instalações e manutenção.',
    img: encanadorImg
  },
  {
    icon: serviceIcon, 
    name: '🏗️ Construção',
    describe: 'Pedreiros, pintores e reformas para deixar tudo no ponto.',
    img: construcaoImg
  },
  {
    icon: devIconIcon, 
    name: '💻 Eletrônicos',
    describe: 'Assistência técnica para celulares, computadores e eletrodomésticos.',
    img: eletronicoImg
  },
  {
    icon: foodIcon, 
    name: '🥩 Açougues',
    describe: 'Carnes frescas, cortes especiais e kits prontos para o seu churrasco.',
    img: acouguesImg
  },
]
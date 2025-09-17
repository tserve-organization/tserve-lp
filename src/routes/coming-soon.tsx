import { createFileRoute } from '@tanstack/react-router'
import comingsoonImg from '../assets/images/coming-soon.svg';
import appleBtn from '../assets/images/apple-store-button.svg';
import googleBtn from '../assets/images/google-play-buttom.svg';

export const Route = createFileRoute('/coming-soon')({
  component: ComingSoon,
})

function ComingSoon() {
  return (
    <main className="container py-[64px]">
      <div className="grid grid-cols-2 bg-neutral-10 rounded-[20px] p-[64px]">
        <div>
          <h1 className="text-tertiary-100 text-[48px] font-semibold leading-[60px] w-[300px]">Estamos trabalhando nos últimos ajustes.</h1>
          <p className="mt-[8px] w-[340px]">Enquanto isso, você já pode baixar nosso app e aproveitar todos os serviços da Tserve.</p>
        
          <div className="flex items-center gap-[16px] mt-[16px]">
            <div className="cursor-pointer" onClick={() => {}}>
              <img src={googleBtn} alt="Google Play Button" />
            </div>
            <div className="cursor-pointer" onClick={() => {}}>
              <img src={appleBtn} alt="Apple Store Button" />
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <img src={comingsoonImg} alt="Illustration" />
        </div>
      </div>
    </main>
  );
}

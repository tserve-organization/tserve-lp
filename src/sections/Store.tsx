import storeImg from '../assets/images/mockups-store.png';
import googleBtn from '../assets/icons/google-play-button.svg';
import appleBtn from '../assets/icons/apple-store-button.svg';

export function Store() {
  return (
    <section className="container mx-auto px-[64px]">
      <div className="grid grid-cols-2 gap-4 bg-neutral-10 border-neutral-40 border-[0.5px] rounded-[20px] px-[64px] py-[48px]">
        <div className="flex flex-col justify-center gap-[32px]">
          <div className="flex flex-col gap-[8px]">
            <h1 className="text-tertiary-100 text-[32px] font-semibold">A solução que te serve, na palma da mão</h1>
            <span className="text-[16px]">Disponível na App Store e Google Play.</span>
          </div>
          <div className='flex items-center gap-[16px]'>
            <img src={googleBtn} alt="google-play" />
            <img src={appleBtn} alt="apple-store" />
          </div>
        </div>
        <div>
          <img src={storeImg} alt="banner-store" />
        </div>
      </div>
    </section>
  );
}
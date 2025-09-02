import storeImg from '../assets/images/mockups-store.png';

export function Store() {
  return (
    <section className="container mx-auto">
      <div className="flex items-center">
        <div>
          <h1>A solução que te serve, na palma da mão</h1>
          <span>Disponível na App Store e Google Play.</span>
        </div>
        <div>
          <img src={storeImg} alt="banner-store" />
        </div>
      </div>
    </section>
  );
}
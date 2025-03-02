import Logo from "./assets/logo.png"

export default function Home() {
  return (
    <>
      <div className="min-h-screen w-full absolute bg-black">
      </div>
      <div className="opacity-80 bg-[url(/src/assets/home-banner.webp)] min-h-screen w-full absolute bg-cover bg-center">
      </div>
      <div className="p-4 font-poppins relative md:mx-15 md:pt-30">
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <img src={Logo} width={100} className="mr-5 pt-5" />
          <div>
            <h1 className="text-[50px] md:text-[72px] mb-4 text-white text-center md:text-left text-base/18">Turistando <br /> Portugal</h1>
            <p className="text-white mb-6 max-w-lg text-[18px]">
              Descubra os melhores destinos de Portugal
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

import Image from "next/image";

import LogoHerval from "../../../public/images/LogoHerval.png";

const Hero = () => {
  return (
    <main className="flex flex-col gap-y-4 px-5 pt-10">
      <Image src={LogoHerval} alt="Logo Papelaria Herval" />
      <div className="text-center">
        <h1 className="text-justify text-xl">
          A{" "}
          <span className="font-semibold text-[#2C6EE0]">Papelaria Herval</span>
          , pioneira na cidade de Maringá e Região a{" "}
          <span className="font-semibold">mais de 40 anos</span>, trazendo
          satisfação de atendimento para seus clientes, tem o enorme prazer em
          atendê-lo da melhor forma pelo nosso canal de atendimento e também em
          nossa loja!
        </h1>
      </div>
    </main>
  );
};

export default Hero;

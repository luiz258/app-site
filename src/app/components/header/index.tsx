import Image from "next/image";
import Logo from "@/../public/svg/logo.svg"
import LogoGithub from "@/../public/svg/logo-github.svg"
import LogoLinkdin from "@/../public/svg/logo_linkdin.svg"

export function HeaderComponent() {
  return (
    <header className="absolute" id="#inicio">
      <div className="flex justify-around justify-items-center px-6">
          <div className="flex w-14 h-14">
            <div className="h-auto">
              <Image src={Logo}
               width={70}
               height={70}
               alt="logo" />
            </div>
       
          </div>
            <ul className="flex justify-around font__dmSans font__color-gray h-auto gap-4">
              <li>
                <a href="#inicio">Inicio </a>
              </li>
              <li>
                <a href="#sobre">Sobre mim </a>
              </li>
              <li>
                <a href="#tecnologias">Minhas Tecnologias</a>
              </li>
              <li>
                <a href="#contato">Contatos</a>
              </li>

              <li>
                <a href="https://github.com/luiz258?tab=repositories">
                  <Image src={LogoGithub}
                   width={25}
                   height={25}
                   alt="logo" /></a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/lmsb-dev-732235120/">
                  <Image src={LogoLinkdin}
                   width={28}
                   height={28}
                   alt="logo" /></a>
              </li>
            </ul>
          </div>
    </header>
  );
}
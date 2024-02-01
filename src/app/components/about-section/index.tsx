import { ExeperienceListComponent } from "../list-experience";

export function AboutComponent() {
    const sizeSvg = 120;
    return (
        <div className="flex justify-items-center w-full lg:p-18 sm:pt-8 md:pt-10 xs:pt-8">
            <div className="relative isolate container">

                <div className="mx-auto max-w-2xl xs:flex-col p-2 grid ">
                    <div className="">
                        <h4 className="font-bold font__color-purple font__poppins sm:text-6xl">
                            Sobre mim
                        </h4>
                        <h3 className="font__dmSans font__color-gray text-left mt-9 mb-6">
                        Ao longo de três anos de experiência, atuei como desenvolvedor web, 
                        dedicando-me a projetos envolvendo Web Applications, Single Page Applications (SPA) e ProgressiveWeb Apps (PWA), 
                        utilizando predominantemente o framework Angular. Embora eu tenha habilidades de BackEnd com .NET, minha verdadeira expertise e paixão está no Web FrontEnd, 
                        que sempre foi minha preferência.
                        </h3>
                    </div>
                <div className="max-w-1xl mt-8 xs:pt-18">
                        <h5 className="font-bold font__color-purple font__poppins sm:text-6xl lg:text-3xl">
                            Experiência de trabalho
                        </h5>
                        <div className="justify-items-center w-full divide-y-2">
                            <ExeperienceListComponent office="Desenvolvedor Full-Stack" modelHiring="Remoto" nameJob="Instituto Atlântico" period="Ago de 2021 - o momento"  typeHiring="FullTime" />

                            <ExeperienceListComponent office="Desenvolvedor Full-Stack" modelHiring="Remoto" nameJob="CRP Tecnologia" period="Jan - Jul de 2021"  typeHiring="FullTime" />
 
                        </div>
                    </div>
                    <div className="max-w-1xl mt-8">
                        <h5 className="font-bold font__color-purple font__poppins sm:text-6xl lg:text-3xl">
                            Formacação acadêmica
                        </h5>
                        <div className="justify-items-center w-full divide-y-2">
                            <ExeperienceListComponent office="Desenvedor Junir" modelHiring="Araguaína-TO" nameJob="UNITPAC – Centro Universitário ITPAC" period="2015–2018"  typeHiring="off" />
 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
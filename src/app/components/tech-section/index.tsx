import Image from "next/image";
import GitHub from "@/../public/svg/logo-github.svg"
import Angular from "@/../public/svg/logo-angular.svg"
import SqlServe from "@/../public/svg/logo-sql.svg"
import Html from "@/../public/svg/logo-html.svg"
import Tailwind from "@/../public/svg/logo-tailwind.svg"
import Sass from "@/../public/svg/logo-sass.svg"
import Css from "@/../public/svg/logo-css.svg"
import Js from "@/../public/svg/logo-js.svg"
import Bootstrap from "@/../public/svg/logo-bootstrap.svg"
import DotNet from "@/../public/svg/logo-net.svg.svg"
import Vscode from "@/../public/svg/logo-vscode.svg"
import Git from "@/../public/svg/logo-git.svg"


export function TechComponent() {
    const sizeSvg = 110;
    return (
        <div id="tecnologias" className="flex justify-around justify-items-center w-full max-h-max lg:p-56 sm:pt-18 sm:mb-10 md:pt-18">
            <div className="relative isolate px-6 pt-16 lg:px-8 xs:pb-10">

                <div className="mx-auto max-w-1x1 xs:flex-col justify-around">
                    <div>
                        <h2 className="font-bold font__color-purple font__poppins sm:text-4xl  lg:text-5xl text-center">
                            Tecnologias que Trabalho
                        </h2>
                        <h3 className="font__dmSans font__color-gray text-center p-8">
                            Tecnologias com as quais tenho trabalhado recentemente
                        </h3>
                    </div>

                    <div className="max-w-1xl">
                        <div className="grid grid-cols-6 gap-10 ">

                            <div>
                                <Image
                                    src={GitHub}
                                    width={sizeSvg}
                                    height={sizeSvg}
                                    alt="logo_github"
                                />

                            </div>

                            <div>
                                <Image
                                    src={Html}
                                    width={sizeSvg}
                                    height={sizeSvg}
                                    alt="logo_html"
                                />
                            </div>

                            <div>
                                <Image
                                    src={Angular}
                                    width={sizeSvg}
                                    height={sizeSvg}
                                    alt="logo_angular"
                                />
                            </div>

                            <div>
                                <Image
                                    src={DotNet}
                                    width={sizeSvg}
                                    height={sizeSvg}
                                    alt="logo_dotnet"
                                />
                            </div>

                            <div>
                                <Image
                                    src={Css}
                                    width={sizeSvg}
                                    height={sizeSvg}
                                    alt="logo_css"
                                />
                            </div>

                            <div>
                                <Image
                                    src={Js}
                                    width={sizeSvg}
                                    height={sizeSvg}
                                    alt="logo_js"
                                />
                            </div>

                            <div>
                                <Image
                                    src={Git}
                                    width={sizeSvg}
                                    height={sizeSvg}
                                    alt="logo_git"
                                />
                            </div>

                            <div>
                                <Image
                                    src={Tailwind}
                                    width={sizeSvg}
                                    height={sizeSvg}
                                    alt="logo_tailwind"
                                />
                            </div>

                            <div>
                                <Image
                                    src={Bootstrap}
                                    width={sizeSvg}
                                    height={sizeSvg}
                                    alt="logo_bootstrap"
                                />
                            </div>

                            <div>
                                <Image
                                    src={Sass}
                                    width={sizeSvg}
                                    height={sizeSvg}
                                    alt="logo_sass"
                                />
                            </div>

                            <div>
                                <Image
                                    src={SqlServe}
                                    width={sizeSvg}
                                    height={sizeSvg}
                                    alt="logo_sql"
                                />
                            </div>

                            <div>
                                <Image
                                    src={Vscode}
                                    width={sizeSvg}
                                    height={sizeSvg}
                                    alt="logo_vscode"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

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


export function ContactComponent() {

    return (
        <div className="flex justify-around justify-items-center w-full max-h-max lg:p-56 sm:pt-18 sm:pb-12 sm:mb-10 md:pt-18">
            <div className="relative isolate px-6 pt-16 lg:px-8 xs:pb-10">

                <div className="mx-auto max-w-1x1 xs:flex-col justify-around">
                    <div>
                        <h2 className="font-bold font__color-purple font__dmSans sm:text-4xl  lg:text-5xl text-center">
                            Para qualquer dúvida envie-nos um email:
                        </h2>
                        <h3 className="font-bold font__dmSans font__color-gradient text-center p-8 sm:text-3xl lg:text-4xl">
                            luizmarcelo258@gmail.com
                        </h3>
                    </div>
                    <div>
                        <div>
                        <h2 className="font-bold font__color-purple font__dmSans sm:text-2xl  lg:text-2xl text-center">
                           Entre em contato pelo whastApp
                        </h2>
                        <h3 className="font-bold font__dmSans text-green-700 text-center p-8 sm:text-2xl lg:text-2xl">
                           +55 (63) 98461-3783
                        </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

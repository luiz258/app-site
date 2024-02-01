
function IsVisibletypeHiring(typeHiring:string):any {
    if (typeHiring != "off") {
      return (
        <h4 className=" ">
            <span className="font__dmSans rounded-full border-2 bg-green-500 font-light text-white text-sm p-1">
                {typeHiring}
            </span>
        </h4>
    );
    }

  }


export function ExeperienceListComponent(props:
    { office: string, nameJob: string, modelHiring: string, period: string, typeHiring: string }
) {

    return (
        <div className="pt-6  pb-4">
            <div className="grid grid-cols-1 gap-4">
                <div className=" ">
                    <div className="grid grid-rows-1 grid-flow-col gap-4 ">
                        <div className="col-start-1 col-end-3">
                            <h2 className="font-bold font__color-gray font__dmSans text-xl ">
                                {props.office}
                            </h2>
                        </div>
                        <div className="col-span-4 text-right ">
                            { IsVisibletypeHiring(props.typeHiring)}
                        </div> 
                    </div>
                    <div className="grid grid-rows-1 grid-flow-col gap-4 font__dmSans font__color-gray">
                        <div>
                            <h3 className="text-left">
                                {props.nameJob}
                            </h3>
                        </div>
                        <div>
                            <h3 className="text-center" >
                                {props.modelHiring}
                            </h3>
                        </div>
                        <div>
                            <h3 className="text-right">
                                {props.period}
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}
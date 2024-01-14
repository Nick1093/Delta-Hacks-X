import uploadImg from "../imgs/upload.svg"

const DropZoneJS = () => {

    return (

        <div className="flex items-center justify-center rounded-[63px] border-4 border-dashed border-[#d9d9d9] w-11/12 h-4/6">
            <div>
                <div className="flex items-center justify-center pb-6">
                    <button>
                        <img
                            className=""
                            alt="Icon document upload"
                            src={uploadImg}
                        />
                    </button>
                </div>
                <p className=" [font-family:'PP_Radio_Grotesk-Regular',Helvetica] font-normal text-white text-[36px] tracking-[0] leading-[normal]">
                    <span className="underline">Click to upload</span>
                    <span className="[font-family:'PP_Radio_Grotesk-Regular',Helvetica] font-normal text-white text-[36px] tracking-[0]">
                        {" "}
                        or Drag &amp; Drop
                    </span>
                </p>
                <p className=" [font-family:'PP_Radio_Grotesk-Regular',Helvetica] font-normal text-white text-[21px] tracking-[0] leading-[normal]">
                    Only .pptx Extensions &amp; Maximum File Upload: 50mb
                </p>
            </div>

        </div>

    );
}

export default DropZoneJS;
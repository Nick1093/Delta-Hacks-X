import uploadImg from "../imgs/upload.svg"
import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { useDropzone } from 'react-dropzone';

const DropZoneJS = () => {

    let navigate = useNavigate();

    const [files, setFiles] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(files)

        // Create a single FormData object to send all files
        const formData = new FormData();
        for (const file of files) {
            // Append each file under the same key "uploaded_files"
            formData.append("uploaded_files", file);
        }

        try {
            const response = await fetch("http://localhost:8000/upload_pptx/", {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                console.log("Files uploaded successfully");
                // If you need to pass data to the Reels component, do it here
                const reelsData = await response.json();
                console.log(reelsData);
                navigate("/reels", { state: { reelsData: reelsData.slides_content } });
            } else {
                console.error("File upload failed");
            }
        } catch (error) {
            console.error("Error uploading files", error);
        }
    };

    const onDrop = useCallback(acceptedFiles => {
        // Do something with the files
        console.log(acceptedFiles)
    }, [])

    const { getRootProps, getInputProps } = useDropzone({
        accept: "pptx/*",
        onDrop: (acceptedFiles) => {
            console.log(files)
            setFiles(
                [...files, ...acceptedFiles]
            )
        },
    })

    return (

        <div className="flex items-center justify-center rounded-[63px] border-4 border-dashed border-[#d9d9d9] w-11/12 h-4/6">
            <div>
                <div className="flex items-center justify-center pb-6">
                    <form className="flex flex-col items-center justify-center" onSubmit={handleSubmit}>

                        <div {...getRootProps()}>
                            <input {...getInputProps()} />
                            {
                                <img
                                    className=""
                                    alt="Icon document upload"
                                    src={uploadImg}
                                />
                            }
                        </div>

                        <button className=" justify-center pt-1 [font-family:'PP_Radio_Grotesk-Regular',Helvetica] font-normal text-white text-[18px] tracking-[0] leading-[normal]" type="submit">Submit</button>
                    </form>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <p className=" [font-family:'PP_Radio_Grotesk-Regular',Helvetica] font-normal text-white text-[30px] tracking-[0] leading-[normal]">
                        <span className="underline">Click document icon to upload</span>
                        <span className="justify-center [font-family:'PP_Radio_Grotesk-Regular',Helvetica] font-normal text-white text-[30px] tracking-[0]">
                            {" "}
                            or Drag &amp; Drop
                        </span>
                    </p>
                    <p className=" [font-family:'PP_Radio_Grotesk-Regular',Helvetica] font-normal text-white text-[21px] tracking-[0] leading-[normal]">
                        Only .pptx Extensions &amp; Maximum File Upload: 50mb
                    </p>
                </div>
            </div>

        </div>

    );
}

export default DropZoneJS;
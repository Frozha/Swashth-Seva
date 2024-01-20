import React, { useState } from "react";
import axios from 'axios';

export default function BrowseButton() {
  const [file, setFile] = useState(null);

  async function handleChange(e) {
      const selectedFile = e.target.files[0];
      setFile(URL.createObjectURL(selectedFile));

      const formData = new FormData();
      formData.append('image', selectedFile);

      try {
          const response = await axios.post( import.meta.env.VITE_APP_UPLOAD_IMAGE_API_END_POINT, formData, {
              headers: {
                  'Content-Type': 'multipart/form-data',
              },
          });

          console.log(response.data);
      } catch (error) {
          console.error('Error uploading image:', error);
      }
  }

  return (
    <div className="flex  items-center justify-around bg-[#8cdcc8]  w-screen h-[700px]">
      <div className="flex flex-col items-center justify-center bg-[#00a0a0] p-[20px] box-border border-white border-2 h-[500px] w-[600px] rounded-md">
        <h2 className="text-[22px] text-white  font-bold">Add Image:</h2>
        <input
          type="file"
          onChange={handleChange}
          className="text-[16px] text-black font-semibold mt-[20px] h-[30px] w-[300px]"
        />
        <div className="h-[300px] w-[300px] mt-[50px]">
          <img src={file} className=" object-contain rounded-md" />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center h-[500px] w-[600px]">
        <h1 className="flex  text-white text-[30px] font-bold" style={{color: 'black'}}>Sample</h1>
        <img src="./src/images/Brain.jpeg" alt="" className=" object-contain rounded-md mt-[20px]"></img>
      </div>
    </div>
  );
}

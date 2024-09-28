"use client";
import { X } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

interface FileUploadButtonProps {
  setMediaType: (type: string) => void;
  setMediaURL: (url: string) => void;
}

const FileUploadButton = ({
  setMediaType,
  setMediaURL,
}: FileUploadButtonProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (event.target.files && event.target.files.length > 0) {
      const selectedFile = event.target.files[0];
      const fileType = selectedFile.type;
      const fileName = selectedFile.name;
      const fileExtension = fileName.split(".").pop(); // Get the file extension

      if (fileType.startsWith("image/")) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setSelectedImage(reader.result as string);
        };
        reader.readAsDataURL(selectedFile);
      }

      const formData = new FormData();
      formData.append("file", selectedFile);

      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_UR}/api/v1/review/uplode`,
          {
            method: "POST",
            body: formData,
          },
        );

        if (response.ok) {
          const responseData = await response.json();
          const imageUrl = responseData.data;
          setMediaURL(imageUrl);
          setMediaType(fileExtension); // Set the file extension
        } else {
        }
      } catch (error) {
        console.error("업로드 중 오류 발생:", error);
      }
    }
  };

  const handleCancel = () => {
    setSelectedImage(null);
    setMediaURL("");
    setMediaType("");
  };

  return (
    <span className="w-full mb-20">
      <div className="relative w-[50%]">
        <input
          id="fileInput"
          type="file"
          onChange={handleFileChange}
          className="hidden"
        />
        <label
          htmlFor="fileInput"
          className="cursor-pointer bg-starbucks text-white py-2 px-4 rounded-lg inline-block"
        >
          파일 선택
        </label>
      </div>
      {selectedImage && (
        <div className="mt-4">
          <div className="w-[50vw] relative overflow-hidden">
            <Image
              src={selectedImage}
              alt="Selected preview"
              className="w-full h-auto object-cover"
              width={300}
              height={300}
              priority
            />
            <button
              onClick={handleCancel}
              className="mt-2 bg-red-500 text-white py-1 px-1 rounded-[50%] absolute top-0 right-0"
            >
              <X />
            </button>
          </div>
        </div>
      )}
    </span>
  );
};

export default FileUploadButton;

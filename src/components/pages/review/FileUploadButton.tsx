"use client";

import { postReviewMedia } from "@/actions/review/review";
import { useState } from "react";

export default function FileUploadButton() {
  const [file, setFile] = useState<File | null>(null);
  const [previewURL, setPreviewURL] = useState<string | null>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      const data = await postReviewMedia("1000614573665");
      console.log(data);
      // 이미지나 동영상 미리보기 URL 생성
      const objectUrl = URL.createObjectURL(selectedFile);
      setPreviewURL(objectUrl);
    }
  };

  const handleRemoveFile = () => {
    setFile(null);
    setPreviewURL(null);
  };

  return (
    <div className="file-upload">
      <label
        htmlFor="file-upload"
        className="cursor-pointer px-4 py-2 bg-blue-500 text-white rounded"
      >
        파일 선택
      </label>
      <input
        id="file-upload"
        type="file"
        accept="image/*,video/*"
        onChange={handleFileChange}
        className="hidden"
      />

      {previewURL && (
        <div className="preview mt-4">
          {file?.type.startsWith("image") ? (
            <img
              src={previewURL}
              alt="미리보기"
              className="max-w-full h-auto"
            />
          ) : (
            <video controls className="max-w-full h-auto">
              <source src={previewURL} />
              해당 브라우저는 비디오 태그를 지원하지 않습니다.
            </video>
          )}
          <button
            onClick={handleRemoveFile}
            className="mt-2 px-4 py-2 bg-red-500 text-white rounded"
          >
            파일 제거
          </button>
        </div>
      )}
    </div>
  );
}

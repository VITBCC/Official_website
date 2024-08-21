"use client"
import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

function SecretUpload({ onFileUpload }) {
  const [selectedFile, setSelectedFile] = useState(null);

  const onDrop = useCallback(async (acceptedFiles) => {
    // Handle the dropped files
    const file = acceptedFiles[0];
    if (file) {
      setSelectedFile(file);

      const formData = new FormData();
      formData.append('file', file, file.name);

      // for (const entry of formData.entries()) {
      //   console.log(entry);
      // }

      try {
        onFileUpload(formData);
      } catch (error) {
        console.error("An error occurred:", error);
      }
    }
  }, [onFileUpload]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div
      {...getRootProps()}
      className={`p-4 border-2 border-dashed rounded-lg h-52 text-center flex flex-col gap-y-4 justify-center items-center ${
        isDragActive ? 'bg-blue-100' : 'bg-zinc-900'
      }`}
    >
      <input {...getInputProps()} />
      <p className="text-lg text-gray-500">
        {isDragActive
          ? 'Drop the file here'
          : 'Drag and drop your secret file here(.env), or click to select one'}
      </p>
      {selectedFile && (
        <p className="text-blue-500">Selected File: {selectedFile.name}</p>
      )}
    </div>
  );
}

export default SecretUpload;

"use client"
import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

function FileUpload({ onFileUpload }) {
  const [folderName, setFolderName] = useState(null);

  const onDrop = useCallback(async (acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      // Extract the folder name from the first file's webkitRelativePath
      const firstFile = acceptedFiles[0];
      const fullPath = firstFile.webkitRelativePath;
      const folder = fullPath.substring(0, fullPath.indexOf('/'));

      setFolderName(folder);

      const formData = new FormData();
      acceptedFiles.forEach((file) => {
        formData.append('files', file, file.webkitRelativePath || file.name);
      });

      try {
        onFileUpload(formData);
      } catch (error) {
        console.error("An error occurred:", error);
      }
    }
  }, [onFileUpload]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    directory: true, 
    webkitdirectory: "true", 
  });

  return (
    <div
      {...getRootProps()}
      className={`p-4 border-2 border-dashed rounded-lg h-52 text-center flex flex-col gap-y-4 justify-center items-center ${
        isDragActive ? 'bg-blue-100' : 'bg-zinc-900'
      }`}
    >
      <input {...getInputProps()} directory="true" webkitdirectory="true" />
      <p className="text-lg text-gray-500">
        {isDragActive
          ? 'Drop the folder here'
          : 'Drag and drop your project folder here, or click to select one'}
      </p>
      {folderName && (
        <p className="text-blue-500">Selected Folder: {folderName}</p>
      )}
    </div>
  );
}

export default FileUpload;

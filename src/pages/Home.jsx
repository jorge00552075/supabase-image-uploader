import { useState } from 'react';
import FileToUpload from '../components/FileToUpload.jsx';
import UploadedFile from '../components/UploadedFile.jsx';

const Home = function () {
  const [uploadedFile, setUploadedFile] = useState(null);

  const uploadFile = async function (file) {
    const body = new FormData();
    body.append('file', file);

    try {
      const response = await fetch('http://localhost:8001/upload', {
        method: 'POST',
        body,
      });

      const { fileName, filePath } = await response.json();
      setUploadedFile({ fileName, filePath });
    } catch (err) {
      console.error(err);
    }
  };

  const handleDrop = function (file) {
    uploadFile(file);
  };

  const handleChange = function (event) {
    uploadFile(event.target.files[0]);
    // console.log(URL.createObjectURL(event.target.files[0]));
  };

  return (
    <main>
      {uploadedFile ? (
        <UploadedFile />
      ) : (
        <FileToUpload handleChange={handleChange} handleDrop={handleDrop} />
      )}
    </main>
  );
};

export default Home;

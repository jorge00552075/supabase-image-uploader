import { useState } from 'react';
import FileToUpload from '../components/FileToUpload.jsx';
import UploadedFile from '../components/UploadedFile.jsx';
import uploadMediaFile from '../utils/uploadMediaFile';

const Home = function () {
  const [mediaFile, setMediaFile] = useState(null);

  const handleDrop = function (file) {
    uploadMediaFile(file, setMediaFile);
  };

  const handleChange = function (event) {
    uploadMediaFile(event.target.files[0], setMediaFile);
  };

  return (
    <main>
      {mediaFile ? (
        <UploadedFile publicURL={mediaFile.publicURL} name={mediaFile.name} />
      ) : (
        <FileToUpload handleChange={handleChange} handleDrop={handleDrop} />
      )}
    </main>
  );
};

export default Home;

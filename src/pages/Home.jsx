import { useState } from 'react';
import FileToUpload from '../components/FileToUpload.jsx';
import UploadedFile from '../components/UploadedFile.jsx';
// import uploadMediaFile from '../utils/uploadMediaFile';
import LinearIndeterminate from '../components/LinearIndeterminate';
import { supabase } from '../supabaseClient';

const Home = function () {
  const [mediaFile, setMediaFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // helper function
  const uploadMediaFile = async function (mediaFile) {
    const { data, error } = await supabase.storage
      .from('image')
      .upload(`${Date.now()}_${mediaFile.name}`, mediaFile);

    if (error) {
      console.error(error);
    }

    if (data) {
      const name = data.Key.split('/')[1];
      const { publicURL, error } = supabase.storage
        .from('image')
        .getPublicUrl(name);

      if (error) {
        console.error(error);
      }

      setMediaFile({ publicURL, name });
      setIsLoading(false);
    }
  };

  // event handlers
  const handleDrop = function (file) {
    setIsLoading(true);
    uploadMediaFile(file, setMediaFile);
  };

  const handleChange = function (event) {
    setIsLoading(true);
    uploadMediaFile(event.target.files[0]);
  };
  // prettier-ignore
  return (
    <main>
      {/* Loading */}
      {isLoading && <LinearIndeterminate />}
      {/* Component with data */}
      {!isLoading && mediaFile && <UploadedFile publicURL={mediaFile.publicURL} name={mediaFile.name} />}
      {/* Component without data */}
      {!isLoading && !mediaFile && <FileToUpload handleChange={handleChange} handleDrop={handleDrop} />}
    </main>
  );
};

export default Home;
// add css variables

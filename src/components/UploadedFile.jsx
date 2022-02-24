import { useState } from 'react';
import { ReactComponent as CheckCircle } from '../assets/check-circle.svg';

const UploadedFile = function ({ publicURL, name }) {
  const [isCopied, setIsCopied] = useState(false);

  const handleClick = async function () {
    await navigator.clipboard.writeText(publicURL);
    setIsCopied(true);
  };

  return (
    <div>
      <header>
        <CheckCircle />
        <h1>Uploaded Successfully 🎉</h1>
      </header>

      <div>
        <img src={publicURL} alt={name} />
      </div>

      <div>
        <input value={publicURL} readOnly id="copyText" />
        <button onClick={handleClick}>
          {isCopied ? 'Copied' : 'Copy Link'}
        </button>
      </div>
    </div>
  );
};

export default UploadedFile;

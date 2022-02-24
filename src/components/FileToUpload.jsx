import image from '../assets/image.svg';
import styles from './FileToUpload.module.css';

const FileToUpload = function ({ handleChange, handleDrop }) {
  return (
    <div className={styles.card}>
      <header className={styles.header}>
        <h1>Upload your image</h1>
        <p>File should be Jpeg or Png</p>
      </header>

      <div
        className={styles.dropzone}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          e.preventDefault();
          handleDrop(e.dataTransfer.files[0]);
        }}
      >
        <img className={styles.illustration} src={image} alt="mountain view" />
        <h2>Drag & Drop your image here !</h2>
      </div>

      <div className={styles.text}>
        <span>Or</span>
      </div>

      <form>
        <label htmlFor="file">Choose a file</label>
        <input type="file" id="file" name="file" onChange={handleChange} />
      </form>
    </div>
  );
};

export default FileToUpload;

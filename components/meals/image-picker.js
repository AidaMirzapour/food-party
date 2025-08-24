"use client";
import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState();

  const imageInputRef = useRef();

  function handlePickClick() {
    imageInputRef.current.click();
  }

  function handleImageChange(event) {
    const changedImage = event.target.files[0];
    if (!changedImage) {
      setPickedImage(null);
    } else {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        setPickedImage(fileReader.result);
      };
      fileReader.readAsDataURL(changedImage);
    }
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>No image picked yet.</p>}
          {pickedImage && (
            <Image
              fill
              src={pickedImage}
              alt="The image selected by the user."
            />
          )}
        </div>
        <input
          className={classes.input}
          type="file"
          id={name}
          name={name}
          accept="image/png , image/jpeg"
          ref={imageInputRef}
          onChange={handleImageChange}
        />
        <button
          className={classes.button}
          type="button"
          onClick={handlePickClick}>
          Pick an Image
        </button>
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";

const Carousel = (props) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(props.images[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      selectNewImage(selectedIndex, props.images);
    }, 2000);
    return () => clearInterval(interval);
  });

  const selectNewImage = (index, images, next = true) => {
    const condition = next
      ? selectedIndex < images.length - 1
      : selectedIndex > 0;
    const nextIndex = next
      ? condition
        ? selectedIndex + 1
        : 0
      : condition
      ? selectedIndex - 1
      : images.length - 1;
    setSelectedImage(images[nextIndex]);
    setSelectedIndex(nextIndex);
  };

  return (
    <>
      <img
        src={require(`../../assets/image/${selectedImage}`)}
        alt="Banner"
        className="mt-5 w-screen h-3/4"
      />
    </>
  );
};

export default Carousel;

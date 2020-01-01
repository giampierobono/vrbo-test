import holderjs from "holderjs";
import React, { useEffect } from "react";

const createHolderPlaceHolder = (node: HTMLImageElement) =>
  holderjs.run({
    images: node
  });

export const ImageHolderJs = ({
  src,
  alt,
  cssClasses
}: {
  src: string;
  alt: string;
  cssClasses: string;
}) => {
  let placeholder: HTMLImageElement;
  useEffect(() => {
    createHolderPlaceHolder(placeholder);
  }, [src]);
  return (
    <img
      ref={(node: HTMLImageElement) => (placeholder = node)}
      data-src={src}
      alt={alt}
      className={cssClasses + " img-fluid"}
    />
  );
};

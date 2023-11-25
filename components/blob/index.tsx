import React, { FC } from "react";
import styles from "./blob.module.scss";

type BlobProps = {
  style: any;
  image: string;
  imagePreserveAspectRatio?:string;
  imageX?: string;
  imageY?: string;
  imageHeight?:string;
  imageWidth?:string;
  backgroundColor?:string;
};

const Blob: FC<BlobProps> = (props) => {

  const { style,backgroundColor="white" ,image, imagePreserveAspectRatio="xMinYMin slice", imageX="0", imageY="0", imageHeight='100%', imageWidth='100%' } = props;

  return (
    <div className={styles["blob-container"]} style={style}>
      <div className={styles.blob}>
        <svg
          viewBox="0 0 500 500"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          id="blobSvg"
          preserveAspectRatio="xMinYMin slice"
        >
          <filter id="inset-shadow">
            {/* Shadow offset */}
            <feOffset dx="3" dy="3" />

            {/* Shadow blur */}
            <feGaussianBlur stdDeviation="5" result="offset-blur" />
            {/* Invert drop shadow to make an inset shadow */}
            <feComposite
              operator="out"
              in="SourceGraphic"
              in2="offset-blur"
              result="inverse"
            />
            {/* Cut colour inside shadow */}
            <feFlood floodColor="black" floodOpacity="1" result="color" />
            <feComposite
              operator="in"
              in="color"
              in2="inverse"
              result="shadow"
            />
            {/* Placing shadow over element */}
            <feComposite operator="over" in="shadow" in2="SourceGraphic" />
          </filter>

          <path id="blob" fill={backgroundColor} filter="url(#inset-shadow)">
            <animate
              attributeName="d"
              dur="10s"
              repeatCount="indefinite"
              values="M417.5,303Q415,356,372.5,391Q330,426,276,434.5Q222,443,175,417Q128,391,100.5,346.5Q73,302,60.5,246.5Q48,191,75.5,135.5Q103,80,164,77.5Q225,75,269.5,93Q314,111,371,123.5Q428,136,424,193Q420,250,417.5,303Z;
                M463.5,311.5Q441,373,396,422Q351,471,287,455Q223,439,179,411Q135,383,79,350Q23,317,51.5,258.5Q80,200,94,143.5Q108,87,162,49.5Q216,12,281.5,24.5Q347,37,383.5,89Q420,141,453,195.5Q486,250,463.5,311.5Z;
                M399,293Q384,336,360,387Q336,438,282,420Q228,402,189.5,383Q151,364,103,335.5Q55,307,73.5,255.5Q92,204,95.5,139.5Q99,75,157.5,46Q216,17,278.5,34Q341,51,389,90.5Q437,130,425.5,190Q414,250,399,293Z;
                M457.5,311.5Q442,373,393,414Q344,455,280,469Q216,483,166.5,443Q117,403,91.5,353.5Q66,304,45,244Q24,184,78.5,149.5Q133,115,178.5,91Q224,67,268,90Q312,113,378,119Q444,125,458.5,187.5Q473,250,457.5,311.5Z;
                M468.5,310.5Q438,371,378,384.5Q318,398,269,430Q220,462,167,434Q114,406,72.5,360Q31,314,23.5,247.5Q16,181,54,124.5Q92,68,155,47Q218,26,279.5,38Q341,50,396.5,85Q452,120,475.5,185Q499,250,468.5,310.5Z;
                M426.5,298.5Q400,347,370.5,398.5Q341,450,282.5,440.5Q224,431,164.5,424.5Q105,418,70.5,365.5Q36,313,39,251Q42,189,90,154.5Q138,120,179,82Q220,44,276.5,56.5Q333,69,396,92.5Q459,116,456,183Q453,250,426.5,298.5Z;
                M417.5,303Q415,356,372.5,391Q330,426,276,434.5Q222,443,175,417Q128,391,100.5,346.5Q73,302,60.5,246.5Q48,191,75.5,135.5Q103,80,164,77.5Q225,75,269.5,93Q314,111,371,123.5Q428,136,424,193Q420,250,417.5,303Z"
            />
          </path>

          {/* image clipped using path id */}
          <clipPath id="cp" filter="url(#inset-shadow)">
            <use href="#blob" />
          </clipPath>

          <image
            clipPath="url(#cp)"
            href={image}
            height={imageHeight}
            width={imageWidth}
            x = {imageX}
            y = {imageY}
            preserveAspectRatio={imagePreserveAspectRatio}
          />
        </svg>
      </div>
    </div>
  );
};

export default Blob;

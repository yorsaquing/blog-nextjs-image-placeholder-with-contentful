import Image from "next/image"

import image1 from "/public/images/sample-1.jpg"

/**
 * If the `src` data is from the local data source
 * you don't need to do anything just set the value of placeholder to blur
 * Next.JS will automatically generated the blur version of the imported file
 */
function ImageStaticPlaceholderBlur() {
    return <Image
        fill={true}
        src={image1}
        alt="A man in a space suit kneeling on a rock"
        placeholder="blur"
    />
}

export default ImageStaticPlaceholderBlur
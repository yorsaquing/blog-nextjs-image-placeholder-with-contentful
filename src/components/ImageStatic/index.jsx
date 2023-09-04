import Image from "next/image"

import image1 from "/public/images/sample-1.jpg"

/**
 * This is the basic usage of the Next.js Image Component.
 * The `fill` here is not required. We just need it to `contain` it within its container.
 */
function ImageStatic() {
    return <Image
        fill={true}
        src={image1}
        alt="A man in a space suit kneeling on a rock"
    />
}

export default ImageStatic
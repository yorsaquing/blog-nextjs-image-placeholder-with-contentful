import Image from "next/image"

async function ImageDynamic({ data }) {
    const { description, file } = data.fields
    const src = file.url

    return <Image
        fill={true}
        src={"https:" + src}
        alt={description}
    />
}

export default ImageDynamic
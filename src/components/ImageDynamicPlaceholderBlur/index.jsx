import Image from "next/image"

async function ImageDynamicPlaceholderBlur({ data }) {
    const { description, file } = data.fields
    // contentful is not returning the URL scheme e.g. http:// or https:// 
    // for this example, we will just add it manually
    const src = "https:" + file.url
    let plaiceholderData = false;

    try {
        // the hostname should be dynamic here if you're 
        // planning to deploy this app
        const plaiceholderDataRes = await fetch(`${process.env.HOST}/api/plaiceholder?src=` + src)

        if (plaiceholderDataRes.status === 200) {
            plaiceholderData = await plaiceholderDataRes.json()
        }

    } catch (err) {
        console.log('plaiceholderDataRes Err', err)
    }

    return <Image
        fill={true}
        src={src}
        alt={description}
        // this is to still display the image
        // even the fetching of the plaiceholder data failed
        {...plaiceholderData && {
            placeholder: "blur",
            blurDataURL: plaiceholderData.base64
        }}
    />
}

export default ImageDynamicPlaceholderBlur
import { Fragment } from "react";

import { client } from "@/lib/contentful";

import Card from "@/components/Card";
import ImageDynamic from "@/components/ImageDynamic";
import ImageDynamicPlaceholderBlur from "@/components/ImageDynamicPlaceholderBlur";

async function ImageDynamicPage() {
    const data = await client.getAsset("8NCkKbYC0x8szMSM3RgfC")

    return <Fragment>
        <Card description={`Image data from Contentful`}>
            <ImageDynamic data={data} />
        </Card>

        <Card description={`Image data from Contentful with Blur`}>
            <ImageDynamicPlaceholderBlur data={data} />
        </Card>
    </Fragment>
}

export default ImageDynamicPage
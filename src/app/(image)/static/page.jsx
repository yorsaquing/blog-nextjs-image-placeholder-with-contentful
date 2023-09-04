import { Fragment } from "react";

import Card from "@/components/Card";

import ImageStatic from "@/components/ImageStatic";
import ImageStaticRemote from "@/components/ImageStaticRemote";
import ImageStaticPlaceholderBlur from "@/components/ImageStaticPlaceholderBlur";
import ImageStaticPlaceholderData from "@/components/ImageStaticPlaceholderData";

function ImageStaticPage() {
    return <Fragment>
        <Card description={`Image without placeholder="blur"`}>
            <ImageStatic />
        </Card>
        <Card description={`Image with remote 'src' value`}>
            <ImageStaticRemote />
        </Card>
        <Card description={`Image with placeholder="blur"`}>
            <ImageStaticPlaceholderBlur />
        </Card>
        <Card description={`Image with placeholder={data}`}>
            <ImageStaticPlaceholderData />
        </Card>
    </Fragment>
}

export default ImageStaticPage
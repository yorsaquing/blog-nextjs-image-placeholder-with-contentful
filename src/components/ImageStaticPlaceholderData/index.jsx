import Image from "next/image"

import image1 from "/public/images/sample-1.jpg"

function ImageStaticPlaceholderData() {
    return <Image
        fill={true}
        src={image1}
        alt="A man in a space suit kneeling on a rock"
        placeholder={"data:image/jpeg;base64,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pNg643leed4mmdQTUlzNZVLEAASrIAEAgAoEiwA7DHVRQhNZMrNZBAAEssoFlJLGaKu8bTdlOsU443ibSwpYzjphqAixAARLKABIAKBEsKDrTn2KWUEsMyzWFlSACoEoFgSxlZbNbxs2DpZo48+nObudQUJjpiayACBAEqyLAESiACgQDtTn3FJSVnUsxK1gVJKILICgASy5WVNbxtNg6b59V8+N4m01BQY6YmsSyULIpIAESygASLAKBAO9OXcVZQk1DmNYC5soyssiwoAEsuVlTWs6TpQ1149l8+dZmhVllLz6YmuYliywCLEASrIAESwACwD0WXl6BViok1K5yzXMLmhJNSpLCgASy5WVNazpOpR34d180smhVlli43hrmJYqyTUJKSABIKBAIALAPTZePpAKWTUOc1nfOUuARLKkoAASy5WVNazpOtlHfz+hfPnWZq2Vc2WLnWV5LJoLLneSSxEsARLKABEsAoE9RePqAKlk1K5zWdc4NYBEssSwBAVLLlYTes1O1zono8/c443maoXNlWyyXlLJoLNSxJNQzKIALIAESiACz1l4eoFFJNQ5zWdYg1hKuZNZSCgQFC5gTdzpOus6J34dzljeJpZVzZoSya5SyaCzQRLDAIAESygQCACvYXh6pRQhNQxnWd4guEq5k1mySywAALkEus6s66xtJ249pcY3iazrOlzrOgJrjNZmgs0VIDmFSxAAsgASACvZZeHqUlBUoxnWdYkrWEsuUssyq5yAAsuVlRrOrOm8bSduPWWc+nNrOs6lzqUCa5Z1masqy0RLF5rBKSABIsoESwCvZZeHqpZoJUoxneN4ks1gsuEsTKrMiyAsq5lhLrOrOm8dEnTHSWc+vNrnvO5cUJZZeWdZaoNBEsXEsARKIBLLARLAD2WXj6rTOyhKXGOmNYys1zC5iyzNlucyyyAoSC5u8bud9MdCbzqXXLtxmsbxtrKxJrOpeWN5aFKUksM51mAoEgASCxLAD2XOuPqtlzuhQM46c9Yg1iLLlKszZWcyzWcrChIsubvG7nfXl1RqJvrw78JcdMbms53ixrOl5Z3iaWUazoksjOdQgoCLEBIKBIo9Ws64+q2XO6FLCY3i5ks1gNYSxM2WySy4zLKoRLLm7xq56duPZLNSa6+f0cJrO86ms43ixvG158+vOallhrOqgjOdZIKASkgSLKBC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"}
    />
}

export default ImageStaticPlaceholderData
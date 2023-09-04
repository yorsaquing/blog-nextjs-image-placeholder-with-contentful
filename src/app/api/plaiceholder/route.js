import { NextResponse } from 'next/server'
import { getPlaiceholder } from "plaiceholder";

export async function GET(request) {
    const { searchParams } = new URL(request.url)
    const src = searchParams.get('src')

    try {
        const buffer = await fetch(src).then(async (res) =>
            Buffer.from(await res.arrayBuffer())
        );

        const placeiholder = await getPlaiceholder(buffer);

        return NextResponse.json(placeiholder)
    } catch (err) {
        // you can add more detailed error here
        return NextResponse.error({
            error: 'Something went wrong',
            status: 500,
        })
    }
}
import { ImageResponse } from "@vercel/og"

// noinspection JSUnusedGlobalSymbols
export const config = {
  runtime: "experimental-edge",
}

// noinspection JSUnusedGlobalSymbols
export default async function OpenGraphImage(): Promise<ImageResponse> {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white",
        }}
        tw="text-8xl font-black"
      >
        <p>Adel</p>
        <p>Nizamutdinov</p>
      </div>
    ),
    {
      emoji: "twemoji",
    },
  )
}

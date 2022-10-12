import { ImageResponse } from "@vercel/og"

// noinspection JSUnusedGlobalSymbols
export const config = {
  runtime: "experimental-edge",
} as const

// noinspection JSUnusedGlobalSymbols
export default async function OgImage(): Promise<ImageResponse> {
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
      >
        <div tw="bg-white">
          <div tw="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <div tw="text-center">
              <p tw="mt-1 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                Adel Nizamutdinov
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  )
}

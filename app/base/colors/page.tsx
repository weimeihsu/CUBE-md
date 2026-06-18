import { DownloadDoc } from "@/components/download-doc"

const palette = [
  {
    name: "blue",
    swatches: [
      { weight: "100",  hex: "#E9F6FE" },
      { weight: "150",  hex: "#CAECFF" },
      { weight: "200",  hex: "#AAE1FF" },
      { weight: "300",  hex: "#67C7FB" },
      { weight: "400",  hex: "#35ADED" },
      { weight: "500",  hex: "#1890D2" },
      { weight: "600",  hex: "#0C76B0" },
      { weight: "700",  hex: "#076193" },
      { weight: "800",  hex: "#044D75" },
      { weight: "900",  hex: "#033A59" },
      { weight: "1000", hex: "#02293D" },
    ],
  },
  {
    name: "green",
    swatches: [
      { weight: "100",  hex: "#E9F8F0" },
      { weight: "150",  hex: "#CBEFDC" },
      { weight: "200",  hex: "#ADE6C7" },
      { weight: "300",  hex: "#6ED09B" },
      { weight: "400",  hex: "#3BB875" },
      { weight: "500",  hex: "#1D9C58" },
      { weight: "600",  hex: "#0F8144" },
      { weight: "700",  hex: "#0A6A36" },
      { weight: "800",  hex: "#06542A" },
      { weight: "900",  hex: "#044020" },
      { weight: "1000", hex: "#032C16" },
    ],
  },
  {
    name: "purple",
    swatches: [
      { weight: "100",  hex: "#F3F4FF" },
      { weight: "150",  hex: "#E3E6FF" },
      { weight: "200",  hex: "#D3D7FF" },
      { weight: "300",  hex: "#B2B8FF" },
      { weight: "400",  hex: "#929BFE" },
      { weight: "500",  hex: "#757EEC" },
      { weight: "600",  hex: "#5E66CC" },
      { weight: "700",  hex: "#4C53AC" },
      { weight: "800",  hex: "#3C418A" },
      { weight: "900",  hex: "#2D3169" },
      { weight: "1000", hex: "#1F2249" },
    ],
  },
  {
    name: "red",
    swatches: [
      { weight: "100",  hex: "#FDF2F2" },
      { weight: "150",  hex: "#FCE1E1" },
      { weight: "200",  hex: "#FACFCF" },
      { weight: "300",  hex: "#F7A9A9" },
      { weight: "400",  hex: "#F38282" },
      { weight: "500",  hex: "#EC5555" },
      { weight: "600",  hex: "#DD1B1B" },
      { weight: "700",  hex: "#BC0000" },
      { weight: "800",  hex: "#970000" },
      { weight: "900",  hex: "#750000" },
      { weight: "1000", hex: "#550000" },
    ],
  },
  {
    name: "orange",
    swatches: [
      { weight: "100",  hex: "#FFF3E6" },
      { weight: "150",  hex: "#FFE2C2" },
      { weight: "200",  hex: "#FFD19D" },
      { weight: "300",  hex: "#FFAB50" },
      { weight: "400",  hex: "#F28815" },
      { weight: "500",  hex: "#D56C00" },
      { weight: "600",  hex: "#B25700" },
      { weight: "700",  hex: "#944600" },
      { weight: "800",  hex: "#763700" },
      { weight: "900",  hex: "#592A00" },
      { weight: "1000", hex: "#3F1D00" },
    ],
  },
  {
    name: "gray",
    swatches: [
      { weight: "0",    hex: "#FFFFFF" },
      { weight: "100",  hex: "#F5F5F5" },
      { weight: "150",  hex: "#E7E7E7" },
      { weight: "200",  hex: "#D9D9D9" },
      { weight: "300",  hex: "#BDBDBD" },
      { weight: "400",  hex: "#A3A3A3" },
      { weight: "500",  hex: "#898989" },
      { weight: "600",  hex: "#707070" },
      { weight: "700",  hex: "#5C5C5C" },
      { weight: "800",  hex: "#494949" },
      { weight: "900",  hex: "#373737" },
      { weight: "1000", hex: "#262626" },
      { weight: "1100", hex: "#000000" },
    ],
  },
]

export default function ColorsPage() {
  return (
    <div>
      <div className="flex items-start justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-foreground mb-1">顏色 Colors</h1>
          <p className="text-sm text-muted-foreground">
            68 個原始顏色，分佈在 6 個集合中。
          </p>
        </div>
        <DownloadDoc filename="color-palette.md" />
      </div>

      <div className="flex flex-col gap-6">
        {palette.map(({ name, swatches }) => (
          <div key={name} className="flex items-start gap-4">
            <span className="w-14 pt-2 text-[14px] font-medium text-gray-500 shrink-0 capitalize">
              {name}
            </span>

            <div className="flex flex-wrap gap-3">
              {swatches.map(({ weight, hex }) => (
                <div
                  key={weight}
                  className="flex flex-col items-center gap-1.5"
                  style={{ width: 56 }}
                >
                    <div
                      className="w-14 h-14 rounded-sm border border-black/[0.06]"
                      style={{ background: hex }}
                    />
                    <span className="text-[14px] text-gray-500 text-center leading-tight">
                      {weight}
                    </span>
                    <span className="text-[14px] text-gray-400 text-center leading-tight">
                      {hex}
                    </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

import Image from "next/image";
import Logo01 from "@/public/images/logo.png";
import Logo02 from "@/public/images/logo3.png";
import Logo03 from "@/public/images/stripe.png";
import Logo04 from "@/public/images/DocuSign.svg";
import Logo05 from "@/public/images/fico.png";
import Logo06 from "@/public/images/plaid.png";
import Logo07 from "@/public/images/ThomsonReuters.png";
import Logo08 from "@/public/images/WoltersKluwer.png";
import Logo09 from "@/public/images/CoreLogic.png";

const mobileOrbitRadius = 46;
const mobileInnerRing = 16;
const mobileMidRing = 24;

const mobileNodes = [
  { logo: Logo02, alt: "Logo 02", angle: -90, size: "h-12 w-12", width: 26, height: 24, delay: "0s", radiusOffset: 1 },
  { logo: Logo03, alt: "Logo 03", angle: -45, size: "h-11 w-11", width: 24, height: 24, delay: "0.4s", radiusOffset: 2 },
  { logo: Logo04, alt: "Logo 04", angle: 0, size: "h-12 w-12", width: 26, height: 24, delay: "0.8s", radiusOffset: 0 },
  { logo: Logo05, alt: "Logo 05", angle: 45, size: "h-12 w-12", width: 26, height: 26, delay: "1.2s", radiusOffset: 2 },
  { logo: Logo06, alt: "Logo 06", angle: 90, size: "h-12 w-12", width: 24, height: 22, delay: "1.6s", radiusOffset: 1 },
  { logo: Logo07, alt: "Logo 07", angle: 135, size: "h-12 w-12", width: 26, height: 26, delay: "2s", radiusOffset: 2 },
  { logo: Logo08, alt: "Logo 08", angle: 180, size: "h-10 w-10", width: 20, height: 20, delay: "2.4s", muted: true, radiusOffset: -2 },
  { logo: Logo09, alt: "Logo 09", angle: -135, size: "h-10 w-10", width: 20, height: 14, delay: "2.8s", muted: true, radiusOffset: -1 },
];

export default function DataFlow() {
  const mobileOrbitPoints = mobileNodes.map((node) => {
    const angle = (node.angle * Math.PI) / 180;
    const radius = mobileOrbitRadius + (node.radiusOffset ?? 0);
    const x = 50 + Math.cos(angle) * radius;
    const y = 50 + Math.sin(angle) * radius;

    return { ...node, x, y };
  });

  return (
    <section className="relative overflow-hidden rounded-3xl bg-white/95 px-4 pt-10 pb-6 shadow-xl shadow-black/10 ring-1 ring-white/70 sm:pb-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-6 md:pb-8">
          <div className="relative flex h-[300px] items-center justify-center sm:hidden">
            <div className="relative h-[270px] w-[270px]">
              <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-2xl" />
              <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" aria-hidden="true">
                <circle cx="50" cy="50" r={mobileInnerRing} fill="none" stroke="#d1d5db" strokeWidth="0.6" />
                <circle cx="50" cy="50" r={mobileMidRing} fill="none" stroke="#cbd5f5" strokeWidth="0.5" />
                <circle
                  cx="50"
                  cy="50"
                  r={mobileOrbitRadius}
                  fill="none"
                  stroke="#93c5fd"
                  strokeWidth="0.7"
                  strokeDasharray="6 12"
                  strokeLinecap="round"
                  className="animate-[dash_10s_linear_infinite]"
                />
                {mobileOrbitPoints.map((point) => (
                  <line
                    key={`mobile-line-${point.alt}`}
                    x1="50"
                    y1="50"
                    x2={point.x}
                    y2={point.y}
                    stroke="#c7d2fe"
                    strokeWidth="0.6"
                    strokeLinecap="round"
                  />
                ))}
              </svg>

              <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 before:absolute before:-inset-2 before:animate-[spin_3s_linear_infinite] before:rounded-full before:border before:border-transparent before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] before:[background:conic-gradient(from_180deg,transparent,#3b82f6)_border-box]">
                <div className="animate-[breath_8s_ease-in-out_infinite_both]">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.04] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                    <Image className="relative" src={Logo01} width={36} height={36} alt="Logo 01" />
                  </div>
                </div>
              </div>

              {mobileOrbitPoints.map((point) => (
                <div
                  key={point.alt}
                  className="absolute z-10"
                  style={{ left: `${point.x}%`, top: `${point.y}%`, transform: "translate(-50%, -50%)" }}
                >
                  <div
                    className={`flex items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.04] ring-1 ring-gray-200/70 animate-[breath_7s_ease-in-out_infinite_both] ${
                      point.size
                    } ${point.muted ? "opacity-70" : ""}`}
                    style={{ animationDelay: point.delay }}
                  >
                    <Image
                      className="relative"
                      src={point.logo}
                      width={point.width}
                      height={point.height}
                      alt={point.alt}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden h-[320px] items-center justify-center sm:flex sm:h-[360px] lg:h-[420px]">
            <div className="absolute -z-10">
              <svg
                className="fill-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                width={164}
                height={41}
                viewBox="0 0 164 41"
                fill="none"
              >
                <circle cx={1} cy={8} r={1} fillOpacity="0.24" />
                <circle cx={1} cy={1} r={1} fillOpacity="0.16" />
                <circle cx={1} cy={15} r={1} />
                <circle cx={1} cy={26} r={1} fillOpacity="0.64" />
                <circle cx={1} cy={33} r={1} fillOpacity="0.24" />
                <circle cx={8} cy={8} r={1} />
                <circle cx={8} cy={15} r={1} />
                <circle cx={8} cy={26} r={1} fillOpacity="0.24" />
                <circle cx={15} cy={15} r={1} fillOpacity="0.64" />
                <circle cx={15} cy={26} r={1} fillOpacity="0.16" />
                <circle cx={8} cy={33} r={1} />
                <circle cx={1} cy={40} r={1} />
                <circle
                  cx={1}
                  cy={1}
                  r={1}
                  transform="matrix(-1 0 0 1 164 7)"
                  fillOpacity="0.24"
                />
                <circle
                  cx={1}
                  cy={1}
                  r={1}
                  transform="matrix(-1 0 0 1 164 0)"
                  fillOpacity="0.16"
                />
                <circle
                  cx={1}
                  cy={1}
                  r={1}
                  transform="matrix(-1 0 0 1 164 14)"
                />
                <circle
                  cx={1}
                  cy={1}
                  r={1}
                  transform="matrix(-1 0 0 1 164 25)"
                  fillOpacity="0.64"
                />
                <circle
                  cx={1}
                  cy={1}
                  r={1}
                  transform="matrix(-1 0 0 1 164 32)"
                  fillOpacity="0.24"
                />
                <circle
                  cx={1}
                  cy={1}
                  r={1}
                  transform="matrix(-1 0 0 1 157 7)"
                />
                <circle
                  cx={1}
                  cy={1}
                  r={1}
                  transform="matrix(-1 0 0 1 157 14)"
                />
                <circle
                  cx={1}
                  cy={1}
                  r={1}
                  transform="matrix(-1 0 0 1 157 25)"
                  fillOpacity="0.24"
                />
                <circle
                  cx={1}
                  cy={1}
                  r={1}
                  transform="matrix(-1 0 0 1 150 14)"
                  fillOpacity="0.64"
                />
                <circle
                  cx={1}
                  cy={1}
                  r={1}
                  transform="matrix(-1 0 0 1 150 25)"
                  fillOpacity="0.16"
                />
                <circle
                  cx={1}
                  cy={1}
                  r={1}
                  transform="matrix(-1 0 0 1 157 32)"
                />
                <circle
                  cx={1}
                  cy={1}
                  r={1}
                  transform="matrix(-1 0 0 1 164 39)"
                />
              </svg>
            </div>
            <div className="absolute -z-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={432}
                height={160}
                viewBox="0 0 432 160"
                fill="none"
              >
                <g opacity="0.6" filter="url(#filter0_f_2044_9)">
                  <path
                    className="fill-blue-500"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M80 112C62.3269 112 48 97.6731 48 80C48 62.3269 62.3269 48 80 48C97.6731 48 171 62.3269 171 80C171 97.6731 97.6731 112 80 112ZM352 112C369.673 112 384 97.6731 384 80C384 62.3269 369.673 48 352 48C334.327 48 261 62.3269 261 80C261 97.6731 334.327 112 352 112Z"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_f_2044_9"
                    x={0}
                    y={0}
                    width={432}
                    height={160}
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur
                      stdDeviation={32}
                      result="effect1_foregroundBlur_2044_9"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
            <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-px bg-gradient-to-r from-transparent via-slate-300/80 to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-px bg-gradient-to-r from-transparent via-slate-300/80 to-transparent" />
            <div className="pointer-events-none absolute inset-x-[120px] top-1/2 z-0 h-px bg-gradient-to-r from-transparent via-blue-400/70 to-transparent sm:inset-x-[200px]" />
            <div className="pointer-events-none absolute inset-x-0 top-1/2 z-0 h-px -translate-y-[64px] bg-gradient-to-r from-transparent via-slate-300/70 to-transparent before:absolute before:inset-y-0 before:w-24 before:animate-[line_10s_ease-in-out_infinite_both] before:bg-gradient-to-r before:from-transparent before:via-blue-500 before:to-transparent sm:-translate-y-[82px]" />
            <div className="pointer-events-none absolute inset-x-0 top-1/2 z-0 h-px translate-y-[64px] bg-gradient-to-r from-transparent via-slate-300/70 to-transparent before:absolute before:inset-y-0 before:w-24 before:animate-[line_10s_ease-in-out_infinite_5s_both] before:bg-gradient-to-r before:from-transparent before:via-blue-500 before:to-transparent sm:translate-y-[82px]" />
            <div className="pointer-events-none absolute inset-x-[180px] top-1/2 z-0 h-px rotate-[20deg] bg-gradient-to-r from-transparent via-slate-300/70 to-transparent sm:inset-x-[300px]" />
            <div className="pointer-events-none absolute inset-x-[180px] top-1/2 z-0 h-px -rotate-[20deg] bg-gradient-to-r from-transparent via-slate-300/70 to-transparent sm:inset-x-[300px]" />
            <div className="pointer-events-none absolute inset-y-0 left-1/2 z-0 w-px -translate-x-[160px] bg-gradient-to-b from-slate-300/70 to-transparent sm:-translate-x-[216px]" />
            <div className="pointer-events-none absolute inset-y-0 left-1/2 z-0 w-px translate-x-[160px] bg-gradient-to-t from-slate-300/70 to-transparent sm:translate-x-[216px]" />

            <div className="absolute z-10 before:absolute before:-inset-3 before:animate-[spin_3s_linear_infinite] before:rounded-full before:border before:border-transparent before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] before:[background:conic-gradient(from_180deg,transparent,#3b82f6)_border-box]">
              <div className="animate-[breath_8s_ease-in-out_infinite_both]">
                <div className="flex h-28 w-28 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                  <Image className="relative" src={Logo01} width={52} height={52} alt="Logo 01" />
                </div>
              </div>
            </div>

            <div className="relative z-10 flex flex-col">
              <article className="flex h-full w-full items-center justify-center focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-indigo-300">
                <div className="absolute -translate-x-[104px] sm:-translate-x-[136px]">
                  <div className="animate-[breath_7s_ease-in-out_3s_infinite_both]">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                      <Image className="relative" src={Logo02} width={40} height={38} alt="Logo 02" />
                    </div>
                  </div>
                </div>
                <div className="absolute translate-x-[104px] sm:translate-x-[136px]">
                  <div className="animate-[breath_7s_ease-in-out_3.5s_infinite_both]">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                      <Image className="relative" src={Logo03} width={40} height={40} alt="Logo 03" />
                    </div>
                  </div>
                </div>
                <div className="absolute -translate-x-[160px] -translate-y-[64px] sm:-translate-x-[216px] sm:-translate-y-[82px]">
                  <div className="animate-[breath_6s_ease-in-out_3.5s_infinite_both]">
                    <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                      <Image className="relative" src={Logo04} width={48} height={48} alt="Logo 04" />
                    </div>
                  </div>
                </div>
                <div className="absolute -translate-y-[64px] translate-x-[160px] sm:-translate-y-[82px] sm:translate-x-[216px]">
                  <div className="animate-[breath_6s_ease-in-out_1.5s_infinite_both]">
                    <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                      <Image className="relative" src={Logo05} width={42} height={42} alt="Logo 05" />
                    </div>
                  </div>
                </div>
                <div className="absolute translate-x-[160px] translate-y-[64px] sm:translate-x-[216px] sm:translate-y-[82px]">
                  <div className="animate-[breath_6s_ease-in-out_2s_infinite_both]">
                    <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                      <Image className="relative" src={Logo06} width={38} height={34} alt="Logo 06" />
                    </div>
                  </div>
                </div>
                <div className="absolute -translate-x-[160px] translate-y-[64px] sm:-translate-x-[216px] sm:translate-y-[82px]">
                  <div className="animate-[breath_6s_ease-in-out_2.5s_infinite_both]">
                    <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.03] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                      <Image className="relative" src={Logo07} width={50} height={50} alt="Logo 07" />
                    </div>
                  </div>
                </div>
                <div className="absolute -translate-x-[210px] opacity-60 sm:-translate-x-[292px]">
                  <div className="animate-[breath_6s_ease-in-out_2s_infinite_both]">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full border border-gray-200/60 bg-white shadow-lg">
                      <Image className="relative" src={Logo08} width={36} height={36} alt="Logo 08" />
                    </div>
                  </div>
                </div>
                <div className="absolute translate-x-[210px] opacity-60 sm:translate-x-[292px]">
                  <div className="animate-[breath_6s_ease-in-out_4s_infinite_both]">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full border border-gray-200/60 bg-white shadow-lg">
                      <Image className="relative" src={Logo09} width={36} height={24} alt="Logo 09" />
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

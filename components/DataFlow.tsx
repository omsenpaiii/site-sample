import Image from "next/image";
import Logo01 from "@/public/images/logo.png";
import Logo02 from "@/public/images/argocd.png";
import Logo03 from "@/public/images/logo3.png";
import Logo04 from "@/public/images/mailhog.png";
import Logo05 from "@/public/images/Datadog.png";
import Logo06 from "@/public/images/uipath.png";
import Logo07 from "@/public/images/postman.png";
import Logo08 from "@/public/images/posgresql.webp";
import Logo09 from "@/public/images/logo-09.svg";

const orbitRadius = 34;
const innerRing = 18;
const midRing = 26;

const orbitNodes = [
  { logo: Logo02, alt: "Logo 02", angle: -90, size: "h-16 w-16", icon: "h-8 w-auto", delay: "0s" },
  { logo: Logo03, alt: "Logo 03", angle: -45, size: "h-14 w-14", icon: "h-7 w-auto", delay: "0.4s" },
  { logo: Logo04, alt: "Logo 04", angle: 0, size: "h-16 w-16", icon: "h-8 w-auto", delay: "0.8s" },
  { logo: Logo05, alt: "Logo 05", angle: 45, size: "h-16 w-16", icon: "h-8 w-auto", delay: "1.2s" },
  { logo: Logo06, alt: "Logo 06", angle: 90, size: "h-16 w-16", icon: "h-8 w-auto", delay: "1.6s" },
  { logo: Logo07, alt: "Logo 07", angle: 135, size: "h-16 w-16", icon: "h-8 w-auto", delay: "2s" },
  { logo: Logo08, alt: "Logo 08", angle: 180, size: "h-12 w-12", icon: "h-6 w-auto", delay: "2.4s", muted: true },
  { logo: Logo09, alt: "Logo 09", angle: -135, size: "h-12 w-12", icon: "h-6 w-auto", delay: "2.8s", muted: true },
];

export default function DataFlow() {
  const orbitPoints = orbitNodes.map((node) => {
    const angle = (node.angle * Math.PI) / 180;
    const x = 50 + Math.cos(angle) * orbitRadius;
    const y = 50 + Math.sin(angle) * orbitRadius;

    return { ...node, x, y };
  });

  return (
    <section className="bg-gray-100 rounded-3xl mx-4 md:mx-8 lg:mx-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="relative flex h-[360px] items-center justify-center sm:h-[420px] lg:h-[520px]">
            <div className="relative h-full aspect-square">
              <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl" />

              <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" aria-hidden="true">
                <circle cx="50" cy="50" r={innerRing} fill="none" stroke="#d1d5db" strokeWidth="0.6" />
                <circle cx="50" cy="50" r={midRing} fill="none" stroke="#cbd5f5" strokeWidth="0.5" />
                <circle
                  cx="50"
                  cy="50"
                  r={orbitRadius}
                  fill="none"
                  stroke="#93c5fd"
                  strokeWidth="0.7"
                  strokeDasharray="6 12"
                  strokeLinecap="round"
                  className="animate-[dash_10s_linear_infinite]"
                />
                {orbitPoints.map((point) => (
                  <line
                    key={`line-${point.alt}`}
                    x1="50"
                    y1="50"
                    x2={point.x}
                    y2={point.y}
                    stroke="#c7d2fe"
                    strokeWidth="0.7"
                    strokeLinecap="round"
                  />
                ))}
                {orbitPoints.map((point) => (
                  <circle key={`node-${point.alt}`} cx={point.x} cy={point.y} r="1.3" fill="#93c5fd" />
                ))}
              </svg>

              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 before:absolute before:-inset-3 before:animate-spin before:rounded-full before:border before:border-transparent before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] before:[background:conic-gradient(from_180deg,transparent,theme(colors.blue.500))_border-box]">
                <div className="animate-[breath_8s_ease-in-out_infinite_both]">
                  <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.06] before:absolute before:inset-0 before:m-[8.334%] before:rounded-[inherit] before:border before:border-gray-700/5 before:bg-gray-200/60 before:[mask-image:linear-gradient(to_bottom,black,transparent)]">
                    <Image className="relative" src={Logo01} width={36} height={36} alt="Logo 01" />
                  </div>
                </div>
              </div>

              {orbitPoints.map((point) => (
                <div
                  key={point.alt}
                  className="absolute"
                  style={{ left: `${point.x}%`, top: `${point.y}%`, transform: "translate(-50%, -50%)" }}
                >
                  <div
                    className={`flex items-center justify-center rounded-full bg-white shadow-lg shadow-black/[0.06] ring-1 ring-gray-200/70 animate-[breath_7s_ease-in-out_infinite_both] ${
                      point.size
                    } ${point.muted ? "opacity-70" : ""}`}
                    style={{ animationDelay: point.delay }}
                  >
                    <Image className={`relative ${point.icon}`} src={point.logo} width={48} height={48} alt={point.alt} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Calendar, LucideIcon, MapIcon } from "lucide-react";
import Image from "next/image";
import { ReactNode } from "react";

export default function Features2() {
  return (
    <section className="bg-gradient-to-b from-white via-orange-200 to-white py-16 md:py-32 dark:bg-transparent">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-5xl">
        <div className="mx-auto grid gap-4 lg:grid-cols-2">
          <FeatureCard className="bg-gradient-to-t from-orange-50 to-white">
            <CardHeader className="pb-1">
              <CardHeading
                icon={MapIcon}
                title="PSI – Pre-Shipment Inspection"
                description="A Pre-Shipment Inspection (PSI) is a crucial quality control measure that provides importers with confidence that their products meet specified standards."
              />
            </CardHeader>
            <CardContent>
              <div className="px-6">
                <p>
                  At Academia, we offer professional PSI services to help
                  businesses safeguard against the risks and costs associated
                  with receiving defective or non-compliant goods. This
                  inspection process ensures that serious quality issues are
                  identified before shipment, preventing financial loss,
                  operational disruption, and damage to brand reputation.
                  Pre-shipment inspections are one of the most effective tools
                  to confirm the overall quality and conformity of a shipment.
                  They ensure that products meet international, local, and
                  client-specific requirements and regulations. For an effective
                  PSI, the goods should be between 80% and 100% ready. Samples
                  are randomly selected following internationally recognized
                  standards such as AQL, ISO 2859-1, or ANSI/ASQC Z1.4 & Z1.9.
                </p>
              </div>
            </CardContent>
          </FeatureCard>

          <FeatureCard className="bg-gradient-to-t from-blue-50 to-white">
            <CardHeader className="pb-3">
              <CardHeading
                icon={Calendar}
                title="FPC – Factory Production Control"
                description="Factory Production Control (FPC) refers to the internal control procedures a manufacturer establishes to ensure consistent product quality and traceability."
              />
            </CardHeader>

            <CardContent>
              <div className="px-6">
                <p>
                  It plays a critical role in identifying and correcting
                  non-conforming materials, processes, or products and fostering
                  continuous improvement. FPC systems must be tailored to each
                  manufacturer's specific production processes. Annual
                  surveillance audits are conducted to ensure ongoing
                  compliance. After each audit, a comprehensive report outlines
                  findings and recommendations. If the factory meets the
                  scheme’s requirements, the certification process proceeds. In
                  cases of non-compliance, corrective actions must be
                  implemented. Manufacturers view the FPC audit as a valuable
                  health check, supporting their continuous improvement efforts
                  and long-term success.
                </p>
              </div>
            </CardContent>
          </FeatureCard>

          <FeatureCard className="p-6 lg:col-span-2">
            <p className="mx-auto my-6 max-w-full text-balance text-center text-xl font-semibold">
            Reference partners / clients: Hi-sense, Gorenje, Tofas, CSI, TUV, Arcelik, Sisecam, IMQ. 
            </p>

            <div className="flex justify-center items-center mx-auto gap-6 overflow-hidden">
              <Image src="/chart.jpg" alt="chart" width={750} height={750} />
            </div>
          </FeatureCard>
        </div>
      </div>
    </section>
  );
}

interface FeatureCardProps {
  children: ReactNode;
  className?: string;
}

const FeatureCard = ({ children, className }: FeatureCardProps) => (
  <Card
    className={cn("group relative rounded-none shadow-zinc-950/5", className)}
  >
    <CardDecorator />
    {children}
  </Card>
);

const CardDecorator = () => (
  <>
    <span className="border-primary absolute -left-px -top-px block size-2 border-l-2 border-t-2"></span>
    <span className="border-primary absolute -right-px -top-px block size-2 border-r-2 border-t-2"></span>
    <span className="border-primary absolute -bottom-px -left-px block size-2 border-b-2 border-l-2"></span>
    <span className="border-primary absolute -bottom-px -right-px block size-2 border-b-2 border-r-2"></span>
  </>
);

interface CardHeadingProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const CardHeading = ({ icon: Icon, title, description }: CardHeadingProps) => (
  <div className="p-6">
    <span className="text-muted-foreground flex items-center gap-2">
      <Icon className="size-4" />
      {title}
    </span>
    <p className="mt-8 text-2xl font-semibold">{description}</p>
  </div>
);

interface DualModeImageProps {
  darkSrc: string;
  lightSrc: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

const DualModeImage = ({
  darkSrc,
  lightSrc,
  alt,
  width,
  height,
  className,
}: DualModeImageProps) => (
  <>
    <Image
      src={darkSrc}
      className={cn("hidden dark:block", className)}
      alt={`${alt} dark`}
      width={width}
      height={height}
    />
    <Image
      src={lightSrc}
      className={cn("shadow dark:hidden", className)}
      alt={`${alt} light`}
      width={width}
      height={height}
    />
  </>
);

interface CircleConfig {
  pattern: "none" | "border" | "primary" | "blue";
}

interface CircularUIProps {
  label: string;
  circles: CircleConfig[];
  className?: string;
}

const CircularUI = ({ label, circles, className }: CircularUIProps) => (
  <div className={className}>
    <div className="bg-linear-to-b from-border size-fit rounded-2xl to-transparent p-px">
      <div className="bg-linear-to-b from-background to-muted/25 relative flex aspect-square w-fit items-center -space-x-4 rounded-[15px] p-4">
        {circles.map((circle, i) => (
          <div
            key={i}
            className={cn("size-7 rounded-full border sm:size-8", {
              "border-primary": circle.pattern === "none",
              "border-primary bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_4px)]":
                circle.pattern === "border",
              "border-primary bg-background bg-[repeating-linear-gradient(-45deg,var(--color-primary),var(--color-primary)_1px,transparent_1px,transparent_4px)]":
                circle.pattern === "primary",
              "bg-background z-1 border-blue-500 bg-[repeating-linear-gradient(-45deg,var(--color-blue-500),var(--color-blue-500)_1px,transparent_1px,transparent_4px)]":
                circle.pattern === "blue",
            })}
          ></div>
        ))}
      </div>
    </div>
    <span className="text-muted-foreground mt-1.5 block text-center text-sm">
      {label}
    </span>
  </div>
);

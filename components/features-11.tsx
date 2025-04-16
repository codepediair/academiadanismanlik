import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogTitle,
  MorphingDialogImage,
  MorphingDialogSubtitle,
  MorphingDialogClose,
  MorphingDialogDescription,
  MorphingDialogContainer,
} from "./motion-primitives/morphing-dialog";

export default function Features() {
  return (
    <section
      className="dark:bg-muted/25 bg-gradient-to-b from-white via-blue-200 to-white py-16 md:py-32"
      id="services"
    >
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto grid gap-2 sm:grid-cols-5">
          <Card className="group overflow-hidden shadow-zinc-950/5 sm:col-span-3 sm:rounded-none sm:rounded-tl-xl">
            <CardHeader>
              <div className="md:p-6 flex flex-col items-start">
                <p className="font-medium text-2xl">System Certification</p>
                <p className="text-muted-foreground mt-3 max-w-sm text-sm text-start">
                  Our company is a complete solution partner with its expert
                  staff in the process of preparing management systems according
                  to the structure of organizations and providing the necessary
                  trainings in studies related to national and international
                  management systems.
                </p>
              </div>
            </CardHeader>
            <div className="relative h-fit pl-6 md:pl-12">
              <div className="absolute -inset-6 [background:radial-gradient(75%_95%_at_50%_0%,transparent,var(--color-background)_100%)]"></div>

              <div className="bg-background overflow-hidden rounded-tl-lg border-l border-t pl-2 pt-2 dark:bg-zinc-950">
                <Image
                  src="https://images.unsplash.com/photo-1648337564744-f919c7c2fc02?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="hidden dark:block"
                  alt="System Certification"
                  width={720}
                  height={420}
                />
                <Image
                  src="https://images.unsplash.com/photo-1648337564744-f919c7c2fc02?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="shadow dark:hidden"
                  alt="System Certification"
                  width={720}
                  height={420}
                />
              </div>
            </div>
          </Card>
          <Card className="overflow-hidden shadow-zinc-950/5 sm:col-span-2 sm:rounded-none sm:rounded-tr-xl">
            <CardHeader>
              <div className="md:p-6 flex flex-col items-start">
                <p className="font-medium text-2xl">Product Certification</p>
                <p className="text-muted-foreground mt-3 max-w-sm text-sm text-start">
                  Competition is fiercer than ever In today's world, the
                  products you have produced with a thousand difficulties must
                  be supported by external processes in order to withstand
                  market conditions, to compete with their counterparts in
                  Europe
                </p>
              </div>
            </CardHeader>
            <div className="relative h-fit pl-6 md:pl-12">
              <div className="absolute -inset-6 [background:radial-gradient(75%_95%_at_50%_0%,transparent,var(--color-background)_100%)]"></div>

              <div className="bg-background overflow-hidden rounded-tl-lg border-l border-t pl-2 pt-2 dark:bg-zinc-950">
                <Image
                  src="https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?q=80&w=2022&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="hidden dark:block"
                  alt="Product Certification"
                  width={720}
                  height={420}
                />
                <Image
                  src="https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?q=80&w=2022&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="shadow dark:hidden"
                  alt="Product Certification"
                  width={720}
                  height={420}
                />
              </div>
            </div>
          </Card>
          <Card className="group shadow-zinc-950/5 sm:col-span-2 sm:rounded-none bg-linear-to-tr from-cyan-100 to-white">
          <Link href="https://www.sustindex.com/auth/login?redirectTo=/home" target="_blank">
            <CardHeader className="p-6 md:p-12">
              <p className="font-medium text-4xl">Sustainability</p>
              <p className="text-muted-foreground mt-2 max-w-sm text-sm">
                Sustainability is one of the most important agenda items today.
                Problems such as climate change, natural resource scarcity and
                social inequality necessitate the adoption of a sustainable
                lifestyle. For this purpose, we work with you on sustainability
                issues and provide the consultancy you need.
              </p>
            </CardHeader>
          </Link>
          </Card>
          <Card className="group relative shadow-zinc-950/5 sm:col-span-3 sm:rounded-none">
          <Link href="/pre-shipment-inspection">
            <CardHeader className="p-6 md:p-12">
              <p className="font-medium text-4xl">
                PSI – Pre-Shipment Inspection
              </p>
              <p className="text-muted-foreground mt-2 max-w-sm text-sm">
                A Pre-Shipment Inspection (PSI) is a crucial quality control
                measure that provides importers with confidence that their
                products meet specified standards before being dispatched. At
                Academia, we offer professional PSI services to help businesses
                safeguard against the risks and costs associated with receiving
                defective or non-compliant goods
              </p>
            </CardHeader>
          </Link>
          </Card>
          <Card className="group relative shadow-zinc-950/5 sm:col-span-3 sm:rounded-none sm:rounded-bl-xl">
            <CardHeader className="p-6 md:p-12">
              <p className="font-medium text-4xl">Training</p>
              <p className="text-muted-foreground mt-2 max-w-sm text-sm">
                Our company, which includes 4 main service groups: Product
                Certification Group, System Certification Group, Training
                Support Group and Information Systems Group, aims to provide all
                the necessary support for companies to breathe from a single
                address, thus allowing great developments in a short time.
              </p>
            </CardHeader>
          </Card>
          <Card className="group relative shadow-zinc-950/5 sm:col-span-2 sm:rounded-none sm:rounded-br-xl">
            <CardHeader className="p-6 md:p-12">
              <p className="font-medium text-4xl">Project Support</p>
              <p className="text-muted-foreground mt-2 max-w-sm text-sm">
                In state-supported grant projects such as Tübitak R&D,
                Development Agency, Rural Development, IPARD, TKDK, IPA etc.; In
                line with the needs and ideas of the installed facilities
              </p>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );
}

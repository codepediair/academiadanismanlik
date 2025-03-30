import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Globe, Scale } from "lucide-react";
import Image from "next/image";

export default function Features() {
  return (
    <section className="dark:bg-muted/25 bg-zinc-50 py-16 md:py-32" id="services">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto grid gap-2 sm:grid-cols-5">
          <Card className="group overflow-hidden shadow-zinc-950/5 sm:col-span-3 sm:rounded-none sm:rounded-tl-xl">
            <CardHeader>
              <div className="md:p-6">
                <p className="font-medium text-2xl">System Certification</p>
                <p className="text-muted-foreground mt-3 max-w-sm text-sm">
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
                  src="/services.jpg"
                  className="hidden dark:block"
                  alt="payments illustration dark"
                  width={1207}
                  height={929}
                />
                <Image
                  src="/services.jpg"
                  className="shadow dark:hidden"
                  alt="payments illustration light"
                  width={1207}
                  height={929}
                />
              </div>
            </div>
          </Card>

          <div className="w-full sm:col-span-2 sm:rounded-none flex flex-col gap-2">
            <Card className="overflow-hidden shadow-zinc-950/5 sm:col-span-2 sm:rounded-none sm:rounded-tr-xl">
              <CardContent>
                <p className="mx-auto my-6 max-w-md text-balance px-6 text-center text-lg font-semibold sm:text-2xl md:p-6">
                  Product Certification
                </p>
                <p className="text-muted-foreground mt-3 max-w-sm text-sm">
                  Competition is fiercer than ever In today's world, the
                  products you have produced with a thousand difficulties must
                  be supported by external processes in order to withstand
                  market conditions, to compete with their counterparts in
                  Europe, to distinguish them from their counterparts, in short,
                  to reveal their own quality. Our product certification group
                  works with you on these issues and provides the consultancy
                  you need.
                </p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden shadow-zinc-950/5 sm:col-span-2 sm:rounded-none">
              <CardContent>
                <p className="mx-auto my-6 max-w-md text-balance px-6 text-center text-lg font-semibold sm:text-2xl md:p-6">
                  Sustainability
                </p>
                <p className="text-muted-foreground mt-3 max-w-sm text-sm">
                  Sustainability is one of the most important agenda items
                  today. Problems such as climate change, natural resource
                  scarcity and social inequality necessitate the adoption of a
                  sustainable lifestyle. For this purpose, we work with you on
                  sustainability issues and provide the consultancy you need.
                </p>
              </CardContent>
            </Card>
          </div>
          <Card className="group shadow-zinc-950/5 sm:col-span-2 sm:rounded-none sm:rounded-bl-xl bg-linear-to-tr from-cyan-100 to-white">
          <CardHeader className="p-6 md:p-12">
              <p className="font-medium text-4xl">Project Consultancy</p>
              <p className="text-muted-foreground mt-2 max-w-sm text-sm">
              In state-supported grant projects such as Tübitak R&D, Development Agency, Rural Development, IPARD, TKDK, IPA etc.; In line with the needs and ideas of the installed facilities; Researching grant programs and writing projects according to the appropriate program priority sectors, Providing project implementation consultancy in the process after the approval of the projects, In line with the scope of grant programs; preparation of progress reports, interim reports and final reports.
              </p>
            </CardHeader>
          </Card>
          <Card className="group relative shadow-zinc-950/5 sm:col-span-3 sm:rounded-none sm:rounded-br-xl">
            <CardHeader className="p-6 md:p-12">
              <p className="font-medium text-4xl">Education</p>
              <p className="text-muted-foreground mt-2 max-w-sm text-sm">
              Our company, which includes 4 main service groups: Product Certification Group, System Certification Group, Training Support Group and Information Systems Group, aims to provide all the necessary support for companies to breathe from a single address, thus allowing great developments in a short time.
              </p>
            </CardHeader>
            <CardContent className="relative h-fit px-6 pb-6 md:px-12 md:pb-12">
              <div className="grid grid-cols-4 gap-2 md:grid-cols-6">
                <div className="rounded-(--radius) aspect-square border border-dashed"></div>
                <div className="rounded-(--radius) bg-muted/50 flex aspect-square items-center justify-center border p-4">
                  <img
                    className="m-auto size-8 invert dark:invert-0"
                    src="https://oxymor-ns.tailus.io/logos/linear.svg"
                    alt="Linear logo"
                    width="32"
                    height="32"
                  />
                </div>
                <div className="rounded-(--radius) aspect-square border border-dashed"></div>
                <div className="rounded-(--radius) bg-muted/50 flex aspect-square items-center justify-center border p-4">
                  <img
                    className="m-auto size-8 invert dark:invert-0"
                    src="https://oxymor-ns.tailus.io/logos/netlify.svg"
                    alt="Netlify logo"
                    width="32"
                    height="32"
                  />
                </div>
                <div className="rounded-(--radius) aspect-square border border-dashed"></div>
                <div className="rounded-(--radius) bg-muted/50 flex aspect-square items-center justify-center border p-4">
                  <img
                    className="m-auto size-8 invert dark:invert-0"
                    src="https://oxymor-ns.tailus.io/logos/github.svg"
                    alt="github logo"
                    width="32"
                    height="32"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

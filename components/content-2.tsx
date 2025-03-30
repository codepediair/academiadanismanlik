import { Cpu, Zap, LibraryBig, Info } from 'lucide-react'
import Image from 'next/image'

export default function ContentSection() {
    return (
        <section className="py-16 md:py-32" id='about'>
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">About Us</h2>
                <div className="relative">
                    <div className="relative z-10 space-y-4 md:w-1/2">
                        <p className="text-body">
                        ACADEMIA CONSULTING <span className="text-title font-medium">is a consultancy organization consisting</span> — of experts in their fields, who have come together in order to provide the consultancy services that companies need from a single source.Our company, which includes 5 main service groups: Product Certification Group, System Certification Group, Training Support Group, Legal Compliance Group and Project Group, aims to provide all the necessary support for companies to breathe from a single address, thus allowing great developments in a short time.</p>

                        <div className="grid grid-cols-2 gap-3 pt-6 sm:gap-4">
                            <div className="space-y-3">
                                <div className="flex items-center gap-2">
                                    <Zap className="size-4" />
                                    <h3 className="text-sm font-medium">Product Certification Group</h3>
                                </div>
                                <p className="text-muted-foreground text-sm">It provides services with its expert staff in CE, TSE, TSEK, Domestic-International Trademark Registration, Patent, Gost-R, Industrial Design, Utility Model certifications.</p>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <Cpu className="size-4" />
                                    <h3 className="text-sm font-medium">System Certification Group</h3>
                                </div>
                                <p className="text-muted-foreground text-sm">ISO 9001:2015 Quality Management System, ISO 27001:2013 Information Security System, ISO 14001 Environmental Management Systems, ISO 45001:2018 Occupational Health and Safety Systems HACCP, ISO 17799, ISO 13485, ISO/TS 16949:2002.</p>
                            </div>
                            <div className="space-y-3">
                                <div className="flex items-center gap-2">
                                    <LibraryBig className="size-4" />

                                    <h3 className="text-sm font-medium">Education Group</h3>
                                </div>
                                <p className="text-muted-foreground text-sm">Considering the EU harmonization process, it ensures the adaptation of the employees in the certification process to the system and provides the institutionalization trainings needed by the companies under the changing economic and technological conditions..</p>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <Info className="size-4" />
                                    <h3 className="text-sm font-medium">Information Systems Group</h3>
                                </div>
                                <p className="text-muted-foreground text-sm">It ensures that all these institutionalization steps that are tried to be implemented are based on computers, and that special solutions are found by analyzing the software and hardware requirements of the company.</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 h-fit md:absolute md:-inset-y-12 md:inset-x-0 md:mt-0">
                        <div aria-hidden className="bg-linear-to-l z-1 to-background absolute inset-0 hidden from-transparent to-55% md:block"></div>
                        <div className="border-border/50 relative rounded-2xl border border-dotted p-2">
                            <Image src="/about.jpg" className="hidden rounded-[12px] dark:block" alt="payments illustration dark" width={1207} height={929} />
                            <Image src="/about.jpg" className="rounded-[12px] shadow dark:hidden" alt="payments illustration light" width={1207} height={929} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

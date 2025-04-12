import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Settings2, Sparkles, Zap } from 'lucide-react'
import Image from 'next/image'
import { ReactNode } from 'react'

export default function FeaturesN() {
    return (
        <section className="bg-gradient-to-b from-white via-blue-200 to-white  py-16 md:py-32">
            <div className="@container mx-auto max-w-5xl px-6">
                <div className="text-center">
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl">Our Services</h2>
                </div>
                <div className="@min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto mt-8 grid max-w-sm gap-6 *:text-center md:mt-16">
                    <Card className="bg-transparent border-0 shadow-none group">
                        <CardHeader className="pb-3">
                            {/* <CardDecorator>
                                <Zap className="siz-6 bg-background" aria-hidden/>
                            </CardDecorator> */}

                            <Image src="https://images.unsplash.com/photo-1682561477064-44fb2dfd82bf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="system certification" width={100} height={100}/>
                            <h3 className="mt-6 font-medium">System Certification</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut cupiditate minima earum dolore, tempora eius, et modi velit debitis quisquam laudantium temporibus, a atque explicabo porro reiciendis quae eveniet ad.</p>
                        </CardContent>
                    </Card>

                    <Card className="group shadow-zinc-950/5">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Settings2 className="size-6" aria-hidden />
                            </CardDecorator>

                            <h3 className="mt-6 font-medium">You have full control</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="mt-3 text-sm">From design elements to functionality, you have complete control to create a unique and personalized experience.</p>
                        </CardContent>
                    </Card>

                    <Card className="group shadow-zinc-950/5">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Sparkles className="size-6" aria-hidden />
                            </CardDecorator>

                            <h3 className="mt-6 font-medium">Powered By AI</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="mt-3 text-sm">Elements to functionality, you have complete control to create a unique experience.</p>
                        </CardContent>
                    </Card>
                    <Card className="group shadow-zinc-950/5">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Zap className="size-6" aria-hidden />
                            </CardDecorator>

                            <h3 className="mt-6 font-medium">Customizable</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="text-sm">Extensive customization options, allowing you to tailor every aspect to meet your specific needs.</p>
                        </CardContent>
                    </Card>

                    <Card className="group shadow-zinc-950/5">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Settings2 className="size-6" aria-hidden />
                            </CardDecorator>

                            <h3 className="mt-6 font-medium">You have full control</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="mt-3 text-sm">From design elements to functionality, you have complete control to create a unique and personalized experience.</p>
                        </CardContent>
                    </Card>

                    <Card className="group shadow-zinc-950/5">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Sparkles className="size-6" aria-hidden />
                            </CardDecorator>

                            <h3 className="mt-6 font-medium">Powered By AI</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="mt-3 text-sm">Elements to functionality, you have complete control to create a unique experience.</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
    <div className="relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:bg-transparent dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
        <div aria-hidden className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div aria-hidden className="bg-radial to-background absolute inset-0 from-transparent to-75%" />
        <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">{children}</div>
    </div>
)

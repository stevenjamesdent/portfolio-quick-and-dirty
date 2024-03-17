'use client'

import BriefDetail from "@/components/BriefDetail/BriefDetail";
import Button from "@/components/Button/Button";
import Career from "@/components/Career/Career";
import Content from "@/components/Content/Content";
import Divider from "@/components/Divider/Divider";
import Heading from "@/components/Heading/Heading";
import Hero from "@/components/Hero/Hero";
import Showcase from "@/components/Showcase/Showcase";
import Technologies from "@/components/Technologies/Technologies";
import { DesktopIcon, MagicWandIcon, RocketIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
	const [detailedProfile, setDetailedProfile] = useState(false);
	const [techModalOpen, setTechModalOpen] = useState(false);

	return (
		<>
			<main>
				<Hero />

				<Career />

				<section className='section bg-midnight text-white'>
					<div className="gutter laptop:gutter-large">
						<BriefDetail
							active={detailedProfile}
							brief={
								<Content>
									<Heading tag='h2' appearance='h4'>A Brief History Of Me</Heading>
									<p>I first started working in the industry during my second year of University, being someone who has always learned better by doing rather than listening, and being confident enough in my skills at the time to sell them, I started freelancing outside of University hours. I worked with a variety of different clients, from solicitors and photographers to heritage charities and more.</p>
									<p>In my final year of Uni, I secured a position at an IT Solutions company ahead of my graduation where I had the chance to work across just about every creative area of that business. I became experienced in UI Design, UI Development, Graphics Design, Brand Development, and started to dabble in Backend Development - albeit to...</p>
								</Content>
							}
							detail={
								<Content>
									<Heading tag='h2' appearance='h4'>A Not-So-Brief History Of Me</Heading>
									<p>I first started working in the industry during my second year of University, being someone who has always learned better by doing rather than listening, and being confident enough in my skills at the time to sell them, I started freelancing outside of University hours. I worked with a variety of different clients, from solicitors and photographers to heritage charities and more.</p>
									<p>In my final year of Uni, I secured a position at an IT Solutions company ahead of my graduation where I had the chance to work across just about every creative area of that business. I became experienced in UI Design, UI Development, Graphics Design, Brand Development, and started to dabble in Backend Development - albeit to a limited degree.</p>
									<p>In my next role I focused entirely on UI Development and honed my skills as a modern web developer. Testing, maintaining, and optimising websites became second nature at this point, and I got a real taste for NodeJS-based backend development.</p>
									<p>I&apos;ve always enjoyed my passion projects, and outside of working hours I&apos;ve worked on a number of different ones. My latest and most challenging involved the design and development of a pair of mobile applications (both iOS & Android) as well as an accompanying marketing website built in NextJS and a NodeJS & Firebase backend complete with REST API.</p>
									<p>I prefer to call myself a &apos;UI Engineer&apos; because I feel it encompasses my skills quite nicely, I&apos;m confident and experienced not only in Frontend Development, but also in UI Design and NodeJS Backend Development.</p>
									<p>On the personal side of things, I enjoy hobbies such as analogue photography, hiking, metal detecting, gaming, and cooking - this isn&apos;t Tinder so I&apos;ll stop there, but feel free to ask me anything by <Link href="https://linkedin.com/in/stevenjdent" target="_blank">messaging me on LinkedIn</Link>!</p>
									<p>Thanks for visiting!</p>
									<p>Steven.</p>
								</Content>
							}
						/>
						<Button
							onClick={() => setDetailedProfile((current) => (!current))}
							title={detailedProfile ? 'Show Less' : 'Show More'}
							className='text-cyan underline mt-5'
							unstyled
						/>
					</div>
				</section>

				<section className="section bg-twilight">
					<Content className="gutter-large text-center text-white">
						<Heading tag='h2' appearance='h4'>Preferred Tech Stack</Heading>
						<p>
							Keep in mind this would just be my preferred approach to a project if I were given free-reign over everything, feel free to take a look at the <Button className='text-cyan underline' onClick={() => setTechModalOpen(true)} unstyled>full list of technologies</Button> in which I have experience.
						</p>
					</Content>

					<div className="flex flex-col laptop:flex-row gap-10 mt-10 max-laptop:gutter gutter-small laptop-l:gutter">
						<div className="basis-1/3 rounded-2xl p-8 text-center text-white bg-midnight shadow-2xl">
							<RocketIcon className='mx-auto mb-5' width={25} height={25} />
							<Heading tag='h3' appearance='h5'>Backend</Heading>
							<Divider className='opacity-15 my-5' />
							<ul>
								<li>Firebase + Firebase Cloud Functions</li>
								<li>Cloud Firestore (No SQL DB)</li>
								<li>Google Identity Platform (Auth)</li>
								<li>NodeJS + TypeScript (API)</li>
								<li>Cloudinary API (Media Uploads)</li>
								<li>SendGrid API (Transac. Emails)</li>
								<li>Github Actions (CI/CD)</li>
							</ul>
						</div>
						<div className="basis-1/3 rounded-2xl p-8 text-center text-white bg-midnight shadow-2xl">
							<DesktopIcon className='mx-auto mb-5' width={25} height={25} />
							<Heading tag='h3' appearance='h5'>Frontend</Heading>
							<Divider className='opacity-15 my-5' />
							<ul>
								<li>React or React Native</li>
								<li>Redux Toolkit</li>
								<li>TypeScript + Jest + React Test. Lib.</li>
								<li>SCSS Modules + Tailwind CSS</li>
								<li>StoryBlok CMS or Markdown</li>
								<li>Github Actions (CI/CD)</li>
								<li>Lighthouse + Bugsnag (QA)</li>
							</ul>
						</div>
						<div className="basis-1/3 rounded-2xl p-8 text-center text-white bg-midnight shadow-2xl">
							<MagicWandIcon className='mx-auto mb-5' width={25} height={25} />
							<Heading tag='h3' appearance='h5'>Design & Logistics</Heading>
							<Divider className='opacity-15 my-5' />
							<ul>
								<li>Adobe Illustrator</li>
								<li>Adobe PhotoShop</li>
								<li>Adobe After Effects + Lottie</li>
								<li>Adobe XD</li>
								<li>Jira or Azure DevOps</li>
							</ul>
						</div>
					</div>
				</section>

				<section className="section bg-midnight">
					<Content className="gutter-large text-center text-white">
						<Heading tag='h2' appearance='h4'>Project Showcase</Heading>
						<p>
							Since most of my work does not belong to me, I&apos;m unable to show a wide variety of projects publicly. However my showcase project, SNIPPR, encompasses my entire skillset quite nicely - from backend development to UI Design and Frontend Development. SNIPPR is designed to be the software of choice for mobile barbers and hairdressers - think Uber but for hair stylists. I came up with the idea myself a few years ago and pursued it as a passion project outside of working hours.
						</p>
					</Content>
					<Showcase />
				</section>
			</main>

			<Technologies active={techModalOpen} onClose={() => setTechModalOpen(false)} />
		</>
	);
}

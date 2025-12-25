import { FC } from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import { about } from '@/data/images';

export type AboutProps = {
	className?: string;
};

const About: FC<AboutProps> = ({ className }: AboutProps) => {
	return (
		<div
			className={clsx(
				'flex flex-col gap-10 px-10 md:px-20 lg:px-56',
				className
			)}
			id="about"
		>
			<div className={clsx('flex flex-col gap-2 md:gap-8')}>
				<span className="text-base md:text-xl lg:text-3xl font-semibold text-secondary-text font-sans text-center md:text-left order-last lg:order-first">
					We offer our guests{' '}
					<span className="italic font-bold font-serif text-primary">
						unique
					</span>{' '}
					rooms filled with{' '}
					<span className="italic font-bold font-serif text-secondary">
						comfort
					</span>{' '}
					to ensure their stay can be the most{' '}
					<span className="italic font-bold font-serif text-slate-600">
						relaxing
					</span>{' '}
					stay that they have ever{' '}
					<span className="italic font-bold font-serif text-secondary-text">
						experienced
					</span>
				</span>

				<div className="grid grid-cols-3 place-items-center gap-2 md:gap-8">
					<Image
						src={about[0]}
						className="col-span-3 md:col-span-1 rounded-3xl w-full aspect-square"
						alt=""
						loading="lazy"
					/>
					<Image
						src={about[1]}
						className="col-span-3 md:col-span-2 rounded-3xl h-full"
						alt=""
						loading="lazy"
					/>
				</div>
			</div>

			<div className="flex flex-col gap-2 md:gap-8">
				<span className="text-base md:text-xl lg:text-3xl font-semibold text-primary font-sans text-center md:text-right order-last lg:order-first">
					Our homestay is close to many{' '}
					<span className="italic font-bold font-serif text-primary-text">
						attractions
					</span>{' '}
					to make it easy for guests to enjoy the{' '}
					<span className="italic font-bold font-serif text-secondary-text">
						beautiful scenery
					</span>{' '}
					of the area.
				</span>

				<div className="grid grid-cols-7 place-items-center gap-2 md:gap-8">
					<Image
						src={about[2]}
						className="col-span-7 md:col-span-5 rounded-3xl w-full h-full"
						alt=""
						loading="lazy"
					/>
					<Image
						src={about[3]}
						className="col-span-7 md:col-span-2 rounded-3xl w-full h-full"
						alt=""
						loading="lazy"
					/>
				</div>
			</div>

			<div className="flex flex-col gap-2 md:gap-8">
				<span className="text-base md:text-xl lg:text-3xl font-semibold font-sans text-center order-last lg:order-first text-secondary-text">
					Our cafe offer a range of{' '}
					<span className="italic font-bold font-serif text-secondary">
						delicious
					</span>{' '}
					and{' '}
					<span className="italic font-bold font-serif text-primary">
						fresh
					</span>{' '}
					foods and beverages that are{' '}
					<span className="italic font-bold font-serif text-secondary-text">
						healthy
					</span>{' '}
					and{' '}
					<span className="italic font-bold font-serif text-slate-600">
						nutritious
					</span>{' '}
					for our customers
				</span>

				<div className="grid grid-cols-2 place-items-center gap-2 md:gap-8">
					<Image
						src={about[4]}
						className="col-span-2 md:col-span-1 rounded-3xl h-full aspect-video"
						alt=""
						loading="lazy"
					/>
					<Image
						src={about[5]}
						className="col-span-2 md:col-span-1 rounded-3xl w-full aspect-square"
						alt=""
						loading="lazy"
					/>
				</div>
			</div>
		</div>
	);
};

export default About;

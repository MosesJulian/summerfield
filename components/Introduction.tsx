import clsx from 'clsx';
import Link from 'next/link';
import { FC } from 'react';

export type IntroductionProps = {
	className?: string;
};

const Introduction: FC<IntroductionProps> = ({
	className,
}: IntroductionProps) => {
	const bookingMessage = `Hello, I'm interested in booking a room. Please let me know if there is availability.`;

	return (
		<div
			className={clsx(
				'flex gap-4 introduction justify-center items-center',
				className
			)}
			id="home"
		>
			<div className="flex flex-col gap-3 lg:gap-10 lg:px-36 max-w-[1000px] px-8 md:px-16">
				<h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-white flex gap-6">
					Unforgetable vacation without all the hassle
				</h1>
				<p className="text-base md:text-lg lg:text-xl text-white">
					Summerfield ensures your stay is as comfortable as possible. We offer
					guests a full range of amenities and services. With our dedicated
					staffs, your stay can be as relaxing or active as you want it to be.
				</p>

				<Link
					href={`https://api.whatsapp.com/send/?phone=%2B6285211662279&text=${bookingMessage}&type=phone_number&app_absent=0`}
					target="_blank"
					className="max-w-max"
				>
					<button className="text-xs md:text-sm lg:text-base rounded-full uppercase bg-secondary text-white text-center max-w-max p-4 font-semibold transition-colors duration-300 hover:bg-primary-text">
						Book your stay
					</button>
				</Link>
			</div>
		</div>
	);
};

export default Introduction;

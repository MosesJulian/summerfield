import clsx from 'clsx';
import { FC } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { attractions } from '@/data/images';
import Image from 'next/image';

export type AttractionsProps = {
	className?: string;
};

const Attractions: FC<AttractionsProps> = ({ className }: AttractionsProps) => {
	return (
		<div
			className={clsx(
				'flex flex-col gap-8 justify-center items-center px-10 md:px-20 lg:px-56',
				className
			)}
			id="attractions"
		>
			<h1 className="text-4xl font-bold text-primary-text">
				Attractions Near Us
			</h1>

			<Carousel
				showArrows={true}
				showIndicators={true}
				infiniteLoop={true}
				showThumbs={false}
				dynamicHeight={false}
				autoPlay={true}
				interval={5000}
				className="w-full"
			>
				{attractions.map((attraction, index) => (
					<div key={index} className="flex flex-col gap-8">
						<h2 className="text-xl font-semibold">{attraction.title}</h2>

						<div className="grid grid-cols-2 gap-8">
							{attraction.images.map((image, index) => (
								<Image
									key={index}
									src={image}
									className="col-span-2 md:col-span-1 rounded-3xl aspect-square max-w-full max-h-[350px]"
									alt=""
									loading="lazy"
								/>
							))}
						</div>

						<div className="text-lg font-semibold">
							{attraction.description}
						</div>
					</div>
				))}
			</Carousel>
		</div>
	);
};

export default Attractions;

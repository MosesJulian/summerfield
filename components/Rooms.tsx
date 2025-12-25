import clsx from 'clsx';
import { FC } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image';
import { room1, room2 } from '@/data/images';

export type RoomsProps = {
	className?: string;
};

const Rooms: FC<RoomsProps> = ({ className }: RoomsProps) => {
	return (
		<div
			className={clsx(
				'grid grid-cols-2 gap-8 justify-center items-stretch px-10 md:px-20 lg:px-56',
				className
			)}
			id="rooms"
		>
			<div className="col-span-2 text-xl font-bold text-center">
				<h1 className="text-4xl font-bold text-primary-text">Our Rooms</h1>
			</div>

			<div className="flex flex-col gap-5 w-full p-5 col-span-2 md:col-span-1 z-[5] rounded-3xl shadow-lg">
				<h2 className="text-xl font-semibold">Summer One</h2>

				<Carousel
					showArrows={true}
					showIndicators={true}
					infiniteLoop={true}
					showThumbs={false}
					dynamicHeight={false}
					autoPlay={true}
					interval={5000}
					className="max-w-full max-h-[350px]"
				>
					{room1.images.map((image, index) => (
						<div key={index} className="max-w-full max-h-[350px]">
							<Image
								src={image}
								className="rounded-3xl aspect-square max-w-full max-h-[350px]"
								alt=""
								loading="lazy"
							/>
						</div>
					))}
				</Carousel>

				<div className="text-lg text-justify">
					<span className="text-xl font-semibold">Summer One</span> is located
					on the 2nd floor. It has a private balcony and an outdoor bathtub. It
					has Free Wifi and a TV. The room is equipped with a mini fridge and a
					water kettle. The room has a size of 35m². The room has a hairdryer
					and an air conditioner.
				</div>
			</div>

			<div className="flex flex-col gap-5 w-full p-5 col-span-2 md:col-span-1 z-[5] rounded-3xl shadow-lg">
				<h2 className="text-xl font-semibold">Summer Two</h2>

				<Carousel
					showArrows={true}
					showIndicators={true}
					infiniteLoop={true}
					showThumbs={false}
					dynamicHeight={false}
					autoPlay={true}
					interval={5000}
					className="max-w-full max-h-[350px]"
				>
					{room2.images.map((image, index) => (
						<div key={index} className="max-w-full max-h-[350px]">
							<Image
								src={image}
								className="rounded-3xl aspect-square max-w-full max-h-[350px]"
								alt=""
								loading="lazy"
							/>
						</div>
					))}
				</Carousel>

				<div className="text-lg text-justify">
					<span className="text-xl font-semibold">Summer Two</span> is located
					on the 3rd floor. It has 2 private balconies. It has Free Wifi and a
					TV. The room is equipped with a mini fridge and a water kettle. The
					room has a size of 28m². The room has a hairdryer and an air
					conditioner.
				</div>
			</div>
		</div>
	);
};

export default Rooms;

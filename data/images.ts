import RoomOne1 from '@/public/Rooms/Room1-1.jpg';
import RoomOne2 from '@/public/Rooms/Room1-2.jpg';
import RoomOne3 from '@/public/Rooms/Room1-3.jpg';
import RoomOne4 from '@/public/Rooms/Room1-4.jpg';
import RoomOne5 from '@/public/Rooms/Room1-5.jpg';
import RoomOne6 from '@/public/Rooms/Room1-6.jpg';
import RoomOne7 from '@/public/Rooms/Room1-7.jpg';

import RoomTwo1 from '@/public/Rooms/Room2-1.jpg';
import RoomTwo2 from '@/public/Rooms/Room2-2.jpg';
import RoomTwo3 from '@/public/Rooms/Room2-3.jpg';
import RoomTwo4 from '@/public/Rooms/Room2-4.jpg';

import Cokel1 from '@/public/Attractions/Cokel1.jpg';
import Cokel2 from '@/public/Attractions/Cokel2.jpg';

import Kasap1 from '@/public/Attractions/Kasap1.jpg';
import Kasap2 from '@/public/Attractions/Kasap2.jpg';

import Watukarung1 from '@/public/Attractions/Watukarung1.jpg';
import Watukarung2 from '@/public/Attractions/Watukarung2.jpg';

import Barong1 from '@/public/Attractions/Barong1.jpg';
import Barong2 from '@/public/Attractions/Barong2.jpg';

import Waduk1 from '@/public/Attractions/Waduk1.jpg';
import Waduk2 from '@/public/Attractions/Waduk2.jpg';

import About1 from '@/public/About/About1.jpg';
import About2 from '@/public/About/About2.jpg';
import About3 from '@/public/About/About3.jpg';
import About4 from '@/public/About/About4.jpg';
import About5 from '@/public/About/About5.jpg';
import About6 from '@/public/About/About6.jpg'

import { StaticImageData } from 'next/image';

export type Rooms = {
	images: StaticImageData[];
};

export type Attractions = Array<{
	title: string;
	images: StaticImageData[];
	description: string;
}>;

const room1: Rooms = {
	images: [
		RoomOne1,
		RoomOne2,
		RoomOne3,
		RoomOne4,
		RoomOne5,
		RoomOne6,
		RoomOne7,
	],
};

const room2: Rooms = { images: [RoomTwo1, RoomTwo2, RoomTwo3, RoomTwo4] };

const attractions: Attractions = [
	{
		title: 'Boat Trip at Cokel River',
		images: [Cokel1, Cokel2],
		description:
			'In Cokel River, you can enjoy the boat trip with your family. The boat trip will take you trough the forest and you can see the beautiful nature of Watukarung. The boat trip will take around 1 hour.',
	},
	{
		title: 'Hill View at Kasap Beach',
		images: [Kasap1, Kasap2],
		description:
			'At Kasap Beach, you can get a beautiful view from the hill. There is a built road to get to the top of the hill so you can see the view of Kasap Beach. The hill is also a good place to see the sunset.',
	},
	{
		title: 'Watukarung Beach',
		images: [Watukarung1, Watukarung2],
		description:
			'The Watukarung Beach is a beautiful beach with white sand. The beach has a good wave for surfing all day long. Though be careful of the waves in the morning as it is quite strong.',
	},
	{
		title: 'Grojokan Dhuwur Barong River',
		images: [Barong1, Barong2],
		description:
			'In Barong River, you can swim freely without having to worry about waves. The river is clean and has a beautiful view. Not only that, you can also enjoy the waterfall in the river.',
	},
	{
		title: 'Waduk Beach',
		images: [Waduk1, Waduk2],
		description:
			'Waduk Beach has a beautiful view of the sea. It also has a great view of the sunset in the afternoon. The beach is also a good place to swim as the waves are not too strong.',
	},
];

const about: StaticImageData[] = [
	About1,
	About2,
	About3,
	About4,
	About5,
	About6,
];

export { room1, room2, attractions, about };
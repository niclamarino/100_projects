import uuid from "uuid";

export const trains = [
	{
		origin: 'Milan',
		destination: 'Milan',
		time: '10:00',
		arrival: '11:00',
		duration: '2h 07s',
		date: '07/22/2019',
		adultPrice: 13.00,
		childPrice: 7.00,
		id: uuid()
	},
	{
		origin: 'Milan',
		destination: 'Milan',
		time: '11:00',
		arrival: '12:00',
		duration: '2h 07s',
		date: '07/22/2019',
		adultPrice: 13.00,
		childPrice: 7.00,
		id: uuid()
	},
	{
		origin: 'Milan',
		destination: 'Rome',
		time: '11:00',
		arrival: '12:00',
		duration: '2h 07s',
		date: '07/22/2019',
		adultPrice: 13.00,
		childPrice: 7.00,
		id: uuid()
	},
	{
		origin: 'Rome',
		destination: 'Milan',
		time: '11:00',
		arrival: '12:00',
		duration: '2h 07s',
		date: '07/22/2019',
		adultPrice: 13.00,
		childPrice: 7.00,
		id: uuid()
	},
	{
		origin: 'Rome',
		destination: 'Milan',
		time: '1:00',
		arrival: '02:00',
		duration: '2h 07s',
		date: '07/22/2019',
		adultPrice: 13.00,
		childPrice: 7.00,
		id: uuid()
	}
]
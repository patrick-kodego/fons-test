import { HouseDoorFill, CartFill, PeopleFill, BagFill, BarChartFill, 
    BoxArrowInRight, CurrencyDollar, Wallet, Clipboard2Fill } from 'react-bootstrap-icons';

import img1 from '../assets/img/img1.png';
import img2 from '../assets/img/img2.png';
import img3 from '../assets/img/img3.png';





export const SidebarData = [
  {
    icon: HouseDoorFill,
    heading: 'Dashboard',
  },
  {
    icon: CartFill,
    heading: 'Orders',
  },
  {
    icon: PeopleFill,
    heading: 'Customers',
  },
  {
    icon: BagFill,
    heading: 'Products',
  },
  {
    icon: BarChartFill,
    heading: 'Analytics',
  },
  {
    icon: BoxArrowInRight,
    heading: 'Logout',
  },
];

export const CardsData = [
  {
    title: 'Sales',
    color: {
      backGround: 'linear-gradient(180deg, #bf67ff 0%, #c484f3 100%)',
      boxShadow: '0px 10px 20px 0px #e0c6f5',
    },
    barValue: 70,
    value: '25,970',
    png: CurrencyDollar,
    series: [
      {
        name: 'Sales',
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: 'Revenue',
    color: {
      backGround: 'linear-gradient(180deg, #FF919D 0%, #FC929D 100%)',
      boxShadow: '0px 10px 20px 0px #FDC0C7',
    },
    barValue: 80,
    value: '15,970',
    png: Wallet,
    series: [
      {
        name: 'Sales',
        data: [10, 200, 67, 87, 124, 109, 17],
      },
    ],
  },
  {
    title: 'Expenses',
    color: {
      backGround: 'linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)',
      boxShadow: '0px 10px 20px 0px #F9D59B',
    },
    barValue: 70,
    value: '5,970',
    png: Clipboard2Fill,
    series: [
      {
        name: 'Sales',
        data: [10, 20, 13, 15, 25, 22, 30],
      },
    ],
  }
];

export const UpdatesData = [
  {
    img: img1,
    name: "Carlo Dela Cruz",
    noti: " has ordered Apple Omnitrix watch 250000 battery.",
    time: "30 years ago",
  },
  {
    img: img2,
    name: "Carlo Dela Cruz",
    noti: " purchased 10 house and lots..",
    time: "2 minutes ago",
  },
  {
    img: img3,
    name: "Carlo Dela Cruz",
    noti: " ordered 10kg patty burger and XXXL Fries",
    time: "20 seconds ago",
  },
];

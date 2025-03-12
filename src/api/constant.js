import images from '../assets/images';
import {
  AboutUs,
  ChangePassword,
  FavoriteSaloon,
  GetNotification,
  GiftIcon,
  LogOut,
  MyBookingHistory,
  MyProfile,
  PaymentMethods,
  PrivacyPolicy,
  ReferEarn,
  TrueIcon,
} from '../assets/svg';
import {moderateScale} from '../common/constants';
import strings from '../i18n/strings';
import {StackNav} from '../navigation/NavigationKeys';

export const OnBoardingSlideData = [
  {
    titleText: 'Explore Barber Shop in Your Area',
    descriptionText:
      'Quam laoreet eget vel amet enim, pretium. Pelle ntesque tellus erat in sed urna porttitor. Scelerisque lectus',
    image: images.onBordingImg1,
  },
  {
    titleText: 'Explore Barber Shop in Your Area',
    descriptionText:
      'Quam laoreet eget vel amet enim, pretium. Pelle ntesque tellus erat in sed urna porttitor. Scelerisque lectus',
    image: images.onBordingImg2,
  },
  {
    titleText: 'Explore Barber Shop in Your Area',
    descriptionText:
      'Quam laoreet eget vel amet enim, pretium. Pelle ntesque tellus erat in sed urna porttitor. Scelerisque lectus',
    image: images.onBordingImg3,
  },
];

export const socialLoginType = [
  {
    name: 'Facebook',
    icon: 'logo-facebook',
  },
  {
    name: 'Google',
    icon: 'logo-google',
  },
  {
    name: 'Twitter',
    icon: 'logo-twitter',
  },
  {
    name: 'LinkedIn',
    icon: 'logo-linkedin',
  },
];

export const genderDataArr = [
  {label: 'Male', value: 'Male'},
  {label: 'Female', value: 'Female'},
  {label: 'Other', value: 'Other'},
];

export const homeBannerData = [
  images.banner1,
  images.banner2,
  images.banner1,
  images.banner2,
  images.banner1,
  images.banner2,
  images.banner1,
  images.banner2,
];

export const categoryData = [
  {id: 1, name: 'Haircut', image: images.catImg1},
  {id: 2, name: 'Shaves', image: images.catImg2},
  {id: 3, name: 'Mackup', image: images.catImg3},
  {id: 4, name: 'Nail Cut', image: images.catImg4},
  {id: 5, name: 'Hair Color', image: images.catImg5},
  {id: 6, name: 'Haircut', image: images.catImg1},
  {id: 7, name: 'Shaves', image: images.catImg2},
  {id: 8, name: 'Mackup', image: images.catImg3},
  {id: 9, name: 'Nail Cut', image: images.catImg4},
  {id: 10, name: 'Hair Color', image: images.catImg5},
];

export const salonData = [
  {
    id: 1,
    name: 'Serenity Salon',
    location: '2464 Royal Ln. Mesa, New Jerscas, CA 95132',
    rating: 4.5,
    noOfPeopleRated: 76,
    image: images.salonImg1,
    distance: '2 km',
  },
  {
    id: 2,
    name: 'The Cleanup',
    location: '2464 Royal Ln. Mesa, New Jerscas, CA 95132',
    rating: 4.8,
    noOfPeopleRated: 10,
    image: images.salonImg2,
    distance: '6 km',
  },
  {
    id: 3,
    name: 'Uptown Hair',
    location: '2464 Royal Ln. Mesa, New Jerscas, CA 95132',
    rating: 4.5,
    noOfPeopleRated: 100,
    image: images.salonImg3,
    distance: '13 km',
  },
  {
    id: 4,
    name: 'Curls & More',
    location: '2464 Royal Ln. Mesa, New Jerscas, CA 95132',
    rating: 4.5,
    noOfPeopleRated: 76,
    image: images.salonImg4,
    distance: '2 km',
  },
];
export const profileCategoryData = [
  {
    id: 1,
    name: strings.myProfile,
    svgICon: <MyProfile />,
    route: StackNav.EditProfile,
  },
  {
    id: 2,
    name: strings.language,
    svgICon: <MyBookingHistory />,
    route: StackNav.Language,
  },
  {
    id: 3,
    name: strings.paymentMethods,
    svgICon: <PaymentMethods />,
    route: StackNav.PaymentMethod,
  },
  {
    id: 4,
    name: strings.favoriteSaloon,
    svgICon: <FavoriteSaloon />,
    route: StackNav.FavoritesSalons,
  },
  {
    id: 5,
    name: strings.getNotification,
    svgICon: <GetNotification />,
    route: StackNav.Notification,
  },
  {
    id: 6,
    name: strings.referEarn,
    svgICon: <ReferEarn />,
    route: StackNav.ReferAndEarn,
  },
  {
    id: 7,
    name: strings.changePassword,
    svgICon: <ChangePassword />,
    // route: StackNav.cha,
  },
  {
    id: 8,
    name: strings.privacyPolicy,
    svgICon: <PrivacyPolicy />,
    route: StackNav.PrivacyPolicy,
  },
  {
    id: 9,
    name: strings.aboutUs,
    svgICon: <AboutUs />,
    route: StackNav.AboutUs,
  },
  {
    id: 10,
    name: strings.logOut,
    svgICon: <LogOut />,
    //route: StackNav.lo,
  },
];

export const paymentMethodData = [
  {
    id: 1,
    title: strings.visaCard,
    iconImage: images.visaIcon,
  },
  {
    id: 2,
    title: strings.payPal,
    iconImage: images.paypalIcon,
  },
  {
    id: 3,
    title: strings.stripe,
    iconImage: images.stripeIcon,
  },
  {
    id: 4,
    title: strings.paytm,
    iconImage: images.paytmIcon,
  },
];

export const notificationData = [
  {
    title: 'Today',
    data: [
      {
        id: 1,
        svgIcon: (
          <TrueIcon height={moderateScale(42)} width={moderateScale(42)} />
        ),
        title: 'Your Order Successfully Done',
        description:
          'Lorem ipsum dolor sit amet consectetur. Ultricies tincidunt eleifend vitae',
        time: '15 min ago.',
      },
      {
        id: 2,
        image: 'https://randomuser.me/api/portraits/men/1.jpg',
        title: 'Cameron Williamson',
        description: 'Lorem ipsum dolor sit amet consectetur. ',
        time: '15 min ago.',
      },
      {
        id: 3,
        svgIcon: (
          <GiftIcon height={moderateScale(42)} width={moderateScale(42)} />
        ),
        title: "Today's Special Offers",
        description:
          'Lorem ipsum dolor sit amet consectetur. Ultricies tincidunt eleifend vitae',
        time: '15 min ago.',
      },
    ],
  },
  {
    title: 'Yesterday',
    data: [
      {
        id: 1,
        image: 'https://randomuser.me/api/portraits/men/3.jpg',
        title: 'Bessie Cooper',
        description: 'Lorem ipsum dolor sit amet consectetur. ',
        time: '21 Jun 2023',
      },
      {
        id: 2,
        image: 'https://randomuser.me/api/portraits/men/6.jpg',
        title: 'Cody Fisher',
        description: 'Lorem ipsum dolor sit amet consectetur. ',
        time: '26 Jun 2023',
      },
      {
        id: 3,
        image: 'https://randomuser.me/api/portraits/women/4.jpg',
        title: 'Jacob Jones',
        description: 'Lorem ipsum dolor sit amet consectetur. ',
        time: '27 Jun 2023',
      },

      {
        id: 4,
        image: 'https://randomuser.me/api/portraits/men/8.jpg',
        title: 'Cameron Williamson',
        description: 'Lorem ipsum dolor sit amet consectetur. ',
        time: '27 Jun 2023',
      },
      {
        id: 5,
        image: 'https://randomuser.me/api/portraits/women/9.jpg',
        title: 'Jessica Wright',
        description: 'Lorem ipsum dolor sit amet consectetur. ',
        time: '28 Jun 2023',
      },
    ],
  },
];

export const privacyPolicyData = [
  {
    title: strings.privacyPolicy1,
    description: strings.privacyPolicyDesc,
  },
  {
    title: strings.privacyPolicy2,
    description: strings.privacyPolicyDesc,
  },
  {
    title: strings.privacyPolicy3,
    description: strings.privacyPolicyDesc,
  },
  {
    title: strings.privacyPolicy2,
    description: strings.privacyPolicyDesc,
  },
  {
    title: strings.privacyPolicy3,
    description: strings.privacyPolicyDesc,
  },
  {
    title: strings.privacyPolicy2,
    description: strings.privacyPolicyDesc,
  },
  {
    title: strings.privacyPolicy3,
    description: strings.privacyPolicyDesc,
  },
];

export const languageData = [
  {
    lnName: 'English',
  },
  {
    lnName: 'Spanish',
  },
  {
    lnName: 'French',
  },
  {
    lnName: 'German',
  },
  {
    lnName: 'Italian',
  },
  {
    lnName: 'Portuguese',
  },
  {
    lnName: 'Russian',
  },
  {
    lnName: 'Turkish',
  },
  {
    lnName: 'Chinese',
  },
  {
    lnName: 'Japanese',
  },
  {
    lnName: 'Korean',
  },
  {
    lnName: 'Arabic',
  },
  {
    lnName: 'Hindi',
  },
  {
    lnName: 'Indonesian',
  },
  {
    lnName: 'Malay',
  },
  {
    lnName: 'Thai',
  },
];

export const chartData = [
  {
    id: 1,
    title: 'Bessie Cooper',
    msg: 'Hello Sir, How are you?',
    time: 'Just now',
    status: true,
    imageUrl: 'https://randomuser.me/api/portraits/women/1.jpg',
  },
  {
    id: 2,
    title: 'John Doe',
    msg: 'Hi there!',
    time: '2 min ago',
    status: false,
    imageUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    id: 3,
    title: 'Jane Smith',
    msg: 'Good morning!',
    time: '5 min ago',
    status: true,
    imageUrl: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
  {
    id: 4,
    title: 'Bob Johnson',
    msg: 'Howdy!',
    time: '10 min ago',
    status: false,
    imageUrl: 'https://randomuser.me/api/portraits/men/2.jpg',
  },
  {
    id: 5,
    title: 'Alice Brown',
    msg: 'Hello!',
    time: '15 min ago',
    status: true,
    imageUrl: 'https://randomuser.me/api/portraits/women/3.jpg',
  },
  {
    id: 6,
    title: 'Charlie Davis',
    msg: 'Hi!',
    time: '20 min ago',
    status: false,
    imageUrl: 'https://randomuser.me/api/portraits/men/3.jpg',
  },
  {
    id: 7,
    title: 'Dave Evans',
    msg: 'Greetings!',
    time: '25 min ago',
    status: true,
    imageUrl: 'https://randomuser.me/api/portraits/men/4.jpg',
  },
];

export const callData = [
  {
    id: 1,
    title: 'Robert Fox',
    msg: 'Outgoing  | 15 Jun 2023',
    status: 'Outgoing',
    imageUrl: 'https://randomuser.me/api/portraits/women/11.jpg',
  },
  {
    id: 2,
    title: 'Jane Doe',
    msg: 'Incoming  | 16 Jun 2023',
    status: 'Incoming',
    imageUrl: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
  {
    id: 3,
    title: 'John Smith',
    msg: 'Outgoing  | 17 Jun 2023',
    status: 'Outgoing',
    imageUrl: 'https://randomuser.me/api/portraits/men/3.jpg',
  },
  {
    id: 4,
    title: 'Alice Brown',
    msg: 'Incoming  | 18 Jun 2023',
    status: 'Incoming',
    imageUrl: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    id: 5,
    title: 'Bob Johnson',
    msg: 'Outgoing  | 19 Jun 2023',
    status: 'Outgoing',
    imageUrl: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    id: 6,
    title: 'Charlie Davis',
    msg: 'Incoming  | 20 Jun 2023',
    status: 'Incoming',
    imageUrl: 'https://randomuser.me/api/portraits/men/6.jpg',
  },
  {
    id: 7,
    title: 'Ella Green',
    msg: 'Outgoing  | 21 Jun 2023',
    status: 'Outgoing',
    imageUrl: 'https://randomuser.me/api/portraits/women/7.jpg',
  },
  {
    id: 8,
    title: 'David Lee',
    msg: 'Incoming  | 22 Jun 2023',
    status: 'Incoming',
    imageUrl: 'https://randomuser.me/api/portraits/men/8.jpg',
  },
  {
    id: 9,
    title: 'Olivia Baker',
    msg: 'Outgoing  | 23 Jun 2023',
    status: 'Outgoing',
    imageUrl: 'https://randomuser.me/api/portraits/women/9.jpg',
  },
  {
    id: 10,
    title: 'Daniel Wright',
    msg: 'Incoming  | 24 Jun 2023',
    status: 'Incoming',
    imageUrl: 'https://randomuser.me/api/portraits/men/10.jpg',
  },
  {
    id: 11,
    title: 'Emily Hill',
    msg: 'Outgoing  | 25 Jun 2023',
    status: 'Outgoing',
    imageUrl: 'https://randomuser.me/api/portraits/women/11.jpg',
  },
];

export const chatData = [
  {
    id: 1,
    message: 'Hi Theresa, good morning 😄',
    time: '12:00',
    type: 'sender',
  },
  {
    id: 2,
    message: 'Hi there, good morning! How are you?',
    time: '12:01',
    type: 'receiver',
  },
  {
    id: 3,
    message: 'I am doing well, thanks for asking 😊',
    time: '12:02',
    type: 'sender',
  },
  {
    id: 4,
    message: "That's great to hear! What are your plans for the day?",
    time: '12:03',
    type: 'receiver',
  },
  {
    id: 5,
    message:
      'I have a few meetings scheduled, but otherwise just working from home. How about you?',
    time: '12:04',
    type: 'sender',
  },
  {
    id: 1,
    message: 'Hi Theresa, good morning 😄',
    time: '12:00',
    type: 'sender',
  },
  {
    id: 2,
    message: 'Hi there, good morning! How are you?',
    time: '12:01',
    type: 'receiver',
  },
  {
    id: 3,
    message: 'I am doing well, thanks for asking 😊',
    time: '12:02',
    type: 'sender',
  },
  {
    id: 4,
    message: "That's great to hear! What are your plans for the day?",
    time: '12:03',
    type: 'receiver',
  },
  {
    id: 5,
    message:
      'I have a few meetings scheduled, but otherwise just working from home. How about you?',
    time: '12:04',
    type: 'sender',
  },
  {
    id: 1,
    message: 'Hi Theresa, good morning 😄',
    time: '12:00',
    type: 'sender',
  },
  {
    id: 2,
    message: 'Hi there, good morning! How are you?',
    time: '12:01',
    type: 'receiver',
  },
  {
    id: 3,
    message: 'I am doing well, thanks for asking 😊',
    time: '12:02',
    type: 'sender',
  },
  {
    id: 4,
    message: "That's great to hear! What are your plans for the day?",
    time: '12:03',
    type: 'receiver',
  },
  {
    id: 5,
    message:
      'I have a few meetings scheduled, but otherwise just working from home. How about you?',
    time: '12:04',
    type: 'sender',
  },
];

export const sortByData = [
  strings.mostPopular,
  strings.NearbySalons,
  strings.rating4to5Star,
  strings.rating1to3Star,
  strings.rating,
];

export const appointmentBookingCategory = [
  strings.all,
  strings.upcoming,
  strings.completed,
  strings.pending,
];

export const saloonDetailCategoryData = [
  strings.about,
  strings.services,
  strings.gallery,
  strings.review,
];

export const myAppBookingData = [
  {
    id: 1,
    name: 'Fancy Nails',
    time: 'Wed, 18 May 2023 - 2:30 PM',
    image: images.salonImg1,
    status: strings.upcoming,
    bgColor: '#AECAFC66',
    textColor: '#144BD6',
  },
  {
    id: 2,
    name: 'Hair Haven',
    time: 'Fri, 13 May 2023 - 11:00 AM',
    image: images.salonImg2,
    status: strings.completed,
    bgColor: '#E7F1ED',
    textColor: '#00BF71',
  },
  {
    id: 3,
    name: 'Bliss Spa',
    time: 'Tue, 24 May 2023 - 3:00 PM',
    image: images.salonImg3,
    status: strings.pending,
    bgColor: '#FFD8D699',
    textColor: '#FF5470',
  },
  {
    id: 4,
    name: 'Nail Art',
    time: 'Sat, 28 May 2023 - 10:30 AM',
    image: images.salonImg4,
    status: strings.upcoming,
    bgColor: '#AECAFC66',
    textColor: '#144BD6',
  },
  {
    id: 5,
    name: 'Chic Cuts',
    time: 'Thu, 25 May 2023 - 1:00 PM',
    image: images.salonImg2,
    status: strings.completed,
    bgColor: '#E7F1ED',
    textColor: '#00BF71',
  },
  {
    id: 6,
    name: 'Soothing Spa',
    time: 'Wed, 17 May 2023 - 4:30 PM',
    image: images.salonImg3,
    status: strings.pending,
    bgColor: '#FFD8D699',
    textColor: '#FF5470',
  },
  {
    id: 7,
    name: 'Perfect Polish',
    time: 'Mon, 22 May 2023 - 12:00 PM',
    image: images.salonImg1,
    status: strings.upcoming,
    bgColor: '#AECAFC66',
    textColor: '#144BD6',
  },
  {
    id: 8,
    name: 'Hair Harmony',
    time: 'Tue, 23 May 2023 - 10:00 AM',
    image: images.salonImg4,
    status: strings.completed,
    bgColor: '#E7F1ED',
    textColor: '#00BF71',
  },
  {
    id: 9,
    name: 'Tranquil Touch',
    time: 'Sat, 20 May 2023 - 2:30 PM',
    image: images.salonImg1,
    status: strings.pending,
    bgColor: '#FFD8D699',
    textColor: '#FF5470',
  },
  {
    id: 10,
    name: 'Nail Nation',
    time: 'Thu, 26 May 2023 - 11:00 AM',
    image: images.salonImg3,
    status: strings.upcoming,
    bgColor: '#AECAFC66',
    textColor: '#144BD6',
  },
];

export const saloonStaff = [
  {
    id: 1,
    name: 'Cameron Williamson',
    image: images.staff1,
    review: '5.0',
  },
  {
    id: 2,
    name: 'Cody Fisher',
    image: images.staff2,
    review: '4.9',
  },
  {
    id: 3,
    name: 'Arlene McCoy',
    image: images.staff3,
    review: '4.5',
  },
];

export const saloonTime = [
  {
    id: 1,
    time: '10:00 AM - 10:00 PM',
    day: 'Monday',
  },
  {
    id: 2,
    time: '10:00 AM - 10:00 PM',
    day: 'Tuesday',
  },
  {
    id: 3,
    time: '10:00 AM - 10:00 PM',
    day: 'Wednesday',
  },
  {
    id: 4,
    time: '10:00 AM - 10:00 PM',
    day: 'Thursday',
  },
  {
    id: 5,
    time: '10:00 AM - 10:00 PM',
    day: 'Friday',
  },
  {
    id: 6,
    time: 'Closed',
    day: 'Saturday',
    isClosed: true,
  },
  {
    id: 7,
    time: '10:00 AM - 10:00 PM',
    day: 'Sunday',
  },
];

export const saloonContact = [
  {
    id: 1,
    title: 'Email',
    value: 'ibnerieadasz@gmail.cm',
  },
  {
    id: 2,
    title: 'Phone Number',
    value: '+1 987 654 3210',
  },
  {
    id: 3,
    title: 'Address',
    value: '123, Central Street, New York, USA',
  },
];

export const makeupData = [
  {
    id: 1,
    title: 'Everyday Makeup',
    categoryType: 'makeupRadio',
    time: '30 min',
    price: '$45',
  },
  {
    id: 2,
    categoryType: 'makeupRadio',
    title: 'Evening Makeup',
    time: '1 hour',
    price: '$65',
  },
  {
    id: 3,
    categoryType: 'makeupRadio',
    title: 'Bridal Makeup',
    time: '1 hour 30 min',
    price: '$100',
  },
  {
    id: 4,
    categoryType: 'makeupRadio',
    title: 'Photoshoot Makeup',
    time: '1 hour',
    price: '$80',
  },
  {
    id: 5,
    categoryType: 'makeupRadio',
    title: 'Special Effects Makeup Special Effects Makeup',
    time: '1 hour 30 min',
    price: '$120',
  },
  {
    id: 6,
    categoryType: 'makeupRadio',
    title: 'Airbrush Makeup',
    time: '1 hour',
    price: '$75',
  },
];

export const hairCutData = [
  {
    id: 1,
    categoryId: 1,
    categoryType: 'hairCutRadio',
    title: strings.short,
    time: '20 min',
    price: '$20',
    category: strings.hairCut,
  },
  {
    id: 2,
    categoryId: 2,
    categoryType: 'hairCutRadio',
    title: strings.medium,
    time: '30 min',
    price: '$20',
    category: strings.hairCut,
  },
  {
    id: 3,
    categoryId: 3,
    categoryType: 'hairCutRadio',
    title: strings.tuner,
    time: '20 min',
    price: '$23',
    category: strings.hairCut,
  },
  {
    id: 4,
    categoryId: 4,
    categoryType: 'hairCutRadio',
    title: strings.special,
    time: '30 min',
    price: '$25',
    category: strings.hairCut,
  },
];

export const beardData = [
  {
    id: 1,
    categoryId: 1,
    categoryType: 'beardRadio',
    title: 'Basic Beard Trim',
    time: '15 min',
    price: '$15',
    category: strings.beard,
  },
  {
    id: 2,
    categoryId: 2,
    categoryType: 'beardRadio',
    title: 'Detailed Beard Trim',
    time: '30 min',
    price: '$25',
    category: strings.beard,
  },
  {
    id: 3,
    categoryType: 'beardRadio',
    categoryId: 3,
    title: 'Beard Trim with Razor Line-up',
    time: '30 min',
    price: '$30',
    category: strings.beard,
  },
  {
    id: 4,
    categoryId: 4,
    categoryType: 'beardRadio',
    title: 'Beard Trim and Haircut Combo',
    time: '1 hour',
    price: '$45',
    category: strings.beard,
  },
];

export const facialData = [
  {
    id: 1,
    categoryId: 1,
    categoryType: 'facialRadio',
    title: 'Basic Facial',
    time: '30 min',
    price: '$35',
    category: strings.facials,
  },
  {
    id: 2,
    categoryId: 2,
    categoryType: 'facialRadio',
    title: 'Deep Cleansing Facial',
    time: '1 hour',
    price: '$60',
    category: strings.facials,
  },
  {
    id: 3,
    categoryId: 3,
    categoryType: 'facialRadio',
    title: 'Anti-Aging Facial',
    time: '1 hour',
    price: '$75',
    category: strings.facials,
  },
  {
    id: 4,
    categoryId: 4,
    categoryType: 'facialRadio',
    title: 'Men’s Executive Facial',
    time: '1 hour 15 min',
    price: '$85',
    category: strings.facials,
  },
];

export const hairColorData = [
  {
    id: 1,
    categoryId: 1,
    categoryType: 'hairColorRadio',
    title: 'Root Touch-Up',
    time: '1 hour',
    price: '$55',
    category: strings.hairColor,
  },
  {
    id: 2,
    categoryId: 2,
    categoryType: 'hairColorRadio',
    title: 'Full Color',
    time: '2 hours',
    price: '$90',
    category: strings.hairColor,
  },
  {
    id: 3,
    categoryId: 3,
    categoryType: 'hairColorRadio',
    title: 'Highlights',
    time: '2 hours',
    price: '$120',
    category: strings.hairColor,
  },
  {
    id: 4,
    categoryId: 4,
    categoryType: 'hairColorRadio',
    title: 'Balayage',
    time: '3 hours',
    price: '$150',
    category: strings.hairColor,
  },
];

export const manicureData = [
  {
    id: 1,
    categoryId: 1,
    categoryType: 'manicureRadio',
    title: 'Classic Manicure',
    time: '30 min',
    price: '$25',
    category: strings.manicure,
  },
  {
    id: 2,
    categoryId: 2,
    categoryType: 'manicureRadio',
    title: 'Gel Manicure',
    time: '45 min',
    price: '$35',
    category: strings.manicure,
  },
  {
    id: 3,
    categoryId: 3,
    categoryType: 'manicureRadio',
    title: 'Paraffin Manicure',
    time: '45 min',
    price: '$40',
    category: strings.manicure,
  },
  {
    id: 4,
    categoryId: 4,
    categoryType: 'manicureRadio',
    title: 'Luxury Manicure',
    time: '1 hour',
    price: '$50',
    category: strings.manicure,
  },
];

export const pedicureData = [
  {
    id: 1,
    categoryId: 1,
    categoryType: 'pedicureRadio',
    title: 'Classic Pedicure',
    time: '45 min',
    price: '$35',
    category: strings.pedicure,
  },
  {
    id: 2,
    categoryId: 2,
    categoryType: 'pedicureRadio',
    title: 'Gel Pedicure',
    time: '1 hour',
    price: '$50',
    category: strings.pedicure,
  },
  {
    id: 3,
    categoryId: 3,
    categoryType: 'pedicureRadio',
    title: 'Paraffin Pedicure',
    time: '1 hour',
    price: '$60',
    category: strings.pedicure,
  },
  {
    id: 4,
    categoryId: 4,
    categoryType: 'pedicureRadio',
    title: 'Luxury Pedicure',
    time: '1 hour 15 min',
    price: '$70',
    category: strings.pedicure,
  },
];

export const waxingData = [
  {
    id: 1,
    categoryId: 1,
    categoryType: 'waxingRadio',
    title: 'Eyebrow Waxing',
    time: '15 min',
    price: '$12',
    category: strings.waxing,
  },
  {
    id: 2,
    categoryId: 2,
    categoryType: 'waxingRadio',
    title: 'Bikini Waxing',
    time: '30 min',
    price: '$30',
    category: strings.waxing,
  },
  {
    id: 3,
    categoryId: 3,
    categoryType: 'waxingRadio',
    title: 'Brazilian Waxing',
    time: '45 min',
    price: '$50',
    category: strings.waxing,
  },
  {
    id: 4,
    categoryId: 4,
    categoryType: 'waxingRadio',
    title: 'Full Leg Waxing',
    time: '1 hour',
    price: '$70',
    category: strings.waxing,
  },
];

export const massageData = [
  {
    id: 1,
    categoryId: 1,
    categoryType: 'massageRadio',
    title: 'Swedish Massage',
    time: '1 hour',
    price: '$60',
    category: strings.massage,
  },
  {
    id: 2,
    categoryId: 2,
    categoryType: 'massageRadio',
    title: 'Deep Tissue Massage',
    time: '1 hour 15 min',
    price: '$80',
    category: strings.massage,
  },
  {
    id: 3,
    categoryId: 3,
    categoryType: 'massageRadio',
    title: 'Hot Stone Massage',
    time: '1 hour 15 min',
    price: '$90',
    category: strings.massage,
  },
  {
    id: 4,
    categoryId: 4,
    categoryType: 'massageRadio',
    title: 'Couples Massage',
    time: '1 hour',
    price: '$140',
    category: strings.massage,
  },
];

export const saloonImageData = [
  images.saloon1,
  images.saloon2,
  images.saloon3,
  images.saloon4,
  images.saloon5,
  images.saloon6,
];

export const saloonReview = [
  {
    id: 1,
    name: 'Ibne Riead',
    image: images.staff1,
    review: 4,
    time: '1 day ago',
    reviewText: 'Tortor ultrices vel vulputate sollicitudin vitae.',
  },
  {
    id: 2,
    name: 'Emily Johnson',
    image: images.staff3,
    review: 5,
    time: '2 days ago',
    reviewText:
      'Wonderful experience! Friendly staff, great attention to detail.',
  },
  {
    id: 3,
    name: 'Alexandra Lee',
    image: images.staff2,
    review: 3,
    time: '5 days ago',
    reviewText: 'Knowledgeable staff, but could have been more personalized.',
  },
  {
    id: 4,
    name: 'Joshua Garcia',
    image: images.staff3,
    review: 2,
    time: '8 days ago',
    reviewText: 'Decent experience, but felt rushed and not listened to.',
  },
  {
    id: 5,
    name: 'Amanda Rodriguez',
    image: images.staff1,
    review: 5,
    time: '10 days ago',
    reviewText:
      'Absolutely loved it! Skilled and attentive staff, left feeling like a new person.',
  },
  {
    id: 6,
    name: 'Daniel Kim',
    image: images.staff2,
    review: 4,
    time: '12 days ago',
    reviewText:
      'Great experience! Friendly and attentive staff, relaxing atmosphere.',
  },
  {
    id: 7,
    name: 'Hannah Chen',
    image: images.staff1,
    review: 5,
    time: '15 days ago',
    reviewText:
      'Fantastic salon! Skilled and friendly staff, great job with my highlights and cut.',
  },
  {
    id: 8,
    name: 'Nathan Wong',
    image: images.staff3,
    review: 3,
    time: '18 days ago',
    reviewText:
      "Just okay experience. Polite staff, but didn't quite get what I wanted.",
  },
  {
    id: 9,
    name: 'Mia Johnson',
    image: images.staff1,
    review: 5,
    time: '20 days ago',
    reviewText:
      'Fantastic experience! Friendly and knowledgeable staff, great attention to detail.',
  },
  {
    id: 10,
    name: 'Ethan Brown',
    image: images.staff1,
    review: 2,
    time: '25 days ago',
    reviewText: 'Good experience overall.',
  },
  {
    id: 11,
    name: 'Oliver Smith',
    image: images.staff3,
    review: 4,
    time: '28 days ago',
    reviewText: 'Great service, but a bit pricey.',
  },
  {
    id: 12,
    name: 'Sophia Lee',
    image: images.staff2,
    review: 3,
    time: '30 days ago',
    reviewText: 'Average experience, nothing stood out.',
  },
  {
    id: 13,
    name: 'Lucas Hernandez',
    image: images.staff2,
    review: 4,
    time: '35 days ago',
    reviewText: 'Friendly and professional staff',
  },
];

export const mayMonthData = [
  {id: 1, date: '1', day: 'Mon'},
  {id: 2, date: '2', day: 'Tue'},
  {id: 3, date: '3', day: 'Wed'},
  {id: 4, date: '4', day: 'Thu'},
  {id: 5, date: '5', day: 'Fri'},
  {id: 6, date: '6', day: 'Sat'},
  {id: 7, date: '7', day: 'Sun'},
  {id: 8, date: '8', day: 'Mon'},
  {id: 9, date: '9', day: 'Tue'},
  {id: 10, date: '10', day: 'Wed'},
  {id: 11, date: '11', day: 'Thu'},
  {id: 12, date: '12', day: 'Fri'},
  {id: 13, date: '13', day: 'Sat'},
  {id: 14, date: '14', day: 'Sun'},
  {id: 15, date: '15', day: 'Mon'},
  {id: 16, date: '16', day: 'Tue'},
  {id: 17, date: '17', day: 'Wed'},
  {id: 18, date: '18', day: 'Thu'},
  {id: 19, date: '19', day: 'Fri'},
  {id: 20, date: '20', day: 'Sat'},
  {id: 21, date: '21', day: 'Sun'},
  {id: 22, date: '22', day: 'Mon'},
  {id: 23, date: '23', day: 'Tue'},
  {id: 24, date: '24', day: 'Wed'},
  {id: 25, date: '25', day: 'Thu'},
  {id: 26, date: '26', day: 'Fri'},
  {id: 27, date: '27', day: 'Sat'},
  {id: 28, date: '28', day: 'Sun'},
  {id: 29, date: '29', day: 'Mon'},
  {id: 30, date: '30', day: 'Tue'},
  {id: 31, date: '31', day: 'Wed'},
];

export const mayDayData = [
  {time: '10:00 AM', status: strings.available},
  {time: '10:30 AM', status: strings.booked},
  {time: '11:15 AM', status: strings.available},
  {time: '11:45 AM', status: strings.available},
  {time: '12:30 PM', status: strings.booked},
  {time: '1:00 PM', status: strings.available},
  {time: '1:45 PM', status: strings.booked},
  {time: '2:15 PM', status: strings.available},
  {time: '3:00 PM', status: strings.available},
  {time: '3:30 PM', status: strings.available},
  {time: '4:15 PM', status: strings.available},
  {time: '4:45 PM', status: strings.booked},
  {time: '5:30 PM', status: strings.available},
  {time: '6:00 PM', status: strings.available},
  {time: '6:45 PM', status: strings.booked},
  {time: '7:15 PM', status: strings.available},
  {time: '8:00 PM', status: strings.available},
  {time: '8:30 PM', status: strings.available},
  {time: '9:15 PM', status: strings.booked},
  {time: '9:45 PM', status: strings.booked},
];

export const mostPopularData = [
  'Any',
  '2.5',
  '3.0',
  '3.5',
  '4.0',
  '4.5',
  '5.0',
];

export const availabilityData = ['Any', 'Open Now', 'Closed'];

export const distanceData = ['Any', '10 mi', '3.0 mi', '3.5 mi', '4.0 mi'];

export const SalonTypeData = [
  {item: strings.male},
  {item: strings.female},
  {item: strings.unisex},
  {item: strings.kids},
];

export const SalonServicesData = [
  {item: 'Hair Cuts'},
  {item: 'Shaving'},
  {item: 'Foot Care'},
  {item: 'Waxing'},
  {item: 'Eye Care'},
  {item: 'Massage'},
  {item: 'Make -Up'},
  {item: 'Hair Sap'},
  {item: 'Coloring'},
  {item: 'Nail Care'},
];

export const addressData = [
  {
    id: 1,
    street: '18th Street Brewery',
    address: 'Oakley Avenue, Hammond, IN',
  },
  {
    id: 2,
    street: 'Main Street Pub',
    address: 'Elm Street, Anytown, USA',
  },
  {
    id: 3,
    street: 'Riverside Tavern',
    address: 'Park Road, Cityville, CA',
  },
  {
    id: 4,
    street: 'Mountain View Bar',
    address: 'Pine Street, Mountain City, CO',
  },
  {
    id: 5,
    street: 'Harborview Restaurant',
    address: 'Marina Drive, Seaside Town, FL',
  },
  {
    id: 6,
    street: 'Sunset Lounge',
    address: 'Ocean Boulevard, Beachside, HI',
  },
  {
    id: 7,
    street: 'Urban Grill',
    address: 'City Center, Metropolis, IL',
  },
  {
    id: 8,
    street: 'Green Valley Cafe',
    address: 'Meadow Lane, Countryside, KS',
  },
  {
    id: 9,
    street: 'Lakefront Bistro',
    address: 'Waterfront Road, Lakeside, MI',
  },
  {
    id: 10,
    street: 'Downtown Tavern',
    address: 'Market Street, Cityscape, NY',
  },
];

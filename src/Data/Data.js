// Sidebar imports
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
  UilSignOutAlt,
} from "@iconscout/react-unicons";

// Analytics Cards imports
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

// Recent Card Imports
import img1 from "../imgs/img1.png";
import img2 from "../imgs/img2.png";
import img3 from "../imgs/img3.png";
import img4 from "../imgs/warning-img1.jpeg";
import img5 from "../imgs/warning-img2.jpeg";
import img6 from "../imgs/warning-img1.jpeg";

// Sidebar Data
export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Dashboard",
  },
  {
    icon: UilClipboardAlt,
    heading: "Orders",
  },
  {
    icon: UilUsersAlt,
    heading: "Early Warnings",
  },
  {
    icon: UilPackage,
    heading: 'Products'
  },
  {
    icon: UilChart,
    heading: 'Analytics'
  },
];

// Analytics Cards Data
export const cardsData = [
  {
    title: "Sales",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 70,
    value: "25,970",
    png: UilUsdSquare,
    series: [
      {
        name: "Sales",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "Revenue",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 80,
    value: "14,270",
    png: UilMoneyWithdrawal,
    series: [
      {
        name: "Revenue",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: "Expenses",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 60,
    value: "4,270",
    png: UilClipboardAlt,
    series: [
      {
        name: "Expenses",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];

// Recent Update Card Data


export const UpdatesData = [
  {
    img: img1,
    name: "Andrew Thomas",
    noti: "has ordered medicines for high fever, milk and 2500mh battery.",
    time: "25 seconds ago",
  },
  {
    img: img2,
    name: "James Bond",
    noti: "has ordered bread and milk.",
    time: "30 minutes ago",
  },
  {
    img: img3,
    name: "Iron Man",
    noti: "has ordered medicines for high fever.",
    time: "2 hours ago",
  },
  // Add more records here
  {
    img: img1,
    name: "Captain America",
    noti: "has ordered vitamins and supplements.",
    time: "3 hours ago",
  },
  {
    img: img2,
    name: "Thor",
    noti: "has ordered protein powder and energy drinks.",
    time: "5 hours ago",
  },
  {
    img: img3,
    name: "Hulk",
    noti: "has ordered bandages and pain relievers.",
    time: "1 day ago",
  },
  {
    img: img1,
    name: "Black Widow",
    noti: "has ordered first aid kit and antiseptics.",
    time: "2 days ago",
  },
  {
    img: img2,
    name: "Hawkeye",
    noti: "has ordered eye drops and headache pills.",
    time: "3 days ago",
  },
  {
    img: img3,
    name: "Doctor Strange",
    noti: "has ordered cough syrup and throat lozenges.",
    time: "4 days ago",
  },
  {
    img: img1,
    name: "Spider-Man",
    noti: "has ordered vitamins and minerals.",
    time: "5 days ago",
  },
];


// export const EarlyWarningData = [
//   {
//     img: img4,
//     name: "Andrew Thomas",
//     noti: "has ordered medicines for high fever, milk and 2500mh battery.",
//     time: "25 seconds ago",
//   },
//   {
//     img: img5,
//     name: "James Bond",
//     noti: "has ordered bread and milk.",
//     time: "30 minutes ago",
//   },
//   {
//     img: img6,
//     name: "Iron Man",
//     noti: "has ordered medicines for high fever.",
//     time: "2 hours ago",
//   },
// ];

export const EarlyWarningData = [
  {
    id: 1,
    profilePic: img1,
    profileName: "Disaster Watcher",
    headline: "Earthquake Alert in California",
    content:
      "A significant earthquake with a magnitude of 6.5 has been detected near San Francisco. Residents are advised to take immediate precautions and follow emergency protocols.",
    imageUrl: img4,
  },
  {
    id: 2,
    profilePic: img2,
    profileName: "Emergency Services",
    headline: "Tsunami Warning Issued for Pacific Coast",
    content:
      "A tsunami warning has been issued for coastal areas from Oregon to California following a 7.2 magnitude earthquake off the coast. Evacuation orders are in effect.",
    imageUrl: img5,
  },
  {
    id: 3,
    profilePic: img3,
    profileName: "Weather Alert",
    headline: "Hurricane Watch in Gulf of Mexico",
    content:
      "A tropical storm developing in the Gulf of Mexico is expected to strengthen into a hurricane. Residents along the coast are advised to monitor updates from local authorities.",
    imageUrl: img6,
  },
  {
    id: 4,
    profilePic: img1,
    profileName: "Disaster Watcher",
    headline: "Wildfire Alert in California Forests",
    content:
      "Multiple wildfires have broken out in the northern California forests. Firefighters are battling the blazes, and residents are urged to evacuate if necessary.",
    imageUrl: img4,
  },
  {
    id: 5,
    profilePic: img2,
    profileName: "Emergency Services",
    headline: "Flood Warning for Midwest States",
    content:
      "Heavy rainfall has caused flooding across several Midwest states. Residents in low-lying areas should prepare for potential evacuation orders.",
    imageUrl: img5,
  },
  {
    id: 6,
    profilePic: "https://example.com/profile6.jpg",
    profileName: "Disaster Watcher",
    headline: "Volcano Eruption Alert in Hawaii",
    content:
      "Increased volcanic activity has been detected in Hawaii. Authorities are closely monitoring the situation, and residents should be prepared to evacuate if necessary.",
    imageUrl: img6,
  },
  {
    id: 7,
    profilePic: "https://example.com/profile7.jpg",
    profileName: "Emergency Services",
    headline: "Severe Thunderstorm Warning in Midwest",
    content:
      "A severe thunderstorm with damaging winds and large hail is moving through the Midwest. Take shelter immediately and stay indoors until the storm passes.",
    imageUrl: "https://example.com/image7.jpg",
  },
  {
    id: 8,
    profilePic: "https://example.com/profile8.jpg",
    profileName: "Weather Alert",
    headline: "Blizzard Warning Issued for Northeast",
    content:
      "A major winter storm is expected to bring blizzard conditions to the Northeast. Travel will be hazardous, and residents should prepare for power outages.",
    imageUrl: "https://example.com/image8.jpg",
  },
  {
    id: 9,
    profilePic: "https://example.com/profile9.jpg",
    profileName: "Emergency Services",
    headline: "Heatwave Advisory for Southwest",
    content:
      "A prolonged heatwave is forecasted for the Southwest region. Stay hydrated, avoid outdoor activities during peak hours, and check on vulnerable individuals.",
    imageUrl: "https://example.com/image9.jpg",
  },
  {
    id: 10,
    profilePic: "https://example.com/profile10.jpg",
    profileName: "Disaster Watcher",
    headline: "Tornado Watch in the Plains",
    content:
      "A tornado watch has been issued for the Plains states. Monitor local weather updates and be prepared to take shelter in a safe location if a tornado warning is issued.",
    imageUrl: "https://example.com/image10.jpg",
  },
];



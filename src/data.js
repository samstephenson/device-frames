const devices = [
  {
    deviceName: "iPhone 11 Pro",
    id: "iphone11pro",
    deviceStyle: [
      {
        default: true,
        title: "Space Grey",
        id: "spacegrey",
        image:
          "https://determined-wright-1c7f0b.netlify.app/Apple iPhone 11 Pro Space Grey.png",
      },
      {
        default: false,
        title: "Midnight Green",
        id: "midnightgreen",
        image:
          "https://determined-wright-1c7f0b.netlify.app/Apple iPhone 11 Pro Midnight Green.png",
      },
      {
        default: false,
        title: "Silver",
        id: "silver",
        image:
          "https://determined-wright-1c7f0b.netlify.app/Apple iPhone 11 Pro Silver.png",
      },
      {
        default: false,
        title: "Gold",
        id: "gold",
        image:
          "https://determined-wright-1c7f0b.netlify.app/Apple iPhone 11 Pro Gold.png",
      },
    ],
    UIWidth: 375,
    UIHeight: 812,
    widthRatio: 0.812274368,
    heightRatio: 0.903560831,
    aspectRatio: 0.513724036,
  },
  {
    deviceName: "iPhone 8",
    id: "iphone8",
    deviceStyle: [
      {
        default: true,
        title: "Space Grey",
        id: "spacegrey",
        image:
          "https://determined-wright-1c7f0b.netlify.app/Apple iPhone 8 Space Grey.png",
      },
      {
        title: "Silver",
        id: "silver",
        image:
          "https://determined-wright-1c7f0b.netlify.app/Apple iPhone 8 Silver.png",
      },
    ],
    UIWidth: 375,
    UIHeight: 667,
    widthRatio: 0.789473684,
    heightRatio: 0.704329461,
    aspectRatio: 0.505,
  },
  {
    deviceName: "Samsung",
    id: "samsung",
    deviceStyle: [
      {
        default: true,
        title: "White",
        id: "white",
        image:
          "https://determined-wright-1c7f0b.netlify.app/Samsung Galaxy S3.png",
      },
    ],
    UIWidth: 360,
    UIHeight: 640,
    widthRatio: 0.782608696,
    heightRatio: 0.761904762,
    aspectRatio: 0.5625,
  },
];

export default devices;

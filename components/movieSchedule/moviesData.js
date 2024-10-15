import img1 from "../../public/img/img1.jpg";
import img2 from "../../public/img/img2.jpg";
import img3 from "../../public/img/img3.jpeg";
import img4 from "../../public/img/img4.jpeg";
import img5 from "../../public/img/img5.jpeg";
import img6 from "../../public/img/img6.jpeg";
import img7 from "../../public/img/img7.jpeg";
import img8 from "../../public/img/img8.jpeg";
import img9 from "../../public/img/img9.jpg";
import img10 from "../../public/img/img10.jpeg";
import img11 from "../../public/img/img11.jpeg";
import img12 from "../../public/img/img12.jpeg";
import img13 from "../../public/img/img13.jpg";
import img14 from "../../public/img/img14.jpeg";
import img15 from "../../public/img/img15.jpg";
import img16 from "../../public/img/img16.jpeg";
import img17 from "../../public/img/img17.jpeg";
import img18 from "../../public/img/img18.jpeg";
import img19 from "../../public/img/img19.jpeg";
import img20 from "../../public/img/img20.jpg";
import img21 from "../../public/img/img21.jpg";
import img22 from "../../public/img/img22.jpeg";

const moviesData = [
  {
    id: 1,
    date: "2024-10-11",
    img: img1,
    title: "The Crow",
    text: "A drama series that dives into the world of a Chicago restaurant.",
    genre: "Fantasy, Horror",
    option: "Buy Ticket",
    screen: "Screen 1",
    time: ["10:35", "12:05"],
  },
  {
    id: 2,
    date: "2024-10-11",
    img: img22,
    title: "The Crow",
    text: "A drama series that dives into the world of a Chicago restaurant.",
    genre: "Fantasy, Horror",
    option: "Buy Ticket",
    screen: "Screen 1",
    time: ["10:35", "12:05"],
  },
  {
    id: 3,
    date: "2024-10-12",
    img: img2,
    title: "The Forge",
    genre: "Drama",
    text: "A drama series that dives into the world of a Chicago restaurant",
    option: "Buy Ticket",
    screen: "Screen 2",
    time: ["10:35", "12:05"],
  },
  {
    id: 4,
    date: "2024-10-13",
    img: img3,
    title: "When Love Strikes",
    genre: "Romance",
    text: "A drama series that dives into the world of a Chicago restaurant",
    option: "Buy Ticket",
    screen: "Screen 4",
    time: ["10:35", "12:05"],
  },

  {
    id: 5,
    date: "2024-10-14",
    img: img4,
    title: "Casino Royale",
    genre: "Action",
    text: "A drama series that dives into the world of a Chicago restaurant",
    option: "Buy Ticket",
    screen: "Screen 4",
    time: ["10:35", "12:05"],
  },
  {
    id: 6,
    date: "2024-10-15",
    img: img5,
    title: "Seize Your Glory",
    genre: "Drama",
    text: "A drama series that dives into the world of a Chicago restaurant",
    option: "Buy Ticket",
    screen: "Screen 4",
    time: ["10:35", "12:05"],
  },
  {
    id: 7,
    date: "2024-10-16",
    img: img6,
    title: "Dirty Rotten Scoundrels",
    genre: "Comedy",
    text: "A drama series that dives into the world of a Chicago restaurant. ",
    option: "Buy Ticket",
    screen: "Screen 4",
    time: ["10:35", "12:05"],
  },
  {
    id: 8,
    date: "2024-10-17",
    img: img7,
    title: "Little Man",
    genre: "Comedy",
    text: "A drama series that dives into the world of a Chicago restaurant.",
    option: "Buy Ticket",
    screen: "Screen 4",
    time: ["10:35", "12:05"],
  },
  {
    id: 9,
    date: "2024-10-18",
    img: img22,
    title: "The Watchmen",
    genre: "Romance",
    text: "A drama series that dives into the world of a Chicago restaurant.",
    option: "Buy Ticket",
    screen: "Screen 1",
    time: ["10:35", "12:05"],
  },
  {
    id: 10,
    date: "2024-10-19",
    img: img12,
    title: "When Love Strikes",
    genre: "Adventure",
    text: "A drama series that dives into the world of a Chicago restaurant.",
    option: "Buy Ticket",
    screen: "Screen 2",
    time: ["10:35", "12:05"],
  },
  {
    id: 11,
    date: "2024-10-20",
    img: img10,
    title: "Winnie The Pooh",
    genre: "Animation",
    text: "A drama series that dives into the world of a Chicago restaurant.",
    option: "Buy Ticket",
    screen: "Screen 3",
    time: ["10:35", "12:05"],
  },
  {
    id: 12,
    date: "2024-10-20",
    img: img11,
    title: "The Hills Run Red",
    genre: "Crime",
    text: "A drama series that dives into the world of a Chicago restaurant.",
    option: "Buy Ticket",
    screen: "Screen 4",
    time: ["10:35", "12:05"],
  },
  {
    id: 13,
    date: "2024-10-20",
    img: img12,
    title: "Megan Fox Subservience",
    genre: "Action",
    text: "A drama series that dives into the world of a Chicago restaurant.",
    option: "Buy Ticket",
    screen: "Screen 4",
    time: ["10:35", "12:05"],
  },
  {
    id: 14,
    date: "2024-10-19",
    img: img17,
    title: "Alfred Hitchcock's",
    genre: "Drama",
    text: "A drama series that dives into the world of a Chicago restaurant.",
    option: "Buy Ticket",
    screen: "Screen 4",
    time: ["10:35", "12:05"],
  },
  {
    id: 15,
    date: "2024-10-19",
    img: img14,
    title: "Maharaja",
    genre: "Crime",
    text: "A drama series that dives into the world of a Chicago restaurant.",
    option: "Buy Ticket",
    screen: "Screen 4",
    time: ["10:35", "12:05"],
  },
  {
    id: 16,
    date: "2024-10-18",
    img: img15,
    title: "Captain America",
    genre: "Action",
    text: "A drama series that dives into the world of a Chicago restaurant.",
    option: "Buy Ticket",
    screen: "Screen 4",
    time: ["10:35", "12:05"],
  },
  {
    id: 17,
    date: "2024-10-18",
    img: img16,
    title: "Casino Royale",
    genre: "Action",
    text: "A drama series that dives into the world of a Chicago restaurant.",
    option: "Buy Ticket",
    screen: "Screen 4",
    time: ["10:35", "12:05"],
  },
  {
    id: 18,
    date: "2024-10-17",
    img: img17,
    title: "Pirates of the Caribbean",
    genre: "Adventure",
    text: "A drama series that dives into the world of a Chicago restaurant.",
    option: "Buy Ticket",
    screen: "Screen 4",
    time: ["10:35", "12:05"],
  },
  {
    id: 19,
    date: "2024-10-17",
    img: img18,
    title: "Trap",
    genre: "Action",
    text: "A drama series that dives into the world of a Chicago restaurant.",
    option: "Buy Ticket",
    screen: "Screen 4",
    time: ["10:35", "12:05"],
  },
  {
    id: 20,
    date: "2024-10-16",
    img: img19,
    title: "Frozen",
    genre: "Animation",
    text: "A drama series that dives into the world of a Chicago restaurant.",
    option: "Buy Ticket",
    screen: "Screen 4",
    time: ["10:35", "12:05"],
  },
  {
    id: 21,
    date: "2024-10-16",
    img: img22,
    title: "90 Minutes in Heaven",
    genre: "Drama",
    text: "A drama series that dives into the world of a Chicago restaurant.",
    option: "Buy Ticket",
    screen: "Screen 4",
    time: ["10:35", "12:05"],
  },
  {
    id: 22,
    date: "2024-10-15",
    img: img14,
    title: "Safe Haven",
    genre: "Thriller",
    text: "A drama series that dives into the world of a Chicago restaurant.",
    option: "Buy Ticket",
    screen: "Screen 4",
    time: ["10:35", "12:05"],
  },
  {
    id: 23,
    date: "2024-10-15",
    img: img22,
    title: "Priest",
    genre: " Drama",
    text: "A drama series that dives into the world of a Chicago restaurant.",
    option: "Buy Ticket",
    screen: "Screen 4",
    time: ["10:35", "12:05"],
  },
  {
    id: 24,
    date: "2024-10-14",
    img: img1,
    title: "When Love Strikes",
    genre: "Romance",
    text: "A drama series that dives into the world of a Chicago restaurant.",
    option: "Buy Ticket",
    screen: "Screen 4",
    time: ["10:35", "12:05"],
  },
  {
    id: 25,
    date: "2024-10-14",
    img: img2,
    title: "When Love Strikes",
    genre: "Romance",
    text: "A drama series that dives into the world of a Chicago restaurant.",
    option: "Buy Ticket",
    screen: "Screen 4",
    time: ["10:35", "12:05"],
  },
  {
    id: 26,
    date: "2024-10-13",
    img: img3,
    title: "When Love Strikes",
    genre: "Romance",
    text: "A drama series that dives into the world of a Chicago restaurant.",
    option: "Buy Ticket",
    screen: "Screen 4",
    time: ["10:35", "12:05"],
  },
  {
    id: 27,
    date: "2024-10-13",
    img: img4,
    title: "When Love Strikes",
    genre: "Drama",
    text: "A drama series that dives into the world of a Chicago restaurant.",
    option: "Buy Ticket",
    screen: "Screen 4",
    time: ["10:35", "12:05"],
  },
  {
    id: 28,
    date: "2024-10-12",
    img: img5,
    title: "When Love Strikes",
    genre: "Drama",
    text: "A drama series that dives into the world of a Chicago restaurant.",
    option: "Buy Ticket",
    screen: "Screen 4",
    time: ["10:35", "12:05"],
  },
  {
    id: 29,
    date: "2024-10-12",
    img: img6,
    title: "When Love Strikes",
    genre: "Romance",
    text: "A drama series that dives into the world of a Chicago restaurant.",
    option: "Buy Ticket",
    screen: "Screen 4",
    time: ["10:35", "12:05"],
  },
  {
    id: 30,
    date: "2024-10-11",
    img: img7,
    title: "When Love Strikes",
    genre: "Romance",
    text: "A drama series that dives into the world of a Chicago restaurant.",
    option: "Buy Ticket",
    screen: "Screen 4",
    time: ["10:35", "12:05"],
  },
  {
    id: 31,
    date: "2024-10-11",
    img: img16,
    title: "When Love Strikes",
    genre: "Romance",
    text: "A drama series that dives into the world of a Chicago restaurant.",
    option: "Buy Ticket",
    screen: "Screen 4",
    time: ["10:35", "12:05"],
  },
  {
    id: 32,
    date: "2024-10-10",
    img: img15,
    title: "When Love Strikes",
    genre: "Romance",
    text: "A drama series that dives into the world of a Chicago restaurant.",
    option: "Buy Ticket",
    screen: "Screen 4",
    time: ["10:35", "12:05"],
  },
  {
    id: 33,
    date: "2024-10-10",
    img: img10,
    title: "When Love Strikes",
    genre: "Romance",
    text: "A drama series that dives into the world of a Chicago restaurant.",
    option: "Buy Ticket",
    screen: "Screen 4",
    time: ["10:35", "12:05"],
  },
  {
    id: 34,
    date: "2024-10-09",
    img: img15,
    title: "When Love Strikes",
    genre: "Drama",
    text: "A drama series that dives into the world of a Chicago restaurant.",
    option: "Buy Ticket",
    screen: "Screen 4",
    time: ["10:35", "12:05"],
  },
  {
    id: 35,
    date: "2024-10-09",
    img: img22,
    title: "When Love Strikes",
    genre: "Drama",
    text: "A drama series that dives into the world of a Chicago restaurant.",
    option: "Buy Ticket",
    screen: "Screen 4",
    time: ["10:35", "12:05"],
  },
  {
    id: 36,
    date: "2024-10-08",
    img: img7,
    title: "When Love Strikes",
    genre: "Drama",
    text: "A drama series that dives into the world of a Chicago restaurant.",
    option: "Buy Ticket",
    screen: "Screen 4",
    time: ["10:35", "12:05"],
  },
  {
    id: 37,
    date: "2024-10-08",
    img: img5,
    title: "When Love Strikes",
    genre: " Drama",
    text: "A drama series that dives into the world of a Chicago restaurant.",
    option: "Buy Ticket",
    screen: "Screen 4",
    time: ["10:35", "12:05"],
  },
  {
    id: 38,
    date: "2024-10-07",
    img: img21,
    title: "When Love Strikes",
    genre: " Drama",
    text: "A drama series that dives into the world of a Chicago restaurant.",
    option: "Buy Ticket",
    screen: "Screen 4",
    time: ["10:35", "12:05"],
  },
  {
    id: 39,
    date: "2024-10-07",
    img: img22,
    title: "When Love Strikes",
    genre: " Drama",
    text: "A drama series that dives into the world of a Chicago restaurant.",
    option: "Buy Ticket",
    screen: "Screen 4",
    time: ["10:35", "12:05"],
  },
  {
    id: 40,
    date: "2024-10-06",
    img: img1,
    title: "When Love Strikes",
    genre: "Drama",
    text: "A drama series that dives into the world of a Chicago restaurant.",
    option: "Buy Ticket",
    screen: "Screen 4",
    time: ["10:35", "12:05"],
  },
  {
    id: 41,
    date: "2024-10-06",
    img: img15,
    title: "When Love Strikes",
    genre: "Drama",
    text: "A drama series that dives into the world of a Chicago restaurant",
    option: "Buy Ticket",
    screen: "Screen 4",
    time: ["10:35", "12:05"],
  },
  {
    id: 42,
    date: "2024-10-05",
    img: img18,
    title: "When Love Strikes",
    genre: "Drama",
    text: "A drama series that dives into the world of a Chicago restaurant.",
    option: "Buy Ticket",
    screen: "Screen 4",
    time: ["10:35", "12:05"],
  },
  {
    id: 40,
    date: "2024-10-05",
    img: img19,
    title: "When Love Strikes",
    genre: "Drama",
    text: "A drama series that dives into the world of a Chicago restaurant.",
    option: "Buy Ticket",
    screen: "Screen 4",
    time: ["10:35", "12:05"],
  },
];

export default moviesData;

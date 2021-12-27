const rooms = [
  {
    id: 1,
    imageUrl: require("../assets/rooms/r1.jpg"),
    price: 228,
    title:
      "Anim anim est esse est esse culpa sunt velit occaecat Lorem consectetur ipsum ad amet.",
  },
  {
    id: 2,
    imageUrl: require("../assets/rooms/r2.jpg"),
    price: 224,
    title:
      "Exercitation ea sit non nostrud nisi elit et laborum consequat ad aliquip.",
  },
  {
    id: 3,
    imageUrl: require("../assets/rooms/r3.jpg"),
    price: 222,
    title:
      "Minim veniam tempor mollit nisi deserunt exercitation incididunt anim et ipsum aute tempor eu.",
  },
  {
    id: 4,
    imageUrl: require("../assets/rooms/r4.jpg"),
    price: 224,
    title:
      "Deserunt proident exercitation aliquip cupidatat est adipisicing incididunt est magna laboris eiusmod labore eiusmod.",
  },
  {
    id: 5,
    imageUrl: require("../assets/rooms/r5.jpg"),
    price: 133,
    title: "Nostrud dolore sint ipsum incididunt incididunt nisi.",
  },
  {
    id: 6,
    imageUrl: require("../assets/rooms/r6.jpg"),
    price: 324,
    title: "Amet officia quis est labore deserunt.",
  },
  {
    id: 7,
    imageUrl: require("../assets/rooms/r7.jpg"),
    price: 120,
    title: "Ut ad exercitation et ipsum.",
  },
  {
    id: 8,
    imageUrl: require("../assets/rooms/r8.jpg"),
    price: 525,
    title:
      "Labore reprehenderit qui do nostrud commodo aute quis sunt exercitation consectetur eiusmod Lorem deserunt.",
  },
  {
    id: 9,
    imageUrl: require("../assets/rooms/r9.jpg"),
    price: 226,
    title:
      "Laborum labore quis tempor ea officia aliqua do nisi duis dolor sint duis enim.",
  },
  {
    id: 10,
    imageUrl: require("../assets/rooms/r10.jpg"),
    price: 300,
    title:
      "Occaecat sint nostrud id nostrud nisi voluptate sint sunt voluptate nulla exercitation sit.",
  },
  {
    id: 11,
    imageUrl: require("../assets/rooms/r11.jpg"),
    price: 259,
    title:
      "Nisi excepteur adipisicing enim eu nisi incididunt laborum ea consequat incididunt.",
  },
];
const reviews = [
  {
    id: 1,
    userAvatar: require("../assets/avatars/user.png"),
    rating: 4.5,
    price: 228,
    message:
      "Reprehenderit culpa minim irure officia velit minim id proident est ut id. Ullamco ut pariatur nostrud mollit duis aute laboris dolor enim consequat occaecat sunt dolor. Reprehenderit id nulla dolor amet officia proident tempor Lorem eiusmod fugiat nulla tempor. Ipsum enim labore et ad laboris fugiat aliqua Lorem deserunt consequat anim pariatur in proident.",
    userName: "Sint elit ea in magna fugiat esse.",
    title: "Anim anim Lorem consectetur ipsum ad amet.",
  },
  {
    id: 2,
    userAvatar: require("../assets/avatars/user.png"),
    rating: 2,
    price: 224,
    message:
      "Eu aute cillum dolor eu veniam nisi do Lorem deserunt fugiat ex. Officia est laborum et sit nostrud eu mollit quis excepteur aliqua tempor. Lorem commodo do pariatur laboris anim proident.",
    userName: "Magna labore qui",
    title: "Exercitation laborum consequat ad aliquip.",
  },
  {
    id: 3,
    userAvatar: require("../assets/avatars/user.png"),
    rating: 3.5,
    price: 222,
    message:
      "Veniam exercitation dolore enim culpa id adipisicing in esse laborum magna esse proident veniam duis. Adipisicing ipsum dolore voluptate excepteur do id do magna duis. Non eiusmod adipisicing irure irure voluptate sunt dolore culpa irure aute consectetur. Eu do amet sint consequat dolor fugiat ea reprehenderit. Nisi veniam amet proident quis ipsum laborum consectetur. Cupidatat adipisicing veniam culpa nulla commodo dolore mollit velit in mollit esse ex culpa non. Tempor qui aute consectetur enim aliquip mollit tempor occaecat labore do velit eu id.",
    userName: "Anim proident ",
    title: "Minim anim et ipsum aute tempor eu.",
  },
  {
    id: 4,
    userAvatar: require("../assets/avatars/user.png"),
    rating: 3,
    price: 224,
    message:
      "Aute nisi eiusmod sint consequat proident reprehenderit. Anim officia duis dolor est voluptate mollit consectetur non eiusmod consectetur ad laboris sunt. Incididunt minim cupidatat ex pariatur. Amet in nisi Lorem pariatur tempor ipsum ipsum cillum ad adipisicing velit aliquip deserunt. Aute quis nulla proident deserunt quis ea cillum veniam quis ex eu reprehenderit id. Magna cillum deserunt ad excepteur id nulla id deserunt amet labore. Veniam nostrud dolore reprehenderit est esse ea amet quis ipsum.",
    userName: "Et pariatur",
    title: "Deserunt laboris eiusmod labore eiusmod.",
  },
  {
    id: 5,
    userAvatar: require("../assets/avatars/user.png"),
    rating: 4,
    price: 133,
    message:
      "Qui exercitation duis sit non voluptate ex in occaecat laboris quis. Fugiat eu nulla nisi ex dolor nostrud consectetur dolore officia ea. Esse ut anim veniam dolor velit quis consequat ipsum anim minim amet nostrud. Excepteur deserunt Lorem magna qui nostrud anim sit eiusmod nulla irure duis ex officia fugiat. Aliqua occaecat nulla officia qui aliquip id duis dolore cupidatat culpa. Minim deserunt dolore voluptate mollit veniam excepteur enim voluptate sint culpa dolor sunt dolore non.",
    userName: "Duis dolor",
    title: "Nostrud incididunt incididunt nisi.",
  },
  {
    id: 6,
    userAvatar: require("../assets/avatars/user.png"),
    rating: 3,
    price: 324,
    message:
      "Qui ullamco id dolor consectetur dolor duis commodo occaecat velit dolore Lorem labore in deserunt.",
    userName: "Anim excepteur",
    title: "Amet officia quis est labore deserunt.",
  },
  {
    id: 7,
    userAvatar: require("../assets/avatars/user.png"),
    rating: 5,
    price: 120,
    message:
      "Duis deserunt eu in ea aute ipsum eu cupidatat incididunt qui excepteur quis irure et. Consequat amet fugiat ea dolore ut. Aliquip voluptate commodo nostrud mollit nisi commodo ea aute reprehenderit exercitation. Deserunt cillum id nostrud in.",
    userName: "Sunt aliquip",
    title: "Ut ad exercitation et ipsum.",
  },
  {
    id: 8,
    userAvatar: require("../assets/avatars/user.png"),
    rating: 4,
    price: 525,
    message:
      "Nisi cillum pariatur pariatur proident quis eiusmod proident. Consectetur consectetur amet adipisicing qui proident nisi culpa voluptate laborum exercitation. Culpa reprehenderit culpa tempor fugiat elit esse est deserunt proident.",
    userName: "Qui adipisicing",
    title: "Labore reprehenderit Lorem deserunt.",
  },
  {
    id: 9,
    userAvatar: require("../assets/avatars/user.png"),
    rating: 3.5,
    price: 226,
    message:
      "Occaecat incididunt eiusmod anim consectetur Lorem cillum. Nulla occaecat occaecat incididunt officia exercitation elit occaecat elit fugiat enim pariatur sunt Lorem. Ea eu deserunt dolor non non id mollit eu non reprehenderit. Eiusmod anim ad consequat fugiat qui non.",
    userName: "Enim sunt",
    title: "Laborum labore quis tempor duis enim.",
  },
  {
    id: 10,
    userAvatar: require("../assets/avatars/user.png"),
    rating: 2.5,
    price: 300,
    message:
      "Aliqua culpa ut ipsum anim nostrud tempor do. Ullamco ipsum consectetur amet ex. Incididunt qui occaecat deserunt dolore deserunt. Reprehenderit voluptate est anim dolore culpa deserunt et proident deserunt ullamco laboris pariatur aliqua. Cillum ipsum velit nostrud consectetur aliquip irure commodo.",
    userName: "Elit Lorem",
    title: "Occaecat sint nostrud id nostrud nisi.",
  },
  {
    id: 11,
    userAvatar: require("../assets/avatars/user.png"),
    rating: 3,
    price: 259,
    message:
      "Laborum aliquip amet consectetur commodo excepteur anim qui. Culpa pariatur velit incididunt laborum. Velit irure exercitation exercitation est minim ex. Consectetur duis cillum reprehenderit irure nostrud. Sunt id id culpa qui qui minim fugiat velit. Eiusmod eiusmod esse sint excepteur sunt qui ipsum reprehenderit occaecat aliqua ad id veniam ullamco. Ex dolore mollit Lorem proident adipisicing sit enim laboris.",
    userName: "Adipisicing quis",
    title: "Nisi excepteur adipisicing.",
  },
];
export default [
  {
    id: 1,
    catgeory_id: 2,
    favorive: false,
    name: "The Rose Motel",
    price: 120,
    distance: "2.4km",
    phone: "(877) 876 232 265",
    address: "1007 First Ave.,Seattle, WA, 98104",
    near: "Nearest Station: University St.(0.2 mi)",
    website: "tuganeamiel.com",
    averageRatings: 3.5,
    totalReviews: 12.342,
    image: require("../assets/motel/motel1.jpg"),
    rooms,
    reviews,
    description:
      "Sit consequat elit cupidatat adipisicing veniam anim consectetur voluptate consequat sunt Lorem excepteur labore. Et reprehenderit anim fugiat elit aliqua ex non eu culpa fugiat laboris irure consectetur irure. Aliquip commodo duis fugiat duis anim est cillum.",
  },
  {
    id: 2,
    catgeory_id: 1,
    favorive: true,
    name: "MOXY NYC Times SquareOpens in new window",
    price: 420,
    distance: "2.1km",
    phone: "(877) 876 232 265",
    address: "1007 First Ave.,Seattle, WA, 98104",
    near: "Nearest Station: University St.(0.2 mi)",
    website: "tuganeamiel.com",
    averageRatings: 4.0,
    totalReviews: 32.342,
    image: require("../assets/hotels/h2.jpg"),
    rooms,
    reviews,
    description:
      "Culpa est ex fugiat proident id adipisicing. Occaecat excepteur culpa amet aute consequat dolore irure sunt excepteur eiusmod sint eu est. Et consectetur commodo est quis cillum irure esse minim.",
  },
  {
    id: 3,
    catgeory_id: 3,
    favorive: false,
    name: "Riu Plaza Manhattan Times SquareOpens in new window",
    price: 310,
    distance: "4.5km",
    phone: "(877) 876 232 265",
    address: "1007 First Ave.,Seattle, WA, 98104",
    near: "Nearest Station: University St.(0.2 mi)",
    website: "tuganeamiel.com",
    averageRatings: 3.6,
    totalReviews: 16.342,
    image: require("../assets/appartment/apertment3.jpg"),
    rooms,
    reviews,
    description:
      "Lorem nulla elit reprehenderit tempor veniam ipsum aliquip proident. Veniam elit proident aliquip dolore esse pariatur non occaecat qui tempor sint do et. Duis nostrud elit quis do adipisicing laborum. Nulla consequat irure in ut proident quis voluptate qui consequat enim exercitation anim id culpa.",
  },
  {
    id: 4,
    catgeory_id: 2,
    favorive: true,
    name: "Hotel Edison Times Square",
    price: 420,
    distance: "1.8km",
    phone: "(877) 876 232 265",
    address: "1007 First Ave.,Seattle, WA, 98104",
    near: "Nearest Station: University St.(0.2 mi)",
    website: "tuganeamiel.com",
    averageRatings: 3.8,
    totalReviews: 11.332,
    image: require("../assets/motel/motel3.jpg"),
    rooms,
    reviews,
    description:
      "Sint quis in eu aliqua culpa do laboris laboris et fugiat aliqua esse eiusmod. Cupidatat non esse excepteur do nulla sit eu ipsum et velit. Consequat ea consequat sint ea duis enim proident laborum excepteur nisi in. Deserunt sint nulla non tempor anim. Et nulla aliqua Lorem magna ea pariatur anim enim exercitation ea eu id reprehenderit culpa. Mollit ex reprehenderit enim proident cupidatat commodo sint.",
  },
  {
    id: 9,
    catgeory_id: 4,
    favorive: true,
    name: "Hotel Times Square",
    price: 420,
    distance: "1.8km",
    phone: "(877) 876 232 265",
    address: "1007 First Ave.,Seattle, WA, 98104",
    near: "Nearest Station: University St.(0.2 mi)",
    website: "tuganeamiel.com",
    averageRatings: 3.8,
    totalReviews: 11.332,
    image: require("../assets/villa/villa1.jpg"),
    rooms,
    reviews,
    description:
      "Sint quis in eu aliqua culpa do laboris laboris et fugiat aliqua esse eiusmod. Cupidatat non esse excepteur do nulla sit eu ipsum et velit. Consequat ea consequat sint ea duis enim proident laborum excepteur nisi in. Deserunt sint nulla non tempor anim. Et nulla aliqua Lorem magna ea pariatur anim enim exercitation ea eu id reprehenderit culpa. Mollit ex reprehenderit enim proident cupidatat commodo sint.",
  },
  {
    id: 5,
    catgeory_id: 1,
    favorive: true,
    name: "Ameritania at Times SquareOpens in new window",
    price: 220,
    distance: "2.3km",
    phone: "(877) 876 232 265",
    address: "1007 First Ave.,Seattle, WA, 98104",
    near: "Nearest Station: University St.(0.2 mi)",
    website: "tuganeamiel.com",
    averageRatings: 5,
    totalReviews: 19.398,
    image: require("../assets/hotels/h5.jpg"),
    rooms,
    reviews,
    description:
      "Tempor dolore esse elit laboris dolor elit dolore nulla id consectetur labore et. Commodo non id non est sit sit duis nostrud eu nulla. Ut irure occaecat eiusmod exercitation tempor fugiat ullamco excepteur ex ea reprehenderit consequat reprehenderit. Cupidatat dolore tempor et eu culpa nostrud tempor. Consectetur Lorem irure qui quis tempor mollit enim amet.",
  },
  {
    id: 6,
    catgeory_id: 3,
    favorive: true,
    name: "Freehand New YorkOpens in new window",
    price: 150,
    distance: "3.5km",
    phone: "(877) 876 232 265",
    address: "1007 First Ave.,Seattle, WA, 98104",
    near: "Nearest Station: University St.(0.2 mi)",
    website: "tuganeamiel.com",
    averageRatings: 1.5,
    totalReviews: 2.346,
    image: require("../assets/appartment/apartment4.jpg"),
    rooms,
    reviews,
    description:
      "Reprehenderit do voluptate amet fugiat qui deserunt nostrud amet sint pariatur proident labore ad ad. Nisi deserunt in enim enim aliqua aute anim culpa id voluptate ipsum officia sit elit. Adipisicing incididunt deserunt veniam occaecat quis ad amet mollit aute magna exercitation culpa officia. Elit exercitation sunt deserunt elit consequat. Cillum commodo amet dolor magna.",
  },
  {
    id: 7,
    catgeory_id: 4,
    favorive: false,
    name: "Hotel Edison Times Square",
    price: 420,
    distance: "1.8km",
    phone: "(877) 876 232 265",
    address: "1007 First Ave.,Seattle, WA, 98104",
    near: "Nearest Station: University St.(0.2 mi)",
    website: "tuganeamiel.com",
    averageRatings: 3.8,
    totalReviews: 11.332,
    image: require("../assets/villa/villa3.jpg"),
    rooms,
    reviews,
    description:
      "Sint quis in eu aliqua culpa do laboris laboris et fugiat aliqua esse eiusmod. Cupidatat non esse excepteur do nulla sit eu ipsum et velit. Consequat ea consequat sint ea duis enim proident laborum excepteur nisi in. Deserunt sint nulla non tempor anim. Et nulla aliqua Lorem magna ea pariatur anim enim exercitation ea eu id reprehenderit culpa. Mollit ex reprehenderit enim proident cupidatat commodo sint.",
  },
  {
    id: 8,
    catgeory_id: 4,
    favorive: false,
    name: "Freehand New YorkOpens in new window",
    price: 150,
    distance: "3.5km",
    phone: "(877) 876 232 265",
    address: "1007 First Ave.,Seattle, WA, 98104",
    near: "Nearest Station: University St.(0.2 mi)",
    website: "tuganeamiel.com",
    averageRatings: 1.5,
    totalReviews: 2.346,
    image: require("../assets/villa/villa1.jpg"),
    rooms,
    reviews,
    description:
      "Reprehenderit do voluptate amet fugiat qui deserunt nostrud amet sint pariatur proident labore ad ad. Nisi deserunt in enim enim aliqua aute anim culpa id voluptate ipsum officia sit elit. Adipisicing incididunt deserunt veniam occaecat quis ad amet mollit aute magna exercitation culpa officia. Elit exercitation sunt deserunt elit consequat. Cillum commodo amet dolor magna.",
  },
  {
    id: 10,
    catgeory_id: 4,
    favorive: false,
    name: "Non adipisicing cupidatat enim cillum amet.",
    price: 150,
    distance: "3.5km",
    phone: "(877) 876 232 265",
    address: "1007 First Ave.,Seattle, WA, 98104",
    near: "Nearest Station: University St.(0.2 mi)",
    website: "tuganeamiel.com",
    averageRatings: 1.5,
    totalReviews: 2.346,
    image: require("../assets/villa/villa2.jpg"),
    rooms,
    reviews,
    description:
      "Reprehenderit do voluptate amet fugiat qui deserunt nostrud amet sint pariatur proident labore ad ad. Nisi deserunt in enim enim aliqua aute anim culpa id voluptate ipsum officia sit elit. Adipisicing incididunt deserunt veniam occaecat quis ad amet mollit aute magna exercitation culpa officia. Elit exercitation sunt deserunt elit consequat. Cillum commodo amet dolor magna.",
  },
  {
    id: 11,
    catgeory_id: 4,
    favorive: true,
    name: "Sit eiusmod nostrud commodo ad adipisicing dolore culpa velit.",
    price: 150,
    distance: "3.5km",
    phone: "(877) 876 232 265",
    address: "1007 First Ave.,Seattle, WA, 98104",
    near: "Nearest Station: University St.(0.2 mi)",
    website: "tuganeamiel.com",
    averageRatings: 1.5,
    totalReviews: 2.346,
    image: require("../assets/villa/villa3.jpg"),
    rooms,
    reviews,
    description:
      "Reprehenderit do voluptate amet fugiat qui deserunt nostrud amet sint pariatur proident labore ad ad. Nisi deserunt in enim enim aliqua aute anim culpa id voluptate ipsum officia sit elit. Adipisicing incididunt deserunt veniam occaecat quis ad amet mollit aute magna exercitation culpa officia. Elit exercitation sunt deserunt elit consequat. Cillum commodo amet dolor magna.",
  },
  {
    id: 12,
    catgeory_id: 4,
    favorive: false,
    name: "Voluptate nisi ad est adipisicing.",
    price: 150,
    distance: "3.5km",
    phone: "(877) 876 232 265",
    address: "1007 First Ave.,Seattle, WA, 98104",
    near: "Nearest Station: University St.(0.2 mi)",
    website: "tuganeamiel.com",
    averageRatings: 1.5,
    totalReviews: 2.346,
    image: require("../assets/villa/villa2.jpg"),
    rooms,
    reviews,
    description:
      "Reprehenderit do voluptate amet fugiat qui deserunt nostrud amet sint pariatur proident labore ad ad. Nisi deserunt in enim enim aliqua aute anim culpa id voluptate ipsum officia sit elit. Adipisicing incididunt deserunt veniam occaecat quis ad amet mollit aute magna exercitation culpa officia. Elit exercitation sunt deserunt elit consequat. Cillum commodo amet dolor magna.",
  },
  {
    id: 13,
    catgeory_id: 4,
    favorive: false,
    name: "Qui amet Lorem et aute sit excepteur dolor aliqua.",
    price: 150,
    distance: "3.5km",
    phone: "(877) 876 232 265",
    address: "1007 First Ave.,Seattle, WA, 98104",
    near: "Nearest Station: University St.(0.2 mi)",
    website: "tuganeamiel.com",
    averageRatings: 1.5,
    totalReviews: 2.346,
    image: require("../assets/villa/villa1.jpg"),
    rooms,
    reviews,
    description:
      "Reprehenderit do voluptate amet fugiat qui deserunt nostrud amet sint pariatur proident labore ad ad. Nisi deserunt in enim enim aliqua aute anim culpa id voluptate ipsum officia sit elit. Adipisicing incididunt deserunt veniam occaecat quis ad amet mollit aute magna exercitation culpa officia. Elit exercitation sunt deserunt elit consequat. Cillum commodo amet dolor magna.",
  },
  {
    id: 14,
    catgeory_id: 1,
    favorive: false,
    name: "Do non irure eiusmod ea dolor quis et amet et ad.",
    price: 420,
    distance: "2.1km",
    phone: "(877) 876 232 265",
    address: "1007 First Ave.,Seattle, WA, 98104",
    near: "Nearest Station: University St.(0.2 mi)",
    website: "tuganeamiel.com",
    averageRatings: 4.0,
    totalReviews: 32.342,
    image: require("../assets/hotels/h1.jpg"),
    rooms,
    reviews,
    description:
      "Culpa est ex fugiat proident id adipisicing. Occaecat excepteur culpa amet aute consequat dolore irure sunt excepteur eiusmod sint eu est. Et consectetur commodo est quis cillum irure esse minim.",
  },
  {
    id: 15,
    catgeory_id: 1,
    favorive: false,
    name: "MOXY NYC Times SquareOpens in new window",
    price: 420,
    distance: "2.1km",
    phone: "(877) 876 232 265",
    address: "1007 First Ave.,Seattle, WA, 98104",
    near: "Nearest Station: University St.(0.2 mi)",
    website: "tuganeamiel.com",
    averageRatings: 4.0,
    totalReviews: 32.342,
    image: require("../assets/hotels/h2.jpg"),
    rooms,
    reviews,
    description:
      "Culpa est ex fugiat proident id adipisicing. Occaecat excepteur culpa amet aute consequat dolore irure sunt excepteur eiusmod sint eu est. Et consectetur commodo est quis cillum irure esse minim.",
  },
  {
    id: 16,
    catgeory_id: 1,
    favorive: false,
    name: "Nostrud esse dolor id do.",
    price: 420,
    distance: "2.1km",
    phone: "(877) 876 232 265",
    address: "1007 First Ave.,Seattle, WA, 98104",
    near: "Nearest Station: University St.(0.2 mi)",
    website: "tuganeamiel.com",
    averageRatings: 4.0,
    totalReviews: 32.342,
    image: require("../assets/hotels/h1.jpg"),
    rooms,
    reviews,
    description:
      "Culpa est ex fugiat proident id adipisicing. Occaecat excepteur culpa amet aute consequat dolore irure sunt excepteur eiusmod sint eu est. Et consectetur commodo est quis cillum irure esse minim.",
  },
  {
    id: 17,
    catgeory_id: 1,
    favorive: true,
    name: "Cillum esse voluptate duis pariatur",
    price: 420,
    distance: "2.1km",
    phone: "(877) 876 232 265",
    address: "1007 First Ave.,Seattle, WA, 98104",
    near: "Nearest Station: University St.(0.2 mi)",
    website: "tuganeamiel.com",
    averageRatings: 4.0,
    totalReviews: 32.342,
    image: require("../assets/hotels/h2.jpg"),
    rooms,
    reviews,
    description:
      "Culpa est ex fugiat proident id adipisicing. Occaecat excepteur culpa amet aute consequat dolore irure sunt excepteur eiusmod sint eu est. Et consectetur commodo est quis cillum irure esse minim.",
  },
  {
    id: 18,
    catgeory_id: 1,
    favorive: true,
    name: "Veniam do ea cupidatat aute ut adipisicing laborum.",
    price: 420,
    distance: "2.1km",
    phone: "(877) 876 232 265",
    address: "1007 First Ave.,Seattle, WA, 98104",
    near: "Nearest Station: University St.(0.2 mi)",
    website: "tuganeamiel.com",
    averageRatings: 4.0,
    totalReviews: 32.342,
    image: require("../assets/hotels/h1.jpg"),
    rooms,
    reviews,
    description:
      "Culpa est ex fugiat proident id adipisicing. Occaecat excepteur culpa amet aute consequat dolore irure sunt excepteur eiusmod sint eu est. Et consectetur commodo est quis cillum irure esse minim.",
  },
  {
    id: 19,
    catgeory_id: 1,
    favorive: false,
    name: "Ullamco enim laborum quis aute.",
    price: 420,
    distance: "2.1km",
    phone: "(877) 876 232 265",
    address: "1007 First Ave.,Seattle, WA, 98104",
    near: "Nearest Station: University St.(0.2 mi)",
    website: "tuganeamiel.com",
    averageRatings: 4.0,
    totalReviews: 32.342,
    image: require("../assets/hotels/h2.jpg"),
    rooms,
    reviews,
    description:
      "Culpa est ex fugiat proident id adipisicing. Occaecat excepteur culpa amet aute consequat dolore irure sunt excepteur eiusmod sint eu est. Et consectetur commodo est quis cillum irure esse minim.",
  },
];

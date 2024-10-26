import { useState } from "react";
import "./Season.css";

const products = [
  { name: "Ski Jacket", season: "Winter", imageUrl: "https://media.istockphoto.com/id/514371532/photo/warm-jacket-isolated.jpg?s=612x612&w=0&k=20&c=v3jFQIBIG-VekhubUzXu2rM7xnEGI56iy-sp6R8ousQ=" },
  { name: "Crew Neck Sweater", season: "Winter", imageUrl: "https://i.pinimg.com/236x/08/09/6e/08096e7b8170509f65d7319eb2dac008.jpg" },
  { name: "Collar Flap Overcoat", season: "Winter", imageUrl: "https://i.pinimg.com/236x/50/a2/51/50a251d6e009789453c6f3878627aa59.jpg" },
  { name: "Cordon-Short", season: "Summer", imageUrl: "https://i.pinimg.com/236x/f1/46/bf/f146bf6d7ec35b03c0d9f1a4cacdcc19.jpg" },
  { name: "Short Sleeve Shirt", season: "Summer", imageUrl: "https://i.pinimg.com/236x/a7/7f/1e/a77f1e4d2669a14c21b5cfa6dd8ed3c7.jpg" },
  { name: "Swim Shorts", season: "Summer", imageUrl: "https://i.pinimg.com/236x/2d/47/3e/2d473e7b075bb43a35022809558a7087.jpg" },
  { name: "Raincoat", season: "Spring", imageUrl: "https://i.pinimg.com/236x/a9/63/f4/a963f4233cd2f2dd9e4c62bf8d6322ec.jpg" },
  { name: "Windbreaker", season: "Spring", imageUrl: "https://i.pinimg.com/236x/8d/6f/54/8d6f549c383c719c92911153a609c084.jpg" },
  { name: "Lightweight Scarf", season: "Spring", imageUrl: "https://i.pinimg.com/236x/b1/91/bb/b191bb1f0c6b1ba503b2ba5f5d6d384f.jpg" },
  { name: "Pumpkin Spice Latte", season: "Autumn", imageUrl: "https://i.pinimg.com/236x/e5/99/53/e59953424f65e8a28519472711a4f4f1.jpg" },
  { name: "Cable Knit Sweater", season: "Autumn", imageUrl: "https://i.pinimg.com/236x/f2/6f/71/f26f71aa4ae2332b5e955269406203b2.jpg" },
  { name: "Nuble Dress", season: "Autumn", imageUrl: "https://i.pinimg.com/236x/70/29/7d/70297d8fd8021a93e28abebd71849258.jpg" },
];

const seasonImages = {
  Winter: "https://media.istockphoto.com/id/1676535338/photo/two-little-snowmen-in-caps-on-snow-in-the-winter-background-with-a-funny-snowman-christmas.webp?b=1&s=170667a&w=0&k=20&c=9sLOKpzL3P0nhZdqPn_1yFEl3shsLq9L55oMjOwuhhc=",
  Summer: "https://media.istockphoto.com/id/513550806/photo/teenager-hipster-friends-partying-by-blowing-colorful-confetti-from-hands.webp?b=1&s=170667a&w=0&k=20&c=kjS91dxwisqkwqTEdQ9Lo865uj2BlvEt5mxiTMJTIdw=",
  Spring: "https://media.istockphoto.com/id/1460853333/photo/summer-meadow-with-butterflies.webp?b=1&s=170667a&w=0&k=20&c=ViOS5qNP5yGzQszGzLZ0PAhrziY3WqoA_l2No207jLE=",
  Autumn: "https://media.istockphoto.com/id/1556220599/photo/warm-bright-background-image-with-an-autumn-theme.webp?b=1&s=170667a&w=0&k=20&c=sPasE9JFrHTqMBFh08-HjZJJvmPStuLU4VgiqCdOkno=",
};

function classifyProductsBySeason(products) {
  const seasons = {
    Winter: [],
    Spring: [],
    Summer: [],
    Autumn: [],
  };

  products.forEach((product) => {
    if (seasons[product.season]) {
      seasons[product.season].push(product);
    }
  });

  return seasons;
}

function Season() {
  const seasonalProducts = classifyProductsBySeason(products);
  const [activeSeason, setActiveSeason] = useState(null); // Track active season
  const [showProducts, setShowProducts] = useState(false); // Track product visibility

  const toggleProductList = (season) => {
    setActiveSeason(season === activeSeason ? null : season);
  };

  const handleProductView = (season) => {
    setShowProducts(activeSeason === season ? !showProducts : true); // Toggle product visibility for the selected season
  };

  const seasonClasses = {
    Winter: "season-winter",
    Spring: "season-spring",
    Summer: "season-summer",
    Autumn: "season-autumn",
  };

  return (
    <div className="div-season">
      {Object.keys(seasonalProducts).map((season) => (
        <div
          key={season}
          className={`season ${seasonClasses[season]} ${activeSeason === season ? "active" : ""}`}
          onClick={() => toggleProductList(season)}
        >
          <img
            src={seasonImages[season]} // Use custom season images
            alt={season}
            className="season-image"
          />
          <div className="season-content">
            <h2>{season}</h2>
            <button onClick={() => handleProductView(season)}>View Products</button>
          </div>
          {activeSeason === season && showProducts && (
            <ul className="product-list">
              {seasonalProducts[season].map((product, index) => (
                <li key={index}>
                  <img src={product.imageUrl} alt={product.name} className="product-image" />
                  <p>{product.name}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}

export default Season;











// import { useState } from "react";
// import "./Season.css";

// const products = [
//     { name: "Ski Jacket", season: "Winter", imageUrl: "https://media.istockphoto.com/id/514371532/photo/warm-jacket-isolated.jpg?s=612x612&w=0&k=20&c=v3jFQIBIG-VekhubUzXu2rM7xnEGI56iy-sp6R8ousQ=" },
//     { name: "Crew Neck Sweater", season: "Winter", imageUrl: "https://i.pinimg.com/236x/08/09/6e/08096e7b8170509f65d7319eb2dac008.jpg" },
//     { name: "Collar Flap Overcoat", season: "Winter", imageUrl: "https://i.pinimg.com/236x/50/a2/51/50a251d6e009789453c6f3878627aa59.jpg" },
//     { name: "Cordon-Short", season: "Summer", imageUrl: "https://i.pinimg.com/236x/f1/46/bf/f146bf6d7ec35b03c0d9f1a4cacdcc19.jpg" },
//     { name: "Short Sleeve Shirt", season: "Summer", imageUrl: "https://i.pinimg.com/236x/a7/7f/1e/a77f1e4d2669a14c21b5cfa6dd8ed3c7.jpg" },
//     { name: "Swim Shorts", season: "Summer", imageUrl: "https://i.pinimg.com/236x/2d/47/3e/2d473e7b075bb43a35022809558a7087.jpg" },
//     { name: "Raincoat", season: "Spring", imageUrl: "https://i.pinimg.com/236x/a9/63/f4/a963f4233cd2f2dd9e4c62bf8d6322ec.jpg" },
//     { name: "Windbreaker", season: "Spring", imageUrl: "https://i.pinimg.com/236x/8d/6f/54/8d6f549c383c719c92911153a609c084.jpg" },
//     { name: "Lightweight Scarf", season: "Spring", imageUrl: "https://i.pinimg.com/236x/b1/91/bb/b191bb1f0c6b1ba503b2ba5f5d6d384f.jpg" },
//     { name: "Pumpkin Spice Latte", season: "Autumn", imageUrl: "https://i.pinimg.com/236x/e5/99/53/e59953424f65e8a28519472711a4f4f1.jpg" },
//     { name: "Cable Knit Sweater", season: "Autumn", imageUrl: "https://i.pinimg.com/236x/f2/6f/71/f26f71aa4ae2332b5e955269406203b2.jpg" },
//     { name: "Nuble Dress", season: "Autumn", imageUrl: "https://i.pinimg.com/236x/70/29/7d/70297d8fd8021a93e28abebd71849258.jpg" },
// ];

// const seasonImages = {
//     Winter: "https://media.istockphoto.com/id/1676535338/photo/two-little-snowmen-in-caps-on-snow-in-the-winter-background-with-a-funny-snowman-christmas.webp?b=1&s=170667a&w=0&k=20&c=9sLOKpzL3P0nhZdqPn_1yFEl3shsLq9L55oMjOwuhhc=",
//     Summer: "https://media.istockphoto.com/id/513550806/photo/teenager-hipster-friends-partying-by-blowing-colorful-confetti-from-hands.webp?b=1&s=170667a&w=0&k=20&c=kjS91dxwisqkwqTEdQ9Lo865uj2BlvEt5mxiTMJTIdw=",
//     Spring: "https://media.istockphoto.com/id/1460853333/photo/summer-meadow-with-butterflies.webp?b=1&s=170667a&w=0&k=20&c=ViOS5qNP5yGzQszGzLZ0PAhrziY3WqoA_l2No207jLE=",
//     Autumn: "https://media.istockphoto.com/id/1556220599/photo/warm-bright-background-image-with-an-autumn-theme.webp?b=1&s=170667a&w=0&k=20&c=sPasE9JFrHTqMBFh08-HjZJJvmPStuLU4VgiqCdOkno=",
// };

// function classifyProductsBySeason(products) {
//     const seasons = {
//         Winter: [],
//         Spring: [],
//         Summer: [],
//         Autumn: [],
//     };

//     products.forEach((product) => {
//         if (seasons[product.season]) {
//             seasons[product.season].push(product);
//         }
//     });

//     return seasons;
// }

// function Season() {
//     const seasonalProducts = classifyProductsBySeason(products);
//     const [activeSeason, setActiveSeason] = useState(null); // Track active season

//     const toggleProductList = (season) => {
//         setActiveSeason(season === activeSeason ? null : season);
//     };

//     const [showProducts, setShowProducts] = useState(false); // Track product visibility

//     const handleProductView = (season) => {
//       setShowProducts(!showProducts); // Toggle product visibility
//   };
  

//     const seasonClasses = {
//         Winter: "season-winter",
//         Spring: "season-spring",
//         Summer: "season-summer",
//         Autumn: "season-autumn",
//     };

//     return (
//         <div className="div-season">
//             {Object.keys(seasonalProducts).map((season) => (
//                 <div
//                     key={season}
//                     className={`season ${seasonClasses[season]} ${activeSeason === season ? "active" : ""}`}
//                     onClick={() => toggleProductList(season)}
//                 >
//                     <img
//                         src={seasonImages[season]} // Use custom season images
//                         alt={season}
//                         className="season-image"
//                     />
//                     <div className="season-content">
//                         <h2>{season}</h2>
//                         <button onClick={() => handleProductView(season)}>View Products</button>
//                     </div>
//                     {activeSeason === season && showProducts && (
//                         <ul className="product-list">
//                             {seasonalProducts[season].map((product, index) => (
//                                 <li key={index}>
//                                     <img src={product.imageUrl} alt={product.name} className="product-image" />
//                                     <p>{product.name}</p>
//                                 </li>
//                             ))}
//                         </ul>
//                     )}
//                 </div>
//             ))}
//         </div>
//     );
// }

// export default Season;

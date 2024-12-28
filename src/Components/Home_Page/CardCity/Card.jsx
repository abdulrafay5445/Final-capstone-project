// import { Box, Grid, Typography, Button, CardMedia, CardContent } from '@mui/material';
// import React from 'react';
// import { Link } from 'react-router-dom';

// // Import city images
// import Islamabad from '../../../Images/Islamabad.webp';
// import Karachi from '../../../Images/Karachi.webp';
// import Lahore from '../../../Images/Lahore.webp';
// import Faisalabad from '../../../Images/Faisalabad.webp';
// import Rawalpindi from '../../../Images/Rawalpindi.webp';
// import Abbottabad from '../../../Images/Abottabad.webp';
// import Bahawalpur from '../../../Images/Bahawalpur.webp';
// import DeraGhaziKhan from '../../../Images/GhaziKhan.webp';
// import Gujranwala from '../../../Images/Gujranwala.webp';
// import Gujrat from '../../../Images/Gujrat.jpg';
// import Hyderabad from '../../../Images/Hyderabad.webp';
// import Jhelum from '../../../Images/Jhelum.webp';
// import Kamoke from '../../../Images/Kamoke.webp';
// import Larkana from '../../../Images/Larkana.webp';
// import Mangla from '../../../Images/Mangla.webp';
// import Mardan from '../../../Images/Mardan.webp';
// import Multan from '../../../Images/Multan.webp';
// import Murree from '../../../Images/Murree.webp';
// import Okara from '../../../Images/Okara.webp';
// import PanoAqil from '../../../Images/PanoAqil.webp';
// import Peshawar from '../../../Images/Mardan.webp';
// import Quetta from '../../../Images/Quetta.webp';
// import RahimYarKhan from '../../../Images/RahimYarKhan.webp';
// import Sadiqabad from '../../../Images/Sadiqabad.webp';
// import Sahiwal from '../../../Images/Sahiwal.webp';
// import Sargodha from '../../../Images/Sargodha.webp';
// import Sheikhupura from '../../../Images/Sheikhupura.jpg';
// import Sialkot from '../../../Images/Sialkot.webp';
// import Sukkur from '../../../Images/Sukkur.webp';
// import WahCantt from '../../../Images/WahhCannt.webp';

// // // City data array
// const cities = [
//     { id: 1, name: 'Islamabad', image: Islamabad },
//     { id: 2, name: 'Karachi', image: Karachi },
//     { id: 3, name: 'Lahore', image: Lahore },
//     { id: 4, name: 'Faisalabad', image: Faisalabad },
//     { id: 5, name: 'Rawalpindi', image: Rawalpindi },
//     { id: 6, name: 'Abbottabad', image: Abbottabad },
//     { id: 7, name: 'Bahawalpur', image: Bahawalpur },
//     { id: 8, name: 'Dera Ghazi Khan', image: DeraGhaziKhan },
//     { id: 9, name: 'Gujranwala', image: Gujranwala },
//     { id: 10, name: 'Gujrat', image: Gujrat },
//     { id: 11, name: 'Hyderabad', image: Hyderabad },
//     { id: 12, name: 'Jhelum', image: Jhelum },
//     { id: 13, name: 'Kamoke', image: Kamoke },
//     { id: 14, name: 'Larkana', image: Larkana },
//     { id: 15, name: 'Mangla', image: Mangla },
//     { id: 16, name: 'Mardan', image: Mardan },
//     { id: 17, name: 'Multan', image: Multan },
//     { id: 18, name: 'Murree', image: Murree },
//     { id: 19, name: 'Okara', image: Okara },
//     { id: 20, name: 'PanoAqil', image: PanoAqil },
//     { id: 21, name: 'Peshawar', image: Peshawar },
//     { id: 22, name: 'Quetta', image: Quetta },
//     { id: 23, name: 'RahimYarKhan', image: RahimYarKhan },
//     { id: 24, name: 'Sadiqabad', image: Sadiqabad },
//     { id: 25, name: 'Sahiwal', image: Sahiwal },
//     { id: 26, name: 'Sargodha', image: Sargodha },
//     { id: 27, name: 'Sheikhupura', image: Sheikhupura },
//     { id: 28, name: 'Sialkot', image: Sialkot },
//     { id: 29, name: 'Sukkur', image: Sukkur },
//     { id: 30, name: 'WahCantt', image: WahCantt },
// ];

// const Card = () => {
 

//     return (
//         <div className="container py-5">
//             <Typography variant="h4" align="start" gutterBottom>
//                 Find us in these cities and many more!
//             </Typography>
//             <Grid container spacing={2}>
//                 {cities.map((city) => (
//                     <Grid item xs={6} sm={6} md={4} lg={3} key={city.id}>
//                         <Link to={`/Resturant?city?city=${city.name}`} style={{ textDecoration: 'none' }}>
//                             <Box
//                                 sx={{
//                                     height: 180,
//                                     display: 'flex',
//                                     flexDirection: 'column',
//                                     justifyContent: 'flex-end',
//                                     borderRadius: '8px',
//                                     overflow: 'hidden',
//                                     boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
//                                     position: 'relative',
//                                 }}
//                             >
//                                 <img
//                                     src={city.image}
//                                     alt={city.name}
//                                     style={{
//                                         width: '100%',
//                                         height: '100%',
//                                         objectFit: 'cover',
//                                         position: 'absolute',
//                                         top: 0,
//                                         left: 0,
//                                     }}
//                                 />

//                                 <Button
                                   
//                                     variant="contained"
//                                     sx={{
//                                         position: 'absolute',
//                                         bottom: '1%',
//                                         left: '1%',
//                                         backgroundColor: 'rgba(255, 255, 255, 0.9)',
//                                         color: '#000',
//                                         fontWeight: 'bold',
//                                         borderRadius: '8px',
//                                         padding: '9px 18px',
//                                         margin: '5px',
//                                         fontSize: '0.9rem',
//                                     }}
//                                 >
//                                     {city.name}
//                                 </Button>
//                             </Box>
//                         </Link>
//                     </Grid>
//                 ))}
//             </Grid>
//         </div>
//     );
// };

// export default Card;









































import { Box, Grid, Typography, Button, CardMedia, CardContent } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

// Import city images
import Islamabad from '../../../Images/Islamabad.webp';
import Karachi from '../../../Images/Karachi.webp';
import Lahore from '../../../Images/Lahore.webp';
import Faisalabad from '../../../Images/Faisalabad.webp';
import Rawalpindi from '../../../Images/Rawalpindi.webp';
import Abbottabad from '../../../Images/Abottabad.webp';
import Bahawalpur from '../../../Images/Bahawalpur.webp';
import DeraGhaziKhan from '../../../Images/GhaziKhan.webp';
import Gujranwala from '../../../Images/Gujranwala.webp';
import Gujrat from '../../../Images/Gujrat.jpg';
import Hyderabad from '../../../Images/Hyderabad.webp';
import Jhelum from '../../../Images/Jhelum.webp';
import Kamoke from '../../../Images/Kamoke.webp';
import Larkana from '../../../Images/Larkana.webp';
import Mangla from '../../../Images/Mangla.webp';
import Mardan from '../../../Images/Mardan.webp';
import Multan from '../../../Images/Multan.webp';
import Murree from '../../../Images/Murree.webp';
import Okara from '../../../Images/Okara.webp';
import PanoAqil from '../../../Images/PanoAqil.webp';
import Peshawar from '../../../Images/Mardan.webp';
import Quetta from '../../../Images/Quetta.webp';
import RahimYarKhan from '../../../Images/RahimYarKhan.webp';
import Sadiqabad from '../../../Images/Sadiqabad.webp';
import Sahiwal from '../../../Images/Sahiwal.webp';
import Sargodha from '../../../Images/Sargodha.webp';
import Sheikhupura from '../../../Images/Sheikhupura.jpg';
import Sialkot from '../../../Images/Sialkot.webp';
import Sukkur from '../../../Images/Sukkur.webp';
import WahCantt from '../../../Images/WahhCannt.webp';

// // City data array
const cities = [
    { id: 1, name: 'Islamabad', image: Islamabad },
    { id: 2, name: 'Karachi', image: Karachi },
    { id: 3, name: 'Lahore', image: Lahore },
    { id: 4, name: 'Faisalabad', image: Faisalabad },
    { id: 5, name: 'Rawalpindi', image: Rawalpindi },
    { id: 6, name: 'Abbottabad', image: Abbottabad },
    { id: 7, name: 'Bahawalpur', image: Bahawalpur },
    { id: 8, name: 'Dera Ghazi Khan', image: DeraGhaziKhan },
    { id: 9, name: 'Gujranwala', image: Gujranwala },
    { id: 10, name: 'Gujrat', image: Gujrat },
    { id: 11, name: 'Hyderabad', image: Hyderabad },
    { id: 12, name: 'Jhelum', image: Jhelum },
    { id: 13, name: 'Kamoke', image: Kamoke },
    { id: 14, name: 'Larkana', image: Larkana },
    { id: 15, name: 'Mangla', image: Mangla },
    { id: 16, name: 'Mardan', image: Mardan },
    { id: 17, name: 'Multan', image: Multan },
    { id: 18, name: 'Murree', image: Murree },
    { id: 19, name: 'Okara', image: Okara },
    { id: 20, name: 'PanoAqil', image: PanoAqil },
    { id: 21, name: 'Peshawar', image: Peshawar },
    { id: 22, name: 'Quetta', image: Quetta },
    { id: 23, name: 'RahimYarKhan', image: RahimYarKhan },
    { id: 24, name: 'Sadiqabad', image: Sadiqabad },
    { id: 25, name: 'Sahiwal', image: Sahiwal },
    { id: 26, name: 'Sargodha', image: Sargodha },
    { id: 27, name: 'Sheikhupura', image: Sheikhupura },
    { id: 28, name: 'Sialkot', image: Sialkot },
    { id: 29, name: 'Sukkur', image: Sukkur },
    { id: 30, name: 'WahCantt', image: WahCantt },
];

const Card = () => {
 

    return (
        <div className="container py-5">
            <Typography variant="h4" align="start" gutterBottom>
                Find us in these cities and many more!
            </Typography>
            <Grid container spacing={2}>
                {cities.map((city) => (
                    <Grid item xs={6} sm={6} md={4} lg={3} key={city.id}>
                        <Link to={`/Resturant?city?city=${city.name}`} style={{ textDecoration: 'none' }}>
                            <Box
                                sx={{
                                    height: 180,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'flex-end',
                                    borderRadius: '8px',
                                    overflow: 'hidden',
                                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                                    position: 'relative',
                                }}
                            >
                                <img
                                    src={city.image}
                                    alt={city.name}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                    }}
                                />

                                <Button
                                   
                                    variant="contained"
                                    sx={{
                                        position: 'absolute',
                                        bottom: '1%',
                                        left: '1%',
                                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                                        color: '#000',
                                        fontWeight: 'bold',
                                        borderRadius: '8px',
                                        padding: '9px 18px',
                                        margin: '5px',
                                        fontSize: '0.9rem',
                                    }}
                                >
                                    {city.name}
                                </Button>
                            </Box>
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default Card;



















// import React from "react";
// import { Box, Typography, Grid, Card, CardMedia, CardContent } from "@mui/material";
// import { Link } from "react-router-dom";



// // CityCard Component
// const CityCard = ({ name, image }) => {
//   return (
//     <Card
//       sx={{
//         borderRadius: 3,
//         boxShadow: 3,
//         maxWidth: 400,
//         position: "relative",
//         textDecoration: "none",
//       }}
//     >
//       <CardMedia
//         component="img"
//         image={image}
//         alt={name}
//         sx={{ height: 280, objectFit: "cover" }}
//       />
//       <CardContent
//         sx={{
//           position: "absolute",
//           bottom: 10,
//           left: 10,
//           backgroundColor: "rgba(255, 255, 255, 0.8)",
//           borderRadius: 5,
//           px: 2,
//         }}
//       >
//         <Typography
//           variant="body1"
//           fontWeight="bold"
//           sx={{ fontSize: "1.1rem" }}
//         >
//           {name}
//         </Typography>
//       </CardContent>
//     </Card>
//   );
// };

// const Cities = () => {
//   const cities = [
//     { id: 1, name: "Islamabad", image: Islamabad },
//     { id: 2, name: "Karachi", image: Karachi },
//     { id: 3, name: "Lahore", image: Lahore },
//     { id: 4, name: "Faisalabad", image: Faisalabad },
//     { id: 5, name: "Rawalpindi", image: Rawalpindi },
//     { id: 6, name: "Abbottabad", image: Abbottabad },
//     { id: 7, name: "Bahawalpur", image: Bahawalpur },
//     { id: 8, name: "Dera Ghazi Khan", image: DeraGhaziKhan },
//     { id: 9, name: "Gujranwala", image: Gujranwala },
//     { id: 10, name: "Gujrat", image: Gujrat },
//     { id: 11, name: "Hyderabad", image: Hyderabad },
//     { id: 12, name: "Jhelum", image: Jhelum },
//     { id: 13, name: "Kamoke", image: Kamoke },
//     { id: 14, name: "Larkana", image: Larkana },
//     { id: 15, name: "Mangla", image: Mangla },
//     { id: 16, name: "Mardan", image: Mardan },
//     { id: 17, name: "Multan", image: Multan },
//     { id: 18, name: "Murree", image: Murree },
//     { id: 19, name: "Okara", image: Okara },
//     { id: 20, name: "Pano Aqil", image: PanoAqil },
//     { id: 21, name: "Peshawar", image: Peshawar },
//     { id: 22, name: "Quetta", image: Quetta },
//     { id: 23, name: "Rahim Yar Khan", image: RahimYarKhan },
//     { id: 24, name: "Sadiqabad", image: Sadiqabad },
//     { id: 25, name: "Sahiwal", image: Sahiwal },
//     { id: 26, name: "Sargodha", image: Sargodha },
//     { id: 27, name: "Sheikhupura", image: Sheikhupura },
//     { id: 28, name: "Sialkot", image: Sialkot },
//     { id: 29, name: "Sukkur", image: Sukkur },
//     { id: 30, name: "Wahh Cantt", image: WahhCannt },
//     // other cities...
//   ];

//   return (
//     <Box sx={{ backgroundColor: "#f9f9f9", py: 4 }}>
//       <Box sx={{ textAlign: "center", mb: 3 }}>
//         <Typography
//           variant="h4"
//           fontSize="45px"
//           fontWeight="700"
//           sx={{ textAlign: "left", ml: 39 }}
//         >
//           Find us in these cities and many more!
//         </Typography>
//       </Box>
//       <Box sx={{ mx: "auto", maxWidth: 1300, px: 2 }}>
//         <Grid container spacing={3}>
//           {cities.map((city) => (
//             <Grid item xs={12} sm={6} md={4} lg={3} key={city.id}>
//               <Link
//                 to={`/restaurants?city=${city.name}`} // Passing city name as query parameter
//                 style={{ textDecoration: "none" }}
//               >
//                 <CityCard name={city.name} image={city.image} />
//               </Link>
//             </Grid>
//           ))}
//         </Grid>
//       </Box>
//     </Box>
//   );
// };

// export default Cities;
import React from 'react'
import "./Home.css"
import Product from "./Product"

function Home() {
    return (
        <div className="Home">
            <img className="Home__img"
             src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Rajeshwari/Oct/GW/DesktopHero_1500x600._CB402740210_.jpg">

             </img>
             <div className="Home__row">
             <Product 
             id="1" 
             title="Apple iPhone 11 (128GB) - Black" 
             image="https://m.media-amazon.com/images/I/51kGDXeFZKL._AC_UY218_.jpg" 
             price={19000}
             rating={4}
             />
             <Product 
             id="2" 
             title="Boat Airdopes 171 True Wireless Earbuds with Stereo Functionality, Bluetooth V5.0, Up to 13H Total Playback, IPX4 Sweat & Water Resistance and Immersive Sound(Rose Gold)" 
             image="https://m.media-amazon.com/images/I/71QlntVodhL._AC_UY218_.jpg" 
             price={1999} 
             rating={2}
             />
             </div>
             <div className="Home__row">
             <Product 
             id="3" 
             title="Asus ROG Phone 3 (Black, 128 GB)  (8 GB RAM)" 
             image="https://rukminim1.flixcart.com/image/416/416/kcuug7k0/mobile/g/h/e/asus-rog-phone-3-zs661ks-6a006in-original-imaftwbrezsxrhhn.jpeg" 
             price={1100}
             rating={5}
             />
             <Product 
             id="4" 
             title="Huami Amazfit T-Rex Smart Watch with 20 Days Battery Life, AMOLED Display, Built-in GPS, 12 Military Certifications, Water Resistance, 14 Sports Modes (Army Green)" 
             image="https://m.media-amazon.com/images/I/71v+p+n+UTL._AC_UL320_.jpg" 
             price={9900} 
             rating={5}
             />
             <Product 
             id="5" 
             title="Redmi Note 9 Pro (Interstellar Black, 4GB RAM, 64GB Storage) - Latest 8nm Snapdragon 720G &amp; Gorilla Glass 5 Protection" 
             image="https://m.media-amazon.com/images/I/91Lr-OxVKjL._AC_UL320_.jpg" 
             price={9000} 
             rating={3}
             />
             </div>
             <div className="Home__row">
             <Product 
             id="6" 
             title="One Arranged Murder" 
             image="https://m.media-amazon.com/images/I/71fgd+WAkHL._AC_UY218_.jpg" 
             price={114} 
             rating={1}
             />
             </div>
             

        
        </div>
    )
}

export default Home

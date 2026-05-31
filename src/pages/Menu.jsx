import { useState } from 'react'
import useReveal from '../hooks/useReveal'

import foieGras  from '../assets/images/foie-gras.jpeg'
import bisque    from '../assets/images/soupe.jpeg'
import ribeyesteack   from '../assets/menu/Ribeye Steak.jpeg'
import burrata   from '../assets/images/burrata.jpeg'
import doubblecheseburger     from '../assets/menu/Double Cheseburger.jpeg'
import SingleCheseburger   from '../assets/menu/Single Cheseburger.jpeg'
import StriplionSteack   from '../assets/menu/Striplion Steak.jpeg'
import Cupcake      from '../assets/images/Cupcake.jpeg'
import Molten  from '../assets/images/Molten Chocolate Cake.jpeg'
import Pancakes    from '../assets/images/Pancakes.jpeg'
import Burrata    from '../assets/images/burrata.jpeg'
import Mouse   from '../assets/images/Chocolate Mouse.jpeg'
import Tartar from '../assets/menu/tartar.jpeg'
import margarita from '../assets/menu/margarita.jpeg'
import classicmojito from '../assets/menu/classic mojito.jpeg'
import mixedberrymocktail from '../assets/menu/mixed berry mocktail.jpeg'
import tropicallayeredcocktail from '../assets/menu/tropical layered cocktail.jpeg'
import cheesecake from '../assets/images/cheesecake.jpeg'



const menuData = {
  Starters: [
    { name: 'Foie Gras',  desc: 'Grilled beef fillet, rich reduction sauce, golden quinoa crumble, and microgreens.',        price: '$38',  img: foieGras },
    { name: 'Bisque',     desc: 'A velvety puree of slow-roasted pumpkin, topped with a swirl of sour cream or yogurt, toasted pumpkin seeds (pepitas), fresh cilantro (coriander), and a hint of smoked chili flakes for heat.',             price: '$32',  img: bisque   },
    { name: 'Tartar',     desc: 'Finely hand-chopped raw beef, capers, cornichons, shallots, Dijon mustard, topped with a fresh egg yolk and served with toasted brioche.',         price: '$28',  img: Tartar  },
    { name: ' Burrata  ', desc: 'A velvety puree of slow-roasted pumpkin, topped with a swirl of sour cream or yogurt, toasted pumpkin seeds (pepitas), fresh cilantro (coriander), and a hint of smoked chili flakes for heat.', price: '$145', img: burrata  },
  ],
  Mains: [
    { name: 'Doubble Chees',      desc:'Double beef patties, melted cheddar, crisp lettuce, fresh tomatoes, pickles, and gourmet burger sauce.'       ,price: '$89',  img: doubblecheseburger   },
    { name: 'Single CheeseBurger',     desc: 'Single beef patty, melted cheddar, crisp lettuce, fresh tomatoes, pickles, and gourmet burger sauce.',       price: '$72',  img: SingleCheseburger  },
    { name: 'Striplion Steak', desc: 'Angus striploin beef, infused garlic-rosemary butter, roasted root vegetables, and signature peppercorn sauce.',              price: '$95',  img:StriplionSteack   },
     { name: 'Ribeye Steak', desc: 'Premium Angus ribeye, garlic-thyme butter infusion, roasted seasonal vegetables, and signature peppercorn sauce.',       price: '$89',  img: ribeyesteack   },
  ],
  Desserts: [
    { name: 'Mouse', desc: 'Premium dark chocolate, whipped heavy cream, organic egg yolks, fresh berries, and cocoa dusting.',  price: '$22',  img: Mouse},
    { name: 'Cupcake',      desc: 'Rich cocoa sponge cake, smooth dark chocolate ganache frosting, and premium chocolate curls.',          price: '$24',  img: Cupcake  },
    { name: 'Pancakes',        desc: 'Golden buttermilk pancakes, pure maple syrup, whipped vanilla cream, and fresh mixed berries.',   price: '$36',  img: Pancakes },
  { name: 'Cheese Cake',        desc: 'Premium cream cheese, butter-baked crust, Madagascar vanilla bean infusion, and signature raspberry glaze.',   price: '$36',  img: cheesecake},
  ],
  Drinks: [
    { name: 'Margarita', desc: 'Premium Blanco Tequila, Cointreau / Triple Sec, fresh lime juice, agave nectar, and a sea salt rim',  price: '$22',  img: margarita },
    { name: 'Classic Mojito',      desc: 'Premium white rum, fresh muddled mint, lime juice, pure cane sugar syrup, and sparkling soda.',          price: '$24',  img: classicmojito   },
    { name: 'Mixed Berry Mocktail',        desc: 'Mixed berry puree, fresh lime juice, simple cane syrup, fresh mint leaves, and sparkling water.',   price: '$36',  img: mixedberrymocktail },
    { name: 'Tropical layered cocktail',        desc: 'Premium rum, coconut cream, fresh mango nectar, pineapple juice, and a vibrant splash of grenadine.',   price: '$36',  img: tropicallayeredcocktail },
  ],
}

export default function Menu() {
  const [activeTab, setActiveTab] = useState('Starters')
  const ref = useReveal()

  return (
    <section id="menu" className="py-5" style={{ background: 'var(--black)', paddingTop: '100px', paddingBottom: '100px' }}>
      <div className="container py-5">

        <div className="text-center mb-5">
          <p ref={ref} className="reveal section-eyebrow mb-2">Culinary Journey</p>
          <h2 ref={ref} className="reveal delay-1 section-title mb-3"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}>
            Our Menu
          </h2>
          <span ref={ref} className="reveal delay-2 gold-divider mx-auto d-block mb-4" />
          <p ref={ref} className="reveal delay-2"
            style={{ fontSize: '0.75rem', letterSpacing: '0.15em', color: 'var(--muted)' }}>
            Seasonal ingredients. Timeless technique. Unforgettable plates.
          </p>
        </div>

        <div ref={ref} className="reveal d-flex flex-wrap justify-content-center gap-1 mb-5">
          {Object.keys(menuData).map(tab => (
            <button
              key={tab}
              className={`menu-tab-btn ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="row g-4">
          {menuData[activeTab].map(({ name, desc, price, img }) => (
            <div className="col-12 col-sm-6 col-xl-3" key={name}>
              <div className="menu-card menu-card-animate">
                <div style={{ height: 280, overflow: 'hidden' }}>
                  <img
                    src={img}
                    alt={name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </div>
                <div className="p-4">
                  <h5 className="font-display mb-2" style={{ fontWeight: 400, fontSize: '1.15rem' }}>{name}</h5>
                  <p className="mb-3" style={{ fontSize: '0.75rem', color: 'var(--muted)', lineHeight: 1.8 }}>{desc}</p>
                  <div className="menu-price">{price}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

const menus = {

  nandhana: {
    name: "Nandhana Palace",
    items: [
      { name: "Chicken Biryani", price: 300, type: "Non-Veg", rating: 4.5, tag: "Bestseller", image: "https://tse3.mm.bing.net/th/id/OIP.EbbeDKcDhcERGQyHKmxrfwHaHa?pid=Api&P=0&h=180",description: "Aromatic basmati rice layered with tender chicken and spices." },
      { name: "Mutton Biryani", price: 380, type: "Non-Veg", rating: 4.6, image: "https://tse4.mm.bing.net/th/id/OIP.qTzBIim8Nyc4KQofktP11AHaE8?pid=Api&P=0&h=180",description:"Slow-cooked mutton with fragrant spices and dum-style rice." },
      { name: "Chicken 65", price: 220, type: "Non-Veg", rating: 4.4, tag: "Spicy", image: "https://tse3.mm.bing.net/th/id/OIP.cl1j7HLCldFipaEHwxTF6QHaFj?pid=Api&P=0&h=180",description:"Crispy deep-fried chicken tossed in fiery masala." },
      { name: "Paneer 65", price: 200, type: "Veg", rating: 4.2, image: "https://tse2.mm.bing.net/th/id/OIP.uZtP4ec200NdP4Z605nfUAHaFf?pid=Api&P=0&h=180",description:"Golden-fried paneer cubes coated in spicy seasoning." },
      { name: "Butter Naan", price: 50, type: "Veg", rating: 4.3, image: "https://tse3.mm.bing.net/th/id/OIP.hyipQa0wNGAUQ7_78tdHYQHaFy?pid=Api&P=0&h=180",description:"Soft tandoor-baked flatbread brushed with butter." },
      { name: "Chicken Curry", price: 240, type: "Non-Veg", rating: 4.1, image: "https://tse4.mm.bing.net/th/id/OIP.2q04C8KT1S39RY_o1SGBmwHaHa?pid=Api&P=0&h=180",description:"Rich and flavorful chicken cooked in thick gravy." },
      { name: "Gulab Jamun", price: 90, type: "Veg", rating: 4.0, image: "https://tse2.mm.bing.net/th/id/OIP.AQsrZuXEq98Q1bZbT35EqgHaHt?pid=Api&P=0&h=180",description:"Soft milk dumplings soaked in warm sugar syrup." }
    ]
  },

  fbcakes: {
    name: "FB Cakes",
    items: [
      { name: "Chocolate Truffle Cake", price: 450, type: "Veg", rating: 4.6, tag: "Bestseller", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587",description:"Moist chocolate cake layered with smooth ganache." },
      { name: "Red Velvet Cake", price: 480, type: "Veg", rating: 4.5, image: "https://tse4.mm.bing.net/th/id/OIP.uNQZfoh-kjfvsQ_Pn7Ba2QHaJQ?pid=Api&P=0&h=180",description:"Velvety sponge with cream cheese frosting." },
      { name: "Black Forest Cake", price: 420, type: "Veg", rating: 4.4, image: "https://tse4.mm.bing.net/th/id/OIP.xQKS-aMlKeJ6tnz3B40ZtgHaE7?pid=Api&P=0&h=180",description:"Chocolate sponge with cherries and whipped cream." },
      { name: "Blueberry Cheesecake", price: 500, type: "Veg", rating: 4.6, image: "https://tse4.mm.bing.net/th/id/OIP.IRyvHT20lHf1tqPdw7F9UAHaHa?pid=Api&P=0&h=180",description:"Creamy cheesecake topped with blueberry glaze." },
      { name: "Brownie", price: 180, type: "Veg", rating: 4.3, image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c",description:"Dense chocolate brownie with rich cocoa flavor." },
      { name: "Cupcakes", price: 150, type: "Veg", rating: 4.2, image: "https://tse2.mm.bing.net/th/id/OIP.Svzmxo53mRrN_8o9ivyUgQHaLH?pid=Api&P=0&h=180",description:"Soft mini cakes topped with creamy frosting." },
      { name: "Pastry Slice", price: 120, type: "Veg", rating: 4.1, image: "https://tse3.mm.bing.net/th/id/OIP.GX7qZPn4MpHHhqo7dLUclwHaHa?pid=Api&P=0&h=180",description:"Light sponge layered with fresh cream." }
    ]
  },

  lapinoz: {
    name: "La Pino’z Pizza",
    items: [
      { name: "Margherita Pizza", price: 299, type: "Veg", rating: 4.3, image: "https://tse2.mm.bing.net/th/id/OIP.tgTT_xnWbcJOykHbGkTOaQHaH4?pid=Api&P=0&h=180",description:"Light sponge layered with fresh cream." },
      { name: "Farmhouse Pizza", price: 399, type: "Veg", rating: 4.4, image: "https://tse2.mm.bing.net/th/id/OIP.fWpwQjEXUBmQOsvM8M1bbwHaHa?pid=Api&P=0&h=180",description:"Loaded with fresh veggies and mozzarella." },
      { name: "Pepperoni Pizza", price: 449, type: "Non-Veg", rating: 4.5, image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143",description:"Cheesy pizza topped with spicy pepperoni slices." },
      { name: "Chicken Tikka Pizza", price: 469, type: "Non-Veg", rating: 4.6, tag: "Bestseller", image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65",description:"Tandoori chicken chunks on cheesy base." },
      { name: "Garlic Bread", price: 149, type: "Veg", rating: 4.2, image: "https://tse3.mm.bing.net/th/id/OIP.ad4BUY3Z2O0ix6Ka0CbhvAHaLG?pid=Api&P=0&h=180",description:"Toasted bread infused with garlic butter." },
      { name: "Cheese Burst Pizza", price: 499, type: "Veg", rating: 4.5, image: "https://tse4.mm.bing.net/th/id/OIP.syFJrHXyIvA8yU3Xh-8Y3gHaFj?pid=Api&P=0&h=180",description:"Extra cheesy pizza with molten center." },
      { name: "Choco Lava Cake", price: 129, type: "Veg", rating: 4.4, image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c",description:"Warm chocolate cake with gooey center." }
    ]
  },

  burgerking: {
    name: "Burger King",
    items: [
      { name: "Whopper Burger", price: 199, type: "Non-Veg", rating: 4.4, image: "https://images.unsplash.com/photo-1550547660-d9450f859349",description:"Flame-grilled patty with fresh lettuce and sauce." },
      { name: "Chicken Burger", price: 179, type: "Non-Veg", rating: 4.3, image: "https://tse1.mm.bing.net/th/id/OIP.pnZgmcgB4QirhKFcm4zWHQHaEK?pid=Api&P=0&h=180",description:"Crispy chicken fillet in soft bun." },
      { name: "Veg Burger", price: 149, type: "Veg", rating: 4.1, image: "https://tse3.mm.bing.net/th/id/OIP.mCUG88hVQotiSxdyXb847wHaEo?pid=Api&P=0&h=180",description:"Crispy veggie patty with fresh toppings." },
      { name: "French Fries", price: 99, type: "Veg", rating: 4.2, image: "https://tse4.mm.bing.net/th/id/OIP.bjwIfbyk1X9FvFq6IMgHAAHaFj?pid=Api&P=0&h=180",description:"Golden, crispy potato fries." },
      { name: "Chicken Nuggets", price: 129, type: "Non-Veg", rating: 4.3, image: "https://tse3.mm.bing.net/th/id/OIP.QX00pGMucvF7tzNAB22KsgHaHa?pid=Api&P=0&h=180",description:"Bite-sized crispy chicken pieces." },
      { name: "Cheesy Fries", price: 119, type: "Veg", rating: 4.1, image: "https://tse4.mm.bing.net/th/id/OIP.ws7CGzj9bk5XozAKqlVTpgHaEJ?pid=Api&P=0&h=180",description:"Fries topped with melted cheese sauce." },
      { name: "Soft Drink", price: 59, type: "Veg", rating: 4.0, image: "https://tse2.mm.bing.net/th/id/OIP.wXOH-VUwiQ-qJe1GeidNdgAAAA?pid=Api&P=0&h=180",description:"Chilled fizzy beverage." }
    ]
  },

  udupi: {
    name: "Sri Udupi Park",
    items: [
      { name: "Masala Dosa", price: 120, type: "Veg", rating: 4.6, image: "https://tse1.mm.bing.net/th/id/OIP.bepcXnRrP_W5dTQEaCl00AHaE8?pid=Api&P=0&h=180",description:"Crispy dosa stuffed with spiced potato filling." },
      { name: "Plain Dosa", price: 90, type: "Veg", rating: 4.4, image: "https://tse1.mm.bing.net/th/id/OIP.AecdFT6JJHcKfKMDrj3_ngHaEf?pid=Api&P=0&h=180",description:"Thin and crispy South Indian rice crepe." },
      { name: "Idli Sambar", price: 70, type: "Veg", rating: 4.3, image: "https://tse3.mm.bing.net/th/id/OIP.CEaG3BVrc2kQvrw7WmTmbAHaE8?pid=Api&P=0&h=180",description:"Soft steamed idlis served with lentil sambar." },
      { name: "Vada", price: 60, type: "Veg", rating: 4.2, image: "https://tse3.mm.bing.net/th/id/OIP.44u28P-fSejSC3z6-WTJcwHaEK?pid=Api&P=0&h=180",description:"Crispy fried lentil doughnut." },
      { name: "Pongal", price: 80, type: "Veg", rating: 4.1, image: "https://tse3.mm.bing.net/th/id/OIP.UGh4lmwscs_K7GAFdeig2gHaE8?pid=Api&P=0&h=180",description:"Savory rice dish with ghee and spices." },
      { name: "Filter Coffee", price: 40, type: "Veg", rating: 4.5, image: "https://tse2.mm.bing.net/th/id/OIP.ehTtjC5a7tZMh5jVEzKWGwHaEK?pid=Api&P=0&h=180",description:"Strong South Indian style brewed coffee." },
      { name: "Kesari Bath", price: 60, type: "Veg", rating: 4.0, image: "https://tse1.mm.bing.net/th/id/OIP.OPx7W69H2VzMccZEA_leLAHaFo?pid=Api&P=0&h=180",description:"Sweet semolina dessert with saffron flavor." }
    ]
  },

  mainland: {
    name: "Mainland China",
    items: [
      { name: "Veg Fried Rice", price: 220, type: "Veg", rating: 4.2, image: "https://tse3.mm.bing.net/th/id/OIP.fnrucpSbiwkk_C0OX5w-cQHaEK?pid=Api&P=0&h=180",description:"Stir-fried rice with fresh vegetables." },
      { name: "Chicken Fried Rice", price: 260, type: "Non-Veg", rating: 4.4, image: "https://tse3.mm.bing.net/th/id/OIP.fnrucpSbiwkk_C0OX5w-cQHaEK?pid=Api&P=0&h=180",description:"Wok-tossed rice with chicken pieces." },
      { name: "Hakka Noodles", price: 240, type: "Veg", rating: 4.3, image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841",description:"Stir-fried noodles with vegetables and sauces." },
      { name: "Chilli Chicken", price: 280, type: "Non-Veg", rating: 4.5, image: "https://tse2.mm.bing.net/th/id/OIP.zkU64CfbQSK9aSCISR1VqgHaHa?pid=Api&P=0&h=180",description:"Spicy chicken tossed in Indo-Chinese sauce." },
      { name: "Spring Rolls", price: 180, type: "Veg", rating: 4.1, image: "https://tse1.mm.bing.net/th/id/OIP.axbRC7uvjcUdOHckUknTBQHaHa?pid=Api&P=0&h=180",description:"Crispy rolls stuffed with veggies." },
      { name: "Manchurian", price: 200, type: "Veg", rating: 4.2, image: "https://tse1.mm.bing.net/th/id/OIP.kgin_xUFwl_a1Bc9PTaKEAHaEO?pid=Api&P=0&h=180",description:"Fried balls tossed in tangy soy gravy." },
      { name: "Hot & Sour Soup", price: 150, type: "Veg", rating: 4.0, image: "https://tse3.mm.bing.net/th/id/OIP.WhDvu512uHMwOb8Eb3FXOAHaHa?pid=Api&P=0&h=180",description:"Spicy and tangy Chinese style soup." }
    ]
  },

  kfc: {
    name: "KFC",
    items: [
      { name: "Fried Chicken", price: 350, type: "Non-Veg", rating: 4.4, tag: "Bestseller", image: "https://tse2.mm.bing.net/th/id/OIP.7BX7QwH8t-wF3SiE3-eVrgHaE7?pid=Api&P=0&h=180",description:"Crispy golden fried signature chicken." },
      { name: "Chicken Burger", price: 220, type: "Non-Veg", rating: 4.3, image: "https://tse2.mm.bing.net/th/id/OIP.X2O1ihnfeg_UW9R5s7MK0AHaHa?pid=Api&P=0&h=180",description:"Crunchy chicken fillet burger." },
      { name: "Chicken Wings", price: 199, type: "Non-Veg", rating: 4.2, image: "https://tse3.mm.bing.net/th/id/OIP.fqwzLCSPXonuj8HjSCAK5gHaJQ?pid=Api&P=0&h=180",description:"Spicy and juicy fried wings." },
      { name: "Popcorn Chicken", price: 180, type: "Non-Veg", rating: 4.1, image: "https://tse3.mm.bing.net/th/id/OIP.fv7WcffYWZ_JB_hdvA8WzgHaHa?pid=Api&P=0&h=180",description:"Crispy bite-sized chicken pieces." },
      { name: "French Fries", price: 120, type: "Veg", rating: 4.0, image: "https://tse2.mm.bing.net/th/id/OIP.f1R8kpo61Jk2qWFj3ruS3wHaEK?pid=Api&P=0&h=180",description:"Crispy salted potato fries." },
      { name: "Pepsi", price: 60, type: "Veg", rating: 4.0, image: "https://tse4.mm.bing.net/th/id/OIP.--76J6Xy4TEYmtsPTiMmQgHaLG?pid=Api&P=0&h=180",description:"Chilled refreshing soft drink." },
      { name: "Brownie", price: 90, type: "Veg", rating: 4.2, image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c",description:"Soft chocolate dessert square." }
    ]
  },

  sweettruth: {
    name: "Sweet Truth",
    items: [
      { name: "Chocolate Brownie", price: 180, type: "Veg", rating: 4.5, image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c",description:"Rich fudgy brownie with deep cocoa taste." },
      { name: "Red Velvet Jar", price: 220, type: "Veg", rating: 4.4, image: "https://tse1.mm.bing.net/th/id/OIP.5U2ieCLPMadrSTiAshXmiQHaHa?pid=Api&P=0&h=180",description:"Layered red velvet cake in jar." },
      { name: "Cheesecake", price: 250, type: "Veg", rating: 4.6, image: "https://tse3.mm.bing.net/th/id/OIP.Ri-bK0X-hif1mSTjgLstqgHaFk?pid=Api&P=0&h=180",description:"Creamy baked cheesecake dessert." },
      { name: "Choco Lava Cake", price: 150, type: "Veg", rating: 4.3, image: "https://tse1.mm.bing.net/th/id/OIP.eIlgunjo4s1oC-yeQarStwHaHa?pid=Api&P=0&h=180",description:"Warm cake with molten chocolate inside." },
      { name: "Cupcake", price: 120, type: "Veg", rating: 4.2, image: "https://tse2.mm.bing.net/th/id/OIP.Svzmxo53mRrN_8o9ivyUgQHaLH?pid=Api&P=0&h=180",description:"Mini cake topped with smooth frosting." },
      { name: "Tiramisu", price: 280, type: "Veg", rating: 4.5, image: "https://tse1.mm.bing.net/th/id/OIP.sl8v-DQDerzehbaWHI8frwHaE7?pid=Api&P=0&h=1800",description:"Coffee-flavored layered Italian dessert." },
      { name: "Cookie Box", price: 200, type: "Veg", rating: 4.1, image: "https://tse4.mm.bing.net/th/id/OIP.YEVdzHeS-P7ahHb9i3h75AHaHa?pid=Api&P=0&h=180",description:"Assorted crunchy chocolate chip cookies." }
    ]
  },

  ccd: {
    name: "Cafe Coffee Day",
    items: [
      { name: "Cappuccino", price: 160, type: "Veg", rating: 4.4, image: "https://tse1.mm.bing.net/th/id/OIP.o7dj03FWHpEELz_eH7xlqwHaEK?pid=Api&P=0&h=180",description:"Espresso topped with frothy milk foam." },
      { name: "Cold Coffee", price: 180, type: "Veg", rating: 4.3, image: "https://tse2.mm.bing.net/th/id/OIP._amtVrnWIHD-wQXNk2kxKQHaLH?pid=Api&P=0&h=180",description:"Chilled coffee blended with milk and ice." },
      { name: "Cafe Latte", price: 170, type: "Veg", rating: 4.2, image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",description:"Smooth espresso with steamed milk." },
      { name: "Chocolate Brownie", price: 140, type: "Veg", rating: 4.4, image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c",description:"Warm chocolate brownie slice." },
      { name: "Garlic Bread", price: 120, type: "Veg", rating: 4.1, image: "https://tse4.mm.bing.net/th/id/OIP.zugnBMjoapkoTeeXBtOfTgHaHa?pid=Api&P=0&h=180S",description:"Toasted bread with garlic butter spread." },
      { name: "Veg Sandwich", price: 150, type: "Veg", rating: 4.2, image: "https://tse3.mm.bing.net/th/id/OIP.sU5DF6bd2nM3AfuAs8yfdQHaFj?pid=Api&P=0&h=180S",description:"Fresh vegetable sandwich with creamy spread." },
      { name: "Chocolate Shake", price: 190, type: "Veg", rating: 4.3, image: "https://tse3.mm.bing.net/th/id/OIP.veC8Vfj_FBLQE8oExn3QywHaLH?pid=Api&P=0&h=180",description:"Thick chocolate milkshake." }
    ]
  },

  subway: {
    name: "Subway",
    items: [
      { name: "Veggie Delite Sub", price: 180, type: "Veg", rating: 4.2, image: "https://tse2.mm.bing.net/th/id/OIP.rU57KgfzTsgZgmgcY1yo8QHaEK?pid=Api&P=0&h=180",description:"Fresh veggies layered in soft bread." },
      { name: "Paneer Tikka Sub", price: 220, type: "Veg", rating: 4.4, image: "https://tse2.mm.bing.net/th/id/OIP.B4TGAaHtbtN-qSwciUhphAHaE8?pid=Api&P=0&h=180",description:"Spicy paneer filling with sauces." },
      { name: "Chicken Teriyaki Sub", price: 260, type: "Non-Veg", rating: 4.5, tag: "Bestseller", image: "https://tse4.mm.bing.net/th/id/OIP.E0xuSc8Ut2j1h9aPXdq3sgHaEO?pid=Api&P=0&h=180",description:"Grilled chicken glazed with teriyaki sauce." },
      { name: "Aloo Patty Sub", price: 160, type: "Veg", rating: 4.1, image: "https://tse1.mm.bing.net/th/id/OIP.t3yu2TSx6K88TNb2OC-cKgHaDt?pid=Api&P=0&h=180",description:"Crispy potato patty sandwich." },
      { name: "Tuna Sub", price: 280, type: "Non-Veg", rating: 4.3, image: "https://tse3.mm.bing.net/th/id/OIP.ihvDmP6Bs8lio7B3a3Yi6QHaE8?pid=Api&P=0&h=180",description:"Creamy tuna filling with fresh veggies." },
      { name: "Cookies", price: 90, type: "Veg", rating: 4.4, image: "https://tse4.mm.bing.net/th/id/OIP.CETvD_9b2rLFH7xX0E-xyQHaHa?pid=Api&P=0&h=180c",description:"Soft baked chocolate chip cookies." },
      { name: "Soft Drink", price: 60, type: "Veg", rating: 4.0, image: "https://tse2.mm.bing.net/th/id/OIP.-vKVVm4ySOimLeQB-4HO5gHaFj?pid=Api&P=0&h=180",description:"Chilled carbonated beverage." }
    ]
  }

};

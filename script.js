const params = new URLSearchParams(window.location.search);
const resKey = params.get("res");
localStorage.setItem("currentRestaurant", resKey);


const menuContainer = document.getElementById("menu-container");
const restaurantName = document.getElementById("restaurant-name");

if (!menus || !menus[resKey]) {
    menuContainer.innerHTML = "<p>Menu not found</p>";
} else {
    restaurantName.innerText = menus[resKey].name;

    menus[resKey].items.forEach((item, index) => {   // ✅ FIX IS HERE
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
    <div class="image">
    <span class="food-type">${item.type} · ₹${item.price}</span>
    ${item.tag ? `<span class="food-badge ${item.tag.toLowerCase()}">${item.tag}</span>` : ""}
    <img src="${item.image}" alt="${item.name}">
</div>

    <h3>
        ${item.name}
        <span class="rating">★ ${item.rating}</span>
    </h3>

    ${item.description ? `
        <div class="dish-desc">
            ${item.description.substring(0, 35)}...
            <div class="dish-desc-full">
                ${item.description}
            </div>
        </div>
    ` : ""}

   <div class="cart-row">
            <div class="quantity-control">
                <button class="qty-btn" onclick="changeQty(${index}, -1)">−</button>
                <span class="qty-value" id="qty-${index}">0</span>
                <button class="qty-btn" onclick="changeQty(${index}, 1)">+</button>
            </div>

        <button class="add-cart-btn" onclick="addToCart(${index})">
            Add to Cart
        </button>
    </div>
    
`;



        menuContainer.appendChild(card);
    });
    
}


let currentItem = null;
let drawerQty = 1;
let basePrice = 0;
let extraPrice = 0;
let currentIndex = null; // IMPORTANT (to sync image qty)
function changeQty(index, val) {

    const qtyEl = document.getElementById(`qty-${index}`);
    let qty = parseInt(qtyEl.innerText);

    qty += val;
    if (qty < 0) qty = 0;

    qtyEl.innerText = qty;

    // 🔥 If drawer open for same item → sync it
    if (currentIndex === index) {
        drawerQty = qty > 0 ? qty : 1;
        document.getElementById("drawerQty").innerText = drawerQty;
        updateDrawerPrice();
    }
}

function addToCart(index) {

    currentIndex = index;
    currentItem = menus[resKey].items[index];

    // Get quantity from image selector
    const imgQty = parseInt(
        document.getElementById(`qty-${index}`).innerText
    );

    drawerQty = imgQty > 0 ? imgQty : 1;

    basePrice = currentItem.price;
    extraPrice = 0;

    document.getElementById("drawerTitle").innerText =
        currentItem.name;

    document.getElementById("drawerQty").innerText = drawerQty;

    buildCustomization(currentItem);

    document.getElementById("customDrawer").style.display = "flex";

    updateDrawerPrice();
}
function buildCustomization(item) {

    let html = "";

    const itemName = item.name.toLowerCase();

    /* ======================
       BIRYANI CUSTOMIZATION
    ====================== */
    if (itemName.includes("biryani")) {

        html += `
        <div class="option-section">
            <h4>Quantity (Required)</h4>
            <div class="option-item">
                750 ML 
                <input type="radio" name="size" value="0" checked>
            </div>
            <div class="option-item">
                1000 ML (+₹100)
                <input type="radio" name="size" value="100">
            </div>
        </div>
        `;
    }

    /* ======================
       CAKE CUSTOMIZATION
    ====================== */
   if (
    itemName.includes("cake") &&
    !itemName.includes("cupcake") &&
    !itemName.includes("lava")
) {

        html += `
        <div class="option-section">
            <h4>Weight (Required)</h4>
            <div class="option-item">
                500g 
                <input type="radio" name="size" value="0" checked>
            </div>
            <div class="option-item">
                1 Kg (+₹200)
                <input type="radio" name="size" value="200">
            </div>
        </div>

        <div class="option-section">
            <h4>Cake Message (Optional)</h4>
            <input type="text"
                placeholder="e.g. Happy Birthday Anu"
                style="width:100%;padding:8px;border-radius:8px;border:1px solid #ddd;">
        </div>
        `;
    }
    /* ======================
   PASTRIES
====================== */
if (itemName.includes("pastry")) {

    html += `
    <div class="option-section">
        <h4>Choose Flavours (Required)</h4>
        <p style="font-size:12px;color:#666;margin-bottom:8px;">
            Select flavour for each pastry
        </p>
    `;

    for (let i = 1; i <= drawerQty; i++) {
        html += `
        <div class="option-item">
            Pastry ${i}
            <select class="pastry-flavour"
                    style="padding:6px;border-radius:6px;border:1px solid #ccc;">
                <option value="">Select flavour</option>
                <option value="Strawberry">Strawberry</option>
                <option value="Chocolate">Chocolate</option>
                <option value="Pineapple">Pineapple</option>
                <option value="Black Forest">Black Forest</option>
            </select>
        </div>
        `;
    }

    html += `</div>`;
}
/* ======================
   PIZZA CUSTOMIZATION
====================== */
if (itemName.includes("pizza")) {

    html += `
    <div class="option-section">
        <h4>Size (Required)</h4>
        <div class="option-item">
            Regular 
            <input type="radio" name="size" value="0" checked>
        </div>
        <div class="option-item">
            Medium (+₹120)
            <input type="radio" name="size" value="120">
        </div>
        <div class="option-item">
            Large (+₹220)
            <input type="radio" name="size" value="220">
        </div>
    </div>
    `;
}
/* ======================
   NOODLES / FRIED RICE
====================== */
if (
    itemName.includes("noodle") ||
    itemName.includes("fried rice") ||
    itemName.includes("rice")
) {

    html += `
    <div class="option-section">
        <h4>Portion (Required)</h4>
        <div class="option-item">
            Half 
            <input type="radio" name="size" value="0" checked>
        </div>
        <div class="option-item">
            Full (+₹80)
            <input type="radio" name="size" value="80">
        </div>
    </div>
    `;
}

    /* ======================
       CHICKEN ADD-ONS
    ====================== */
    if (itemName.includes("chicken")) {

        html += `
        <div class="option-section">
            <h4>Add-ons</h4>
            
            <div class="option-item">
                Medium Spicy (+₹20)
                <input type="checkbox" value="20">
            </div>
        </div>
        `;
    }
    /* ======================
   SUBWAY CUSTOMIZATION
====================== */
if (itemName.includes("sub") || itemName.includes("sandwich")) {

    html += `
    <div class="option-section">
        <h4>Bread Type (Required)</h4>
        <div class="option-item">
            Italian
            <input type="radio" name="bread" value="0" checked>
        </div>
        <div class="option-item">
            Wheat
            <input type="radio" name="bread" value="0">
        </div>
        <div class="option-item">
            Multigrain
            <input type="radio" name="bread" value="0">
        </div>
    </div>

    <div class="option-section">
        <h4>Toasted</h4>
        <div class="option-item">
            Toasted
            <input type="checkbox" value="0">
        </div>
    </div>

    <div class="option-section">
        <h4>Veggies</h4>
        <div class="option-item">
            Onions <input type="checkbox" value="0">
        </div>
        <div class="option-item">
            Tomatoes <input type="checkbox" value="0">
        </div>
        <div class="option-item">
            Capsicum <input type="checkbox" value="0">
        </div>
        <div class="option-item">
            Olives <input type="checkbox" value="0">
        </div>
        <div class="option-item">
            Pickles <input type="checkbox" value="0">
        </div>
        <div class="option-item">
            Jalapenos <input type="checkbox" value="0">
        </div>
        <div class="option-item">
            Lettuce <input type="checkbox" value="0">
        </div>
    </div>

    <div class="option-section">
        <h4>Sauces</h4>
        <div class="option-item">
            Mayonnaise <input type="checkbox" value="0">
        </div>
        <div class="option-item">
            Chipotle <input type="checkbox" value="0">
        </div>
        <div class="option-item">
            Mint Mayo <input type="checkbox" value="0">
        </div>
        <div class="option-item">
            BBQ Sauce <input type="checkbox" value="0">
        </div>
        <div class="option-item">
            Sweet Onion <input type="checkbox" value="0">
        </div>
    </div>

    <div class="option-section">
        <h4>Add-ons</h4>
        <div class="option-item">
            Extra Cheese (+₹30)
            <input type="checkbox" value="30">
        </div>
    </div>
    `;
}

    /* ======================
       GENERAL COOKING REQUEST
    ====================== */
    html += `
    <div class="option-section">
        <h4>Cooking Request (Optional)</h4>
        <input type="text"
            placeholder="e.g. Don't make it too spicy"
            style="width:100%;padding:8px;border-radius:8px;border:1px solid #ddd;">
    </div>
    `;

    document.getElementById("drawerOptions").innerHTML = html;

    attachPriceListeners();
}
function attachPriceListeners() {

    const radios = document.querySelectorAll('input[type="radio"]');
    const checks = document.querySelectorAll('input[type="checkbox"]');

    radios.forEach(r => {
        r.addEventListener("change", calculateExtras);
    });

    checks.forEach(c => {
        c.addEventListener("change", calculateExtras);
    });
}

function calculateExtras() {

    extraPrice = 0;

    document.querySelectorAll('input[type="radio"]:checked')
        .forEach(r => extraPrice += parseInt(r.value));

    document.querySelectorAll('input[type="checkbox"]:checked')
        .forEach(c => extraPrice += parseInt(c.value));

    updateDrawerPrice();
}

function changeDrawerQty(val) {

    drawerQty += val;
    if (drawerQty < 1) drawerQty = 1;

    document.getElementById("drawerQty").innerText = drawerQty;

    // 🔥 Sync image quantity
    if (currentIndex !== null) {
        document.getElementById(`qty-${currentIndex}`).innerText = drawerQty;
    }

    updateDrawerPrice();
}

function updateDrawerPrice() {
    const total = (basePrice + extraPrice) * drawerQty;
    document.getElementById("drawerAddBtn").innerText =
        "Add item ₹" + total;
}

// 🔥 Auto open customization if coming from cart "Edit"
// 🔥 Auto open customization if coming from cart "Edit"
window.addEventListener("load", function () {

    const editIndex = localStorage.getItem("editMenuIndex");

    if (editIndex !== null) {

        addToCart(parseInt(editIndex)); // opens customization drawer

        localStorage.removeItem("editMenuIndex");
    }
});

function confirmAddToCart() {

    const totalPrice = (basePrice + extraPrice) * drawerQty;

    const cartItem = {
        name: currentItem.name,
        qty: drawerQty,
        price: totalPrice,
        type: currentItem.type,      // 🔥 Needed for Veg/Non-Veg symbol
        menuIndex: currentIndex      // 🔥 Needed for correct Edit opening
    };
    
    saveCart(cartItem);
    
    closeDrawer();
}
let pendingCartItem = null;

function saveCart(item) {

    const activeRestaurant = localStorage.getItem("activeRestaurant");
    let storedCart = JSON.parse(localStorage.getItem("cartItems")) || [];

    // If cart belongs to another restaurant
    if (activeRestaurant && activeRestaurant !== resKey && storedCart.length > 0) {

        const confirmSwitch = confirm(
            "Your previous cart will be removed. Do you want to continue?"
        );

        if (!confirmSwitch) {
            return;  // stop if user cancels
        }

        // Clear previous cart
        localStorage.removeItem("cartItems");
        storedCart = [];
    }

    // Set current restaurant
    localStorage.setItem("activeRestaurant", resKey);

    storedCart.push(item);

    localStorage.setItem("cartItems", JSON.stringify(storedCart));

    updateCartCount();
}
/* ===========================
   UPDATE CART COUNT
=========================== */

function updateCartCount() {

    const storedCart = JSON.parse(localStorage.getItem("cartItems")) || [];

    document.getElementById("cartCount").innerText = storedCart.length;
}
// Run on page load
updateCartCount();
function closeDrawer() {
    document.getElementById("customDrawer").style.display = "none";
}
let cart = [];
function openCartPage() {
    window.location.href = "cart.html";
}
updateCartCount();
function loadSavedAddress(){

    const address = localStorage.getItem("deliveryAddress");
    const type = localStorage.getItem("addressType");

    if(address){
        document.getElementById("savedAddress").innerText = address;
    }

    if(type){
        document.getElementById("addressType").innerText = type.toUpperCase();
    }

}

function editAddress() {
    document.getElementById("addressForm").style.display = "block";
}

function saveAddress(){

    const address = document.getElementById("addressInput").value;

    localStorage.setItem("deliveryAddress", address);
    localStorage.setItem("addressType", selectedAddressType);

    window.location.href = "cart.html";

}



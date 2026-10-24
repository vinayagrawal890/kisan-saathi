const sampleListings = [
  { farmer: "Ramesh Kumar", village: "Hindaun, Karauli", crop: "Wheat / Gehu", quantity: 25, price: 2450, sample: true },
  { farmer: "Sita Devi", village: "Todabhim, Karauli", crop: "Mustard / Sarson", quantity: 12, price: 5600, sample: true },
  { farmer: "Mohan Lal", village: "Gangapur, Rajasthan", crop: "Bajra", quantity: 18, price: 2200, sample: true }
];
let listings = [...sampleListings];
let english = false;
const $ = (id) => document.getElementById(id);
function renderListings(filter = "") {
  const filtered = listings.filter(x => `${x.crop} ${x.village} ${x.farmer}`.toLowerCase().includes(filter.toLowerCase()));
  $("listingCount").textContent = filtered.length;
  $("listingGrid").innerHTML = filtered.map(x => `
    <article class="listing">
      <div class="listing-top"><span class="crop-icon">🌾</span><span class="pill">${x.sample ? (english ? "Sample data" : "Sample data") : (english ? "Demo listing" : "Demo listing")}</span></div>
      <h3>${escapeHtml(x.crop)}</h3>
      <p>📍 ${escapeHtml(x.village)}</p>
      <p>${english ? "Farmer" : "Kisaan"}: ${escapeHtml(x.farmer)}</p>
      <p>${english ? "Quantity" : "Maatra"}: ${Number(x.quantity).toLocaleString()} ${english ? "quintals" : "quintal"}</p>
      <div class="price">₹${Number(x.price).toLocaleString("en-IN")} <small>/ ${english ? "quintal (expected)" : "quintal (expected)"}</small></div>
    </article>`).join("") || `<p>${english ? "No listings match your search." : "Aapki search se koi listing nahi mili."}</p>`;
}
function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
}
$("searchInput").addEventListener("input", e => renderListings(e.target.value));
$("cropForm").addEventListener("submit", e => {
  e.preventDefault();
  const item = {
    farmer: $("farmerName").value.trim(), village: $("village").value.trim(),
    crop: $("crop").value, quantity: Number($("quantity").value), price: Number($("price").value), sample: false
  };
  if (!item.farmer || !item.village || !item.crop || item.quantity < 1 || item.price < 1) {
    $("formMessage").textContent = english ? "Please enter valid details." : "Kripya sahi details bharein.";
    return;
  }
  listings.unshift(item);
  renderListings($("searchInput").value);
  $("cropForm").reset();
  $("formMessage").textContent = english ? "Demo listing added in this browser session." : "Demo listing is browser session mein add ho gayi.";
});
const translations = {
  tagline: ["Kisaan aur bazaar ke beech ek digital pul", "A digital bridge between farmers and markets"],
  eyebrow: ["RURAL LIVELIHOODS • RAJASTHAN", "RURAL LIVELIHOODS • RAJASTHAN"],
  heroTitle: ["Apni fasal ko sahi bazaar se jodiye.", "Connect your crops with market opportunities."],
  heroText: ["Fasal ki listing banayein, buyer opportunities dekhein aur local livelihood information ek hi jagah paayein.", "Create crop listings, explore buyer opportunities, and find local livelihood information in one place."],
  listCropBtn: ["Fasal list karein", "List your crop"],
  heroCardTitle: ["Aapki fasal, aapka bazaar", "Your crop, your market"],
  heroCardText: ["Yeh demo sample data use karta hai. Listings verified market prices nahi hain.", "This demo uses sample data. Listings are not verified market prices."],
  statListings: ["Sample listings", "Sample listings"], statFeatures: ["Core features", "Core features"], statCost: ["Demo cost", "Demo cost"],
  marketEyebrow: ["MARKET CONNECT", "MARKET CONNECT"], marketTitle: ["Fasal listings", "Crop listings"],
  formEyebrow: ["FARMER LISTING", "FARMER LISTING"], formTitle: ["Apni fasal ki listing banayein", "Create a crop listing"],
  formText: ["Demo ke liye details browser mein hi dikhengi; server par upload nahi hoti.", "For this demo, details appear in the browser only and are not uploaded to a server."],
  labelFarmer: ["Kisaan ka naam", "Farmer name"], labelVillage: ["Gaon / zila", "Village / district"], labelCrop: ["Fasal", "Crop"],
  labelQuantity: ["Quantity (quintal)", "Quantity (quintals)"], labelPrice: ["Expected price (₹/quintal)", "Expected price (₹/quintal)"],
  submitListing: ["Listing add karein", "Add listing"], noticeTitle: ["Prototype note", "Prototype note"],
  noticeText: ["Yeh educational prototype hai. Ismein sample listings hain; real-time mandi prices, verified buyers, login, payments ya backend integration abhi shamil nahi hain. Real use se pehle data aur claims verify karein.", "This is an educational prototype with sample listings. Real-time mandi prices, verified buyers, login, payments, and backend integration are not included. Verify data and claims before real-world use."],
  footerText: ["Built as a rural livelihoods hackathon prototype", "Built as a rural livelihoods hackathon prototype"]
};
$("languageToggle").addEventListener("click", () => {
  english = !english;
  $("languageToggle").textContent = english ? "हिन्दी" : "English";
  for (const [id, values] of Object.entries(translations)) $(id).textContent = values[english ? 1 : 0];
  $("searchInput").placeholder = english ? "Search crop or village" : "Fasal ya gaon search karein";
  $("farmerName").placeholder = english ? "e.g. Ramesh Kumar" : "Jaise: Ramesh Kumar";
  $("village").placeholder = english ? "e.g. Hindaun, Karauli" : "Jaise: Hindaun, Karauli";
  $("crop").options[0].textContent = english ? "Select crop" : "Fasal chunein";
  $("quantity").placeholder = english ? "10" : "10";
  $("price").placeholder = english ? "2500" : "2500";
  renderListings($("searchInput").value);
});
renderListings();

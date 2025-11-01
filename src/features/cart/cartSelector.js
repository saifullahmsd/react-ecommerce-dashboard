// Selectors make components clean
// cartSelector.js file ka main kaam "selectors" banana hai. Selectors woh chote functions hote hain jo Redux store ki state se specific data nikaalte hain taake woh components mein istemal ho sake.
export const selectCartItems = (state) => state.cart.items;

export const selectCartSummary = (state) => {
  const totalItems = state.cart.items.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = state.cart.items.reduce(
    (sum, i) => sum + i.price * i.quantity,
    0
  );
  return { totalItems, totalPrice };
};
// export const selectCartItems = (state) => state.cart.items;
// Yeh kya hai? Yeh ek arrow function hai jise selectCartItems naam diya gaya hai aur ise export kiya gaya hai.

// Kaam: Yeh function state (poori Redux state) ko argument ke taur par leta hai aur state.cart.items return karta hai.

// Wajah: Iska maqsad bohot saaf hai - cart ke andar mojood saare items ko nikalna. Jab koi component selectCartItems ka istemal karega to use seedha items ki array mil jayegi.

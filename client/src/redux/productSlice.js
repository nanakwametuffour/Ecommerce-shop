import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productItem: [],
};

export const shopNowSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.productItem.find(
        (item) => item.id === action.payload.id
      );
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.productItem.push(action.payload);
      }
    },
    increaseQuantity: (state, action) => {
      const item = state.productItem.find(
        (item) => item.id === action.payload
      );

      if (item) {
        item.quantity++;
      }
    },
    decreaseQuantity: (state, action)=>{
      const item = state.productItem.find((item)=>item.id === action.payload)
      if(item.quantity ===1){
        item.quantity =1
      }else{
        item.quantity--;
      }
    },
    deleteItem: (state, action)=>{
      state.productItem = state.productItem.filter(
        (item) => item.id !== action.payload
      );
    },

    clearCart: (state, action)=>{
        state.productItem = [];
    }
  },
});

export const {addToCart, increaseQuantity, decreaseQuantity,deleteItem,clearCart} = shopNowSlice.actions;

export default shopNowSlice.reducer;

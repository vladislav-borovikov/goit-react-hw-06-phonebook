import { createSlice } from '@reduxjs/toolkit'





const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
        items: [],
        filter: "",
      },
    reducers:{
        addItems(state, action){
            state.items.push({
                id: new Date().toISOString(),
                name: action.payload.name,
                number: action.payload.number
            })
        },
        deleteItems(state, action){
            state.items = state.items.filter((item) => item.id !== action.payload.id);
        },
        addFilter(state, action){
            state.filter = action.payload;
        }
    }

})

export const {addItems, deleteItems, addFilter} = contactsSlice.actions
export default contactsSlice.reducer
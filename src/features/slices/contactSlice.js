import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    name: "",
    email: "",
    telephone: "",
    subject: "",
    message: ""
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setContact: (state, action) => {
            const { name, email, telephone, subject, message } = action.payload;
            const nameRegExp = /^(^$)|[0-9a-zA-Z\s"'`\-\._]/;
            const numberRegExp = /^$|[\+0-9e]$/;

            if (nameRegExp.test(name))
                state.name = name;
            if (numberRegExp.test(telephone))
                state.telephone = telephone;

            state.email = email;
            state.subject = subject;
            state.message = message;
        },
    },
})

// Action creators are generated for each case reducer function
export const { setContact } = counterSlice.actions

export default counterSlice.reducer;
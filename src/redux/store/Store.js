import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../reducer/counterReducer";
import colorReducer from "../reducer/colorReducer";


export default configureStore({
     
    reducer:{       //root reducer of store
        counter:counterReducer,
        color:colorReducer
    }
})
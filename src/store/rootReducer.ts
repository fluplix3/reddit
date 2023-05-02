
import { Reducer } from "redux";
import { MeRequestAction, MeRequestErrorAction, MeRequestSuccessAction, ME_REQUEST, ME_REQUEST_ERROR, ME_REQUEST_SUCCESS, RootState, SetTokenAction, SET_TOKEN, UpdateCommentAction, UPDATE_COMMENT } from "./me/actions";
import { meReducer } from "./me/reducer";

const initialState: RootState = {
    commentText: 'Привет, Skillbox!',
    token: '',
    me: {
        loading: false,
        error: '',
        data: {}
    }
}

type MyAction = UpdateCommentAction 
| SetTokenAction   
| MeRequestAction 
| MeRequestSuccessAction 
| MeRequestErrorAction;

export const rootReducer: Reducer<RootState, MyAction> = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_COMMENT:
            return {
                ...state,
                commentText: action.text,
            };
        case SET_TOKEN:
            return {
                ...state,
                token: action.token,
            }
        case ME_REQUEST:
        case ME_REQUEST_SUCCESS:
        case ME_REQUEST_ERROR:
            return {
                ...state,
                me: meReducer(state.me, action)
            }
        default:
            return state;
    }
} 

export { RootState };

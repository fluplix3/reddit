import { MeState } from './reducer';
import { Action, ActionCreator, AnyAction } from "redux";
import axios from 'axios';
import { ThunkAction } from 'redux-thunk';

export type RootState = {
    token?: string;
    commentText: string;
    me: MeState;
}

export const UPDATE_COMMENT = 'UPDATE_COMMENT'
export type UpdateCommentAction = {
    type: typeof UPDATE_COMMENT,
    text: string
}
export const updateComment: ActionCreator<UpdateCommentAction> = (text: string) => ({
    type: UPDATE_COMMENT,
    text,
});

export interface IUserData {
    name?: string;
    iconImg?: string;
}

export const ME_REQUEST = 'ME_REQUEST'
export type MeRequestAction = {
    type: typeof ME_REQUEST;
}

export const meRequest: ActionCreator<MeRequestAction> = () => ({
    type: ME_REQUEST
})

export const ME_REQUEST_SUCCESS = 'ME_REQUEST_SUCCESS'
export type MeRequestSuccessAction = {
    type: typeof ME_REQUEST_SUCCESS;
    data: IUserData
}

export const meRequestSuccess: ActionCreator<MeRequestSuccessAction> = (data: IUserData) => ({
    type: ME_REQUEST_SUCCESS,
    data
})

export const ME_REQUEST_ERROR = 'ME_REQUEST_ERROR'
export type MeRequestErrorAction = {
    type: typeof ME_REQUEST_ERROR;
    error: string
}

export const meRequestError: ActionCreator<MeRequestErrorAction> = (error: string) => ({
    type: ME_REQUEST_ERROR,
    error
})

export const meRequestAsync = (): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, getState) => {
    dispatch(meRequest());
    axios.get('https://oauth.reddit.com/api/v1/me', {
        headers: { Authorization: `bearer ${getState().token}` }
    })
        .then((resp) => {
            const userData = resp.data;
            dispatch(meRequestSuccess({ name: userData.name, iconImg: userData.snoovatar_img }));
        })
        .catch((error) => {
            console.log(error);
            dispatch(meRequestError(String(error)))
        });
}

export const SET_TOKEN = 'SET_TOKEN';
export type SetTokenAction = {
    type: typeof SET_TOKEN,
    token: string
}

export const tokenRedux: ActionCreator<SetTokenAction> = (token: string) => ({
    type: SET_TOKEN,
    token
});

export const saveToken = (): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch) => {
    if (typeof window !== 'undefined') {
        const token = window.__token__;
        if (token.length > 15) {
            dispatch(tokenRedux(token))
        }
    }
}

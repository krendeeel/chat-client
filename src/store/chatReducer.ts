import { ChatAction, ChatActionTypes, ChatState } from "../types/index.type"

export const chatReducer = (state: ChatState, action: ChatAction): ChatState => {
    switch (action.type) {
        case ChatActionTypes.SET_USER:
            return {
                ...state,
                user: action.payload
            }
        case ChatActionTypes.SET_LOADING:
            return {
                ...state,
                loading: action.payload
            }
        case ChatActionTypes.SET_MESSAGES:
            return {
                ...state,
                messages: action.payload
            }
        case ChatActionTypes.SET_ONLINE_USERS:
            return {
                ...state,
                onlineUsers: action.payload
            }
        case ChatActionTypes.ADD_NEW_MESSAGE:
            const oldMessages = state.messages ? state.messages : [];
            return {
                ...state,
                messages: [...oldMessages, action.payload]
            }
        case ChatActionTypes.SET_MOBILE_SIDEBAR:
            return {
                ...state,
                mobileSidebar: action.payload
            }
        default:
            return state
    }
}
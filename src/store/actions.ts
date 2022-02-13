import { ChatAction, ChatActionTypes, IUser, IMessage } from "../types/index.type";

export const setUser = (user: IUser | null): ChatAction => {
    return {
        type: ChatActionTypes.SET_USER,
        payload: user
    }
}

export const setLoading = (loading: boolean): ChatAction => {
    return {
        type: ChatActionTypes.SET_LOADING,
        payload: loading
    }
}

export const setMessages = (messages: IMessage[] | null): ChatAction => {
    return {
        type: ChatActionTypes.SET_MESSAGES,
        payload: messages
    }
}

export const setOnlineUsers = (onlineUsers: Array<string>): ChatAction => {
    return {
        type: ChatActionTypes.SET_ONLINE_USERS,
        payload: onlineUsers
    }
}

export const addNewMessage = (newMessage: IMessage): ChatAction => {
    return {
        type: ChatActionTypes.ADD_NEW_MESSAGE,
        payload: newMessage
    }
}

export const setMobileSidebar = (mobileSidebar: boolean): ChatAction => {
    return {
        type: ChatActionTypes.SET_MOBILE_SIDEBAR,
        payload: mobileSidebar
    }
}
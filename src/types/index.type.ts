export interface ChatState {
    user: IUser | null,
    loading: boolean,
    messages: IMessage[] | null,
    onlineUsers: Array<string>,
    mobileSidebar: boolean
}

export interface IUser {
    name: string,
    roomId: string
}

export interface IMessage {
    username: string,
    text: string,
    time: string
}

export interface IRoomData {
    onlineUsers: Array<string>,
    messages: IMessage[]
}

export enum ChatActionTypes {
    SET_LOADING = 'SET_LOADING',
    SET_MOBILE_SIDEBAR = 'SET_MOBILE_SIDEBAR',
    SET_USER = 'SET_USER',
    SET_MESSAGES = 'SET_MESSAGES',
    SET_ONLINE_USERS = 'SET_ONLINE_USERS',
    ADD_NEW_MESSAGE = 'ADD_NEW_MESSAGE'
}

export enum SocketValues {
    NEW_MESSAGE = 'ROOM:NEW_MESSAGE',
    SET_USERS = 'ROOM:SET_USERS',
    JOIN = 'ROOM:JOIN',
}

interface setUser {
    type: ChatActionTypes.SET_USER
    payload: IUser | null
}

interface setLoading {
    type: ChatActionTypes.SET_LOADING,
    payload: boolean
}

interface addNewMessage {
    type: ChatActionTypes.ADD_NEW_MESSAGE,
    payload: IMessage
}

interface setMessages {
    type: ChatActionTypes.SET_MESSAGES,
    payload: IMessage[] | null
}

interface setOnlineUsers {
    type: ChatActionTypes.SET_ONLINE_USERS,
    payload: Array<string>
}

interface setMobileSidebar {
    type: ChatActionTypes.SET_MOBILE_SIDEBAR,
    payload: boolean
}

export type ChatAction =
    setUser | setLoading | setMessages |
    setOnlineUsers | addNewMessage | setMobileSidebar;
import { createContext, useContext, useReducer } from "react";
import type { ReactNode } from 'react'
import { ChatState, ChatAction } from "../types/index.type";
import { chatReducer } from "./chatReducer";

const initialState: ChatState = {
    loading: false,
    onlineUsers: [],
    messages: null,
    user: null,
    mobileSidebar: false
}

export type Dispatch = (action: ChatAction) => void;

const ChatContext = createContext<{ state: ChatState, dispatch: Dispatch } | null>(null)

export function ChatProvider({ children }: { children: ReactNode }) {
    const [state, dispatch] = useReducer(chatReducer, initialState)
    return (
        <ChatContext.Provider value={{ state, dispatch }}>
            {children}
        </ChatContext.Provider>
    )
}

export function useChatContext() {
    const context = useContext(ChatContext);
    if (!context) throw new Error('useChatContext must be used inside a CharContextProvider');
    return context;
}



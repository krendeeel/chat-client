import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { ChatDataService, socket } from '../api';
import { useChatContext } from '../store';
import { setLoading, setMessages, setOnlineUsers, setUser } from '../store/actions';
import { SocketValues } from '../types/index.type';

const JoinScreen: React.FC = () => {
    const { dispatch } = useChatContext();
    const { handleSubmit, control, formState: { errors } } = useForm();
    const [error, setError] = useState(false)

    const submitHandler = async ({ name, roomId }: any) => {
        try {
            setError(false);
            dispatch(setLoading(true));
            await ChatDataService.createRoom(roomId);
            dispatch(setUser({ name, roomId }));
            await socket.emit(SocketValues.JOIN, { name, roomId });
            const data = await ChatDataService.getRoomData(roomId);
            dispatch(setOnlineUsers(data.onlineUsers));
            dispatch(setMessages(data.messages));
        } catch (e) {
            setError(true);
        }
    }

    return (
        <form
            className='main__join'
            onSubmit={handleSubmit(submitHandler)}
        >
            <p>React Chat</p>
            <Controller
                name='name'
                control={control}
                defaultValue=''
                rules={{
                    required: true
                }}
                render={({ field }) => (
                    <input
                        {...field}
                        placeholder='Имя'
                    />
                )}
            />
            <Controller
                name='roomId'
                control={control}
                defaultValue=''
                rules={{
                    required: true
                }}
                render={({ field }) => (
                    <input
                        {...field}
                        placeholder='Код комнаты'
                    />
                )}
            />
            <button
                type='submit'
            >
                Войти
            </button>
            {
                (errors.name || errors.roomId || error) &&
                <div className='error'>
                    {error ? 'Ошибка входа' : 'Данные не заполнены!'}
                </div>
            }
        </form>
    );
}

export default JoinScreen;

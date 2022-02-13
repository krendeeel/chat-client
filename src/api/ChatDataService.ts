import { IRoomData } from "../types/index.type";
import axios from "./axios";

class ChatDataService {
    async createRoom(roomId: string) {
        await axios.post('/rooms', {
            roomId
        });
    }
    async getRoomData(roomId: string): Promise<IRoomData> {
        const response = await axios.get<IRoomData>(`/rooms/${roomId}`);
        return response.data;

    }
}

export default new ChatDataService();
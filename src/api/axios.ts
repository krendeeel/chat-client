import axios from "axios";

export default axios.create({
    baseURL: "https://reactappchat-server.herokuapp.com"
});
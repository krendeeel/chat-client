
const getTime = () => {
    const hours = new Date().getHours() > 10
        ? new Date().getHours()
        : '0' + new Date().getHours();
    const minutes = new Date().getMinutes() > 10
        ? new Date().getMinutes()
        : '0' + new Date().getMinutes();
    return hours + ':' + minutes;
}

export default getTime;
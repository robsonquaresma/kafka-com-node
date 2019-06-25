module.exports = () => {

    const date    = new Date();
    const hours   = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const millisg = date.getMilliseconds();

    return `${hours}:${minutes}:${seconds}:${millisg}`;

}
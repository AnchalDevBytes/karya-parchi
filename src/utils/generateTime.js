const generateTime = (timestamp) => {

    const date = new Date(timestamp);

    const options = {
        timeZone: 'Asia/Kolkata',
        hour12: true, 
        hour: 'numeric', 
        minute: 'numeric', 
        second: 'numeric', 
    }

    return date.toLocaleTimeString('en-IN', options)
}

export default generateTime;
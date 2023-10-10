function addDateTime(message) {
    const dateTimeNow = new Date();
    return `${dateTimeNow.toLocaleDateString()} ${dateTimeNow.getHours()}:${dateTimeNow.getMinutes()} - ${message}`;
};

alert(addDateTime("This is the best moment to have a look at this website !"));
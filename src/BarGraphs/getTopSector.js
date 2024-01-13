export const getTopSector = (inputObject, num = 7, keyToExclude = '') => {
    // console.log(inputObject);
    // Convert the object to an array of key-value pairs
    const entries = Object.entries(inputObject);

    // Remove the specified key and its corresponding value
    const filteredEntries = entries.filter(([key]) => key !== keyToExclude);

    // Sort the array based on the values in descending order
    filteredEntries.sort((a, b) => b[1] - a[1]);

    // Take the top 7 key-value pairs
    const topEntries = filteredEntries.slice(0, num);

    // Convert the array back to an object
    const resultObject = Object.fromEntries(topEntries);
    

    return resultObject;
};
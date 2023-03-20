"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeArrayOfObjects = exports.uniqueArrayOfObjects = exports.delay = exports.splitIntoChunks = exports.setOrdinalSuffix = exports.reorderArray = exports.getDate = exports.shallowCompareArrays = exports.generateRandomNumber = exports.capitalizeWord = exports.isOfType = void 0;
function isOfType(string, arr) {
    return typeof string === 'string' && string in arr;
}
exports.isOfType = isOfType;
function capitalizeWord(word) {
    if (typeof word === 'string') {
        let finalWord = '';
        word.split(' ').forEach((w) => {
            finalWord += w[0].toUpperCase() + w.slice(1).toLowerCase() + ' ';
        });
        return finalWord.trim();
    }
    // if (word.length === 1) return word.map((value) => capitalizeWord(value))[0];
    return word.map((value) => capitalizeWord(value));
}
exports.capitalizeWord = capitalizeWord;
/**
 * Generates a random number between `min` and `max`.
 * @param min The lowest the number can be.
 * @param max The highest the number can be.
 * @returns A random number between `min` and `max`.
 * @remarks The number is inclusive of `min` and `max`.
 */
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
exports.generateRandomNumber = generateRandomNumber;
function shallowCompareArrays(arr1, arr2) {
    const sorted1 = arr1.sort();
    const sorted2 = arr2.sort();
    return (sorted1.length === sorted2.length &&
        sorted1.every((el, idx) => el === sorted2[idx]));
}
exports.shallowCompareArrays = shallowCompareArrays;
/**
 * Gets the current date and returns it.
 * @returns The current date in the format `YYYY-MM-DD`.
 */
function getDate() {
    const date = new Date();
    const offset = date.getTimezoneOffset();
    const yourDate = new Date(date.getTime() - offset * 60 * 1000);
    const formattedDate = yourDate.toISOString().split('T')[0];
    const [year, month, day] = formattedDate.split('-');
    const hours = date.getHours();
    const monthNames = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];
    const days = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
    ];
    return {
        /** The current year. */
        year,
        /** The current month. */
        month: monthNames[parseInt(month) - 1],
        /** The current date. */
        date: day,
        /** The current day of week. */
        day: days[date.getDay() - 1],
        /** The current time in 12-hour format. */
        time: `${(hours + 24) % 12 || 12}:${date.getMinutes()} ${hours >= 12 ? 'PM' : 'AM'}`,
        /** The date formatted as follows: `YYYY-MM-DD`. */
        formattedDate,
    };
}
exports.getDate = getDate;
/**
 * Moves the element at index {@linkcode from} to the index specified ({@linkcode to}).
 * @param arr The array to reorder.
 * @param from The index of the element to reorder.
 * @param to The index to place the item.
 */
function reorderArray(arr, from, to) {
    console.log(arr);
    arr.splice(to, 0, arr.splice(from, 1)[0]);
    console.log(arr);
}
exports.reorderArray = reorderArray;
function setOrdinalSuffix(i) {
    const num = typeof i === 'string' ? parseInt(i) : i;
    const j = num % 10;
    const k = num % 100;
    if (j == 1 && k != 11)
        return num + 'st';
    if (j == 2 && k != 12)
        return num + 'nd';
    if (j == 3 && k != 13)
        return num + 'rd';
    return `${num}th`;
}
exports.setOrdinalSuffix = setOrdinalSuffix;
/**
 * Splits an array into multiple `chunks` or `sub-arrays`.
 * @param list The array to splice.
 * @param chunkSize The number of chunks to create.
 * @returns An array spliced into chunks.
 */
function splitIntoChunks(list, chunkSize) {
    const arr = [...list];
    const res = [];
    let count = 0;
    while (arr.length > 0) {
        const chunk = arr.splice(0, chunkSize);
        res.push(chunk);
        count++;
    }
    return res;
}
exports.splitIntoChunks = splitIntoChunks;
/**
 * Adds a delay before the next piece of code is executed.
 * @param time The length of the delay in milliseconds.
 * @returns A void promise to add a delay between lines of code.
 */
function delay(time) {
    return new Promise((resolve) => {
        setTimeout(resolve, time);
    });
}
exports.delay = delay;
function uniqueArrayOfObjects(array, key) {
    if (key) {
        // Remove duplicates based on a specific key
        return array.filter((obj, index, self) => self.findIndex((t) => t[key] === obj[key]) === index);
    }
    else {
        // Remove duplicates based on the entire object
        return Array.from(new Set(array.map((value) => JSON.stringify(value)))).map((value) => JSON.parse(value));
    }
}
exports.uniqueArrayOfObjects = uniqueArrayOfObjects;
function mergeArrayOfObjects(objects) {
    return objects.reduce((mergedObject, currentObject) => {
        return { ...mergedObject, ...currentObject };
    }, {});
}
exports.mergeArrayOfObjects = mergeArrayOfObjects;

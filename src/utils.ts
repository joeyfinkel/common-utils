export function isOfType<T>(string: unknown, arr: string[]): string is T {
  return typeof string === 'string' && string in arr;
}

/**
 * Capitalizes a word.
 * @param word The word to capitalize.
 */
export function capitalizeWord(word: string): string;
export function capitalizeWord(...words: string[]): string[];
export function capitalizeWord(words: string[]): string[];
export function capitalizeWord(word: string | string[]) {
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

/**
 * Generates a random number between `min` and `max`.
 * @param min The lowest the number can be.
 * @param max The highest the number can be.
 * @returns A random number between `min` and `max`.
 * @remarks The number is inclusive of `min` and `max`.
 */
export const generateRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const shallowCompareArrays = <T>(arr1: T[], arr2: T[]) => {
  const sorted1 = arr1.sort();
  const sorted2 = arr2.sort();

  return (
    sorted1.length === sorted2.length &&
    sorted1.every((el, idx) => el === sorted2[idx])
  );
};

/**
 * Gets the current date and returns it.
 * @returns The current date in the format `YYYY-MM-DD`.
 */
export function getDate() {
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
  ] as const;
  const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ] as const;

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
    time: `${(hours + 24) % 12 || 12}:${date.getMinutes()} ${
      hours >= 12 ? 'PM' : 'AM'
    }`,
    /** The date formatted as follows: `YYYY-MM-DD`. */
    formattedDate,
  };
}

/**
 * Moves the element at index {@linkcode from} to the index specified ({@linkcode to}).
 * @param arr The array to reorder.
 * @param from The index of the element to reorder.
 * @param to The index to place the item.
 */
export function reorderArray<T>(arr: T[], from: number, to: number) {
  console.log(arr);
  arr.splice(to, 0, arr.splice(from, 1)[0]);
  console.log(arr);
}

/**
 * Adds an ordinal suffix to {@linkcode i} (`st`, `nd`, `rd`, or `th`).
 * @param i The number to an ordinal suffix to.
 * @returns The number ({@linkcode i}) with the correct suffix.
 */
export function setOrdinalSuffix(i: number): string;
export function setOrdinalSuffix(i: string): string;
export function setOrdinalSuffix(i: number | string) {
  const num = typeof i === 'string' ? parseInt(i) : i;
  const j = num % 10;
  const k = num % 100;

  if (j == 1 && k != 11) return num + 'st';
  if (j == 2 && k != 12) return num + 'nd';
  if (j == 3 && k != 13) return num + 'rd';

  return `${num}th`;
}

/**
 * Splits an array into multiple `chunks` or `sub-arrays`.
 * @param list The array to splice.
 * @param chunkSize The number of chunks to create.
 * @returns An array spliced into chunks.
 */
export const splitIntoChunks = <T>(list: T[], chunkSize: number) => {
  const arr = [...list];
  const res: T[][] = [];

  let count = 0;

  while (arr.length > 0) {
    const chunk = arr.splice(0, chunkSize) as [T, T];

    res.push(chunk);
    count++;
  }

  return res;
};

/**
 * Adds a delay before the next piece of code is executed.
 * @param time The length of the delay in milliseconds.
 * @returns A void promise to add a delay between lines of code.
 */
export const delay = (time: number) => {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, time);
  });
};

export function uniqueArrayOfObjects<T>(array: T[], key?: keyof T): T[] {
  if (key) {
    // Remove duplicates based on a specific key
    return array.filter(
      (obj, index, self) => self.findIndex((t) => t[key] === obj[key]) === index
    );
  } else {
    // Remove duplicates based on the entire object
    return Array.from(new Set(array.map((value) => JSON.stringify(value)))).map(
      (value) => JSON.parse(value)
    );
  }
}

export function mergeArrayOfObjects<T>(objects: T[]): T {
  return objects.reduce((mergedObject, currentObject) => {
    return { ...mergedObject, ...currentObject };
  }, {} as T);
}

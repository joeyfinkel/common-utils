export declare function isOfType<T>(string: unknown, arr: string[]): string is T;
/**
 * Capitalizes a word.
 * @param word The word to capitalize.
 */
export declare function capitalizeWord(word: string): string;
export declare function capitalizeWord(...words: string[]): string[];
export declare function capitalizeWord(words: string[]): string[];
/**
 * Generates a random number between `min` and `max`.
 * @param min The lowest the number can be.
 * @param max The highest the number can be.
 * @returns A random number between `min` and `max`.
 * @remarks The number is inclusive of `min` and `max`.
 */
export declare const generateRandomNumber: (min: number, max: number) => number;
export declare const shallowCompareArrays: <T>(arr1: T[], arr2: T[]) => boolean;
/**
 * Gets the current date and returns it.
 * @returns The current date in the format `YYYY-MM-DD`.
 */
export declare function getDate(): {
    /** The current year. */
    year: string;
    /** The current month. */
    month: "January" | "February" | "March" | "April" | "May" | "June" | "July" | "August" | "September" | "October" | "November" | "December";
    /** The current date. */
    date: string;
    /** The current day of week. */
    day: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";
    /** The current time in 12-hour format. */
    time: string;
    /** The date formatted as follows: `YYYY-MM-DD`. */
    formattedDate: string;
};
/**
 * Moves the element at index {@linkcode from} to the index specified ({@linkcode to}).
 * @param arr The array to reorder.
 * @param from The index of the element to reorder.
 * @param to The index to place the item.
 */
export declare function reorderArray<T>(arr: T[], from: number, to: number): void;
/**
 * Adds an ordinal suffix to {@linkcode i} (`st`, `nd`, `rd`, or `th`).
 * @param i The number to an ordinal suffix to.
 * @returns The number ({@linkcode i}) with the correct suffix.
 */
export declare function setOrdinalSuffix(i: number): string;
export declare function setOrdinalSuffix(i: string): string;
/**
 * Splits an array into multiple `chunks` or `sub-arrays`.
 * @param list The array to splice.
 * @param chunkSize The number of chunks to create.
 * @returns An array spliced into chunks.
 */
export declare const splitIntoChunks: <T>(list: T[], chunkSize: number) => T[][];
/**
 * Adds a delay before the next piece of code is executed.
 * @param time The length of the delay in milliseconds.
 * @returns A void promise to add a delay between lines of code.
 */
export declare const delay: (time: number) => Promise<void>;
export declare function uniqueArrayOfObjects<T>(array: T[], key?: keyof T): T[];
export declare function mergeArrayOfObjects<T>(objects: T[]): T;

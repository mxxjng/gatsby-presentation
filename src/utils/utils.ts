/**
 * a function that groups objects by category
 * @param {array} arr Array with objects
 * @param {string} category category to group by
 */
export const groupBy = (arr, category) => {
    return arr.reduce((acc, obj) => {
        let key = obj[category];
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(obj);
        return acc;
    }, {});
};

/**
 * Calculates the playoff gamebrackets
 * @param {number} bracketSize  the number of the initial bracket size in the first playoff round
 */
export const calculateBrackets = bracketSize => {
    let arr: any = [];
    let calc = bracketSize;
    let gameNumber = 0;

    while (calc >= 1) {
        let subArr: number[] = [];
        let i = 0;
        while (i < calc) {
            gameNumber += 1;
            subArr.push(gameNumber);
            i++;
        }
        calc = calc / 2;
        arr.push(subArr);
    }

    return arr;
};

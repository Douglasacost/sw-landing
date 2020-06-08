export function isBetween (number, a, b) {
    let min = Math.min.apply(Math, [a, b]),
        max = Math.max.apply(Math, [a, b]);
    return number >= min && number <= max;
};
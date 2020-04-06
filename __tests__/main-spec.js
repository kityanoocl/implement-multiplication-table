const multiplicationTableByRange = require('../main');

it ('should have a multiplication table', () => {
    expect(multiplicationTableByRange(2, 4)).toStrictEqual(["2*2=4", "2*3=6", "2*4=8", "3*3=9", "3*4=12", "4*4=16"]);
});

it ('Start Number > End Number should be null', () => {
    expect(multiplicationTableByRange(20, 4)).toStrictEqual(null);
});

it ('Start Number < 1 should be null', () => {
    expect(multiplicationTableByRange(-2, 4)).toStrictEqual(null);
});

it ('Start Number > 1000 should be null', () => {
    expect(multiplicationTableByRange(1010, 4)).toStrictEqual(null);
});

it ('End Number < 1 should be null', () => {
    expect(multiplicationTableByRange(1, -1)).toStrictEqual(null);
});

it ('End Number > 1000 should be null', () => {
    expect(multiplicationTableByRange(1, 1010)).toStrictEqual(null);
});
function checkValidStartEndNumber(startNumber, endNumber)
{
    return startNumber <= endNumber;
}

function checkStartEndNumberInRange(startNumber, endNumber)
{
    return startNumber >= 1 && startNumber <= 1000 && endNumber >= 1 && endNumber <= 1000;
}

function buildMultiplicationTable(startNumber, endNumber)
{
    let multiplicationTable = [];
    for (var multiplier = startNumber; multiplier <= endNumber; multiplier++)
    {
        for (var multiplicand = multiplier; multiplicand <= endNumber; multiplicand++)
        {
            let multiplicationEquation = multiplier + "*" + multiplicand + "=" + String(multiplier * multiplicand);
            multiplicationTable.push(multiplicationEquation);
        }
    }
    return multiplicationTable;
}

function multiplicationTableByRange (startNumber, endNumber)
{
    if (checkValidStartEndNumber(startNumber, endNumber) && checkStartEndNumberInRange(startNumber, endNumber))
        return buildMultiplicationTable(startNumber, endNumber);
    else
        return null;
}

module.exports = multiplicationTableByRange;
var sortFunctions = function () {

    this.sortEven = function (array) {
        let sortedArray = [];
        for (let item in array) {
            if (array[item] % 2 == 0) {
                sortedArray.push(array[item]);
            }
        }
        return sortedArray;
    };
};
module.exports = new sortFunctions();
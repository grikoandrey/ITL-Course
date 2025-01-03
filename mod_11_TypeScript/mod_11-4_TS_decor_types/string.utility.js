export var stringUtility;
(function (stringUtility) {
    function changeString(string) {
        return string.toUpperCase();
    }
    stringUtility.changeString = changeString;
    function changeString2(string) {
        return string.toUpperCase();
    }
})(stringUtility || (stringUtility = {}));
stringUtility.changeString('privet');

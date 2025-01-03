export namespace stringUtility {
    export function changeString(string: string): string {
        return string.toUpperCase();
    }
    function changeString2(string: string): string {
        return string.toUpperCase();
    }
}

stringUtility.changeString('privet');
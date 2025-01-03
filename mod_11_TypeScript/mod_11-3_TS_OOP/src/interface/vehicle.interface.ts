export interface VehicleInterface {
    price: number | null,
    setUsedCondition(): void,
    toString(): string,
    getTypes(): string[],
}
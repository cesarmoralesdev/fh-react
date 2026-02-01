export class Heroe {
    private _firstName: string;
    private _lastName: string;
    constructor(firstName: string, lastName: string) {
        this._firstName = firstName;
        this._lastName = lastName;
    }

    public getFirstName(): string {
        return this._firstName;
    }
    public getLastName(): string {
        return this._lastName;
    }

    public get getFullName() : string {
        return `Mi nombre completo es '${this._firstName} ${this._lastName}'`;
    }
}
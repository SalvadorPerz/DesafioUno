export class Cliente {
    constructor(
    public id: number,
    public nombre: string,
    public dui: string,
    public nombreMasc: string,
    public tratamiento: string,
    public medicamento: string,
    public costo: number,
    public contador: number,
    public descuento: number
    ) {}
}

export class Todo {

    public id: number;
    public texto: String;
    public completado: boolean;

    constructor(texto: string) {

        this.texto = texto.charAt(0).toUpperCase() + texto.slice(1);

        //Por defecto no están completados
        this.completado = false;

        this.id = Math.random();

    }
}
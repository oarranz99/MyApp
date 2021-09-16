export class Producto {
	public  id: number;
    public nombre: string;
	public descripcion: string;
	public precio: number;
	public cantidad: number;
	constructor(id: number, nombre: string, desc: string, 
				precio: number, cantidad: number) {
		this.id = id;
		this.nombre = nombre;
		this.descripcion = desc;
		this.precio = precio;
		this.cantidad = cantidad;
	}
}
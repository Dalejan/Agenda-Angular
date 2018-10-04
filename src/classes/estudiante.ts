export class Estudiante {
  strNombre: String;
  strCorreo: String;
  numCodigo: number;
  numNumero: number;

  constructor(nombre: string, correo: String, codigo: number, numero: number) {
    this.strNombre = nombre;
    this.strCorreo = correo;
    this.numCodigo = codigo;
    this.numNumero = numero;
  }

  getNombre(): String {
    return this.strNombre;
  }

  setNombre(nombre) {
    this.strNombre = nombre;
  }

  getCorreo(): String {
    return this.strCorreo;
  }

  setCorreo(correo) {
    this.strCorreo = correo;
  }

  getCodigo(): number {
    return this.numCodigo;
  }

  setCodigo(codigo) {
    this.numCodigo = codigo;
  }

  getNumero(): number {
    return this.numNumero;
  }

  setNumero(numero) {
    this.numNumero = numero;
  }
  getAllData() {
    return {
      nombre: this.strNombre,
      correo: this.strCorreo,
      codigo: this.numCodigo,
      numero: this.numNumero
    };
  }

  getAllDataAsArray(): Array<any> {
    return [this.strNombre, this.strCorreo, this.numCodigo, this.numNumero];
  }

  setAllData(nombre: String, correo: number, codigo: number, numero: number) {
    this.setNombre(nombre);
    this.setCorreo(correo);
    this.setCodigo(codigo);
    this.setNumero(numero);
  }
}

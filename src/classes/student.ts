export class Student {
  strName: String;
  strMail: String;
  numCode: number;
  numNumber: number;

  constructor(nombre: string, correo: String, codigo: number, numero: number) {
    this.strName = nombre;
    this.strMail = correo;
    this.numCode = codigo;
    this.numNumber = numero;
  }

  getName(): String {
    return this.strName;
  }

  setName(nombre) {
    this.strName = nombre;
  }

  getMail(): String {
    return this.strMail;
  }

  setMail(correo) {
    this.strMail = correo;
  }

  getCode(): number {
    return this.numCode;
  }

  setCode(codigo) {
    this.numCode = codigo;
  }

  getNumber(): number {
    return this.numNumber;
  }

  setNumber(numero) {
    this.numNumber = numero;
  }
  getAllData() {
    return {
      nombre: this.strName,
      correo: this.strMail,
      codigo: this.numCode,
      numero: this.numNumber
    };
  }

  getAllDataAsArray(): Array<any> {
    return [this.strName, this.strMail, this.numCode, this.numNumber];
  }

  setAllData(nombre: String, correo: number, codigo: number, numero: number) {
    this.setName(nombre);
    this.setMail(correo);
    this.setCode(codigo);
    this.setNumber(numero);
  }
}

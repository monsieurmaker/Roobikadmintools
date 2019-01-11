const app = new Vue({
	el: '#app',
	data: {
		titulo: 'ROOBIK Admin Tools',
		alumnos: [
			{id:0, nombre: 'Pera', apellidos: '', estado:false, cantidad:10},
			{id:1, nombre: 'Manzana', apellidos: '', estado:false, cantidad:3},
			{id:2, nombre: 'Platano', apellidos: '', estado:false, cantidad:10},
			{id:3, nombre: 'Manzana', apellidos: '', estado:false, cantidad:10},
			{id:4, nombre: 'Manzana', apellidos: '',estado:false, cantidad:0}
		],
		nuevoAlumno: {
			id:999,
			nombre: '',
			apellidos: '',
			estado: false,
			cantidad:2
		}
	},
	methods: {
		agregarAlumno () {
			var newID = cuentaObjetos(this.alumnos,id);
			this.nuevoAlumno.id=newID;
			this.alumnos.push(this.nuevoAlumno);		}

	}
});

function cuentaObjetos(obj,prop) {
	// Cuenta los objetos que tengan una determinada propiedad. Por ejemplo
	// Objetos ALUMNO con propiedad ID

  	var result = 0;
  for(var prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      result++;
    }
  }
  return result;

}
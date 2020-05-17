export default function validarIniciarSession(valores) {
  let errores = {};

  if (!valores.usuario) {
    errores.usuario = "El usuario es obligatorio";
  }

  if (!valores.contrasena) {
    errores.contrasena = "El contraseña es obligatoria";
  } else if (valores.contrasena.length < 2) {
    errores.contrasena = "La contraseña debe ser de al menos 6 caracteres";
  }

  return errores;
}

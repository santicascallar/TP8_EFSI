import React from "react";

const Formulario = () => {
    return (
      <div className="container">

        <form>
          <div className="form-group">
            <label for="exampleInputEmail1">Email</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingresar email"/>
            <small id="emailHelp" className="form-text text-muted">Nunca compartiremos tu email</small>
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Contraseña</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Contraseña"/>
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Nombre</label>
            <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Nombre"/>
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Apellido</label>
            <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Apellido"/>
          </div>
          <div className="form-group form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
            <label className="form-check-label" for="exampleCheck1">Recordarme</label>
          </div>
          <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
      </div>
    );
}
  
export default Formulario;
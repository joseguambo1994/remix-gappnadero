export default function NewJokeRoute() {
    return (
      <div>
        <p>Agregar chiste</p>
        <form method="post">
          <div>
            <label>
              Nombre: <input type="text" name="name" />
            </label>
          </div>
          <div>
            <label>
              Contenido: <textarea name="content" />
            </label>
          </div>
          <div>
            <button type="submit" className="button">
              Agregar
            </button>
          </div>
        </form>
      </div>
    );
  }
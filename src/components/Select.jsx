import React from 'react'

const Select = () => {
  return (
    <div>
       
       <div className="datos contenedor-l-s">
                    <label for="">
                        Categoría
                    </label>
                        <div className="container-select">
                            <select class="select-box" >
                                <option value="categorias">Categorías</option>
                                <option value="hogar">Hogar</option>
                                <option value="electronica">Electrónica</option>
                                <option value="bicicletas">Bicicletas</option>
                                <option value="tv">TV</option>
                                <option value="celulares">Celulares</option>
                              </select>

                              <div class="icon-container"><i class="fa-solid fa-caret-down"></i></div>
                        </div>
                    
                </div>

    </div>
  );
};

export default Select;

import React from 'react'

const SubirImagen = () => {
  return (
    <div>
      <div className="datos dato-imagen">
                    <label class="l-file" for="file" >
                        <i class="fa-regular fa-image"></i>
                           Subir Foto
                    </label>
                    <input class="i-archivo" type="file" id="file" accept="./image*" />
                </div>
    </div>
  );
};

export default SubirImagen;

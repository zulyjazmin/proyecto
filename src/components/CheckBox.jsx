import React from 'react'

const CheckBox = () => {
  return (
    <div>
      <div className="datos">
                    <label for="">
                        Stock
                        <input type="checkbox" name="si" id="afirmativo" />si
                        <input type="checkbox" name="no" id="negativo" />no
                    </label>
                </div>
    </div>
  )
}

export default CheckBox

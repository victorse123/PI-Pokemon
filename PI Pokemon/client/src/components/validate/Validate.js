
const stringRegExp = /^[a-z-]{1,20}$/;
// const urlRegExp = /(http|https?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_.~#?&//=]*)/ ;

export const validate =({name, stroke, defending, speed, height, weight})=>{
    
    const errors ={};
        
    if(!stringRegExp.test(name)) errors.name = "El nombre debe ser en minuscula y menor a 15 caracteres";
    // if(!urlRegExp.test(imageDefault)) errors.imageDefault = "Ingrese una URL correcta";
    // if(life === 0) errors.life = "Vida no debe ser = 0"
    if(stroke === 0) errors.stroke = "Ataque no debe ser = 0"
    if(defending === 0) errors.defending = "Defensa no debe ser = 0"
    if(speed === 0) errors.speed = "Velocidad no debe ser = 0"
    if(height === 0) errors.height = "Altura no debe ser = 0"
    if(weight === 0) errors.weight = "Peso no debe ser = 0"
    
    return errors;
}
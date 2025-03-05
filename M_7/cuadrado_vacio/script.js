function cuadradoManual(simbolo, tamaño) {
    let resultado = '';
    
    // Borde superior
    for (let col = 0; col < tamaño; col++) {
        resultado += simbolo;
    }
    resultado += '\n';
    
    // Cuerpo central
    for (let fila = 1; fila < tamaño - 1; fila++) {
        resultado += simbolo;  // Borde izquierdo
        
        // Espacio vacío
        for (let col = 1; col < tamaño - 1; col++) {
            resultado += ' ';
        }
        
        resultado += simbolo + '\n';  // Borde derecho
    }
    
    // Borde inferior (solo si tamaño > 1)
    if (tamaño > 1) {
        for (let col = 0; col < tamaño; col++) {
            resultado += simbolo;
        }
    }
    
    return resultado;
}

// Ejemplo de uso:
document.getElementById("result").innerHTML = cuadradoManual('*', 9);

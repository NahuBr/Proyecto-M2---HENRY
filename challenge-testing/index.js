const { forEach } = require("../front/scripts/tempData");

class carritocompra {
  constructor() {
    this.carrito = [];
  }
  agregarProducto(producto) {
    this.carrito.push(producto);
  }
  calcularTotal() {
    let total = 0;
    this.carrito.forEach((producto) => {
      total += producto.precio;
    });
    return total;
  }
  aplicarDescuento(procentaje) {
    let total = this.calcularTotal();
    let descuento = (total * procentaje) / 100;
    total -= descuento;
    return total;
  }
}

module.exports = carritocompra;

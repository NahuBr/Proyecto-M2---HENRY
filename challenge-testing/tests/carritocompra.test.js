const carritocompra = require("../index");

describe("Clase carritocompra", () => {
  let carrito;

  beforeEach(() => {
    carrito = new carritocompra();
  });

  test("agregarProducto debe agregar productos al carrito", () => {
    const producto = { nombre: "Laptop", precio: 1000 };
    carrito.agregarProducto(producto);
    expect(carrito.carrito.length).toBe(1);
    expect(carrito.carrito[0]).toEqual(producto);
  });

  test("calcularTotal debe devolver el total correcto", () => {
    const producto1 = { nombre: "Laptop", precio: 1000 };
    const producto2 = { nombre: "Mouse", precio: 50 };

    carrito.agregarProducto(producto1);
    carrito.agregarProducto(producto2);

    const total = carrito.calcularTotal();
    expect(total).toBe(1050);
  });

  test("aplicarDescuento debe devolver el total con el descuento aplicado", () => {
    const producto1 = { nombre: "Laptop", precio: 1000 };
    const producto2 = { nombre: "Mouse", precio: 50 };

    carrito.agregarProducto(producto1);
    carrito.agregarProducto(producto2);

    const totalConDescuento = carrito.aplicarDescuento(10);
    expect(totalConDescuento).toBe(945);
  });
});

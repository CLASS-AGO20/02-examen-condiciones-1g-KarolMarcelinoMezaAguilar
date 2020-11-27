import App from "../src/main";

test("totalVenta() menos de 10 productos", () => {
  let myApp = new App();
  let productos = Math.trunc(Math.random() * 10);

  expect(myApp.totalVenta(15.5, productos).toFixed(2)).toBe( ((15.5*productos) - (15.5*productos*0.05)).toFixed(2));
});

test("totalVenta() entre 10 y 20 productos", () => {
  let myApp = new App();
  let productos = Math.trunc(Math.random() * 11) +  10;

  expect(myApp.totalVenta(15.5, productos).toFixed(2)).toBe( ((15.5*productos) - (15.5*productos*0.1)).toFixed(2));
});

test("totalVenta() más de 20 productos", () => {
  let myApp = new App();
  let productos = Math.trunc(Math.random() * 100) +  21;

  expect(myApp.totalVenta(15.5, productos).toFixed(2)).toBe( ((15.5*productos) - (15.5*productos*0.15)).toFixed(2));
});
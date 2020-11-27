import App from "../src/main";

test("retirar() fondos insuficientes", () => {
  let myApp = new App();
  let saldo = Math.trunc(Math.random() * 2000);
  let retiro = Math.trunc(Math.random() * 2000) + 2000;

  expect(myApp.retirar(saldo, retiro)).toBe(-1);
});

test("retirar() fondos suficientes", () => {
  let myApp = new App();
  let saldo = Math.trunc(Math.random() * 2000);
  let retiro = Math.trunc(Math.random() * saldo);

  expect(myApp.retirar(saldo, retiro)).toBe(saldo-retiro);
});

import App from "../src/main";

test("costoBoletos()  asientos 1-10 sin descuento", () => {
  let myApp = new App();
  let dias = [2, 4, 5, 6, 7];
  let asiento = Math.trunc(Math.random() * 10) + 1;
  
  for(let i = 0; i < dias.length; i++) {
    expect(myApp.costoBoletos(asiento, dias[i]).toFixed(2)).toBe((50).toFixed(2));
  }
});

test("costoBoletos()  asientos 1-10 con descuento", () => {
  let myApp = new App();
  let dias = [1, 3];
  let asiento = Math.trunc(Math.random() * 10) + 1;
  
  for(let i = 0; i < dias.length; i++) {
    expect(myApp.costoBoletos(asiento, dias[i]).toFixed(2)).toBe((45).toFixed(2));
  }
});

test("costoBoletos()  asientos 11-20 sin descuento", () => {
  let myApp = new App();
  let dias = [2, 4, 5, 6, 7];
  let asiento = Math.trunc(Math.random() * 10) + 11;
  
  for(let i = 0; i < dias.length; i++) {
    expect(myApp.costoBoletos(asiento, dias[i]).toFixed(2)).toBe((60).toFixed(2));
  }
});

test("costoBoletos()  asientos 11-20 con descuento", () => {
  let myApp = new App();
  let dias = [1, 3];
  let asiento = Math.trunc(Math.random() * 10) + 11;
  
  for(let i = 0; i < dias.length; i++) {
    expect(myApp.costoBoletos(asiento, dias[i]).toFixed(2)).toBe((54).toFixed(2));
  }
});

test("costoBoletos()  asientos 21-30 sin descuento", () => {
  let myApp = new App();
  let dias = [2, 4, 5, 6, 7];
  let asiento = Math.trunc(Math.random() * 10) + 21;
  
  for(let i = 0; i < dias.length; i++) {
    expect(myApp.costoBoletos(asiento, dias[i]).toFixed(2)).toBe((70).toFixed(2));
  }
});

test("costoBoletos()  asientos 21-30 con descuento", () => {
  let myApp = new App();
  let dias = [1, 3];
  let asiento = Math.trunc(Math.random() * 10) + 21;
  
  for(let i = 0; i < dias.length; i++) {
    expect(myApp.costoBoletos(asiento, dias[i]).toFixed(2)).toBe((63).toFixed(2));
  }
});

test("costoBoletos()  asientos 31 o más sin descuento", () => {
  let myApp = new App();
  let dias = [2, 4, 5, 6, 7];
  let asiento = Math.trunc(Math.random() * 100) + 31;
  
  for(let i = 0; i < dias.length; i++) {
    expect(myApp.costoBoletos(asiento, dias[i]).toFixed(2)).toBe((80).toFixed(2));
  }
});

test("costoBoletos()  asientos 31 o más con descuento", () => {
  let myApp = new App();
  let dias = [1, 3];
  let asiento = Math.trunc(Math.random() * 100) + 31;
  
  for(let i = 0; i < dias.length; i++) {
    expect(myApp.costoBoletos(asiento, dias[i]).toFixed(2)).toBe((72).toFixed(2));
  }
});

test("costoBoletos()  día no valido", () => {
  let myApp = new App();
  let dia = Math.trunc(Math.random() * 100) + 8;

  expect(myApp.costoBoletos(10, dia).toFixed(2)).toBe((-1).toFixed(2));
});


const request = require("supertest");
const server = require("../index");

describe("Operacion GET de cafes", () => {
    it("Recibiendo un status 200", async()=>{
        const response = await request(server).get("/cafes").send();
        const status = response.statusCode;
        expect(status).toBe(200);
    })

    it("Verificando longitud de la respuesta mayor a 1", async()=>{
        const response = await request(server).get("/cafes").send();
        const resValue = response["text"];
        expect(resValue.length).toBeGreaterThan(0);
    })
});

describe("Operacion DELETE de cafes", () => {
    it("Borrar cafe inexistente", async()=>{
        const jwt = "token";
        const idInexistente = 5;
        const response = await request(server).delete(`/cafes/${idInexistente}`).set("Authorization",jwt).send();
        const status = response.statusCode;
        expect(status).toBe(404);
    })
 })

 describe("Operacion POST cafes", ()=>{
    it("Agregado de cafe", async()=>{
        const nuevoCafe = {
            "id": 5,
            "nombre": "Descafeinado"
        }
        const response = await request(server).post("/cafes").send(nuevoCafe);
        const status = response.statusCode;
        expect(status).toBe(201);
    })
 })

 describe("Operacion PUT cafes", () => {
    it("Status 400 al actualizar", async()=>{
        const idParametro = 3;
        const cafeActualizado = {
            "id": 4,
            "id":"NuevoCafe"
        }
        const response = await request(server).put(`/cafes/${idParametro}`).send(cafeActualizado);
        const status = response.statusCode;
        expect(status).toBe(400);
    })
  })
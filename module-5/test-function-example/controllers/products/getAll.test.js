const express = require("express");
const request = require("supertest");

const getAll = require("./getAll");

const app = express();

app.get("/api/products", getAll);

describe("test getAll controller", ()=> {
    let server;
    beforeAll(()=> server = app.listen(3000));//функция которая запускается до всех тестов
    afterAll(()=> server.close());// функция которая выполнится после всех тестов 

    test("getAll return products array", async()=> {
       const response =  await request(app).get("/api/products");
        expect(response.status).toBe(200);     
        expect(Array.isArray(response.body)).toBe(true);
        const [product] = response.body;
        expect(typeof product.id).toBe("string");       
        expect(typeof product.name).toBe("string");       
        expect(typeof product.price).toBe("number");       
    });
})
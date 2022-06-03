import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";

import { ListAvailableCarsUseCase } from "./ListAvailableCarsUseCase";

let listAvailableCarsUseCase: ListAvailableCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("List Cars", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listAvailableCarsUseCase = new ListAvailableCarsUseCase(
      carsRepositoryInMemory
    );
  });

  it("should be able to list all available cars", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car 1",
      description: "Car Description",
      daily_rate: 140,
      license_plate: "TRE-7234",
      fine_amount: 100,
      brand: "Car Brand",
      category_id: "category_id",
    });

    const cars = await listAvailableCarsUseCase.execute({});

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by brand", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car 2",
      description: "Car Description",
      daily_rate: 140,
      license_plate: "GFS-6461",
      fine_amount: 100,
      brand: "Car Brand Test",
      category_id: "category_id",
    });

    const cars = await listAvailableCarsUseCase.execute({
      brand: "Car Brand Test",
    });

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by name", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car 3",
      description: "Car Description",
      daily_rate: 140,
      license_plate: "BRL-1213",
      fine_amount: 100,
      brand: "Car Brand",
      category_id: "category_id",
    });

    const cars = await listAvailableCarsUseCase.execute({
      name: "Car 3",
    });

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by category", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Car 3",
      description: "Car Description",
      daily_rate: 140,
      license_plate: "BRL-1213",
      fine_amount: 100,
      brand: "Car Brand",
      category_id: "54321",
    });

    const cars = await listAvailableCarsUseCase.execute({
      category_id: "54321",
    });

    expect(cars).toEqual([car]);
  });
});

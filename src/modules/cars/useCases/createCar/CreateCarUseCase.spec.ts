import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import { AppError } from "@shared/errors/AppError";

import { CreateCarUseCase } from "./CreateCarUseCase";

describe("Create Car", () => {
  let createCarUseCase: CreateCarUseCase;
  let carsRepositoryInMemory: CarsRepositoryInMemory;

  beforeAll(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    createCarUseCase = new CreateCarUseCase(carsRepositoryInMemory);
  });

  it("should be able to create a new car", async () => {
    const car = await createCarUseCase.execute({
      name: "Car name",
      description: "Car description",
      daily_rate: 100,
      license_plate: "ABC-1234",
      fine_amout: 60,
      brand: "Car brand",
      category_id: "category",
    });

    expect(car).toHaveProperty("id");
  });

  it("should not be able to create a car with an existing license plate", async () => {
    expect(async () => {
      await createCarUseCase.execute({
        name: "Car 1",
        description: "Car description",
        daily_rate: 100,
        license_plate: "ABC-1234",
        fine_amout: 60,
        brand: "Car brand",
        category_id: "category",
      });

      await createCarUseCase.execute({
        name: "Car 2",
        description: "Car description",
        daily_rate: 100,
        license_plate: "ABC-1234",
        fine_amout: 60,
        brand: "Car brand",
        category_id: "category",
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("should be able to create a car with property 'available' true by default", async () => {
    const car = await createCarUseCase.execute({
      name: "Available Car",
      description: "Car description",
      daily_rate: 100,
      license_plate: "EFG-1234",
      fine_amout: 60,
      brand: "Car brand",
      category_id: "category",
    });

    expect(car.available).toBe(true);
  });
});
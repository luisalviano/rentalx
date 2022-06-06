import { Rental } from "@modules/rentals/infra/typeorm/entities/Rental";
import { IRentalsRepository } from "@modules/rentals/repositories/IRentalsRepository";
import { AppError } from "@shared/errors/AppError";

interface IRequest {
  user_id: string;
  car_id: string;
  expected_return_date: Date;
}

class CreateRentalUseCase {
  constructor(private rentalsRepository: IRentalsRepository) {}

  async execute({
    user_id,
    car_id,
    expected_return_date,
  }: IRequest): Promise<Rental> {
    // Should not be able to register a new rental if one is already open for the same car.
    const isCarUnavailable = await this.rentalsRepository.findOpenRentalByCar(
      car_id
    );

    if (isCarUnavailable) {
      throw new AppError("Car is not available!");
    }

    // Should not be able to register a new rental if one is already open for the same user.
    const userHasRental = await this.rentalsRepository.findOpenRentalByUser(
      user_id
    );

    if (userHasRental) {
      throw new AppError("There is already one rental open for this user!");
    }

    // A rental must have minimum duration of 24 hours.

    const rental = await this.rentalsRepository.create({
      user_id,
      car_id,
      expected_return_date,
    });

    return rental;
  }
}

export { CreateRentalUseCase };

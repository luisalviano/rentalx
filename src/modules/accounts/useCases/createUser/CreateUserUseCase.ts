import { inject } from "tsyringe";

import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";

class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute(data: ICreateUserDTO): Promise<void> {
    await this.usersRepository.create({
      name: data.name,
      username: data.username,
      email: data.email,
      password: data.password,
      driver_license: data.driver_license,
    });
  }
}

export { CreateUserUseCase };

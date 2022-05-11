import { hash } from "bcryptjs";
import { inject, injectable } from "tsyringe";

import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute(data: ICreateUserDTO): Promise<void> {
    const passwordHash = await hash(data.password, 8);

    await this.usersRepository.create({
      name: data.name,
      email: data.email,
      password: passwordHash,
      driver_license: data.driver_license,
    });
  }
}

export { CreateUserUseCase };

import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { AppError } from "@shared/errors/AppError";

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    name: string;
    email: string;
  };
  token: string;
}

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError("Incorrect email or password!");
    }

    const passwordMatches = await compare(password, user.password);

    if (!passwordMatches) {
      throw new AppError("Incorrect email or password!");
    }

    const token = sign({}, "78616169776103e051f8e5f36a1d4340", {
      subject: user.id,
      expiresIn: "1d",
    });

    const userData: IResponse = {
      user: {
        name: user.name,
        email: user.email,
      },
      token,
    };

    return userData;
  }
}

export { AuthenticateUserUseCase };

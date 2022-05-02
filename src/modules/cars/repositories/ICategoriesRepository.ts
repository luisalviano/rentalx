import { Category } from "../model/Category";

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

interface ICategoriesRepository {
  findByName(name: string): Category;
  list(): Category[];
  create(ICreateCategoryDTO): void;
}

export { ICategoriesRepository, ICreateCategoryDTO };

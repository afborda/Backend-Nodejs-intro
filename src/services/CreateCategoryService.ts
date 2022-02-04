import { CategoriesRepository } from "../repositories/CategoriesRepository";
import { ICategoriesRepository } from "../repositories/ICategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

/**
 * [X] - Definit tipo de retorno
 * [X] - Alterar Retorno de Erro
 * [X] - Acessar o repositorio
 */

class CreateCategoryService {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute({ description, name }: IRequest): void {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name);

    if (categoryAlreadyExists) {
      throw new Error("Category Already exists");
    }

    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryService };

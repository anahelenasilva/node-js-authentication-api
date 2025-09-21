import { AuthGateway } from '@infra/gateways/AuthGateway';
import { Injectable } from '@kernel/decorators/injectable';

@Injectable()
export class CreateMealUseCase {
  constructor(
    private readonly authGateway: AuthGateway,
  ) { }

  async execute(): Promise<CreateMealUseCase.Output> {
    return {
      mealId: 'id',
    };
  }
}

export namespace CreateMealUseCase {
  export type Input = {
    name: string;
  }

  export type Output = {
    mealId: string;
  }
}

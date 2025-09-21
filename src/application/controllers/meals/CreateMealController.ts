import { Injectable } from '@kernel/decorators/injectable';
import { Schema } from '@kernel/decorators/schema';

import { Controller } from '@application/contracts/Controller';
import { CreateMealUseCase } from '@application/usecases/auth/CreateMealUseCase';
import { createMealSchema } from '../auth/schemas/createMealSchema';

@Injectable()
@Schema(createMealSchema)
export class CreateMealController extends Controller<'private', CreateMealController.Response> {
  constructor(private readonly createMealUseCase: CreateMealUseCase) {
    super();
  }

  protected override async handle({ accountId }: Controller.Request<'private'>): Promise<Controller.Response<CreateMealController.Response>> {
    const { mealId } = await this.createMealUseCase.execute();

    return {
      statusCode: 200,
      body: {
        mealId,
        accountId,
      },
    };
  }
}

export namespace CreateMealController {
  export type Response = {
    mealId: string;
    accountId: string;
  }
}

import { Injectable } from '@kernel/decorators/injectable';
import { Schema } from '@kernel/decorators/schema';

import { Controller } from '@application/contracts/Controller';

import { ForgotPasswordUseCase } from '@application/usecases/auth/ForgotPasswordUseCase';
import { ForgotPasswordBody, forgotPasswordSchema } from './schemas/forgotPasswordSchema';

@Injectable()
@Schema(forgotPasswordSchema)
export class ForgotPasswordController extends Controller<'public', ForgotPasswordController.Response> {
  constructor(private readonly forgotPasswordUseCase: ForgotPasswordUseCase) {
    super();
  }

  protected override async handle(
    { body }: Controller.Request<'public', ForgotPasswordBody>,
  ): Promise<Controller.Response<ForgotPasswordController.Response>> {
    try {
      const { email } = body;
      await this.forgotPasswordUseCase.execute({ email });
    } catch {
      //we dont want to expose if the email exists or not
    }

    return {
      statusCode: 204,
    };
  }
}

export namespace ForgotPasswordController {
  export type Request = {
    refreshToken: string;
  }

  export type Response = null
}

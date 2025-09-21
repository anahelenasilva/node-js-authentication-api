import { ErrorCode } from '../ErrorCode';
import { ApplicationError } from './ApplicationError';

export class InvalidRefreshToken extends ApplicationError {
  public override code: ErrorCode;
  public override statusCode = 401;

  constructor() {
    super();

    this.name = 'InvalidRefreshToken';
    this.message = 'This refresh token is invalid or has expired';
    this.code = ErrorCode.INVALID_REFRESH_TOKEN;
  }
}

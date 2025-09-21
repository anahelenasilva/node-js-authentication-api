import { Injectable } from '@kernel/decorators/injectable';

import { env } from './env';

@Injectable()
export class AppConfig {
  public readonly auth: AppConfig.Auth;
  public readonly database: AppConfig.Database;

  constructor() {
    this.auth = {
      cognito: {
        clientId: env.COGNITO_CLIENT_ID,
        clientSecret: env.COGNITO_CLIENT_SECRET,
      },
    };

    this.database = {
      dynamodb: {
        mainTable: env.MAIN_TABLE,
      },
    };
  }
}

export namespace AppConfig {
  export type Auth = {
    cognito: {
      clientId: string;
      clientSecret: string;
    }
  }
  export type Database = {
    dynamodb: {
      mainTable: string;
    }
  }
}

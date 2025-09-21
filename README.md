# Foodiary API

A serverless food diary API built with Node.js, TypeScript, and AWS Lambda. This API provides authentication and user management functionality for a food diary application.

## Architecture

The project follows a clean architecture pattern with the following structure:

- **Application Layer**: Controllers, use cases, and business logic
- **Kernel Layer**: Dependency injection, decorators, and shared utilities
- **Main Layer**: AWS Lambda adapters and function handlers
- **Infrastructure**: AWS Cognito for user authentication

### Key Features

- **TypeScript**: Full type safety and modern JavaScript features
- **Serverless Framework**: Easy deployment and AWS resource management
- **Clean Architecture**: Separation of concerns and testable code
- **Dependency Injection**: Automatic dependency resolution using decorators
- **Schema Validation**: Request validation using Zod schemas
- **AWS Cognito**: Secure user authentication and authorization

## API Routes

### Authentication

#### POST /auth/sign-up
Creates a new user account.

**Request Body:**
```json
{
  "account": {
    "email": "user@example.com",
    "password": "yourpassword"
  }
}
```

**Response (201):**
```json
{
  "accessToken": "jwt-access-token",
  "refreshToken": "jwt-refresh-token"
}
```

**Validation Rules:**
- Email must be a valid email address
- Password must be at least 8 characters long

**Error Responses:**
- `400 Bad Request`: Invalid request body or validation errors
- `500 Internal Server Error`: Server-side errors

## Project Structure

```
src/
├── application/          # Business logic layer
│   ├── contracts/       # Interfaces and contracts
│   ├── controllers/     # HTTP request handlers
│   │   └── auth/       # Authentication controllers
│   ├── errors/         # Error definitions
│   └── usecases/       # Business use cases
├── kernel/             # Core utilities and DI
│   ├── decorators/     # Custom decorators
│   └── di/            # Dependency injection
├── main/              # Infrastructure layer
│   ├── adapter/       # Lambda HTTP adapter
│   ├── functions/     # Lambda function handlers
│   └── utils/         # Utility functions
└── shared/            # Shared types and utilities
```

## Technology Stack

- **Runtime**: Node.js 22.x
- **Language**: TypeScript
- **Framework**: Serverless Framework v4
- **Validation**: Zod
- **Authentication**: AWS Cognito
- **Cloud Provider**: AWS (Lambda, API Gateway, Cognito)
- **Bundler**: esbuild
- **Code Quality**: ESLint

## Prerequisites

- Node.js 18+
- AWS CLI configured with appropriate credentials
- Serverless Framework CLI installed globally

```bash
npm install -g serverless
```

## Setup

1. **Install dependencies:**
```bash
npm install
```

2. **Type checking:**
```bash
npm run typecheck
```

## Deployment

Deploy to AWS using the Serverless Framework:

```bash
serverless deploy
```

Deploy to a specific stage:

```bash
serverless deploy --stage production
```

After deployment, you'll see output similar to:

```
Deploying "foodiary-api" to stage "dev" (sa-east-1)

✔ Service deployed to stack foodiary-api-dev (91s)

endpoint: POST - https://xxxxxxxxxx.execute-api.sa-east-1.amazonaws.com/auth/sign-up
functions:
  signUp: foodiary-api-dev-signUp (1.6 kB)
```

## Local Development

For local development and testing:

```bash
serverless dev
```

This starts a local emulator that tunnels requests to AWS Lambda, allowing you to test your functions locally while maintaining cloud integration.

## Testing the API

### Sign Up a New User

```bash
curl -X POST https://your-api-endpoint/auth/sign-up \
  -H "Content-Type: application/json" \
  -d '{
    "account": {
      "email": "user@example.com",
      "password": "mypassword123"
    }
  }'
```

**Expected Response:**
```json
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

## AWS Resources

The application creates the following AWS resources:

- **API Gateway**: HTTP API for handling requests
- **Lambda Functions**: Serverless function handlers
- **Cognito User Pool**: User authentication and management
- **Cognito User Pool Client**: Application client for authentication flows

### Cognito Configuration

- **Authentication Flow**: USER_PASSWORD_AUTH
- **Username Attributes**: Email
- **Password Policy**: Minimum 8 characters
- **Auto Verification**: Email
- **Token Validity**: 12 hours for access tokens

## Development Guidelines

### Adding New Routes

1. Create a controller in `src/application/controllers/`
2. Define the schema in `schemas/` subfolder
3. Implement the use case in `src/application/usecases/`
4. Create the Lambda handler in `src/main/functions/`
5. Add the function configuration to `sls/functions/`

### Error Handling

The API uses standardized error responses:
- Validation errors return detailed field-level error messages
- HTTP errors use custom error codes
- Unexpected errors return generic 500 responses

### Dependency Injection

Controllers and use cases use the `@Injectable()` decorator for automatic dependency injection. The DI container resolves dependencies at runtime.

## Security

- All user data is managed through AWS Cognito
- Passwords are hashed and stored securely
- JWT tokens are used for authentication
- Email verification is enabled by default

## Contributing

1. Follow TypeScript best practices
2. Add proper error handling
3. Write comprehensive tests
4. Update documentation for new features
5. Follow the existing architecture patterns

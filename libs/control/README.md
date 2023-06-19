# Control

A _very_ minimal wrapper around Inversify, until TS 5 supports parameter decorators. Following that, I plan to build my own.

## Installation

You can install Control using whicher package manager you prefer:

```bash
npm install @forgejs/control
```

```bash
yarn add @forgejs/control
```

## Usage

Control instantiates Inversify's `Container` internally so you don't need to do it yourself.

### Registering a Service

You can create a service by using `registerService`:

```ts
registerService(service: any, kind: "transient" | "request" | "singleton")
```

This uses the internal container to bind your service for you, in the scope you provide. It does not default to transient, and requires you to pick one. At the moment, you can read more about Inversify to know more about these scopes.

### Creating a Custom Decorator

This library provides a method to create a custom decorator which wraps Inversify's `@inject` decorator. This allows a little less repetition when using services over continuous `@inject(someService)`, we can get rid of two repetitive imports and just import our custom decorator.

```ts
// File: log.service.ts
import { createDecorator, injectable } from "@forgejs/control";

export const ILogService = createDecorator<ILogService>("LogService");

export interface ILogService {
  // ...
}

@injectable
export class LogService implements ILogService {
  // ...
}

// File: avatar.controller.ts
import { ILogService } from "./log.service.ts";

class AvatarController {
  constructor(@ILogService private readonly logService: ILogService) {}
}
```

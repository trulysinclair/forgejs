import { inject } from "inversify";

/**
 * A wrapper around Inversify's `@inject` decorator. Used to gracefully inject a dependency into a class.
 *
 * @param identifier The identifier of the dependency to inject, can be a string or a symbol.
 *
 *
 * ```ts
 * import { createDecorator } from '@forgejs/control';
 * import { LogService } from './log-service';
 *
 * const ILogService = createDecorator<ILogService>("LogService");
 *
 * class MyController {
 *  constructor(@ILogService private readonly logService: ILogService) {}
 * }
 *
 * ```
 */
export function createDecorator<T>(
  identifier: string | symbol,
) {
  return inject<T>(identifier);
}

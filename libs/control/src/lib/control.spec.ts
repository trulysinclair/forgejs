import "reflect-metadata";
import { injectable } from "inversify";
import Container from "./container";
import registerService from "./registerService";

@injectable()
class TestService {}

describe("registerService", () => {
  afterEach(() => {
    Container.unbind(TestService);
  });

  it("should register a singleton service", () => {
    registerService(TestService, "singleton");
    
    const instance1 = Container.get(TestService);
    const instance2 = Container.get(TestService);
    
    expect(instance1).toBe(instance2);
  });

  it("should register a transient service", () => {
    registerService(TestService, "transient");
    
    const instance1 = Container.get(TestService);
    const instance2 = Container.get(TestService);
    
    expect(instance1).not.toBe(instance2);
  });

  it("should register a request-scoped service", () => {
    registerService(TestService, "request");

    const instance1 = Container.get(TestService);
    const instance2 = Container.get(TestService);

    expect(instance1).not.toBe(instance2);
  });
});

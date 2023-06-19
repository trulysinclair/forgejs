import Container from "./container";

function registerService<T>(service: new(...args: never[]) => T, kind: "singleton" | "transient" | "request") {
  switch (kind) {
    case "singleton":
      Container.bind<T>(service).to(service).inSingletonScope();
      break;
    case "request":
      Container.bind<T>(service).to(service).inRequestScope();
      break;
    case "transient":
      Container.bind<T>(service).to(service).inTransientScope();
      break;
  }
}

export default registerService;

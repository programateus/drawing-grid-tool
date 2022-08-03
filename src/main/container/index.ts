import { Container } from "inversify";

import { infraDependencies } from "@infra/dependencies";
import { applicationDependencies } from "@application/dependencies";

import { DependencyDictionary } from "./types";

const container = new Container();
const dependencies: DependencyDictionary[] = [
  ...applicationDependencies,
  ...infraDependencies,
];
for (const dependency of dependencies) {
  if (dependency.implementation) {
    container.bind(dependency.token).to(dependency.implementation);
    continue;
  }
  if (dependency.value) {
    container.bind(dependency.token).toConstantValue(dependency.value);
    continue;
  }
}

export default container;

---
sidebar_position: 6
---

### Independent Deployment

Each micro frontend has its own git repository, its own `package.json` file, and its own build tool configuration. As a result, each micro frontend has **an independent build process** and **an independent deploy / CI**. This generally means that each repo has fast build times.

While each micro frontend defines its dependencies in its own package.json, for performance reasons, some dependencies can be shared across multiple apps.

## Better developer experience

### Local Development

Easy local development setup is super important. You only need to clone the main epilot360-root repository to get a local development setup running.

### Overrides

With import-maps, developing an application locally is as simple as setting a local override for your service. You can do this easily with the single-spa Inspector.

### Technology Agnostic

While we expect engineers working on epilot to follow a [set of core principles](https://github.com/epilot-dev/engineering-principles "https://github.com/epilot-dev/engineering-principles") when making decisions, this approach allows each team to be able to choose and evolve their tech stack without having to coordinate with other teams. [single-spa-parcels](https://single-spa.js.org/docs/parcels-overview "https://single-spa.js.org/docs/parcels-overview") are a great way to hide implementation details while providing a neutral interface to others.

https://single-spa.js.org/

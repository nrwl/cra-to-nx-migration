# CRA to Nx Migration

This is a repo showing the result of a CRA app that has been migrated to Nx.

The example `webapp` uses a shared buildable library that can be used by other apps in the workspace.

## Trying it out

```
npx nx test webapp

# Build webapp and all dependencies
npx nx build webapp --withDeps

# Start dev server
npx nx serve webapp
```

Notice that Nx caches computation, so commands will use the cache unless sources have changed.

```
# These should all be cached
npx nx build webapp --withDeps
npx nx test webapp
```

Also check out some cool Nx features like dep-graph, and code generation.

```
# View dependency graph
npx nx dep-graph

# Generate a new shared library
npx nx g lib ui-header --style=css --publishable

# Generate a new (non-CRA) app
npx nx g app other-app
```

## Migrating from CRA to Nx

See [our docs](https://nx.dev/l/r/migration/migration-cra).

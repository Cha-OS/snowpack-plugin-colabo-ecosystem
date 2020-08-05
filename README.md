# Info

Snowpack plugin that lets the Colabo ecosystem work with snowpack toolchain

```sh
# install
npm install
# or
yarn
# Build the template
npm run build
# Publish the template to npm using np
npm run deploy
```

```sh
# for testing
npm link
# go to your 
cd <snowpack-folder>
npm link @colabo/snowpack-plugin-colabo-ecosystem
```

In your test snowpack app add the plugin:

```json
{
  // ...
  "plugins": [
      "@colabo/snowpack-plugin-colabo-ecosystem",
      // ...
  ],
  // ...
}
```
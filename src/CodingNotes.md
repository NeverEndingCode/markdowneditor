# Language Notes

## TypeScript

### Variable Declaration

- Use `const` as default and then change to `let` when you know you'll need to change the variable value. (Also good practice for JavaScript)
- The type can be inferred by the value in the initial declaration, but it is better to declare the type in line for consistency:
> `let [variableName]: [type] = [value]`

<hr/>

# Platform Notes

## PWAs

### Notes
- [There are considerations to make when making a PWA offline-first](https://create-react-app.dev/docs/making-a-progressive-web-app/#offline-first-considerations)
- Testing the offline-first service worker:
    - Locally install Serve: `npm i serve`
    - Build your app: `npm run build`
    - Serve the app locally: `npx serve -s build`
    - Copy the URL into an incognito tab to avoid caching misses

### Resources
- [MDN Intro to PWAs with benefits and other helpful links](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Introduction)
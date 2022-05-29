# React Loading Iframe

Show a skeleton on a loading iframe to smooth over the UX.
Iframes can take a while to respond, and until they do your users see a blank screen.
Using react-loading-iframe you can set a nice skeleton until the src page responds.

Example video:
...

### Usage

```
const Skeleton = () => {
  return <div>Cool loading screen</div>;
};

export const BasicExample = () => {
  return (
    <LoadingIframe
      skeleton={<Skeleton />}
      src="https://google.com"
      className="your-class"
      frameBorder={0}
    />
  );
};
```

Pass a skeleton as prop to LoadingIframe, and it will be rendered until the iframe is ready.

### Props:

LoadingIframe carries over all props from HTML iframes, except `style` as it is used internally.
Additional props:

- `skeleton`: ReactElement. When missing this will throw a console warning as you would be better off using a regular iframe.

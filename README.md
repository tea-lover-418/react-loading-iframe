# React Loading Iframe

Show a skeleton on a loading iframe to smooth over the UX.
Iframes can take a while to respond, and until they do your users see a blank screen.
Using react-loading-iframe you can set a nice skeleton until the src page responds.

https://user-images.githubusercontent.com/16014608/170888262-90c5e4ee-ccb6-46ea-a75d-05cd21b6232b.mov

### Usage

Install with npm or yarn!

```
npm i react-loading-iframe
yarn add react-loading-iframe
```

Include in your project.
Pass a skeleton as prop to LoadingIframe, and it will be rendered until the iframe is ready.

```
import LoadingIframe from 'react-loading-iframe';

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

### Props

LoadingIframe carries over all props from HTML iframes, except `style` as it is used internally.
Additional props:

- `skeleton`: ReactElement. When missing this will throw a console warning as you would be better off using a regular iframe.

### Contributing & Roadmap

Contributions are open.

In the future I'd like to add a functionality where you can search the element tree of an iframe for an element and optionally show a different skeleton if an element is not found. This can be used to overwrite loading screens inside of an iframe. If you have any suggestions or possible implementations please share them!

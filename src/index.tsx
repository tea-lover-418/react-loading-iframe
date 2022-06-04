import * as React from "react";
import {
  Fragment,
  FunctionComponent,
  IframeHTMLAttributes,
  ReactElement,
  useState,
} from "react";

interface Props extends IframeHTMLAttributes<any> {
  /** React element that will be rendered when the iframe is loading. */
  skeleton?: ReactElement;
}

/** An iframe that takes a skeleton as a prop and renders the skeleton until the iframe is ready */
const LoadingIframe: FunctionComponent<Props> = (props) => {
  const { skeleton, className, ...iframeProps } = props;
  const [iframeLoading, setIframeLoading] = useState(true);

  if (!skeleton) {
    console.warn(
      "react-loading-iframe: Rendered without skeleton, consider using an html iframe"
    );
  }

  return (
    <Fragment>
      {iframeLoading && skeleton}
      <iframe
        className={className}
        {...iframeProps}
        style={{
          display: iframeLoading ? "none" : "block",
          height: "100%",
          width: "100%",
        }}
        onLoad={() => {
          setIframeLoading(false);
        }}
      />
    </Fragment>
  );
};

export default LoadingIframe;

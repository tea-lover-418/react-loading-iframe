import * as React from "react";
import {
  FunctionComponent,
  IframeHTMLAttributes,
  ReactElement,
  useState,
} from "react";

interface Props extends IframeHTMLAttributes<any> {
  /** React element that will be rendered when the iframe is loading. */
  skeleton?: ReactElement;
}

const LoadingIframe: FunctionComponent<Props> = (props) => {
  const { skeleton, className, ...iframeProps } = props;
  const [iframeLoading, setIframeLoading] = useState(true);

  if (!skeleton) {
    console.warn(
      "react-loading-iframe: Rendered without skeleton, consider using an html iframe"
    );
  }

  return (
    <div className={className}>
      {iframeLoading && skeleton}
      <iframe
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
    </div>
  );
};

export default LoadingIframe;

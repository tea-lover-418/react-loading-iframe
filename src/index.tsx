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
  const { skeleton, className } = props;
  const [iframeLoading, setIframeLoading] = useState(true);

  if (!skeleton) {
    console.warn(
      "react-loading-iframe: Rendered without skeleton, consider using a html iframe"
    );
  }

  return (
    <div className={className}>
      {iframeLoading && skeleton}
      <iframe
        {...props}
        className={`${iframeLoading && "hidden"} inherit w-full h-full`}
        onLoad={() => {
          setIframeLoading(false);
        }}
      />
    </div>
  );
};

export default LoadingIframe;

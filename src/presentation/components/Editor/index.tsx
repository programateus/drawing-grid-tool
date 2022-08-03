/* eslint-disable react/display-name */
/* eslint-disable @next/next/no-img-element */
import { forwardRef, useMemo } from "react";
import {
  TransformWrapper,
  TransformComponent,
  ReactZoomPanPinchRef,
} from "react-zoom-pan-pinch";

import { ImageData } from "@domain/entities/ImageData";

import { RootStyle } from "./styles";

type EditorProps = {
  canvasUrl: string;
};

const Editor = forwardRef<ReactZoomPanPinchRef, EditorProps>(
  ({ canvasUrl }, ref) => {
    return (
      <RootStyle>
        <TransformWrapper centerOnInit minScale={0.1} maxScale={20} ref={ref}>
          <TransformComponent
            wrapperStyle={{ flex: 1, display: "flex", overflow: "hidden" }}
            contentStyle={{
              width: "100%",
              height: "500px",
              maxHeight: "500px",
            }}
          >
            {canvasUrl && (
              <img
                src={canvasUrl}
                alt=""
                width="100%"
                height="100%"
                style={{ objectFit: "contain" }}
              />
            )}
          </TransformComponent>
        </TransformWrapper>
      </RootStyle>
    );
  }
);

export default Editor;

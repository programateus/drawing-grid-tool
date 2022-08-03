import { useState, useRef, useEffect } from "react";
import { ReactZoomPanPinchRef } from "react-zoom-pan-pinch";
import { Canvas } from "canvas";
import { useFormik } from "formik";
import { Grid } from "@mui/material";
import { v4 as uuid } from "uuid";

import { ImageData } from "@domain/entities/ImageData";
import Page from "@presentation/components/Page";
import Editor from "@presentation/components/Editor";
import Toolbar from "@presentation/components/Toolbar";
import { PAPER_SIZES } from "@presentation/components/Toolbar/constants";
import { mmToCm } from "@presentation/utils/conversion";

import { HomeContainer, RootStyle } from "./styles";
import { HomeScreenProps, ToolbarForm } from "./types";
import { TOOLBAR_FORM_SCHEMA } from "./constants";

const HomeScreen = ({
  imageDataGenerator,
  canvasGenerator,
  canvasImageDrawer,
  canvasGridDrawer,
  fileDownloaderFromDataURL,
}: HomeScreenProps) => {
  const [imageFile, setImageFile] = useState<File | null>(null);
  // Image width and height are in pixels
  const [imageData, setImageData] = useState<ImageData | null>(null);
  const transformerWrapperRef = useRef<ReactZoomPanPinchRef | null>(null);
  const [canvas, setCanvas] = useState<Canvas | null>(null);
  const [canvasUrl, setCanvasUrl] = useState("");
  const formik = useFormik<ToolbarForm>({
    initialValues: {
      paperType: "A4",
      paperWidth: "",
      paperHeight: "",
      gap: "1",
    },
    validationSchema: TOOLBAR_FORM_SCHEMA,
    onSubmit: async (values) => {
      if (!imageData || !canvas) return;
      const { paperWidth, paperHeight, gap } = values;
      const { dimensions } = imageData;
      await canvasImageDrawer.drawImage({
        canvas,
        imageData,
        clearCanvas: true,
      });
      canvasGridDrawer.drawGrid({
        canvas,
        gap: Number(gap),
        imageDimensions: dimensions,
        paperDimensions: {
          width: Number(paperWidth),
          height: Number(paperHeight),
        },
      });
      setCanvasUrl(canvas.toDataURL(imageData.mimeType as any));
    },
  });

  const {
    values: { paperType },
    setFieldValue,
  } = formik;

  useEffect(() => {
    const paper = PAPER_SIZES.find((paper) => paper.value === paperType);
    if (paper) {
      setFieldValue("paperWidth", mmToCm(paper.width).toString());
      setFieldValue("paperHeight", mmToCm(paper.height).toString());
    }
  }, [paperType, setFieldValue]);

  const handleLoadImage = async (file: File) => {
    const data = await imageDataGenerator.getData(file);
    const newCanvas = await canvasGenerator.create(data.dimensions);
    await canvasImageDrawer.drawImage({ canvas: newCanvas, imageData: data });
    transformerWrapperRef.current?.resetTransform();
    setCanvasUrl(newCanvas.toDataURL());
    setImageData(data);
    setImageFile(file);
    setCanvas(newCanvas);
  };

  const handleDownloadImage = () => {
    if (!canvasUrl || !imageData) return;
    fileDownloaderFromDataURL.downloadFromDataURL({
      url: canvasUrl,
      name: `${uuid()}.jpeg`,
    });
  };

  return (
    <Page>
      <RootStyle>
        <HomeContainer>
          <Grid container>
            <Grid item xs={12} md={6} display="flex" padding={2}>
              <Editor ref={transformerWrapperRef} canvasUrl={canvasUrl} />
            </Grid>
            <Grid item xs={12} md={6} display="flex" padding={2}>
              <Toolbar
                formik={formik}
                setImageFile={handleLoadImage}
                handleDownload={handleDownloadImage}
                canvasUrl={canvasUrl}
              />
            </Grid>
          </Grid>
        </HomeContainer>
      </RootStyle>
    </Page>
  );
};

export default HomeScreen;

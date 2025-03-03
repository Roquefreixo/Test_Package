import { init as csRenderInit } from '@cornerstonejs/core';
import { init as csToolsInit } from '@cornerstonejs/tools';
import initCornerstoneDICOMImageLoader from './initImageLoader';
import initVolumeLoader from './initVolumeloader';

export default async function initCornerstone() {
  initCornerstoneDICOMImageLoader();
  initVolumeLoader();
  await csRenderInit();
  await csToolsInit();
}
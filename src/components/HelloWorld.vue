<template>
  <div id="controls-container">
    <a id="toolbox"></a>
    <div id="button-showall-container" class="tooltip-container">
      <button id="show_all" type="button" class="styled-button">
        <img src="@/assets/showall_icon.png" alt="Clickable Image" style="width: 35px; height: 20px;">
      </button> 
      <span id="tooltip-showall" class="tooltip"></span>
    </div>

      <div id="button-delete-container" class="tooltip-container">
        <button id="delete" type="button" class="styled-button2">
          <img src="@/assets/delete_icon.png" alt="Clickable Image" class="white-image" style="width: 15px; height: 15px;">
        </button> 
        <span id="tooltip-delete" class="tooltip"></span>
      </div>

      <div id="frame-slider-container" ref="sliderContainer">
        <button id="prev" type="button" class="arrow-button">&lt;</button> 
        <input
          type="range"
          id="frame-slider"
          :min="0"
          :max="maxFrames"
          v-model="currentFrame"
          @input="onFrameSliderChange"
        />
        <button id="next" type="button" class="arrow-button">&gt;</button> 
        <span id="frame-info">Frame: {{ currentFrame }} / {{ maxFrames }}</span>
        <input type="text" id="frame" >

        <div id="button-goFrame-container" class="tooltip-container">
          <button id="go" type="button" class="styled-button1">
            <img src="@/assets/arrow_icon.png" alt="Clickable Image" class="white-image" style="width: 15px; height: 15px;">
          </button> 
          <span id="tooltip-goFrame" class="tooltip"></span>
        </div>

      </div>

      <div id="button-save-container" class="tooltip-container">
        <button id="saveAnnotations" type="button" class="styled-button1">
          <img src="@/assets/save_icon.png" alt="Clickable Image" class="white-image" style="width: 15px; height: 15px;">
        </button> 
        <span id="tooltip-save" class="tooltip"></span>
      </div>

      <div id="button-download-container" class="tooltip-container">
        <button id="loadAnnotations" type="button" class="styled-button1">
          <img src="@/assets/download_icon.png" alt="Clickable Image" class="white-image" style="width: 15px; height: 15px;">
        </button>
        <span id="tooltip-download" class="tooltip"></span>
      </div>

      <button id="loadNewLiver" type="button" >Cargar nuevo higado</button>           
      <div id="versionDropdownContainer"></div>


  </div>
  <div id="content" ></div>
</template>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#content {
  width: 100%; /* Ajusta el ancho al contenedor padre */
  height: 100%; /* Ajusta la altura */
  max-width: 90vw; /* Ocupa el 90% del ancho de la ventana */
  max-height: 90vh; /* Ocupa el 90% de la altura de la ventana */
  margin: auto; /* Centrado */
  overflow: auto; /* Permite scroll interno si excede el tamaño */
  background-color: #000; /* Color de fondo para diferenciar */
  display: flex; /* Usa Flexbox para centrar contenido */
  justify-content: center;
  align-items: center;
  border: 1px solid #ccc; /* Borde para visualizar el límite */
}
h3 {
margin: 40px 0 0;
}
ul {
list-style-type: none;
padding: 0;
}
li {
display: inline-block;
margin: 0 10px;
}
a {
margin-left: 10px;
margin-right: 10px;
}
input {
text-align: right;
}

#controls-container {
  display: flex; /* Poner los elementos en una fila */
  gap: 15px; /* Espacio entre los elementos */
  flex-wrap: wrap; /* Ajustar elementos si el espacio es pequeño */
  margin: 0;
}

#frame-slider-container {
  display: flex; /* Hacer que los elementos se dispongan en una fila */
  align-items: center; /* Centrar verticalmente */
  gap: 10px; /* Espacio entre los elementos */
}
#frame-slider {
  width: 50%; /* Ocupa el 80% del contenedor */
  height: 10px;
}
.arrow-button {
  background-color: transparent; /* Fondo transparente */
  border: none; /* Sin borde */
  font-size: 24px; /* Tamaño de la flecha */
  color: #007bff; /* Azul similar al slider */
  cursor: pointer; /* Cambiar el cursor a mano */
  padding: 0 10px; /* Espaciado alrededor de la flecha */
  display: flex; /* Para alinear verticalmente */
  align-items: center;
}
.arrow-button:hover {
  color: #0056b3; /* Azul más oscuro al pasar el mouse */
}


/* Estilo del tooltip */
/* Contenedor para el botón */
.tooltip-container {
  position: relative; /* Permite posicionar el tooltip relativo al contenedor */
  display: inline-block;
}

/* Tooltip personalizado */
.tooltip {
  position: absolute;
  bottom: 120%; /* Coloca el tooltip encima del botón */
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.8); /* Fondo oscuro */
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 14px;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.2s ease-in-out;
  z-index: 1000;
}

.tooltip.active {
  opacity: 1;
  visibility: visible;
}

/* Botón estilizado */
.styled-button1 {
  background-color: #efefef; /* Color de fondo */
  border: 1px solid #ccc;   /* Borde */
  border-radius: 5px;       /* Bordes redondeados */
  padding: 10px;            /* Espaciado interno */
  cursor: pointer;          /* Cambiar el cursor a mano */
  display: inline-flex;     /* Para alinear la imagen dentro del botón */
  align-items: center;      /* Centrar verticalmente */
  justify-content: center;  /* Centrar horizontalmente */
  transition: background-color 0.3s ease; /* Transición para hover */
}

/* Cambiar el color de fondo al pasar el ratón */
.styled-button1:hover {
  background-color: #efefefaa; /* Color de fondo al pasar el ratón */
}


.styled-button1 {
  background-color: #007bff; /* Color de fondo */
  border: 1px solid #ccc;   /* Borde */
  border-radius: 5px;       /* Bordes redondeados */
  padding: 10px;            /* Espaciado interno */
  cursor: pointer;          /* Cambiar el cursor a mano */
  display: inline-flex;     /* Para alinear la imagen dentro del botón */
  align-items: center;      /* Centrar verticalmente */
  justify-content: center;  /* Centrar horizontalmente */
  transition: background-color 0.3s ease; /* Transición para hover */
}

/* Cambiar el color de fondo al pasar el ratón */
.styled-button1:hover {
  background-color: #0056b3; /* Color de fondo al pasar el ratón */
}

.styled-button2 {
  background-color: #ff4949; /* Color de fondo */
  border: 1px solid #ccc;   /* Borde */
  border-radius: 5px;       /* Bordes redondeados */
  padding: 10px;            /* Espaciado interno */
  cursor: pointer;          /* Cambiar el cursor a mano */
  display: inline-flex;     /* Para alinear la imagen dentro del botón */
  align-items: center;      /* Centrar verticalmente */
  justify-content: center;  /* Centrar horizontalmente */
  transition: background-color 0.3s ease; /* Transición para hover */
}

/* Cambiar el color de fondo al pasar el ratón */
.styled-button2:hover {
  background-color: #ff4949aa; /* Color de fondo al pasar el ratón */
}

.white-image {
  filter: invert(1) brightness(2);
}
</style>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      maxFrames: 0, // Total de frames disponibles
      currentFrame: 0, // Frame actual
    };
  },
  methods: {
    /*onFrameSliderChange(newValue) {
      console.log('Valor actual', this.currentFrame);
      const input = document.getElementById('frame');

      const del = this.currentFrame - input.value; 
      //- utilities.getVolumeViewportScrollInfo(viewAX, volumeId, false).currentStepIndex;
      cornerstoneTools.utilities.scroll(viewAX, {delta:del});
      input.value = this.currentFrame;
      // Puedes realizar alguna acción adicional aquí
    }*/
  },
  mounted() {
    run.bind(this)();
  }
}

import {
  Enums,
  RenderingEngine,
  setVolumesForViewports,
  volumeLoader,
  eventTarget,
  utilities,
} from '@cornerstonejs/core';

import initCornerstone from "./initCornerstone";

import cornerstoneDICOMImageLoader from '@cornerstonejs/dicom-image-loader';

import * as cornerstoneTools from '@cornerstonejs/tools';

const {
ToolGroupManager,
PanTool,
StackScrollMouseWheelTool,
CrosshairsTool,
ZoomTool,
PlanarFreehandROITool,
RectangleROITool,
ArrowAnnotateTool,
SculptorTool,
Enums: csToolsEnums,
} = cornerstoneTools;

const { MouseBindings } = csToolsEnums;

const { ViewportType } = Enums;


const segmentMap = new Map([
  ['Liver', 1],
  ['Aorta', 2],
  ['IVC', 3],
]);

//const segmentIndexes = [1, 2, 3];
const groupLiver = new cornerstoneTools.annotation.AnnotationGroup();
const groupAorta = new cornerstoneTools.annotation.AnnotationGroup();
const groupIVC = new cornerstoneTools.annotation.AnnotationGroup();

var annotations = [groupLiver, groupAorta, groupIVC];
let activeSegmentIndex = 1;
let all = false;
let volLoaded = false;

const styleLiver = {
color: 'rgb(255, 100, 100)',            // Rosa claro
colorSelected: 'rgb(255, 0, 0)',
colorHighlighted: 'rgb(255, 255, 255)',
};

const styleAorta = {
color: 'rgb(100, 100, 255)',            // Azul claro
colorSelected: 'rgb(0, 0, 255)',
colorHighlighted: 'rgb(255, 255, 255)',
};

const styleIVC = {
  color: 'rgb(255, 255, 100)',            // Amarillo claro
  colorSelected: 'rgb(255, 255, 0)',      // Amarillo puro
  colorHighlighted: 'rgb(255, 255, 255)', // Blanco
  };

const styles = [styleLiver, styleAorta, styleIVC];

function updateActiveAnnotation(){
if (all) {
  for (let i=0; i<annotations.length;i++){
    annotations[i].setVisible(true, null);
  }
} else {
  for (let i=0; i<annotations.length;i++){
    annotations[i].setVisible(false, null);
  }
  annotations[activeSegmentIndex-1].setVisible(true, null);
}
}
const cancelDrawingEventListener = (evt) => {
  const { element, key } = evt.detail;
  if (key === 'Escape') {
    cornerstoneTools.cancelActiveManipulations(element);
  }
  if (key === 'Backspace') {
    var an = cornerstoneTools.annotation.state.getAnnotation(cornerstoneTools.annotation.selection.getAnnotationsSelected()[0]);
    for (let i=0; i<annotations.length;i++){
      annotations[i].remove(an.annotationUID);
    }
    cornerstoneTools.annotation.state.removeAnnotation(cornerstoneTools.annotation.selection.getAnnotationsSelected()[0]);
  }
};

const cancelDrawingEvent = (evt) => {
  const { element} = evt.detail;
  cornerstoneTools.cancelActiveManipulations(element);
};

export async function run() {
  addDropdownToToolbarMAP({
    labelText: 'Annotation Class ',
    options: {
      map: segmentMap, // Pasar el Map directamente
      defaultValue: 1, // Valor por defecto
    },
    container: document.getElementById('toolbox'),
    onSelectedValueChange: (value, name) => {
      // Lógica cuando el usuario selecciona una opción
      activeSegmentIndex = value;
      console.log(`Segmento Activo: ${value} (${name})`);
  
      // Actualiza las anotaciones visibles
      updateActiveAnnotation();
    },
  });

  const toolsNames = [
    PlanarFreehandROITool.toolName,
    SculptorTool.toolName,
    CrosshairsTool.toolName,
    RectangleROITool.toolName,
    ArrowAnnotateTool.toolName
  ];
  let selectedToolName = toolsNames[0];

  addDropdownToToolbar({
    options: { values: toolsNames, defaultValue: selectedToolName },
    onSelectedValueChange: (newSelectedToolNameAsStringOrNumber) => {
      const newSelectedToolName = String(newSelectedToolNameAsStringOrNumber);
      const toolGroup = ToolGroupManager.getToolGroup(toolGroupId);
  
      // Set the old tool passive
      toolGroup.setToolPassive(selectedToolName);
  
      // Set the new tool active
      toolGroup.setToolActive(newSelectedToolName, {
        bindings: [
          {
            mouseButton: MouseBindings.Primary, // Left Click
          },
        ],
      });
  
      selectedToolName = newSelectedToolName;
    },
  });

    //Set up show all layers button
    const buttonShowAllContainer = document.getElementById('button-showall-container');
  const buttonshow = buttonShowAllContainer.querySelector('#show_all');
  const tooltipShowAllButton = buttonShowAllContainer.querySelector('#tooltip-showall'); 

  buttonshow.onclick = () => {
    all = !all;
    updateActiveAnnotation();
  };

  tooltipShowAllButton.textContent = 'Mostrar clase seleccionada o mostrar todas las clases de anotaciones.';

  let tooltipTimeout_showAll;
  // Mostrar el tooltip después de 2 segundos
  buttonShowAllContainer.addEventListener('mouseover', () => {
    tooltipTimeout_showAll = setTimeout(() => {
      tooltipShowAllButton.classList.add('active'); // Mostrar el tooltip
    }, 1250); //1,25 sseg
  });

  // Ocultar el tooltip cuando el cursor se mueva fuera del botón
  buttonShowAllContainer.addEventListener('mouseout', () => {
    clearTimeout(tooltipTimeout_showAll); // Cancela el temporizador
    tooltipShowAllButton.classList.remove('active'); // Oculta el tooltip
  });

  //Set up delete button
  // Seleccionar el contenedor del botón
  const buttonDeleteContainer = document.getElementById('button-delete-container');
  const buttondel = buttonDeleteContainer.querySelector('#delete');
  const tooltipDeleteButton = buttonDeleteContainer.querySelector('#tooltip-delete'); 

  // Configurar la acción del botón
  buttondel.onclick = () => {
    var an = cornerstoneTools.annotation.state.getAnnotation(cornerstoneTools.annotation.selection.getAnnotationsSelected()[0]);
    for (let i = 0; i < annotations.length; i++) {
      annotations[i].remove(an.annotationUID);
    }
    cornerstoneTools.annotation.state.removeAnnotation(cornerstoneTools.annotation.selection.getAnnotationsSelected()[0]);
  };


  tooltipDeleteButton.textContent = 'Seleccione una anotación. Luego haga click en este botón.';

  let tooltipTimeout_delete;
  // Mostrar el tooltip después de 2 segundos
  buttonDeleteContainer.addEventListener('mouseover', () => {
    tooltipTimeout_delete = setTimeout(() => {
      tooltipDeleteButton.classList.add('active'); // Mostrar el tooltip
    }, 1250); //1,25 sseg
  });

  // Ocultar el tooltip cuando el cursor se mueva fuera del botón
  buttonDeleteContainer.addEventListener('mouseout', () => {
    clearTimeout(tooltipTimeout_delete); // Cancela el temporizador
    tooltipDeleteButton.classList.remove('active'); // Oculta el tooltip
  });

  //Initiate Cornerstone
  await initCornerstone();

    //Create ImageIds and cache metadata
  //var a = "1.3.6.1.4.1.14519.5.2.1.7009.2403.334240657131972136850343327463";
  //var b = "1.3.6.1.4.1.14519.5.2.1.7009.2403.226151125820845824875394858561";
  //var c = "https://d3t6nz73ql33tx.cloudfront.net/dicomweb";
  //var a = "1";
  //var b = "1";
  //var c = "http://127.0.0.1:5007";
  //var imageIds = await createImageIds({StudyInstanceUID: a, SeriesInstanceUID: b, wadoRsRoot: c});
  var imageIds = await createImageIdsRoque();

  const volumeId = 'cornerstoneStreamingImageVolume: myVolume';
  const volume = await volumeLoader.createAndCacheVolume(volumeId, {imageIds});

  const toolGroupId = '1_TOOL_GROUP_ID';

  cornerstoneTools.addTool(StackScrollMouseWheelTool);
  cornerstoneTools.addTool(CrosshairsTool);
  cornerstoneTools.addTool(PanTool);
  cornerstoneTools.addTool(ZoomTool);
  cornerstoneTools.addTool(SculptorTool);
  cornerstoneTools.addTool(PlanarFreehandROITool);
  cornerstoneTools.addTool(RectangleROITool);
  cornerstoneTools.addTool(ArrowAnnotateTool);



  var toolGroup = ToolGroupManager.createToolGroup(toolGroupId);
  toolGroup.addTool(StackScrollMouseWheelTool.toolName);
  toolGroup.addTool(PanTool.toolName, { volumeId });
  toolGroup.addTool(ZoomTool.toolName, { volumeId });
  toolGroup.addTool(SculptorTool.toolName);
  toolGroup.addTool(PlanarFreehandROITool.toolName, { volumeId });
  toolGroup.addTool(RectangleROITool.toolName, { volumeId });
  toolGroup.addTool(ArrowAnnotateTool.toolName, { volumeId });

  toolGroup.setToolActive(PlanarFreehandROITool.toolName, {
    bindings: [
    {
      mouseButton: MouseBindings.Primary, // Left Click
    },
    ],
  });


  toolGroup.setToolActive(StackScrollMouseWheelTool.toolName);
  toolGroup.setToolActive(RectangleROITool.toolName);
  toolGroup.setToolActive(ArrowAnnotateTool.toolName);

  toolGroup.setToolActive(PanTool.toolName, {
    bindings: [
      {
        mouseButton: MouseBindings.Auxiliary, // Middle Click
      },
    ],
  });

  toolGroup.setToolActive(ZoomTool.toolName, {
    bindings: [
      {
        mouseButton: MouseBindings.Secondary, // Right Click
      },
    ],
  });


  //EVENTO POR EL QUE ENTRA LA ANOTACION
  const auxprint = (event) => {
    //alert("1");
    console.log("TODAS LAS ANOTACIONES ACTIVAS:");

    cornerstoneTools.annotation.config.style.setAnnotationStyles(event.detail.annotation.annotationUID, styles[activeSegmentIndex-1]);
    //console.table(event.detail.annotation);

    annotations[activeSegmentIndex-1].add(event.detail.annotation.annotationUID);
    console.log(cornerstoneTools.annotation.state.getAnnotationManager().getAnnotations(volume.metadata.FrameOfReferenceUID));

  };

  eventTarget.addEventListener(
    csToolsEnums.Events.ANNOTATION_COMPLETED,
    auxprint
  );

  //Create html elements for viewports
  const content = document.getElementById('content');

  const viewportGrid = document.createElement('div');
  viewportGrid.style.display = 'flex';
  viewportGrid.style.flexDirection = 'row';

  const viewportGrid2 = document.createElement('div');
  viewportGrid2.style.display = 'flex';
  viewportGrid2.style.flexDirection = 'column';


  //Axial view
  const elementAX = document.createElement('div');
  elementAX.oncontextmenu = () => false;
  elementAX.style.width = '60vw';
  elementAX.style.height = '60vw';
  elementAX.style.border = '2px solid red'; // Añade el borde rojo

  elementAX.addEventListener(
    csToolsEnums.Events.KEY_DOWN,
    cancelDrawingEventListener
  );

    //Sagittal view
    const elementSA = document.createElement('div');
  elementSA.oncontextmenu = () => false;
  elementSA.style.width = '30vw';
  elementSA.style.height = '30vw';

  elementSA.addEventListener(
    csToolsEnums.Events.MOUSE_CLICK,
    cancelDrawingEvent
  );
  elementSA.addEventListener(
    csToolsEnums.Events.MOUSE_UP,
    cancelDrawingEvent
  );
  elementSA.addEventListener(
    csToolsEnums.Events.MOUSE_DOWN,
    cancelDrawingEvent
  );



  //Coronal view
  const elementCO = document.createElement('div');
  elementCO.oncontextmenu = () => false;
  elementCO.style.width = '30vw';
  elementCO.style.height = '30vw';

  elementCO.addEventListener(
    csToolsEnums.Events.MOUSE_CLICK,
    cancelDrawingEvent
  );
  elementCO.addEventListener(
    csToolsEnums.Events.MOUSE_UP,
    cancelDrawingEvent
  );
  elementCO.addEventListener(
    csToolsEnums.Events.MOUSE_DOWN,
    cancelDrawingEvent
  );

  viewportGrid.appendChild(elementAX);
  viewportGrid2.appendChild(elementSA);
  viewportGrid2.appendChild(elementCO);

  viewportGrid.appendChild(viewportGrid2);

  content.appendChild(viewportGrid);


  const renderingEngineId = 'myRenderingEngine';
  const renderingEngine = new RenderingEngine(renderingEngineId);



  const viewportIdAX = 'CT_AXIAL';
  const viewportIdSA = 'CT_SAGITTAL';
  const viewportIdCO = 'CT_CORONAL';

  const viewportColors = {
    [viewportIdAX]: 'rgb(200, 0, 0)',
    [viewportIdSA]: 'rgb(200, 200, 0)',
    [viewportIdCO]: 'rgb(0, 200, 0)',
  };

  const viewportInput = [
      {
          viewportId: viewportIdAX,
          element: elementAX,
          type: ViewportType.ORTHOGRAPHIC,
          defaultOptions: {
              orientation: Enums.OrientationAxis.AXIAL,
          },
      },
      {
          viewportId: viewportIdSA,
          element: elementSA,
          type: ViewportType.ORTHOGRAPHIC,
          defaultOptions: {
              orientation: Enums.OrientationAxis.SAGITTAL,
          },
      },
      {
          viewportId: viewportIdCO,
          element: elementCO,
          type: ViewportType.ORTHOGRAPHIC,
          defaultOptions: {
            orientation: Enums.OrientationAxis.CORONAL,
          },
        },
  ];

  renderingEngine.setViewports(viewportInput);
  const viewAX = renderingEngine.getViewport(viewportIdAX);

  // Set the tool group on the viewports
  toolGroup.addViewport(viewportIdAX, renderingEngineId);
  toolGroup.addViewport(viewportIdCO, renderingEngineId);
  toolGroup.addViewport(viewportIdSA, renderingEngineId);

  volume.load();

  setVolumesForViewports(
      renderingEngine,
      [{ volumeId }],
      [viewportIdAX, viewportIdSA, viewportIdCO]
  ).then(function() {volLoaded = true;});

  const input = document.getElementById('frame');
  const buttonprev = document.getElementById('prev');

  buttonprev.onclick = () => {
    cornerstoneTools.utilities.scroll(viewAX, {delta:-1});
  };

  const buttonnext = document.getElementById('next');

  buttonnext.onclick = () => {
    cornerstoneTools.utilities.scroll(viewAX, {delta:1});
  };

    //Set up Go to frame button
  // Seleccionar el contenedor del botón
  const buttonGoFrameContainer = document.getElementById('button-goFrame-container');
  const buttonGo = buttonGoFrameContainer.querySelector('#go');
  const tooltipGoFrameButton = buttonGoFrameContainer.querySelector('#tooltip-goFrame'); 

  buttonGo.onclick = () => {
    console.log("click go");
    const del = input.value - utilities.getVolumeViewportScrollInfo(viewAX, volumeId, false).currentStepIndex;
    cornerstoneTools.utilities.scroll(viewAX, {delta:del});
  };

  tooltipGoFrameButton.textContent = 'Ir al frame deseado.';

  let tooltipTimeout_goFrame;
  // Mostrar el tooltip después de 2 segundos
  buttonGoFrameContainer.addEventListener('mouseover', () => {
    console.log("eo");
    tooltipTimeout_goFrame = setTimeout(() => {
      tooltipGoFrameButton.classList.add('active'); // Mostrar el tooltip
    }, 1250); //1,25 sseg
  });

  // Ocultar el tooltip cuando el cursor se mueva fuera del botón
  buttonGoFrameContainer.addEventListener('mouseout', () => {
    clearTimeout(tooltipTimeout_goFrame); // Cancela el temporizador
    tooltipGoFrameButton.classList.remove('active'); // Oculta el tooltip
  });


  //Set up save annotattion button
  const buttonSaveAnotContainer = document.getElementById('button-save-container');
  const buttonSaveAnot = buttonSaveAnotContainer.querySelector('#saveAnnotations');
  const tooltipSaveAnotButton = buttonSaveAnotContainer.querySelector('#tooltip-save'); 

  buttonSaveAnot.onclick = () => {
    //console.log(viewAX.getFrameOfReferenceUID());
    //anot = cornerstoneTools.annotation.state.getAnnotationManager().saveAnnotations(viewAX.getFrameOfReferenceUID(), 'LinearSplineROI');
    //console.log(anot);
    //console.log(annotations[0].annotationUIDs);
    saveData(viewAX);
  };

  tooltipSaveAnotButton.textContent = 'Guardar anotaciones.';

  let tooltipTimeout_saveAnot;
  // Mostrar el tooltip después de 2 segundos
  buttonSaveAnotContainer.addEventListener('mouseover', () => {
    tooltipTimeout_saveAnot = setTimeout(() => {
      tooltipSaveAnotButton.classList.add('active'); // Mostrar el tooltip
    }, 1250); //1,25 sseg
  });

  // Ocultar el tooltip cuando el cursor se mueva fuera del botón
  buttonSaveAnotContainer.addEventListener('mouseout', () => {
    clearTimeout(tooltipTimeout_saveAnot); // Cancela el temporizador
    tooltipSaveAnotButton.classList.remove('active'); // Oculta el tooltip
  });



  //Set up load annotattion button
  const buttonLoadAnotContainer = document.getElementById('button-download-container');
  const buttonLoadAnot = buttonLoadAnotContainer.querySelector('#loadAnnotations');
  const tooltipLoadAnotButton = buttonLoadAnotContainer.querySelector('#tooltip-download'); 

  buttonLoadAnot.onclick = () => {
    //cornerstoneTools.annotation.state.getAnnotationManager().restoreAnnotations(anot, "1.3.46.670589.33.1.63756929816897229800002.5531152240649774280", 'LinearSplineROI');
    loadData(viewAX);
    //getAnalizedAnnotations(viewAX, volume, createNewsAnnotations);
  };

  tooltipLoadAnotButton.textContent = 'Cargar anotaciones.';

  let tooltipTimeout_LoadAnot;
  // Mostrar el tooltip después de 2 segundos
  buttonLoadAnotContainer.addEventListener('mouseover', () => {
    tooltipTimeout_LoadAnot = setTimeout(() => {
      tooltipLoadAnotButton.classList.add('active'); // Mostrar el tooltip
    }, 1250); //1,25 sseg
  });

  // Ocultar el tooltip cuando el cursor se mueva fuera del botón
  buttonLoadAnotContainer.addEventListener('mouseout', () => {
    clearTimeout(tooltipTimeout_LoadAnot); // Cancela el temporizador
    tooltipLoadAnotButton.classList.remove('active'); // Oculta el tooltip
  });




  const buttonNewLiver = document.getElementById('loadNewLiver');

  buttonNewLiver.onclick = () => {
    //cornerstoneTools.annotation.state.getAnnotationManager().restoreAnnotations(anot, "1.3.46.670589.33.1.63756929816897229800002.5531152240649774280", 'LinearSplineROI');
    //loadData(viewAX, volume);
    getAnalizedAnnotations(viewAX, volume, createNewsAnnotations);
  };

  const updateInput = () => {
    const scrollInfo = utilities.getVolumeViewportScrollInfo(viewAX, volumeId, false);
    //");
    //console.log(scrollInfo);
    //console.log(this.maxFrames);
  //const scrollInfo = utilities.getVolumeViewportScrollInfo(viewAX, volumeId, false);
  //const currentSliceIndex = scrollInfo.currentStepIndex;
    if (scrollInfo.currentStepIndex < 0) {
      cornerstoneTools.utilities.scroll(viewAX, {delta:-1});
    }
    else if (scrollInfo.currentStepIndex > scrollInfo.numScrollSteps){
      cornerstoneTools.utilities.scroll(viewAX, {delta:1});
    }
    //const slider = document.getElementById('frame-slider-container');
    //const frameInfo = document.getElementById('frame-info');
/*
    maxFrames = scrollInfo.numScrollSteps - 1;
    currentFrame = scrollInfo.currentStepIndex;
    //cornerstoneTools.utilities.scroll(viewAX, {delta:0});

    //frameInfo.textContent = `Frame: ${scrollInfo.currentStepIndex} / ${scrollInfo.numScrollSteps - 1}`;

    input.value = utilities.getVolumeViewportScrollInfo(viewAX, volumeId, false).currentStepIndex;
      // Forzar un redibujado
    //slider.dispatchEvent(new Event('input'));
    this.$nextTick(() => {
      const slider = document.getElementById('frame-slider-container');
      slider.value = this.currentFrame; // Asegúrate de que el slider refleje el valor actualizado
      slider.dispatchEvent(new Event('input')); // Simula un evento de entrada

    });*/
  }

  elementAX.addEventListener(
    Enums.Events.CAMERA_MODIFIED,
    updateInput.bind(this)
  );

    /*
  const slider = this.$refs.sliderContainer.querySelector('#frame-slider');

  const onFrameSliderChange = () => {
    console.log('Valor actual:', this.currentFrame);

    const del = this.currentFrame - input.value;
    cornerstoneTools.utilities.scroll(viewAX, { delta: del });
    input.value = this.currentFrame;
  };
  
  slider.addEventListener('input', onFrameSliderChange);*/

    // Escuchar cuando CornerstoneJS renderice una imagen
    elementAX.addEventListener('cornerstoneimagerendered', () => {
    const canvas = elementAX.querySelector('canvas');
    if (canvas) {
      canvas.style.border = '2px solid red'; // Aplica el borde rojo al canvas de la imagen
    }
    
    //Configure slider
    const frameSlider = document.getElementById('frame-slider');
    const scrollInfo = utilities.getVolumeViewportScrollInfo(viewAX, volumeId, false);

    console.log("MAX FRAMES: ");
    console.log("CURRENT FRAME: ", scrollInfo.currentStepIndex);

    frameSlider.maxFrames = scrollInfo.numScrollSteps - 1; // Actualiza el número máximo de frames
    frameSlider.currentFrame = scrollInfo.currentStepIndex; // Sincroniza el frame actual con el slider
    
  });

  const outOfBonds = (evt) => {
    if (volLoaded) {
      const view = renderingEngine.getViewport(evt.detail.viewportId)
      const scrollInfo = utilities.getVolumeViewportScrollInfo(view, volumeId, false);
      if (scrollInfo.currentStepIndex < 0) {
        cornerstoneTools.utilities.scroll(view, {delta:-1});
      }
      else if (scrollInfo.currentStepIndex > scrollInfo.numScrollSteps){
        cornerstoneTools.utilities.scroll(view, {delta:1});
      }
    }
  };

  elementCO.addEventListener(
    Enums.Events.CAMERA_MODIFIED,
    outOfBonds
  );
  elementSA.addEventListener(
    Enums.Events.CAMERA_MODIFIED,
    outOfBonds
  );

  //Conseguimos el numero de versiones
  fetchNumberOfVersions(viewAX, volume.metadata.FrameOfReferenceUID);
  
  console.log("Anotaciones despues de fetch");
  console.log(cornerstoneTools.annotation.state.getAnnotationManager().getAnnotations(volume.metadata.FrameOfReferenceUID));

  const isMobile = window.matchMedia('(any-pointer:coarse)').matches;

  //let getReferenceLineDraggableRotatable = function() {return false;};

  let getReferenceLineSlabThicknessControlsOn = function() {return false;};

  //let getReferenceLineControllable = function() {return false;};

  function getReferenceLineColor(viewportId) {
    return viewportColors[viewportId];
  }

  toolGroup.addTool(CrosshairsTool.toolName, {
    getReferenceLineColor,
    //getReferenceLineDraggableRotatable,
    getReferenceLineSlabThicknessControlsOn,
    //getReferenceLineControllable,
    mobile: {
      enabled: isMobile,
      opacity: 0.8,
      handleRadius: 9,
    },
  });

  toolGroup.setToolActive(CrosshairsTool.toolName, {
    bindings: [{ mouseButton: MouseBindings.Primary }],
  });

  renderingEngine.renderViewports([viewportIdAX, viewportIdSA, viewportIdCO]);

  if (!volume) {
    console.error('No se pudo obtener el volumen');
    return;
  }

  // Obtén el FrameOfReferenceUID del volumen
  const frameOfReferenceUID = volume.metadata.FrameOfReferenceUID;
  if (!frameOfReferenceUID) {
    console.error('No se pudo obtener el FrameOfReferenceUID');
    return;
  }

  // Crea la anotación
  const annotationManager = cornerstoneTools.annotation.state.getAnnotationManager();
  console.log("ManagerAnotation?:", annotationManager);
  console.log("Frame reference?:", frameOfReferenceUID);


  viewAX.render();

  renderingEngine.renderViewports([viewportIdAX, viewportIdSA, viewportIdCO]);

}

async function createImageIdsRoque() {
  const wadoRsRoot = "http://127.0.0.1:5007/viewer";
  let rmvCode = "RMV2024_CT_0001_ARP+NCT";        
  let bearerToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTc0MTAwMDgyMSwianRpIjoiYWMwMDBkZjMtYTViNS00YjFjLTg3NWItMDljMDZhYzMxYzY4IiwidHlwZSI6ImFjY2VzcyIsInN1YiI6MSwibmJmIjoxNzQxMDAwODIxLCJjc3JmIjoiNGE0ZmM1YWMtNjIxYS00MzZjLWIyYmUtMDNiNDZjMGZkMDE5IiwiZXhwIjoxNzQxMDAxNzIxfQ.706JX6C702dQ_xXJPCjgUR00JDwyMKkNRoQPNvkAVcQ";
  
  const SOP_INSTANCE_UID = '00080018';
  const SERIES_INSTANCE_UID = '0020000E';

  // Paso 1: Llamada HTTP para obtener StudyInstanceUID y SeriesInstanceUID
  let studyInstanceUID;
  let seriesInstanceUID;

  try {
    const url = "http://127.0.0.1:5007/viewer/test_info";

    const response = await fetch(url, {
      method: 'POST', // Cambiado a POST para enviar en el body
      headers: {
        'Authorization': `Bearer ${bearerToken}`, // Token Bearer
        'Content-Type': 'application/x-www-form-urlencoded' // Tipo de contenido
      },
      body: `rmv_code=${encodeURIComponent(rmvCode)}` // Datos codificados en el body
    });

    if (!response.ok) {
      throw new Error(`Error en la llamada a test_info: ${response.statusText}`);
    }

    const data = await response.json();
    studyInstanceUID = data.StudyInstanceUID;
    seriesInstanceUID = data.SeriesInstanceUID;

    console.log(`Obtenido: StudyInstanceUID = ${studyInstanceUID}, SeriesInstanceUID = ${seriesInstanceUID}`);
  } catch (error) {
    console.error('Error al obtener StudyInstanceUID y SeriesInstanceUID:', error);
    throw error; // Detener la ejecución si falla
  }
  
  // Paso 2: Continuar con la lógica original usando los UID obtenidos
  const studySearchOptions = {
    studyInstanceUID: studyInstanceUID,
    seriesInstanceUID: seriesInstanceUID,
  };
  /*
  var client = new api.DICOMwebClient({
    url: wadoRsRoot,
    headers: {
      'Content-Type': 'application/json',
      'rmv_code': rmvCode, // Agregar rmv_code como encabezado personalizado
    },
  });  
  
  let instances = await client.retrieveSeriesMetadata(studySearchOptions);
*/

const url = `${wadoRsRoot}/studies/${studySearchOptions.studyInstanceUID}/series/${studySearchOptions.seriesInstanceUID}/metadata`;

const response = await fetch(url, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'rmv_code': rmvCode, // Agregar el encabezado personalizado aquí
  },
});

if (!response.ok) {
  throw new Error(`Error en la solicitud: ${response.statusText}`);
}

const instances = await response.json();
  console.log("INSTANCES");
  console.log(instances);

  // Paso 3: Generar imageIds
  let imageIds = instances.map((instanceMetaData) => {
    const SeriesInstanceUID = instanceMetaData[SERIES_INSTANCE_UID].Value[0];
    const SOPInstanceUIDToUse = instanceMetaData[SOP_INSTANCE_UID].Value[0];

    //console.log("SeriesInstanceUID:");
    //console.log(SeriesInstanceUID);
    //console.log("SOPInstanceUIDToUse:");
    //console.log(SOPInstanceUIDToUse);   

    const prefix = 'wadors:';

    const imageId =
      prefix +
      wadoRsRoot +
      '/studies/' +
      studyInstanceUID +
      '/series/' +
      SeriesInstanceUID +
      '/instances/' +
      SOPInstanceUIDToUse +
      '/frames/1';

    //console.log(imageId);
    cornerstoneDICOMImageLoader.wadors.metaDataManager.add(
      imageId,
      instanceMetaData
    );
    return imageId;
  });

  return imageIds;
}

function addDropdownToToolbarMAP({
  id,
  options,
  container,
  style,
  labelText,
  onSelectedValueChange,
}) {
  const { map, defaultValue } = options; // Acepta un Map directamente

  container = container ?? document.getElementById('toolbox');

  // Crear la etiqueta si hay texto
  if (labelText) {
    const label = document.createElement('label');
    label.htmlFor = id;
    label.innerText = labelText;
    container.append(label);
  }

  // Crear el elemento select
  const select = document.createElement('select');
  select.id = id;

  if (style) {
    Object.assign(select.style, style);
  }

  // Procesar el Map y crear las opciones
  Array.from(map.entries()).forEach(([key, value]) => {
    const optionElement = document.createElement('option');
    optionElement.value = value; // Asignar el valor del Map
    optionElement.innerText = key; // Asignar el texto del Map
    if (value === defaultValue) {
      optionElement.selected = true; // Seleccionar el valor por defecto
    }
    select.append(optionElement); // Añadir al dropdown
  });

  // Asignar evento al cambiar la selección
  select.onchange = (evt) => {
    const selectElement = evt.target;
    const selectedValue = Number(selectElement.value); // Obtener el valor seleccionado
    const selectedName = Array.from(map.entries()).find(([v]) => v === selectedValue)?.[0]; // Buscar el nombre asociado
    onSelectedValueChange(selectedValue, selectedName); // Pasar valor y nombre al callback
  };

  // Añadir el select al contenedor
  container.append(select);
}





function addDropdownToToolbar({
  id,
  options,
  container,
  style,
  onSelectedValueChange,
  labelText,
}) {
  const {
    map,
    values = [...map.keys()],
    defaultValue,
    defaultIndex = defaultValue === undefined && 0,
  } = options;
  container = container ?? document.getElementById("toolbox");


  // Create label element if labelText is provided
  if (labelText) {
    const label = document.createElement('label');
    label.htmlFor = id;
    label.innerText = labelText;
    container.append(label);
  }

  const select = document.createElement('select');
  select.id = id;

  if (style) {
    Object.assign(select.style, style);
  }

  values.forEach((value, index) => {
    const optionElement = document.createElement('option');
    const stringValue = String(value);
    optionElement.value = stringValue;
    optionElement.innerText = stringValue;
    if (value === defaultValue || index === defaultIndex) {
      optionElement.selected = true;
      if (map) {
        map.get(value).selected = true;
      }
    }
    select.append(optionElement);
  });

  select.onchange = (evt) => {
    const selectElement = evt.target;
    const { value: key } = selectElement;
    if (selectElement) {
      onSelectedValueChange(key, map?.get(key));
    }
  };

  container.append(select);
}

var anot;

function saveData(view) {
  console.log("saveData");
  //get data from cornerstone
  anot = cornerstoneTools.annotation.state.getAnnotationManager().saveAnnotations(view.getFrameOfReferenceUID(), PlanarFreehandROITool.toolName);

  console.log("ANOT:", anot);

  var map = {
    classLiver: Array.from(annotations[0].annotationUIDs), 
    classAorta: Array.from(annotations[1].annotationUIDs), 
    classIVC: Array.from(annotations[2].annotationUIDs)
  };
  //console.log("map:");
  //console.log(map);

  // Asegurarse de que anot esté bien estructurado y que sea un array antes de intentar recorrerlo
  let reducedAnnotations = anot.map(annotation => {
    // Verificar que la anotación tiene 'data' y que contiene 'contour' con 'polyline'
    if (annotation.data && annotation.data.contour && annotation.data.contour.polyline) {
      return {
        annotationUID: annotation.annotationUID,
        data: {
          contour: {
            polyline: annotation.data.contour.polyline // Solo guardamos los puntos de polyline
          }
        }
      };
    }
    // Si no tiene polyline, devolver la anotación original (o podrías devolver null)
    return null;
  }).filter(annotation => annotation !== null); // Filtrar las anotaciones que no tienen polyline


  //anotacionstado = anot;
  //convert into json
  var data = {classes: map, state: reducedAnnotations}
  //console.log("DATA");
  //console.log(data);
  //console.log('PRE JSON');
  //console.log(anot);
  //console.log(JSON.stringify(anot));
  data = JSON.stringify(data, function(_, v) { return v === undefined ? null : v; });
  
  console.log("DATA");
  console.log(data);
  //Tamaño anotacion
  const sizeInBytes = new TextEncoder().encode(JSON.stringify(anot)).length;
  console.log("Tamaño anotacion:", sizeInBytes);

  //send to server
  const Http = new XMLHttpRequest();
  const url = "http://127.0.0.1:5007/annotations/" + view.getFrameOfReferenceUID();
  Http.open('POST', url);
  Http.setRequestHeader('Content-type', 'application/json; charset=UTF-8');

  Http.onloadend = function () {
    console.log("Annotation data saved");
  }

  Http.send(data);
}


function getAnalizedAnnotations(view, volume, callbackFunction){
  const url = "http://127.0.0.1:5007/analized_annotations/";
  fetch(url) // Asegúrate de que el archivo está en el mismo directorio
  .then(response => {
    if (!response.ok) {
      throw new Error(`Error al cargar el archivo JSON: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log("Datos cargados:", data);
    callbackFunction(data, view, volume);
    //document.getElementById('output').textContent = JSON.stringify(data, null, 2);
  })
  .catch(error => {
    console.error("Error:", error);
  });
}

function createNewsAnnotations(datosRecibidos, view, volume) {
  // Iteramos por cada parte principal: Liver, Aorta e IVC
  Object.keys(datosRecibidos).forEach((partName) => {
    const contourPoints = datosRecibidos[partName];
    
    // Ahora iteramos por cada slice del array dentro de la parte
    contourPoints.forEach((slice) => {
      // Crear una anotación para esta slice
      const analizedAnnotation = {
        data: {
          contour: {
            polyline: slice,
            closed: true,   // Para que cierre automáticamente se pone en true
          },
          handles: {
            points: [],
            // textBox: {},
          },
          // cachedStats: {}
        },
        metadata: {
          FrameOfReferenceUID: view.getFrameOfReferenceUID(),
          toolName: "PlanarFreehandROI",
          viewPlaneNormal: [-0, -0, -1],
        }
      }

      // Agregar la anotación y obtener el nuevo UID
      const newAnnotationUID = cornerstoneTools.annotation.state.addAnnotation(analizedAnnotation, view);

      console.log("ANOTACION RESTAURADA ", analizedAnnotation);

      // Agregar la anotación a la lista correspondiente según la parte
      if (partName === "Liver") {
        annotations[0].add(newAnnotationUID);
        cornerstoneTools.annotation.config.style.setAnnotationStyles(newAnnotationUID, styles[0]);
      } else if (partName === "Aorta") {
        annotations[1].add(newAnnotationUID);
        //ble(false, null);  // Hacer invisible la anotación de Aorta
        // Establecer el estilo de la anotación
        cornerstoneTools.annotation.config.style.setAnnotationStyles(newAnnotationUID, styles[1]);
      } else if (partName === "IVC") {
        annotations[2].add(newAnnotationUID);
        //annotations[2].setVisible(false, null);  // Hacer invisible la anotación de IVC
        // Establecer el estilo de la anotación
        cornerstoneTools.annotation.config.style.setAnnotationStyles(newAnnotationUID, styles[2]);
      }
    });
  });

  // Mostrar las anotaciones después de haberlas creado
  console.log("Anotaciones después de createNewsAnnotations:");
  console.log(cornerstoneTools.annotation.state.getAnnotationManager().getAnnotations(volume.metadata.FrameOfReferenceUID));
  console.log("SALI DE LEER ANOTACIONESSS");
}


function loadData(view) {
  // Request from server
  const Http = new XMLHttpRequest();
  const url = "http://127.0.0.1:5007/annotations/" + view.getFrameOfReferenceUID();
  Http.open('GET', url);

  Http.onloadend = function () {
    // Parse JSON
    console.log("Annotation data received");
    var data = JSON.parse(Http.response, function(_, v) { return v === null ? undefined : v; });
    console.log('POST JSON');
    console.log(data);

    // For each "annotation" received, we create an annotation with the minimal data, restore it, and add it to the corresponding segment
    data.state.forEach((annotation) => {
      // Create the minimal annotation object
      const annotationMinima = {
        annotationUID: annotation.annotationUID,
        data: {
          contour: {
            polyline: annotation.data.contour.polyline,
            closed: true   // Set to true to automatically close the contour
          },
          handles: {
            points: [],
            // textBox:{}, // You can also handle the text box if needed
          },
        },
        metadata: {
          FrameOfReferenceUID: view.getFrameOfReferenceUID(),    
          toolName: PlanarFreehandROITool.toolName,
          viewPlaneNormal: [-0, -0, -1],
        }
      }

      // Restore the annotation
      cornerstoneTools.annotation.state.addAnnotation(annotationMinima, view);
      console.log("Annotation restored ", annotationMinima);

      // Add annotation to the corresponding class
      if (data.classes.classLiver.includes(annotation.annotationUID)) {
        // If it's class1, apply style 0
        cornerstoneTools.annotation.config.style.setAnnotationStyles(annotation.annotationUID, styles[0]);
        annotations[0].add(annotation.annotationUID);
        console.log("Style set for class Liver");
      } else if (data.classes.classAorta.includes(annotation.annotationUID)) {
        // If it's class2, apply style 1
        cornerstoneTools.annotation.config.style.setAnnotationStyles(annotation.annotationUID, styles[1]);
        annotations[1].add(annotation.annotationUID);
        console.log("Style set for class Aorta");
      } else if (data.classes.classIVC.includes(annotation.annotationUID)) {
        // If it's class2, apply style 1
        cornerstoneTools.annotation.config.style.setAnnotationStyles(annotation.annotationUID, styles[2]);
        annotations[2].add(annotation.annotationUID);
        console.log("Style set for class IVC");
      }
    });
  }

  // Send the HTTP request
  Http.send();
}

async function fetchNumberOfVersions(view, framOfReferenceUID) {
  try {
    // Llamar a la API para obtener el número de versiones disponibles
    const response = await fetch(`http://127.0.0.1:5007/annotations/${framOfReferenceUID}/versions`);
    const data = await response.json();

    const numeroVersiones = data.number_of_versions;
    console.log("Número de versiones:", numeroVersiones);

    // Crear el desplegable con el número de versiones
    const dropdownContainer = document.getElementById("versionDropdownContainer");
    dropdownContainer.innerHTML = ''; // Limpiar el contenedor antes de agregar las nuevas opciones

    const select = document.createElement('select');
    select.id = 'versionDropdown';

    // Crear las opciones para el desplegable
    for (let i = 1; i <= numeroVersiones; i++) {
      const option = document.createElement('option');
      option.value = i;
      option.text = `Versión ${i}`;
      select.appendChild(option);
    }

    dropdownContainer.appendChild(select);

    // Agregar un event listener para detectar cuando el usuario selecciona una versión
    select.addEventListener('change', async (event) => {
      const selectedVersion = event.target.value;
      console.log("Versión seleccionada:", selectedVersion);

      // Aquí llamamos a la API para obtener las anotaciones de la versión seleccionada
      try {
        const annotationResponse = await fetch(`http://127.0.0.1:5007/version/${framOfReferenceUID}/${selectedVersion}`);
        const annotationData = await annotationResponse.json();

        // Aquí puedes usar los datos para actualizar las anotaciones visualizadas
        console.log("Anotaciones de la versión seleccionada:", annotationData);
        
        loadAnnotationsFromVersion(view, annotationData);
        console.log(cornerstoneTools.annotation.state.getAnnotationManager().getAnnotations(framOfReferenceUID));

      } catch (error) {
        console.error("Error al cargar las anotaciones de la versión:", error);
      }
    });

  } catch (error) {
    console.error("Error:", error);
  }
}

function loadAnnotationsFromVersion(view, annotationData) {
  console.log("FRAME LAOD");
  console.log(view.getFrameOfReferenceUID());
  try {
    // Limpiar las anotaciones previas
    //cornerstoneTools.annotation.state.removeAnnotations(view.getFrameOfReferenceUID(), PlanarFreehandROITool.toolName);
    ///annotations = null
    removePlanarFreehandROIAnnotations(view);
    //console.log("DESPUES DE BORRAR");

    //console.log(annotations);
    console.log("Annotation data received", annotationData);
    
    // For each "annotation" received, we create an annotation with the minimal data, restore it, and add it to the corresponding segment
    annotationData.state.forEach((annotation) => {
      //console.log("hola");
      // Create the minimal annotation object
      const annotationMinima = {
        annotationUID: annotation.annotationUID,
        data: {
          contour: {
            polyline: annotation.data.contour.polyline,
            closed: true, // Set to true to automatically close the contour
          },
          handles: {
            points: [],
            // textBox:{}, // You can also handle the text box if needed
          },
        },
        metadata: {
          FrameOfReferenceUID: view.getFrameOfReferenceUID(),    
          toolName: PlanarFreehandROITool.toolName,
          viewPlaneNormal: [-0, -0, -1],
        },
      };

      // Restore the annotation
      cornerstoneTools.annotation.state.addAnnotation(annotationMinima, view);
      console.log("Annotation restored", annotationMinima);

      // Add annotation to the corresponding class
      if (annotationData.classes.classLiver.includes(annotation.annotationUID)) {
        // If it's class1, apply style 0
        cornerstoneTools.annotation.config.style.setAnnotationStyles(annotation.annotationUID, styles[0]);
        annotations[0].add(annotation.annotationUID);
        console.log("Style set for class Liver");
      } else if (annotationData.classes.classAorta.includes(annotation.annotationUID)) {
        // If it's class2, apply style 1
        cornerstoneTools.annotation.config.style.setAnnotationStyles(annotation.annotationUID, styles[1]);
        annotations[1].add(annotation.annotationUID);
        console.log("Style set for class Aorta");
      } else if (annotationData.classes.classIVC.includes(annotation.annotationUID)) {
        // If it's class2, apply style 2
        cornerstoneTools.annotation.config.style.setAnnotationStyles(annotation.annotationUID, styles[2]);
        annotations[2].add(annotation.annotationUID);
        console.log("Style set for class IVC");
      }
    });
  } catch (error) {
    console.error("Error loading annotations:", error);
  }

}

function removePlanarFreehandROIAnnotations(view) {
  try {
    const groupKey = view.getFrameOfReferenceUID();
    const annotationManager = cornerstoneTools.annotation.state.getAnnotationManager();

    const annotations = annotationManager.getAnnotations(groupKey);
    console.log("Anotaciones en removePlanarFreehandROIAnnotations");
    console.log(annotations);

    if (annotations && annotations.PlanarFreehandROI) {
      const annotationsToRemove = annotations.PlanarFreehandROI.slice(); // Clonamos el array para evitar problemas al modificar
      
      for (let i = 0; i < annotationsToRemove.length; i++) {
        const annotation = annotationsToRemove[i];
        annotationManager.removeAnnotation(annotation.annotationUID);
        console.log(`Removed annotation with UID: ${annotation.annotationUID}`);
      }
    } else {
      console.log("No PlanarFreehandROI annotations found.");
    }

    console.log("Anotaciones en final removePlanarFreehandROIAnnotations");
    console.log(annotations);
  } catch (error) {
    console.error("Error removing annotations:", error);
  }
}

</script>
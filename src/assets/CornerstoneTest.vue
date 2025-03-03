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

<script>
import { run } from './CornerstoneTest.js';  

export default {
  name: 'CornestoneTest',
  data() {
    return {
      maxFrames: 0,
      currentFrame: 0
    };
  },
  mounted() {
    this.initializeViewer(); // Aquí se inicializa el visor
  },
  methods: {
    initializeViewer() {
      run(); // Este es un método que corre todo el código de inicialización de Cornerstone
    }
  }
};
</script>
<style>
html, body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>

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

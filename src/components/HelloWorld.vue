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

        <button id="next" type="button" class="arrow-button">&gt;</button> 
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
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
  color: #42b983;
}
</style>
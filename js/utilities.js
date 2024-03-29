/*--snippet2u-start*/
"use strict"
/*--snippet2u-end*/
/**
 * Function to redraw all the DIVs if the user has resized the browser window manually
*/
function processWindowResize() {
  console.log("resize");
}

/**
 * Function to hide all the DIVS -  map, graph, rating, 3D globe
*/
function hideAllDivs(){

    // switch all the DIVs off first
    let isMapVisible = $('#mapWrapper').is( ":visible" );
    if (isMapVisible) {
      let mapCollapse = document.getElementById('mapWrapper');
      let bsMapCollapse = new bootstrap.Collapse(mapCollapse, {
          toggle: true
      });
    }


    let isRatingVisible = $('#mapAbilityWrapper').is( ":visible" );
    if (isRatingVisible ){
      let ratingCollapse = document.getElementById('mapAbilityWrapper');
      let rsratingCollapse = new bootstrap.Collapse(ratingCollapse, {
          toggle: true
      });
    }

    let isGraphVisible = $('#assetDataWrapperWrapper').is( ":visible" );
    if (isGraphVisible ){
      let graphCollapse = document.getElementById('assetDataWrapperWrapper');
      let gsGraphCollapse = new bootstrap.Collapse(graphCollapse, {
          toggle: true
      });
    }

    let isCesiumVisible = $('#cesiumWrapper').is( ":visible" );
    if (isCesiumVisible ){
      let cesiumCollapse = document.getElementById('cesiumWrapper');
      let csCesiumCollapse = new bootstrap.Collapse(cesiumCollapse, {
          toggle: true
      });
    }


    // then switch on the required DIV

}

/**
 * Function to show a single div from  map, graph, rating, 3D globe
 * @param divName  name of the DIV to be shown
*/
function showDiv(divName){
  hideAllDivs();
  let visibleDiv = document.getElementById(divName);
  let divCollapse = new bootstrap.Collapse(visibleDiv, {
          toggle: true
  });

}


/*--snippet1u-start*/
/**
* function to load Cesium and Leaflet maps when the page load has completed
* 
*/
// makes sure that the map is only loaded once the page has completely loaded
// i.e. the div for the map must exist before the code tries to load the map
document.addEventListener('DOMContentLoaded', function() {
  console.log("listener domcontentloaded");
  loadMap();
/*--snippet1u-end*/


  loadCesium();
/*--snippet3u-start*/

}, false);
/*--snippet3u-end*/

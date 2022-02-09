// (hard) Mini version de Google Meet. Google meet es una aplicación para la realizacion de videollamadas.. Vamos a crear una versión local de la misma. En la imagen se encuentra un ejemplo de objetivo final. Los pasos para serán los siguientes:
// Debemos generar la siguiente estructura en nuestro documento HTML
// La primera parte será poder visualizar la cámara de nuestra cam. Para ello debemos investigar sobre el uso de la siguiente función del api de Media Devices (https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia). Esta función nos permite meter en un video del HTML el Stream de video de nuestra cam. Nota: Debemos desactivar nuestra cam del zoom para probarla.
// Los botones que vemos en el video debemos pintarlos en HTML, aunque no serán funcionales.
// A continuación vamos a ver que podemos hacer con el botón Join Video. En este caso vamos a aprender posicionar por encima de cualquier aplicación un video y poder irnos a otras aplicaciones mientras ese video se mantiene flotante. A esto se le conoce como "Picture in Picture". JavaScript tiene un API para poder hacerlo y sería la siguiente (https://developer.mozilla.org/en-US/docs/Web/API/Picture-in-Picture_API). Cuando pulsemos ese botón verde, deberá llevar el video del HTML flotante por el ordenador. (hay una imagen de ejemplo)
// Como último paso vamos a implementar el botón de compartir pantalla. Para ello tenemos que investigar la siguiente función del API de Media Devices. (https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getDisplayMedia). Es un API muy parecida a la del punto 2 pero que permite poner el Stream de compartición de pantalla dentro de un Video HTML. Cuando pulsemos el botón debemos sustituir nuestra cam con nuestra pantalla compartida. Cuando se deje de presentar, deberemos volver a ver nuestra cámara. Al pulsar en el botón verde mientras compartimos. También podemos ver el video de compartición flotante flotante


navigator.mediaDevices.getUserMedia(constraints)
.then(function(stream) {
  /* use the stream */
})
.catch(function(err) {
  /* handle the error */
});
jQuery( document ).ready(function () {

  /**
   * set tooltip by bootstrap
   */
  function setBootstrapTooltip() {
    if ( $.fn.tooltip ) {
      $( '[data-toggle="tooltip"]' ).tooltip();
    }
  }

  /**
   * set lightbox by MagnificPopup
   */
  function setLightbox() {
    if ( $.fn.magnificPopup ) {
      $( '.mfp-zoom' ).magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        closeBtnInside: false,
        mainClass: 'mfp-with-zoom',
        image: {
          verticalFit: true
        }
      });
    }
  }

  /**
   * set form validation by validate
   * notify with modal
   * require bootstrap modal
   *
   * @requires bootstrap modal
   * 
   * @param {Selector} formSelector form selector that you want to check
   */
  function setFormValidationNotifyByModal( formSelector ) {
    if ( $.fn.validate ) {
      var requiredFieldMsg = 'field is required';
      var validEmailMsg = 'email is invalid';

      $( formSelector ).validate({
        errorClass: 'error-msg',
        rules: {
          name2:     { required: true },
          email2:    { required: true, email: true },
          subject2:  { required: true },
          message2:  { required: true }
        },
        messages: {
          name2:     { required: requiredFieldMsg },
          email2:    { required: requiredFieldMsg, email: validEmailMsg },
          subject2:  { required: requiredFieldMsg },
          message2:  { required: requiredFieldMsg }
        },
        submitHandler: function( form ) {

          // random result of form submit
          var isError = Math.random() >= 0.5;

          // bootstrap modal
          if ( isError ) {
            $( '#form-error-modal' ).modal();
          } else {
            $( '#form-success-modal' ).modal();
          }
        }
      });
    }
  }

  /**
   * set form validation by validate
   * notify with alert
   * require bootstrap alert
   *
   * @requires bootstrap alert
   */
  function setFormValidationNotifyByAlert() {
    var $formSelector = $( '#contact-form' );
    var $formErrorSelector = $( '.contact-panel .panel-heading' );

    if ( $.fn.validate ) {
      var requiredFieldMsg = 'field is required';
      var validEmailMsg = 'email is invalid';

      $formSelector.validate({
        errorClass: 'error-msg',
        rules: {
          name:     { required: true },
          email:    { required: true, email: true },
          subject:  { required: true },
          message:  { required: true }
        },
        messages: {
          name:     { required: requiredFieldMsg },
          email:    { required: requiredFieldMsg, email: validEmailMsg },
          subject:  { required: requiredFieldMsg },
          message:  { required: requiredFieldMsg }
        },
        submitHandler: function( form ) {

          // random result of form submit
          var isError = Math.random() >= 0.5;

          // boostrap alert
          if ( isError ) {
            $formErrorSelector.after(
              '<div id="form-error-alert" class="alert alert-danger alert-dismissible fade in" role="alert"> \
                <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button> \
                <p>Error, try again.</p> \
              </div>'
            );
            setAutoClosingAlert( '#form-error-alert', 2400 );
          } else {
            $formErrorSelector.after(
              '<div id="form-success-alert" class="alert alert-success alert-dismissible fade in" role="alert"> \
                <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button> \
                <p>Thank you, :)</p> \
              </div>'
            );
            setAutoClosingAlert( '#form-success-alert', 2400 );
          }
        }
      });
    }
  }

  /**
   * set auto closing alert for boostrap alert
   *
   * @param {Selector} selector selector of alert box
   * @param {Number}   delay    delay time (ms)
   */
  function setAutoClosingAlert( selector, delay ) {
    var alert = $( selector ).alert();
    window.setTimeout(function() { alert.alert( 'close' ) }, delay );
  }

  /**
   * set google map
   *
   * @param {Number} la latitude 
   * @param {Number} ln longitude
   */
  function setGoogleMap( la, ln, zoomLevel ) {
    var map;
    map = new GMaps({
      el: '#gmap',
      lat: la,
      lng: ln,
      zoom: zoomLevel,
      //  Subtle Grayscale
      styles: [{featureType:"landscape",stylers:[{saturation:-100},{lightness:65},{visibility:"on"}]},{featureType:"poi",stylers:[{saturation:-100},{lightness:51},{visibility:"simplified"}]},{featureType:"road.highway",stylers:[{saturation:-100},{visibility:"simplified"}]},{featureType:"road.arterial",stylers:[{saturation:-100},{lightness:30},{visibility:"on"}]},{featureType:"road.local",stylers:[{saturation:-100},{lightness:40},{visibility:"on"}]},{featureType:"transit",stylers:[{saturation:-100},{visibility:"simplified"}]},{featureType:"administrative.province",stylers:[{visibility:"off"}]/**/},{featureType:"administrative.locality",stylers:[{visibility:"off"}]},{featureType:"administrative.neighborhood",stylers:[{visibility:"on"}]/**/},{featureType:"water",elementType:"labels",stylers:[{visibility:"on"},{lightness:-25},{saturation:-100}]},{featureType:"water",elementType:"geometry",stylers:[{hue:"#ffff00"},{lightness:-25},{saturation:-97}]}],
      zoomControl : true,
      zoomControlOpt: {
        style : 'SMALL',
        position: 'TOP_LEFT'
      },
      panControl : false,
      streetViewControl : false,
      scrollwheel: false,
      mapTypeControl: false,
      overviewMapControl: false
    });
  }

  /**
   * set easy pie chart
   *
   * @param {Selector} selector selector of pie chart element
   */
  function setPieChart( selector ) {
    $( selector ).easyPieChart({
      barColor: '#6AC293',
      trackColor: '#ededed',
      lineCap: 'square',
      lineWidth: '4',
      scaleColor: '#fff',
      onStep: function( from, to, percent ) {
        $( this.el ).find( '.percent' ).text( Math.round( percent ) );
      }
    });
  }

  /**
   * initial all vendor functions
   */
  var initialVendorScript = new function () {
    
    setBootstrapTooltip();
    setPieChart( '.pie-chart' );
    setLightbox();
    setFormValidationNotifyByModal( '#contact-form-second' );
    setFormValidationNotifyByAlert();
    
    // setGoogleMap( 40.712784, -74.005941, 13 ); // New York
    setGoogleMap( 13.7246005, 100.6331108, 10 ); // Bangkok
  }
});

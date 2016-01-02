jQuery( document ).ready(function( $ ) {

  // declaration
  var previousBgClass = '';
  var currentHeaderStyle = 'bimg';

  /**
   * set settings panel button
   */
  function setSettingsBtn() {
    var settingsDiv = '<a data-toggle="tooltip" data-placement="right" class="settings-btn addon-left" title="Setting Me Up" href="javascript:;"><i class="fa fa-cog"></i></a> \
      <!-- .settings-btn --> \
      <div class="settings-panel panel visible-lg-block"> \
        <div class="panel-heading panel-default"><p class="panel-title">Header Style</p></div> \
        <div class="panel-body header-style"> \
          <a data-header-style="classic" class="header-item">Classic</a> \
          <a data-header-style="bimg-fullw" class="header-item">BG Image FullW</a> \
          <a data-header-style="bimg" class="header-item">BG Image</a> \
          <a data-header-style="bname" class="header-item">Big Name</a> \
          <a data-header-style="min" class="header-item">MIN</a> \
          <a data-header-style="norm" class="header-item">Just Name</a> \
          <a data-header-style="binfo" class="header-item">INFO</a> \
        </div> \
        <!-- .header-style --> \
        <div class="panel-heading panel-default"><p class="panel-title">Theme Color</p></div> \
        <div class="panel-body theme-color"> \
          <a data-theme-color="default" class="default theme-item" title="Default - Gray">&nbsp;</a> \
          <a data-theme-color="red" class="red theme-item" title="Red">&nbsp;</a> \
          <a data-theme-color="blue" class="blue theme-item" title="Blue">&nbsp;</a> \
          <a data-theme-color="green" class="green theme-item" title="Green">&nbsp;</a> \
          <a data-theme-color="brown" class="brown theme-item" title="Brown">&nbsp;</a> \
          <a data-theme-color="blue-gray" class="blue-gray theme-item" title="Blue Gray">&nbsp;</a> \
        </div> \
        <!-- .theme-color --> \
        <div class="panel-heading panel-default"><p class="panel-title">BG Color</p></div> \
        <div class="panel-body bg-color"> \
          <a data-bg-color="default-bg" class="default-bg theme-item" title="Gray">&nbsp;</a> \
          <a data-bg-color="red-bg" class="red-bg theme-item" title="Red">&nbsp;</a> \
          <a data-bg-color="deep-purple-bg" class="deep-purple-bg theme-item" title="Deep Purple">&nbsp;</a> \
          <a data-bg-color="blue-bg" class="blue-bg theme-item" title="Blue">&nbsp;</a> \
          <a data-bg-color="green-bg" class="green-bg theme-item" title="Green">&nbsp;</a> \
          <a data-bg-color="brown-bg" class="brown-bg theme-item" title="Brown">&nbsp;</a> \
          <a data-bg-color="blue-gray-bg" class="blue-gray-bg theme-item" title="Blue Gray">&nbsp;</a> \
          <a data-bg-color="gray-lighter-higher-bg" class="gray-lighter-higher-bg theme-item" title="Gray Lighter Higher">&nbsp;</a> \
          <a data-bg-color="gray-lighter-high-bg" class="gray-lighter-high-bg theme-item" title="Gray Lighter High">&nbsp;</a> \
          <a data-bg-color="gray-lighter-bg" class="gray-lighter-bg theme-item" title="Gray Lighter">&nbsp;</a> \
        </div> \
        <!-- .bg-color --> \
        <div class="panel-heading panel-default"><p class="panel-title">BG Pattern</p></div> \
        <div class="panel-body bg-ptn"> \
          <a data-bg-ptn="svgeneration-blue-jean" class="svgeneration-blue-jean theme-item" title="Blue Jean">&nbsp;</a> \
          <a data-bg-ptn="svgeneration-construction-paper" class="svgeneration-construction-paper theme-item" title="Construction Paper">&nbsp;</a> \
          <a data-bg-ptn="svgeneration-cross-stripes" class="svgeneration-cross-stripes theme-item" title="Cross Stripes">&nbsp;</a> \
          <a data-bg-ptn="svgeneration-graph-paper" class="svgeneration-graph-paper theme-item" title="Graph Paper">&nbsp;</a> \
          <a data-bg-ptn="svgeneration-oriental-roof" class="svgeneration-oriental-roof theme-item" title="Oriental Roof">&nbsp;</a> \
          <a data-bg-ptn="svgeneration-patchwork" class="svgeneration-patchwork theme-item" title="Patchwork">&nbsp;</a> \
          <a data-bg-ptn="svgeneration-zags" class="svgeneration-zags theme-item" title="Zags">&nbsp;</a> \
          <a data-bg-ptn="trianglify-blue" class="trianglify-blue theme-item" title="Blue">&nbsp;</a> \
          <a data-bg-ptn="trianglify-green-light" class="trianglify-green-light theme-item" title="Green-light">&nbsp;</a> \
          <a data-bg-ptn="trianglify-gray" class="trianglify-gray theme-item" title="Gray">&nbsp;</a> \
          <a data-bg-ptn="trianglify-ocean-blue" class="trianglify-ocean-blue theme-item" title="Ocean Blue">&nbsp;</a> \
          <a data-bg-ptn="trianglify-ocean-green" class="trianglify-ocean-green theme-item" title="Ocean Green">&nbsp;</a> \
          <a data-bg-ptn="trianglify-orange" class="trianglify-orange theme-item" title="Orange">&nbsp;</a> \
          <a data-bg-ptn="trianglify-pink" class="trianglify-pink theme-item" title="Pink">&nbsp;</a> \
          <a data-bg-ptn="trianglify-purple" class="trianglify-purple theme-item" title="Purple">&nbsp;</a> \
          <a data-bg-ptn="trianglify-red" class="trianglify-red theme-item" title="Red">&nbsp;</a> \
        </div> \
        <!-- .bg-ptn --> \
        <div class="panel-heading panel-default"><p class="panel-title">BG Image</p></div> \
        <div class="panel-body bg-img"> \
          <a data-bg-img="gratisography-28h" class="gratisography-28h theme-item" title="Sea">&nbsp;</a> \
          <a data-bg-img="gratisography-56h" class="gratisography-56h theme-item" title="Rail">&nbsp;</a> \
          <a data-bg-img="gratisography-134h" class="gratisography-134h theme-item" title="Toy">&nbsp;</a> \
          <a data-bg-img="gratisography-161h" class="gratisography-161h theme-item" title="Smile cook">&nbsp;</a> \
        </div> \
        <!-- .bg-img --> \
      </div> \
      <!-- .settings-panel -->';

    $( '.addon' ).prepend( settingsDiv );
    
    var $settingsBtn = $( '.settings-btn' );
    var $settingsPanel = $( '.settings-panel' );

    $settingsBtn.on( 'click', function() {
      if ( $settingsPanel.css( 'left') == '0px' ) {
        $settingsPanel.stop().animate({ 'left': '-200px' });
      } else {
        $settingsPanel.stop().animate({ 'left': '0px' });
      }
    });
  }

  /**
   * change body background
   * 
   * @param {Element} $element button element that's clicked
   * @param {String}  dataAttr data property for getting value
   */
  function changeBodyBg( $element, dataAttr ) {
    var bgClass = $element.data( dataAttr );

    if ( hasAttr( $( 'body' ), 'class' ) ) {
      previousBgClass = $( 'body' ).attr( 'class' );
    }

    $( 'body' )
      .removeClass( previousBgClass )
      .addClass( bgClass );
  };

  /**
   * change theme color
   * 
   * @param {Element} $element button element that's clicked
   */
  function changeThemeColor( $element ) {
    var idName = $element.data( 'theme-color' );

    $( 'body' )
      .removeAttr( 'id' )
      .attr('id', 'theme-' + idName );
  }

  /**
   * set all settings buttons
   */
  function setSettingsFunction() {
    $( '.bg-color .theme-item' ).on( 'click', function() { changeBodyBg( $( this ), 'bg-color' ); });
    $( '.bg-ptn .theme-item' ).on( 'click', function() { changeBodyBg( $( this ), 'bg-ptn' ); });
    $( '.bg-img .theme-item' ).on( 'click', function() { changeBodyBg( $( this ), 'bg-img' ); });
    $( '.theme-color .theme-item' ).on( 'click', function() { changeThemeColor( $( this ) ); });
    $( '.header-style .header-item' ).on( 'click', function() { changeHeaderStyle( $( this ) ); });
  }

  /**
   * set header style
   */
  function updateHeaderStyle() {
    $( '#header .cv-section.header-' + currentHeaderStyle )
      .removeClass( 'hidden' )
      .siblings()
      .addClass( 'hidden' );
  }

  /**
   * change header style
   * 
   * @param {Element} $element element of header style button that's clicked
   */
  function changeHeaderStyle( $element ) {

    // set active label on theme section of settings panel
    $element
      .addClass( 'active' )
      .siblings()
      .removeClass( 'active' );

    // set a new header style on variable
    if ( hasDataAttr( $element, 'header-style' ) ) {
      currentHeaderStyle = $element.data( 'header-style' );
    }
    
    // update header style on screen
    updateHeaderStyle();
  }


  /**
   * initial all demo functions
   */
  var initDemoScript = new function() {

    updateHeaderStyle();
    setSettingsBtn();
    $( 'a[data-header-style=' + currentHeaderStyle + ']' ).addClass( 'active' );
    setSettingsFunction();
  }
});

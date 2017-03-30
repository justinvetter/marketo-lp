

$(document).ready(function () {
  var theme = 'corporate_theme';
  var headhtml = `<!doctype html>
<html>

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!--DO NOT EDIT ABOVE THIS LINE-->


  <!--BEGIN EDITABLE TITLE AREA-->
  <title>DemandGen Corp Template</title>
  <!--END OF EDITABLE TITLE AREA-->


  <!--DO NOT EDIT BELOW THIS LINE-->
    <link href="http://digitalglobe-marketing.s3.amazonaws.com/web/fonts/dg-fonts.css" rel="stylesheet">
  <link href="styles/vendor.css" rel="stylesheet">
  <link href="styles/mainsass.css" rel="stylesheet">
  <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
  <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
  <!--[if lt IE 9]>
<script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
<![endif]-->
</head>

<body class="`;
  var bodyhtml = `">
  <!--DO NOT EDIT ABOVE THIS LINE EXCEPT FOR PAGE TITLE-->

  <!--START OF EDITABLE PAGE SECTIONS BELOW THIS LINE-->









  <!--START OF FOOTER SECTION DO NOT EDIT | COPY ALL CODE FROM OPENING FOOTER TAG TO CLOSING FOOTER TAG-->
  <footer>
    <ul class="soc_holder">
      <li>
        <a href="https://twitter.com/digitalglobe" target="_blank" class="social__link">
          <svg class="social__icon icon-twitter" id="icon-twitter" width="32" height="32" viewBox="0 0 32 32" x="144" y="0">
            <path d="M32 7.075c-1.175 0.525-2.444 0.875-3.769 1.031 1.356-0.813 2.394-2.1 2.887-3.631-1.269 0.75-2.675 1.3-4.169 1.594-1.2-1.275-2.906-2.069-4.794-2.069-3.625 0-6.563 2.938-6.563 6.563 0 0.512 0.056 1.012 0.169 1.494-5.456-0.275-10.294-2.888-13.531-6.862-0.563 0.969-0.887 2.1-0.887 3.3 0 2.275 1.156 4.287 2.919 5.463-1.075-0.031-2.087-0.331-2.975-0.819 0 0.025 0 0.056 0 0.081 0 3.181 2.263 5.838 5.269 6.437-0.55 0.15-1.131 0.231-1.731 0.231-0.425 0-0.831-0.044-1.237-0.119 0.838 2.606 3.263 4.506 6.131 4.563-2.25 1.762-5.075 2.813-8.156 2.813-0.531 0-1.050-0.031-1.569-0.094 2.913 1.869 6.362 2.95 10.069 2.95 12.075 0 18.681-10.006 18.681-18.681 0-0.287-0.006-0.569-0.019-0.85 1.281-0.919 2.394-2.075 3.275-3.394z"></path>
          </svg>
        </a>
      </li>
      <li>
        <a href="https://www.facebook.com/DigitalGlobeInc" target="_blank" class="social__link">
          <svg id="icon-facebook" class="social__icon icon-facebook" width="32" height="32" viewBox="0 0 32 32" x="240" y="0">
            <path d="M19 6h5v-6h-5c-3.86 0-7 3.14-7 7v3h-4v6h4v16h6v-16h5l1-6h-6v-3c0-0.542 0.458-1 1-1z"></path>
          </svg>
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/digitalglobe/" target="_blank" class="social__link">
          <svg class="social__icon icon-instagram" id="icon-instagram" width="32" height="32" viewBox="0 0 32 32" x="192" y="0">
            <path d="M16 2.881c4.275 0 4.781 0.019 6.462 0.094 1.563 0.069 2.406 0.331 2.969 0.55 0.744 0.288 1.281 0.638 1.837 1.194 0.563 0.563 0.906 1.094 1.2 1.838 0.219 0.563 0.481 1.412 0.55 2.969 0.075 1.688 0.094 2.194 0.094 6.463s-0.019 4.781-0.094 6.463c-0.069 1.563-0.331 2.406-0.55 2.969-0.288 0.744-0.637 1.281-1.194 1.837-0.563 0.563-1.094 0.906-1.837 1.2-0.563 0.219-1.413 0.481-2.969 0.55-1.688 0.075-2.194 0.094-6.463 0.094s-4.781-0.019-6.463-0.094c-1.563-0.069-2.406-0.331-2.969-0.55-0.744-0.288-1.281-0.637-1.838-1.194-0.563-0.563-0.906-1.094-1.2-1.837-0.219-0.563-0.481-1.413-0.55-2.969-0.075-1.688-0.094-2.194-0.094-6.463s0.019-4.781 0.094-6.463c0.069-1.563 0.331-2.406 0.55-2.969 0.288-0.744 0.638-1.281 1.194-1.838 0.563-0.563 1.094-0.906 1.838-1.2 0.563-0.219 1.412-0.481 2.969-0.55 1.681-0.075 2.188-0.094 6.463-0.094zM16 0c-4.344 0-4.887 0.019-6.594 0.094-1.7 0.075-2.869 0.35-3.881 0.744-1.056 0.412-1.95 0.956-2.837 1.85-0.894 0.888-1.438 1.781-1.85 2.831-0.394 1.019-0.669 2.181-0.744 3.881-0.075 1.713-0.094 2.256-0.094 6.6s0.019 4.887 0.094 6.594c0.075 1.7 0.35 2.869 0.744 3.881 0.413 1.056 0.956 1.95 1.85 2.837 0.887 0.887 1.781 1.438 2.831 1.844 1.019 0.394 2.181 0.669 3.881 0.744 1.706 0.075 2.25 0.094 6.594 0.094s4.888-0.019 6.594-0.094c1.7-0.075 2.869-0.35 3.881-0.744 1.050-0.406 1.944-0.956 2.831-1.844s1.438-1.781 1.844-2.831c0.394-1.019 0.669-2.181 0.744-3.881 0.075-1.706 0.094-2.25 0.094-6.594s-0.019-4.887-0.094-6.594c-0.075-1.7-0.35-2.869-0.744-3.881-0.394-1.063-0.938-1.956-1.831-2.844-0.887-0.887-1.781-1.438-2.831-1.844-1.019-0.394-2.181-0.669-3.881-0.744-1.712-0.081-2.256-0.1-6.6-0.1v0z"></path>
            <path d="M16 7.781c-4.537 0-8.219 3.681-8.219 8.219s3.681 8.219 8.219 8.219 8.219-3.681 8.219-8.219c0-4.537-3.681-8.219-8.219-8.219zM16 21.331c-2.944 0-5.331-2.387-5.331-5.331s2.387-5.331 5.331-5.331c2.944 0 5.331 2.387 5.331 5.331s-2.387 5.331-5.331 5.331z"></path>
            <path d="M26.462 7.456c0 1.060-0.859 1.919-1.919 1.919s-1.919-0.859-1.919-1.919c0-1.060 0.859-1.919 1.919-1.919s1.919 0.859 1.919 1.919z"></path>
          </svg>
        </a>
      </li>
      <li>
        <a href="https://www.youtube.com/user/digitalglobeinc" target="_blank" class="social__link">
          <svg id="icon-youtube" class="social__icon icon-youtube" width="32" height="32" viewBox="0 0 32 32" x="48" y="0">
            <path d="M31.681 9.6c0 0-0.313-2.206-1.275-3.175-1.219-1.275-2.581-1.281-3.206-1.356-4.475-0.325-11.194-0.325-11.194-0.325h-0.012c0 0-6.719 0-11.194 0.325-0.625 0.075-1.987 0.081-3.206 1.356-0.963 0.969-1.269 3.175-1.269 3.175s-0.319 2.588-0.319 5.181v2.425c0 2.587 0.319 5.181 0.319 5.181s0.313 2.206 1.269 3.175c1.219 1.275 2.819 1.231 3.531 1.369 2.563 0.244 10.881 0.319 10.881 0.319s6.725-0.012 11.2-0.331c0.625-0.075 1.988-0.081 3.206-1.356 0.962-0.969 1.275-3.175 1.275-3.175s0.319-2.587 0.319-5.181v-2.425c-0.006-2.588-0.325-5.181-0.325-5.181zM12.694 20.15v-8.994l8.644 4.513-8.644 4.481z"></path>
          </svg>
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/company/digitalglobe" target="_blank" class="social__link">
          <svg id="icon-linkedin" class="social__icon icon-linkedin" width="32" height="32" viewBox="0 0 32 32" x="0" y="0">
            <path d="M12 12h5.535v2.837h0.079c0.77-1.381 2.655-2.837 5.464-2.837 5.842 0 6.922 3.637 6.922 8.367v9.633h-5.769v-8.54c0-2.037-0.042-4.657-3.001-4.657-3.005 0-3.463 2.218-3.463 4.509v8.688h-5.767v-18z"></path>
            <path d="M2 12h6v18h-6v-18z"></path>
            <path d="M8 7c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-1.657 1.343-3 3-3s3 1.343 3 3z"></path>
          </svg>
        </a>
      </li>
      <li>
        <a href="https://plus.google.com/+digitalglobe/posts" target="_blank" class="social__link">
          <svg id="icon-google-plus" class="social__icon icon-google-plus" width="32" height="32" viewBox="0 0 32 32" x="288" y="0">
            <path d="M10.181 14.294v3.494h5.775c-0.231 1.5-1.744 4.394-5.775 4.394-3.475 0-6.313-2.881-6.313-6.431s2.838-6.431 6.313-6.431c1.981 0 3.3 0.844 4.056 1.569l2.762-2.662c-1.775-1.656-4.075-2.662-6.819-2.662-5.631 0.006-10.181 4.556-10.181 10.188s4.55 10.181 10.181 10.181c5.875 0 9.775-4.131 9.775-9.95 0-0.669-0.075-1.181-0.163-1.688h-9.613z"></path>
            <path d="M32 14h-3v-3h-3v3h-3v3h3v3h3v-3h3z"></path>
          </svg>
        </a>
      </li>
    </ul>
    <div class="privacy">
      <p>&copy; <a href="https://www.digitalglobe.com/" target="blank">DigitalGlobe 2017</a> | <a href="https://www.digitalglobe.com/privacy-policy" target="blank">Privacy Policy</a> | <a href="https://www.digitalglobe.com/pages/terms-of-use" target="blank">Terms of Use</a></p>
    </div>
  </footer>
  <!--END OF FOOTER SECTION-->
  <!--DO NOT EDIT ANYTHING BELOW THIS LINE-->

  
  <script src="//fast.wistia.net/assets/external/E-v1.js" async></script>
  <script src="https://cdn.jsdelivr.net/clipboard.js/1.6.0/clipboard.min.js"></script>
  <script src="scripts/vendor.js" type="text/javascript"></script>
  <script src="scripts/main.js" type="text/javascript"></script>
</body>

</html>`;
  

  $('section').append('<button class="selector btntest" data-clipboard-target="#test">Copy</button>');

  $('#test').val(headhtml + theme + bodyhtml);
  $('#themepicker a').on('click', function (e) {
    var $body = $('body');
    var $class = $(this).data('theme');
    $body.removeClass().addClass($class);
    $('#themepicker li').removeClass('active');
    $(this).parent().addClass('active');
    theme = $class;
    $('#test').val(headhtml + theme + bodyhtml);
  });
  
    $('.selector').on('click', function(e){
    console.log('test');
    var selvar = $(this).parent().wrap('<p/>').parent().html();
      selvar = selvar.replace('<button class="selector btntest" data-clipboard-target="#test">Copy</button>', '')
    $('#test').val(selvar);
      $(this).parent().unwrap();
  })
  
  new Clipboard('.btntest');;
  
});
 


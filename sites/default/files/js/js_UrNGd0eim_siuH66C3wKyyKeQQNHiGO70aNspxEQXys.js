Drupal.locale = { 'pluralFormula': function ($n) { return Number((((($n%10)==1)&&(($n%100)!=11))?(0):((((($n%10)>=2)&&(($n%10)<=4))&&((($n%100)<10)||(($n%100)>=20)))?(1):2))); }, 'strings': {"":{"An AJAX HTTP error occurred.":"\u0412\u043e\u0437\u043d\u0438\u043a\u043b\u0430 AJAX HTTP \u043e\u0448\u0438\u0431\u043a\u0430.","HTTP Result Code: !status":"\u041f\u043e\u043b\u0443\u0447\u0435\u043d\u043d\u044b\u0439 \u043a\u043e\u0434 HTTP: !status","An AJAX HTTP request terminated abnormally.":"HTTP \u0437\u0430\u043f\u0440\u043e\u0441 AJAX \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d \u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e.","Debugging information follows.":"\u0421\u043b\u0435\u0434\u0443\u0435\u0442 \u043e\u0442\u043b\u0430\u0434\u043e\u0447\u043d\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f.","Path: !uri":"\u041f\u0443\u0442\u044c: !uri","StatusText: !statusText":"\u0422\u0435\u043a\u0441\u0442 \u0421\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u044f: !statusText","ResponseText: !responseText":"\u0422\u0435\u043a\u0441\u0442 \u041e\u0442\u0432\u0435\u0442\u0430: !responseText","ReadyState: !readyState":"ReadyState: !readyState","CustomMessage: !customMessage":"\u0421\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435: !customMessage","Re-order rows by numerical weight instead of dragging.":"\u0423\u043f\u043e\u0440\u044f\u0434\u043e\u0447\u0438\u0442\u044c \u0441\u0442\u0440\u043e\u043a\u0438 \u043f\u043e \u0432\u0435\u0441\u0443 \u0432\u043c\u0435\u0441\u0442\u043e \u043f\u0435\u0440\u0435\u0442\u0430\u0441\u043a\u0438\u0432\u0430\u043d\u0438\u044f.","Show row weights":"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0432\u0435\u0441 \u0441\u0442\u0440\u043e\u043a","Hide row weights":"\u0421\u043a\u0440\u044b\u0442\u044c \u0432\u0435\u0441 \u0441\u0442\u0440\u043e\u043a","Drag to re-order":"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043f\u043e\u0440\u044f\u0434\u043e\u043a \u043c\u043e\u0436\u043d\u043e, \u043f\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0432 \u043f\u0443\u043d\u043a\u0442 \u043c\u044b\u0448\u043a\u043e\u0439.","Changes made in this table will not be saved until the form is submitted.":"\u0421\u0434\u0435\u043b\u0430\u043d\u043d\u044b\u0435 \u0432 \u0441\u043f\u0438\u0441\u043a\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u043d\u0435 \u0432\u0441\u0442\u0443\u043f\u044f\u0442 \u0432 \u0441\u0438\u043b\u0443, \u043f\u043e\u043a\u0430 \u0432\u044b \u043d\u0435 \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u0435 \u0438\u0445.","Hide":"\u0421\u043a\u0440\u044b\u0442\u044c","Show":"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c","No results":"\u041d\u0435\u0442 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u043e\u0432","clear":"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c","All":"\u0412\u0441\u0435","New":"\u041d\u043e\u0432\u043e\u0435","Modules installed within the last week.":"\u041c\u043e\u0434\u0443\u043b\u0438, \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044b\u0435 \u0437\u0430 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u044e\u044e \u043d\u0435\u0434\u0435\u043b\u044e.","No modules added within the last week.":"\u041d\u0435\u0442 \u043c\u043e\u0434\u0443\u043b\u0435\u0439, \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0445 \u0437\u0430 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u044e\u044e \u043d\u0435\u0434\u0435\u043b\u044e.","Recent":"\u041f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0439","Modules enabled\/disabled within the last week.":"\u041c\u043e\u0434\u0443\u043b\u0438, \u0432\u043a\u043b\u044e\u0447\u0451\u043d\u043d\u044b\u0435\/\u0432\u044b\u043a\u043b\u044e\u0447\u0435\u043d\u043d\u044b\u0435 \u0437\u0430 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u044e\u044e \u043d\u0435\u0434\u0435\u043b\u044e.","No modules were enabled or disabled within the last week.":"\u041d\u0435\u0442 \u043c\u043e\u0434\u0443\u043b\u0435\u0439, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0431\u044b\u043b\u0438 \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u044b \u0438\u043b\u0438 \u043e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u044b \u0432 \u0442\u0435\u0447\u0435\u043d\u0438\u0435 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0435\u0439 \u043d\u0435\u0434\u0435\u043b\u0438.","@enabled of @total":"@enabled \u0438\u0437 @total","Edit":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c","Upload":"\u0417\u0430\u043a\u0430\u0447\u0430\u0442\u044c","Configure":"\u041d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c","This field is required.":"\u042d\u0442\u043e \u043f\u043e\u043b\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f.","Select all rows in this table":"\u041e\u0442\u043c\u0435\u0442\u0438\u0442\u044c \u0432\u0441\u0435 \u0441\u0442\u0440\u043e\u043a\u0438 \u0442\u0430\u0431\u043b\u0438\u0446\u044b","Deselect all rows in this table":"\u0421\u043d\u044f\u0442\u044c \u043e\u0442\u043c\u0435\u0442\u043a\u0443 \u0441\u043e \u0432\u0441\u0435\u0445 \u043a\u043e\u043b\u043e\u043d\u043e\u043a \u0442\u0430\u0431\u043b\u0438\u0446\u044b","Not published":"\u041d\u0435 \u043e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u043d\u043e","Please wait...":"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043f\u043e\u0434\u043e\u0436\u0434\u0438\u0442\u0435...","Loading":"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430","Only files with the following extensions are allowed: %files-allowed.":"\u041f\u0440\u0438\u043a\u0440\u0435\u043f\u043b\u044f\u0442\u044c \u043c\u043e\u0436\u043d\u043e \u0442\u043e\u043b\u044c\u043a\u043e \u0444\u0430\u0439\u043b\u044b \u0441 \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u044f\u043c\u0438: %files-allowed.","By @name on @date":"@name, @date","By @name":"@name","Not in menu":"\u041d\u0435 \u0432 \u043c\u0435\u043d\u044e","Alias: @alias":"\u0421\u0438\u043d\u043e\u043d\u0438\u043c: @alias","No alias":"\u0421\u0438\u043d\u043e\u043d\u0438\u043c \u043d\u0435 \u0437\u0430\u0434\u0430\u043d","New revision":"\u041d\u043e\u0432\u0430\u044f \u0440\u0435\u0434\u0430\u043a\u0446\u0438\u044f","The changes to these blocks will not be saved until the \u003Cem\u003ESave blocks\u003C\/em\u003E button is clicked.":"\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f, \u0441\u0434\u0435\u043b\u0430\u043d\u043d\u044b\u0435 \u0432 \u0431\u043b\u043e\u043a\u0430\u0445 \u043d\u0435 \u0432\u0441\u0442\u0443\u043f\u044f\u0442 \u0432 \u0441\u0438\u043b\u0443 \u043f\u043e\u043a\u0430 \u0432\u044b \u043d\u0435 \u043d\u0430\u0436\u043c\u0435\u0442\u0435 \u043a\u043d\u043e\u043f\u043a\u0443 \u003Cem\u003E\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0431\u043b\u043e\u043a\u0438\u003C\/em\u003E.","No revision":"\u041d\u0435\u0442 \u0440\u0435\u0434\u0430\u043a\u0446\u0438\u0438","@number comments per page":"@number \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0435\u0432 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443","Not restricted":"\u0411\u0435\u0437 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u0439","(active tab)":"(\u0430\u043a\u0442\u0438\u0432\u043d\u0430\u044f \u0432\u043a\u043b\u0430\u0434\u043a\u0430)","Not customizable":"\u041d\u0435 \u043d\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u043c\u044b\u0439","Restricted to certain pages":"\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u043e \u0434\u043b\u044f \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0451\u043d\u043d\u044b\u0445 \u0441\u0442\u0440\u0430\u043d\u0438\u0446","The block cannot be placed in this region.":"\u0411\u043b\u043e\u043a \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0440\u0430\u0437\u043c\u0435\u0449\u0451\u043d \u0432 \u0434\u0430\u043d\u043d\u043e\u0439 \u043e\u0431\u043b\u0430\u0441\u0442\u0438.","@title dialog":"\u0414\u0438\u0430\u043b\u043e\u0433 @title","The response failed verification so will not be processed.":"\u041e\u0442\u0432\u0435\u0442 \u043d\u0435 \u043f\u0440\u043e\u0448\u0435\u043b \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0443 \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0442\u044c\u0441\u044f \u043d\u0435 \u0431\u0443\u0434\u0435\u0442.","The callback URL is not local and not trusted: !url":"URL-\u0430\u0434\u0440\u0435\u0441 \u043e\u0431\u0440\u0430\u0442\u043d\u043e\u0433\u043e \u0432\u044b\u0437\u043e\u0432\u0430 \u043d\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u044b\u043c \u0438 \u0434\u043e\u0432\u0435\u0440\u0435\u043d\u043d\u044b\u043c: !url","Autocomplete popup":"\u0412\u0441\u043f\u043b\u044b\u0432\u0430\u044e\u0449\u0435\u0435 \u0430\u0432\u0442\u043e\u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435","Searching for matches...":"\u041f\u043e\u0438\u0441\u043a \u0441\u043e\u0432\u043f\u0430\u0434\u0435\u043d\u0438\u0439...","Show layout designer":"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u0440\u0435\u0434\u0430\u043a\u0442\u043e\u0440 \u043c\u0430\u043a\u0435\u0442\u0430","Close":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c","Log messages":"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f \u0432 \u0436\u0443\u0440\u043d\u0430\u043b","Please select a file.":"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430 \u0432\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0444\u0430\u0439\u043b.","You are not allowed to operate on more than %num files.":"\u0412\u0430\u043c \u043d\u0435 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u043e \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435 \u0447\u0435\u043c \u0441 %num \u0444\u0430\u0439\u043b\u0430\u043c\u0438.","Please specify dimensions within the allowed range that is from 1x1 to @dimensions.":"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430 \u0443\u043a\u0430\u0436\u0438\u0442\u0435 \u0440\u0430\u0437\u043c\u0435\u0440 \u0432\u043d\u0443\u0442\u0440\u0438 \u0440\u0430\u0437\u0440\u0435\u0448\u0451\u043d\u043d\u043e\u0433\u043e \u0434\u0438\u0430\u043f\u043e\u0437\u043e\u043d\u0430 \u043e\u0442 1x1 \u0434\u043e @dimensions.","%filename is not an image.":"\u0424\u0430\u0439\u043b %filename \u043d\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435\u043c.","Do you want to refresh the current directory?":"\u0412\u044b \u0445\u043e\u0442\u0438\u0442\u0435 \u043e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0442\u0435\u043a\u0443\u0449\u0443\u044e \u043f\u0430\u043f\u043a\u0443?","Delete selected files?":"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u044b\u0435 \u0444\u0430\u0439\u043b\u044b?","Please select a thumbnail.":"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043c\u0438\u043d\u0438\u0430\u0442\u044e\u0440\u0443.","You must select at least %num files.":"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u043d\u0435 \u043c\u0435\u043d\u0435\u0435 %num \u0444\u0430\u0439\u043b\u043e\u0432.","You can not perform this operation.":"\u0412\u044b \u043d\u0435 \u043c\u043e\u0436\u0435\u0442\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u044d\u0442\u0443 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u044e.","Insert file":"\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0444\u0430\u0439\u043b","Change view":"\u0421\u043c\u0435\u043d\u0438\u0442\u044c \u0432\u0438\u0434"}} };;
/**
  @license html2canvas v0.34 <http://html2canvas.hertzen.com>
  Copyright (c) 2011 Niklas von Hertzen. All rights reserved.
  http://www.twitter.com/niklasvh

  Released under MIT License
 */
(function(window, document, undefined){

/*
  html2canvas v0.34 <http://html2canvas.hertzen.com>
  Copyright (c) 2011 Niklas von Hertzen. All rights reserved.
  http://www.twitter.com/niklasvh

  Released under MIT License
 */
"use strict";

var _html2canvas = {},
previousElement,
computedCSS,
html2canvas;


function h2clog(a) {
    if (_html2canvas.logging && window.console && window.console.log) {
        window.console.log(a);
    }
}

_html2canvas.Util = {};

_html2canvas.Util.backgroundImage = function (src) {

    if (/data:image\/.*;base64,/i.test( src ) || /^(-webkit|-moz|linear-gradient|-o-)/.test( src )) {
        return src;
    }

    if (src.toLowerCase().substr( 0, 5 ) === 'url("') {
        src = src.substr( 5 );
        src = src.substr( 0, src.length - 2 );
    } else {
        src = src.substr( 4 );
        src = src.substr( 0, src.length - 1 );
    }

    return src;
};

_html2canvas.Util.Bounds = function getBounds (el) {
    var clientRect,
    bounds = {};

    if (el.getBoundingClientRect){
        clientRect = el.getBoundingClientRect();


        // TODO add scroll position to bounds, so no scrolling of window necessary
        bounds.top = clientRect.top;
        bounds.bottom = clientRect.bottom || (clientRect.top + clientRect.height);
        bounds.left = clientRect.left;

        // older IE doesn't have width/height, but top/bottom instead
        bounds.width = clientRect.width || (clientRect.right - clientRect.left);
        bounds.height = clientRect.height || (clientRect.bottom - clientRect.top);

        return bounds;

    }
};

_html2canvas.Util.getCSS = function (el, attribute) {
    // return $(el).css(attribute);

    var val;

    function toPX( attribute, val ) {
        var rsLeft = el.runtimeStyle && el.runtimeStyle[ attribute ],
        left,
        style = el.style;

        // Check if we are not dealing with pixels, (Opera has issues with this)
        // Ported from jQuery css.js
        // From the awesome hack by Dean Edwards
        // http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291

        // If we're not dealing with a regular pixel number
        // but a number that has a weird ending, we need to convert it to pixels

        if ( !/^-?[0-9]+\.?[0-9]*(?:px)?$/i.test( val ) && /^-?\d/.test( val ) ) {

            // Remember the original values
            left = style.left;

            // Put in the new values to get a computed value out
            if ( rsLeft ) {
                el.runtimeStyle.left = el.currentStyle.left;
            }
            style.left = attribute === "fontSize" ? "1em" : (val || 0);
            val = style.pixelLeft + "px";

            // Revert the changed values
            style.left = left;
            if ( rsLeft ) {
                el.runtimeStyle.left = rsLeft;
            }

        }

        if (!/^(thin|medium|thick)$/i.test( val )) {
            return Math.round(parseFloat( val )) + "px";
        }

        return val;

    }


    if ( window.getComputedStyle ) {
        if ( previousElement !== el ) {
            computedCSS = document.defaultView.getComputedStyle(el, null);
        }
        val = computedCSS[ attribute ];

        if ( attribute === "backgroundPosition" ) {

            val = (val.split(",")[0] || "0 0").split(" ");

            val[ 0 ] = ( val[0].indexOf( "%" ) === -1 ) ? toPX(  attribute + "X", val[ 0 ] ) : val[ 0 ];
            val[ 1 ] = ( val[1] === undefined ) ? val[0] : val[1]; // IE 9 doesn't return double digit always
            val[ 1 ] = ( val[1].indexOf( "%" ) === -1 ) ? toPX(  attribute + "Y", val[ 1 ] ) : val[ 1 ];
        } else if ( /border(Top|Bottom)(Left|Right)Radius/.test( attribute) ) {
            var arr = val.split(" ");
            if ( arr.length <= 1 ) {
                arr[ 1 ] = arr[ 0 ];
            }
            arr[ 0 ] = parseInt( arr[ 0 ], 10 );
            arr[ 1 ] = parseInt( arr[ 1 ], 10 );
            val = arr;
        }

    } else if ( el.currentStyle ) {
        // IE 9>
        if (attribute === "backgroundPosition") {
            // Older IE uses -x and -y
            val = [ toPX(  attribute + "X", el.currentStyle[ attribute + "X" ]  ), toPX(  attribute + "Y", el.currentStyle[ attribute + "Y" ]  ) ];
        } else {

            val = toPX(  attribute, el.currentStyle[ attribute ]  );

            if (/^(border)/i.test( attribute ) && /^(medium|thin|thick)$/i.test( val )) {
                switch (val) {
                    case "thin":
                        val = "1px";
                        break;
                    case "medium":
                        val = "0px"; // this is wrong, it should be 3px but IE uses medium for no border as well.. TODO find a work around
                        break;
                    case "thick":
                        val = "5px";
                        break;
                }
            }
        }



    }




    return val;



//return $(el).css(attribute);


};


_html2canvas.Util.BackgroundPosition = function ( el, bounds, image ) {
    // TODO add support for multi image backgrounds

    var bgposition =  _html2canvas.Util.getCSS( el, "backgroundPosition" ) ,
    topPos,
    left,
    percentage,
    val;

    if (bgposition.length === 1){
        val = bgposition;

        bgposition = [];

        bgposition[0] = val;
        bgposition[1] = val;
    }



    if (bgposition[0].toString().indexOf("%") !== -1){
        percentage = (parseFloat(bgposition[0])/100);
        left =  ((bounds.width * percentage)-(image.width*percentage));

    }else{
        left = parseInt(bgposition[0],10);
    }

    if (bgposition[1].toString().indexOf("%") !== -1){

        percentage = (parseFloat(bgposition[1])/100);
        topPos =  ((bounds.height * percentage)-(image.height*percentage));
    }else{
        topPos = parseInt(bgposition[1],10);
    }




    return {
        top: topPos,
        left: left
    };

};

_html2canvas.Util.Extend = function (options, defaults) {
    for (var key in options) {
        if (options.hasOwnProperty(key)) {
            defaults[key] = options[key];
        }
    }
    return defaults;
};


/*
 * Derived from jQuery.contents()
 * Copyright 2010, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 */
_html2canvas.Util.Children = function( elem ) {


    var children;
    try {

        children = (elem.nodeName && elem.nodeName.toUpperCase() === "IFRAME") ?
        elem.contentDocument || elem.contentWindow.document : (function( array ){
            var ret = [];

            if ( array !== null ) {

                (function( first, second ) {
                    var i = first.length,
                    j = 0;

                    if ( typeof second.length === "number" ) {
                        for ( var l = second.length; j < l; j++ ) {
                            first[ i++ ] = second[ j ];
                        }

                    } else {
                        while ( second[j] !== undefined ) {
                            first[ i++ ] = second[ j++ ];
                        }
                    }

                    first.length = i;

                    return first;
                })( ret, array );

            }

            return ret;
        })( elem.childNodes );

    } catch (ex) {
        h2clog("html2canvas.Util.Children failed with exception: " + ex.message);
        children = [];
    }
    return children;
};

/*
  html2canvas v0.34 <http://html2canvas.hertzen.com>
  Copyright (c) 2011 Niklas von Hertzen. All rights reserved.
  http://www.twitter.com/niklasvh

  Contributor(s):
      Niklas von Hertzen <http://www.twitter.com/niklasvh>
      André Fiedler      <http://www.twitter.com/sonnenkiste>

  Released under MIT License
 */

(function(){

_html2canvas.Generate = {};

var reGradients = [
    /^(-webkit-linear-gradient)\(([a-z\s]+)([\w\d\.\s,%\(\)]+)\)$/,
    /^(-o-linear-gradient)\(([a-z\s]+)([\w\d\.\s,%\(\)]+)\)$/,
    /^(-webkit-gradient)\((linear|radial),\s((?:\d{1,3}%?)\s(?:\d{1,3}%?),\s(?:\d{1,3}%?)\s(?:\d{1,3}%?))([\w\d\.\s,%\(\)-]+)\)$/,
    /^(-moz-linear-gradient)\(((?:\d{1,3}%?)\s(?:\d{1,3}%?))([\w\d\.\s,%\(\)]+)\)$/,
    /^(-webkit-radial-gradient)\(((?:\d{1,3}%?)\s(?:\d{1,3}%?)),\s(\w+)\s([a-z-]+)([\w\d\.\s,%\(\)]+)\)$/,
    /^(-moz-radial-gradient)\(((?:\d{1,3}%?)\s(?:\d{1,3}%?)),\s(\w+)\s?([a-z-]*)([\w\d\.\s,%\(\)]+)\)$/,
    /^(-o-radial-gradient)\(((?:\d{1,3}%?)\s(?:\d{1,3}%?)),\s(\w+)\s([a-z-]+)([\w\d\.\s,%\(\)]+)\)$/
];

/*
 * TODO: Add IE10 vendor prefix (-ms) support
 * TODO: Add W3C gradient (linear-gradient) support
 * TODO: Add old Webkit -webkit-gradient(radial, ...) support
 * TODO: Maybe some RegExp optimizations are possible ;o)
 */
_html2canvas.Generate.parseGradient = function(css, bounds) {
    var gradient, i, len = reGradients.length, m1, stop, m2, m2Len, step, m3;

    for(i = 0; i < len; i+=1){
        m1 = css.match(reGradients[i]);
        if(m1) break;
    }

    if(m1) {
        switch(m1[1]) {
            case '-webkit-linear-gradient':
            case '-o-linear-gradient':

                gradient = {
                    type: 'linear',
                    x0: null,
                    y0: null,
                    x1: null,
                    y1: null,
                    colorStops: []
                };

                // get coordinates
                m2 = m1[2].match(/\w+/g);
                if(m2){
                    m2Len = m2.length;
                    for(i = 0; i < m2Len; i+=1){
                        switch(m2[i]) {
                            case 'top':
                                gradient.y0 = 0;
                                gradient.y1 = bounds.height;
                                break;

                            case 'right':
                                gradient.x0 = bounds.width;
                                gradient.x1 = 0;
                                break;

                            case 'bottom':
                                gradient.y0 = bounds.height;
                                gradient.y1 = 0;
                                break;

                            case 'left':
                                gradient.x0 = 0;
                                gradient.x1 = bounds.width;
                                break;
                        }
                    }
                }
                if(gradient.x0 === null && gradient.x1 === null){ // center
                    gradient.x0 = gradient.x1 = bounds.width / 2;
                }
                if(gradient.y0 === null && gradient.y1 === null){ // center
                    gradient.y0 = gradient.y1 = bounds.height / 2;
                }

                // get colors and stops
                m2 = m1[3].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\)(?:\s\d{1,3}(?:%|px))?)+/g);
                if(m2){
                    m2Len = m2.length;
                    step = 1 / Math.max(m2Len - 1, 1);
                    for(i = 0; i < m2Len; i+=1){
                        m3 = m2[i].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\))\s*(\d{1,3})?(%|px)?/);
                        if(m3[2]){
                            stop = parseFloat(m3[2]);
                            if(m3[3] === '%'){
                                stop /= 100;
                            } else { // px - stupid opera
                                stop /= bounds.width;
                            }
                        } else {
                            stop = i * step;
                        }
                        gradient.colorStops.push({
                            color: m3[1],
                            stop: stop
                        });
                    }
                }
                break;

            case '-webkit-gradient':

                gradient = {
                    type: m1[2] === 'radial' ? 'circle' : m1[2], // TODO: Add radial gradient support for older mozilla definitions
                    x0: 0,
                    y0: 0,
                    x1: 0,
                    y1: 0,
                    colorStops: []
                };

                // get coordinates
                m2 = m1[3].match(/(\d{1,3})%?\s(\d{1,3})%?,\s(\d{1,3})%?\s(\d{1,3})%?/);
                if(m2){
                    gradient.x0 = (m2[1] * bounds.width) / 100;
                    gradient.y0 = (m2[2] * bounds.height) / 100;
                    gradient.x1 = (m2[3] * bounds.width) / 100;
                    gradient.y1 = (m2[4] * bounds.height) / 100;
                }

                // get colors and stops
                m2 = m1[4].match(/((?:from|to|color-stop)\((?:[0-9\.]+,\s)?(?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\)\))+/g);
                if(m2){
                    m2Len = m2.length;
                    for(i = 0; i < m2Len; i+=1){
                        m3 = m2[i].match(/(from|to|color-stop)\(([0-9\.]+)?(?:,\s)?((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\))\)/);
                        stop = parseFloat(m3[2]);
                        if(m3[1] === 'from') stop = 0.0;
                        if(m3[1] === 'to') stop = 1.0;
                        gradient.colorStops.push({
                            color: m3[3],
                            stop: stop
                        });
                    }
                }
                break;

            case '-moz-linear-gradient':

                gradient = {
                    type: 'linear',
                    x0: 0,
                    y0: 0,
                    x1: 0,
                    y1: 0,
                    colorStops: []
                };

                // get coordinates
                m2 = m1[2].match(/(\d{1,3})%?\s(\d{1,3})%?/);

                // m2[1] == 0%   -> left
                // m2[1] == 50%  -> center
                // m2[1] == 100% -> right

                // m2[2] == 0%   -> top
                // m2[2] == 50%  -> center
                // m2[2] == 100% -> bottom

                if(m2){
                    gradient.x0 = (m2[1] * bounds.width) / 100;
                    gradient.y0 = (m2[2] * bounds.height) / 100;
                    gradient.x1 = bounds.width - gradient.x0;
                    gradient.y1 = bounds.height - gradient.y0;
                }

                // get colors and stops
                m2 = m1[3].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\)(?:\s\d{1,3}%)?)+/g);
                if(m2){
                    m2Len = m2.length;
                    step = 1 / Math.max(m2Len - 1, 1);
                    for(i = 0; i < m2Len; i+=1){
                        m3 = m2[i].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\))\s*(\d{1,3})?(%)?/);
                        if(m3[2]){
                            stop = parseFloat(m3[2]);
                            if(m3[3]){ // percentage
                                stop /= 100;
                            }
                        } else {
                            stop = i * step;
                        }
                        gradient.colorStops.push({
                            color: m3[1],
                            stop: stop
                        });
                    }
                }
                break;

            case '-webkit-radial-gradient':
            case '-moz-radial-gradient':
            case '-o-radial-gradient':

                gradient = {
                    type: 'circle',
                    x0: 0,
                    y0: 0,
                    x1: bounds.width,
                    y1: bounds.height,
                    cx: 0,
                    cy: 0,
                    rx: 0,
                    ry: 0,
                    colorStops: []
                };

                // center
                m2 = m1[2].match(/(\d{1,3})%?\s(\d{1,3})%?/);
                if(m2){
                    gradient.cx = (m2[1] * bounds.width) / 100;
                    gradient.cy = (m2[2] * bounds.height) / 100;
                }

                // size
                m2 = m1[3].match(/\w+/);
                m3 = m1[4].match(/[a-z-]*/);
                if(m2 && m3){
                    switch(m3[0]){
                        case 'farthest-corner':
                        case 'cover': // is equivalent to farthest-corner
                        case '': // mozilla removes "cover" from definition :(
                            var tl = Math.sqrt(Math.pow(gradient.cx, 2) + Math.pow(gradient.cy, 2));
                            var tr = Math.sqrt(Math.pow(gradient.cx, 2) + Math.pow(gradient.y1 - gradient.cy, 2));
                            var br = Math.sqrt(Math.pow(gradient.x1 - gradient.cx, 2) + Math.pow(gradient.y1 - gradient.cy, 2));
                            var bl = Math.sqrt(Math.pow(gradient.x1 - gradient.cx, 2) + Math.pow(gradient.cy, 2));
                            gradient.rx = gradient.ry = Math.max(tl, tr, br, bl);
                            break;
                        case 'closest-corner':
                            var tl = Math.sqrt(Math.pow(gradient.cx, 2) + Math.pow(gradient.cy, 2));
                            var tr = Math.sqrt(Math.pow(gradient.cx, 2) + Math.pow(gradient.y1 - gradient.cy, 2));
                            var br = Math.sqrt(Math.pow(gradient.x1 - gradient.cx, 2) + Math.pow(gradient.y1 - gradient.cy, 2));
                            var bl = Math.sqrt(Math.pow(gradient.x1 - gradient.cx, 2) + Math.pow(gradient.cy, 2));
                            gradient.rx = gradient.ry = Math.min(tl, tr, br, bl);
                            break;
                        case 'farthest-side':
                            if(m2[0] === 'circle'){
                                gradient.rx = gradient.ry = Math.max(
                                    gradient.cx,
                                    gradient.cy,
                                    gradient.x1 - gradient.cx,
                                    gradient.y1 - gradient.cy
                                );
                            } else { // ellipse

                                gradient.type = m2[0];

                                gradient.rx = Math.max(
                                    gradient.cx,
                                    gradient.x1 - gradient.cx
                                );
                                gradient.ry = Math.max(
                                    gradient.cy,
                                    gradient.y1 - gradient.cy
                                );
                            }
                            break;
                        case 'closest-side':
                        case 'contain': // is equivalent to closest-side
                            if(m2[0] === 'circle'){
                                gradient.rx = gradient.ry = Math.min(
                                    gradient.cx,
                                    gradient.cy,
                                    gradient.x1 - gradient.cx,
                                    gradient.y1 - gradient.cy
                                );
                            } else { // ellipse

                                gradient.type = m2[0];

                                gradient.rx = Math.min(
                                    gradient.cx,
                                    gradient.x1 - gradient.cx
                                );
                                gradient.ry = Math.min(
                                    gradient.cy,
                                    gradient.y1 - gradient.cy
                                );
                            }
                            break;

                        // TODO: add support for "30px 40px" sizes (webkit only)
                    }
                }

                // color stops
                m2 = m1[5].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\)(?:\s\d{1,3}(?:%|px))?)+/g);
                if(m2){
                    m2Len = m2.length;
                    step = 1 / Math.max(m2Len - 1, 1);
                    for(i = 0; i < m2Len; i+=1){
                        m3 = m2[i].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\))\s*(\d{1,3})?(%|px)?/);
                        if(m3[2]){
                            stop = parseFloat(m3[2]);
                            if(m3[3] === '%'){
                                stop /= 100;
                            } else { // px - stupid opera
                                stop /= bounds.width;
                            }
                        } else {
                            stop = i * step;
                        }
                        gradient.colorStops.push({
                            color: m3[1],
                            stop: stop
                        });
                    }
                }
                break;
        }
    }

    return gradient;
};

_html2canvas.Generate.Gradient = function(src, bounds) {
    var canvas = document.createElement('canvas'),
    ctx = canvas.getContext('2d'),
    gradient, grad, i, len, img;

    canvas.width = bounds.width;
    canvas.height = bounds.height;

    // TODO: add support for multi defined background gradients (like radial gradient example in background.html)
    gradient = _html2canvas.Generate.parseGradient(src, bounds);

    img = new Image();

    if(gradient){
        if(gradient.type === 'linear'){
            grad = ctx.createLinearGradient(gradient.x0, gradient.y0, gradient.x1, gradient.y1);

            for (i = 0, len = gradient.colorStops.length; i < len; i+=1) {
                try {
                    grad.addColorStop(gradient.colorStops[i].stop, gradient.colorStops[i].color);
                }
                catch(e) {
                    h2clog(['failed to add color stop: ', e, '; tried to add: ', gradient.colorStops[i], '; stop: ', i, '; in: ', src]);
                }
            }

            ctx.fillStyle = grad;
            ctx.fillRect(0, 0, bounds.width, bounds.height);

            img.src = canvas.toDataURL();
        } else if(gradient.type === 'circle'){

            grad = ctx.createRadialGradient(gradient.cx, gradient.cy, 0, gradient.cx, gradient.cy, gradient.rx);

            for (i = 0, len = gradient.colorStops.length; i < len; i+=1) {
                try {
                    grad.addColorStop(gradient.colorStops[i].stop, gradient.colorStops[i].color);
                }
                catch(e) {
                    h2clog(['failed to add color stop: ', e, '; tried to add: ', gradient.colorStops[i], '; stop: ', i, '; in: ', src]);
                }
            }

            ctx.fillStyle = grad;
            ctx.fillRect(0, 0, bounds.width, bounds.height);

            img.src = canvas.toDataURL();
        } else if(gradient.type === 'ellipse'){

            // draw circle
            var canvasRadial = document.createElement('canvas'),
                ctxRadial = canvasRadial.getContext('2d'),
                ri = Math.max(gradient.rx, gradient.ry),
                di = ri * 2, imgRadial;

            canvasRadial.width = canvasRadial.height = di;

            grad = ctxRadial.createRadialGradient(gradient.rx, gradient.ry, 0, gradient.rx, gradient.ry, ri);

            for (i = 0, len = gradient.colorStops.length; i < len; i+=1) {
                try {
                    grad.addColorStop(gradient.colorStops[i].stop, gradient.colorStops[i].color);
                }
                catch(e) {
                    h2clog(['failed to add color stop: ', e, '; tried to add: ', gradient.colorStops[i], '; stop: ', i, '; in: ', src]);
                }
            }

            ctxRadial.fillStyle = grad;
            ctxRadial.fillRect(0, 0, di, di);

            ctx.fillStyle = gradient.colorStops[i - 1].color;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            imgRadial = new Image();
            imgRadial.onload = function() { // wait until the image is filled

                // transform circle to ellipse
                ctx.drawImage(imgRadial, gradient.cx - gradient.rx, gradient.cy - gradient.ry, 2 * gradient.rx, 2 * gradient.ry);

                img.src = canvas.toDataURL();

            }
            imgRadial.src = canvasRadial.toDataURL();
        }
    }

    return img;
};

_html2canvas.Generate.ListAlpha = function(number) {
    var tmp = "",
    modulus;

    do {
        modulus = number % 26;
        tmp = String.fromCharCode((modulus) + 64) + tmp;
        number = number / 26;
    }while((number*26) > 26);

    return tmp;
};

_html2canvas.Generate.ListRoman = function(number) {
    var romanArray = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"],
    decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
    roman = "",
    v,
    len = romanArray.length;

    if (number <= 0 || number >= 4000) {
        return number;
    }

    for (v=0; v < len; v+=1) {
        while (number >= decimal[v]) {
            number -= decimal[v];
            roman += romanArray[v];
        }
    }

    return roman;

};

})();
/*
  html2canvas v0.34 <http://html2canvas.hertzen.com>
  Copyright (c) 2011 Niklas von Hertzen. All rights reserved.
  http://www.twitter.com/niklasvh

  Released under MIT License
 */

/*
 *  New function for traversing elements
 */

_html2canvas.Parse = function ( images, options ) {
    window.scroll(0,0);

    var support = {
        rangeBounds: false,
        svgRendering: options.svgRendering && (function( ){
            var img = new Image(),
            canvas = document.createElement("canvas"),
            ctx = (canvas.getContext === undefined) ? false : canvas.getContext("2d");
            if (ctx === false) {
                // browser doesn't support canvas, good luck supporting SVG on canvas
                return false;
            }
            canvas.width = canvas.height = 10;
            img.src = [
            "data:image/svg+xml,",
            "<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10'>",
            "<foreignObject width='10' height='10'>",
            "<div xmlns='http://www.w3.org/1999/xhtml' style='width:10;height:10;'>",
            "sup",
            "</div>",
            "</foreignObject>",
            "</svg>"
            ].join("");
            try {
                ctx.drawImage(img, 0, 0);
                canvas.toDataURL();
            } catch(e) {
                return false;
            }
            h2clog('html2canvas: Parse: SVG powered rendering available');
            return true;

        })()
    },
    element = (( options.elements === undefined ) ? document.body : options.elements[0]), // select body by default
    needReorder = false,
    numDraws = 0,
    fontData = {},
    doc = element.ownerDocument,
    ignoreElementsRegExp = new RegExp("(" + options.ignoreElements + ")"),
    body = doc.body,
    r,
    testElement,
    rangeBounds,
    rangeHeight,
    stack,
    ctx,
    docDim,
    i,
    children,
    childrenLen;


    function docSize(){

        return {
            width: Math.max(
                Math.max(doc.body.scrollWidth, doc.documentElement.scrollWidth),
                Math.max(doc.body.offsetWidth, doc.documentElement.offsetWidth),
                Math.max(doc.body.clientWidth, doc.documentElement.clientWidth)
                ),
            height: Math.max(
                Math.max(doc.body.scrollHeight, doc.documentElement.scrollHeight),
                Math.max(doc.body.offsetHeight, doc.documentElement.offsetHeight),
                Math.max(doc.body.clientHeight, doc.documentElement.clientHeight)
                )
        };

    }

    images = images || {};

    // Test whether we can use ranges to measure bounding boxes
    // Opera doesn't provide valid bounds.height/bottom even though it supports the method.


    if (doc.createRange) {
        r = doc.createRange();
        //this.support.rangeBounds = new Boolean(r.getBoundingClientRect);
        if (r.getBoundingClientRect){
            testElement = doc.createElement('boundtest');
            testElement.style.height = "123px";
            testElement.style.display = "block";
            body.appendChild(testElement);

            r.selectNode(testElement);
            rangeBounds = r.getBoundingClientRect();
            rangeHeight = rangeBounds.height;

            if (rangeHeight === 123) {
                support.rangeBounds = true;
            }
            body.removeChild(testElement);


        }

    }


    /*
    var rootStack = new this.storageContext($(document).width(),$(document).height());
    rootStack.opacity = this.getCSS(this.element,"opacity");
    var stack = this.newElement(this.element,rootStack);


    this.parseElement(this.element,stack);
     */




    var getCSS = _html2canvas.Util.getCSS;
    function getCSSInt(element, attribute) {
        var val = parseInt(getCSS(element, attribute), 10);
        return (isNaN(val)) ? 0 : val; // borders in old IE are throwing 'medium' for demo.html
    }

    // Drawing a rectangle
    function renderRect (ctx, x, y, w, h, bgcolor) {
        if ( bgcolor !== "transparent" ){
            ctx.setVariable("fillStyle", bgcolor);
            ctx.fillRect (x, y, w, h);
            numDraws+=1;
        }
    }


    function textTransform (text, transform) {
        switch(transform){
            case "lowercase":
                return text.toLowerCase();

            case "capitalize":
                return text.replace( /(^|\s|:|-|\(|\))([a-z])/g , function (m, p1, p2) {
                    if (m.length > 0) {
                        return p1 + p2.toUpperCase();
                    }
                } );

            case "uppercase":
                return text.toUpperCase();

            default:
                return text;

        }

    }

    function trimText (text) {
        return text.replace(/^\s*/g, "").replace(/\s*$/g, "");
    }

    function fontMetrics (font, fontSize) {

        if (fontData[font + "-" + fontSize] !== undefined) {
            return fontData[font + "-" + fontSize];
        }


        var container = doc.createElement('div'),
        img = doc.createElement('img'),
        span = doc.createElement('span'),
        baseline,
        middle,
        metricsObj;


        container.style.visibility = "hidden";
        container.style.fontFamily = font;
        container.style.fontSize = fontSize;
        container.style.margin = 0;
        container.style.padding = 0;

        body.appendChild(container);



        // http://probablyprogramming.com/2009/03/15/the-tiniest-gif-ever (handtinywhite.gif)
        img.src = "data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACwAAAAAAQABAAACAkQBADs=";
        img.width = 1;
        img.height = 1;

        img.style.margin = 0;
        img.style.padding = 0;
        img.style.verticalAlign = "baseline";

        span.style.fontFamily = font;
        span.style.fontSize = fontSize;
        span.style.margin = 0;
        span.style.padding = 0;




        span.appendChild(doc.createTextNode('Hidden Text'));
        container.appendChild(span);
        container.appendChild(img);
        baseline = (img.offsetTop - span.offsetTop) + 1;

        container.removeChild(span);
        container.appendChild(doc.createTextNode('Hidden Text'));

        container.style.lineHeight = "normal";
        img.style.verticalAlign = "super";

        middle = (img.offsetTop-container.offsetTop) + 1;
        metricsObj = {
            baseline: baseline,
            lineWidth: 1,
            middle: middle
        };


        fontData[font + "-" + fontSize] = metricsObj;

        body.removeChild(container);

        return metricsObj;

    }


    function drawText(currentText, x, y, ctx){
        if (trimText(currentText).length>0) {
            ctx.fillText(currentText,x,y);
            numDraws+=1;
        }
    }


    function renderText(el, textNode, stack) {
        var ctx = stack.ctx,
        family = getCSS(el, "fontFamily"),
        size = getCSS(el, "fontSize"),
        color = getCSS(el, "color"),
        text_decoration = getCSS(el, "textDecoration"),
        text_align = getCSS(el, "textAlign"),
        letter_spacing = getCSS(el, "letterSpacing"),
        bounds,
        text,
        metrics,
        renderList,
        listLen,
        bold = getCSS(el, "fontWeight"),
        font_style = getCSS(el, "fontStyle"),
        font_variant = getCSS(el, "fontVariant"),
        align = false,
        newTextNode,
        textValue,
        textOffset = 0,
        oldTextNode,
        c,
        range,
        parent,
        wrapElement,
        backupText;

        // apply text-transform:ation to the text



        textNode.nodeValue = textTransform(textNode.nodeValue, getCSS(el, "textTransform"));
        text = trimText(textNode.nodeValue);

        if (text.length>0){

            if (text_decoration !== "none"){
                metrics = fontMetrics(family, size);
            }

            text_align = text_align.replace(["-webkit-auto"],["auto"]);

            if (options.letterRendering === false && /^(left|right|justify|auto)$/.test(text_align) && /^(normal|none)$/.test(letter_spacing)){
                // this.setContextVariable(ctx,"textAlign",text_align);
                renderList = textNode.nodeValue.split(/(\b| )/);

            }else{
                //  this.setContextVariable(ctx,"textAlign","left");
                renderList = textNode.nodeValue.split("");
            }

            switch(parseInt(bold, 10)){
                case 401:
                    bold = "bold";
                    break;
                case 400:
                    bold = "normal";
                    break;
            }

            ctx.setVariable("fillStyle", color);

            /*
              need to be defined in the order as defined in http://www.w3.org/TR/CSS21/fonts.html#font-shorthand
              to properly work in Firefox
             */
            ctx.setVariable("font", font_style+ " " + font_variant  + " " + bold + " " + size + " " + family);

            if (align){
                ctx.setVariable("textAlign", "right");
            }else{
                ctx.setVariable("textAlign", "left");
            }


            /*
        if (stack.clip){
        ctx.rect (stack.clip.left, stack.clip.top, stack.clip.width, stack.clip.height);
        ctx.clip();
        }
             */


            oldTextNode = textNode;


            for ( c=0, listLen = renderList.length; c < listLen; c+=1 ) {
                textValue = null;



                if (support.rangeBounds){
                    // getBoundingClientRect is supported for ranges
                    if (text_decoration !== "none" || trimText(renderList[c]).length !== 0) {
                        textValue = renderList[c];
                        if (doc.createRange){
                            range = doc.createRange();

                            range.setStart(textNode, textOffset);
                            range.setEnd(textNode, textOffset + textValue.length);
                        }else{
                            // TODO add IE support
                            range = body.createTextRange();
                        }

                        if (range.getBoundingClientRect()) {
                            bounds = range.getBoundingClientRect();
                        }else{
                            bounds = {};
                        }

                    }
                }else{
                    // it isn't supported, so let's wrap it inside an element instead and get the bounds there

                    // IE 9 bug
                    if (typeof oldTextNode.nodeValue !== "string" ){
                        continue;
                    }

                    newTextNode = oldTextNode.splitText(renderList[c].length);

                    parent = oldTextNode.parentNode;
                    wrapElement = doc.createElement('wrapper');
                    backupText = oldTextNode.cloneNode(true);

                    wrapElement.appendChild(oldTextNode.cloneNode(true));
                    parent.replaceChild(wrapElement, oldTextNode);

                    bounds = _html2canvas.Util.Bounds(wrapElement);

                    textValue = oldTextNode.nodeValue;

                    oldTextNode = newTextNode;
                    parent.replaceChild(backupText, wrapElement);


                }

                if (textValue !== null){
                    drawText(textValue, bounds.left, bounds.bottom, ctx);
                }

                switch(text_decoration) {
                    case "underline":
                        // Draws a line at the baseline of the font
                        // TODO As some browsers display the line as more than 1px if the font-size is big, need to take that into account both in position and size
                        renderRect(ctx, bounds.left, Math.round(bounds.top + metrics.baseline + metrics.lineWidth), bounds.width, 1, color);
                        break;
                    case "overline":
                        renderRect(ctx, bounds.left, bounds.top, bounds.width, 1, color);
                        break;
                    case "line-through":
                        // TODO try and find exact position for line-through
                        renderRect(ctx, bounds.left, Math.ceil(bounds.top + metrics.middle + metrics.lineWidth), bounds.width, 1, color);
                        break;

                }





                textOffset += renderList[c].length;

            }



        }

    }

    function listPosition (element, val) {
        var boundElement = doc.createElement( "boundelement" ),
        type,
        bounds;

        boundElement.style.display = "inline";
        //boundElement.style.width = "1px";
        //boundElement.style.height = "1px";

        type = element.style.listStyleType;
        element.style.listStyleType = "none";

        boundElement.appendChild( doc.createTextNode( val ) );


        element.insertBefore(boundElement, element.firstChild);


        bounds = _html2canvas.Util.Bounds( boundElement );
        element.removeChild( boundElement );
        element.style.listStyleType = type;
        return bounds;

    }
    

    
    function elementIndex( el ) {
        var i = -1,
        count = 1,
        childs = el.parentNode.childNodes;

        if ( el.parentNode ) {
            while( childs[ ++i ] !== el ) {
                if ( childs[ i ].nodeType === 1 ) {
                    count++;
                }
            }
            return count;
        } else {
            return -1;
        }
       
    }

    function renderListItem(element, stack, elBounds) {


        var position = getCSS(element, "listStylePosition"),
        x,
        y,
        type = getCSS(element, "listStyleType"),
        currentIndex,
        text,
        listBounds,
        bold = getCSS(element, "fontWeight");

        if (/^(decimal|decimal-leading-zero|upper-alpha|upper-latin|upper-roman|lower-alpha|lower-greek|lower-latin|lower-roman)$/i.test(type)) {

            currentIndex = elementIndex( element );

            switch(type){
                case "decimal":
                    text = currentIndex;
                    break;
                case "decimal-leading-zero":
                    if (currentIndex.toString().length === 1){
                        text = currentIndex = "0" + currentIndex.toString();
                    }else{
                        text = currentIndex.toString();
                    }
                    break;
                case "upper-roman":
                    text = _html2canvas.Generate.ListRoman( currentIndex );
                    break;
                case "lower-roman":
                    text = _html2canvas.Generate.ListRoman( currentIndex ).toLowerCase();
                    break;
                case "lower-alpha":
                    text = _html2canvas.Generate.ListAlpha( currentIndex ).toLowerCase();
                    break;
                case "upper-alpha":
                    text = _html2canvas.Generate.ListAlpha( currentIndex );
                    break;
            }


            text += ". ";
            listBounds = listPosition(element, text);



            switch(bold){
                case 401:
                    bold = "bold";
                    break;
                case 400:
                    bold = "normal";
                    break;
            }




            ctx.setVariable( "fillStyle", getCSS(element, "color") );
            ctx.setVariable( "font", getCSS(element, "fontVariant") + " " + bold + " " + getCSS(element, "fontStyle") + " " + getCSS(element, "fontSize") + " " + getCSS(element, "fontFamily") );


            if ( position === "inside" ) {
                ctx.setVariable("textAlign", "left");
                //   this.setFont(stack.ctx, element, false);
                x = elBounds.left;

            }else{
                return;
            /*
                 TODO really need to figure out some more accurate way to try and find the position.
                 as defined in http://www.w3.org/TR/CSS21/generate.html#propdef-list-style-position, it does not even have a specified "correct" position, so each browser
                 may display it whatever way it feels like.
                 "The position of the list-item marker adjacent to floats is undefined in CSS 2.1. CSS 2.1 does not specify the precise location of the marker box or its position in the painting order"

                ctx.setVariable("textAlign", "right");
                //  this.setFont(stack.ctx, element, true);
                x = elBounds.left - 10;
                 */
            }

            y = listBounds.bottom;

            drawText(text, x, y, ctx);


        }


    }

    function loadImage (src){
        var img = images[src];
        if (img && img.succeeded === true) {
            return img.img;
        } else {
            return false;
        }
    }






    function clipBounds(src, dst){

        var x = Math.max(src.left, dst.left),
        y = Math.max(src.top, dst.top),
        x2 = Math.min((src.left + src.width), (dst.left + dst.width)),
        y2 = Math.min((src.top + src.height), (dst.top + dst.height));

        return {
            left:x,
            top:y,
            width:x2-x,
            height:y2-y
        };

    }

    function setZ(zIndex, parentZ){
        // TODO fix static elements overlapping relative/absolute elements under same stack, if they are defined after them
        var newContext;
        if (!parentZ){
            newContext = h2czContext(0);
            return newContext;
        }

        if (zIndex !== "auto"){
            needReorder = true;
            newContext = h2czContext(zIndex);
            parentZ.children.push(newContext);
            return newContext;

        }

        return parentZ;

    }

    function renderBorders(el, ctx, bounds, clip){

        /*
         *  TODO add support for different border-style's than solid
         */

        var x = bounds.left,
        y = bounds.top,
        w = bounds.width,
        h = bounds.height,
        borderSide,
        borderData,
        bx,
        by,
        bw,
        bh,
        rw,
        i,
        borderArgs,
        borderBounds,
        borders = (function(el){
            var borders = [],
            sides = ["Top","Right","Bottom","Left"],
            s;

            for (s = 0; s < 4; s+=1){
                borders.push({
                    width: getCSSInt(el, 'border' + sides[s] + 'Width'),
                    color: getCSS(el, 'border' + sides[s] + 'Color')
                });
            }

            return borders;

        }(el)),
        // http://www.w3.org/TR/css3-background/#the-border-radius
        borderRadius = (function( el ) {
            var borders = [],
            sides = ["TopLeft","TopRight","BottomRight","BottomLeft"],
            s;
            
            for (s = 0; s < 4; s+=1){
                borders.push( getCSS(el, 'border' + sides[s] + 'Radius') );
            }

            return borders;
        })( el );



        for ( borderSide = 0; borderSide < 4; borderSide+=1 ) {
            borderData = borders[ borderSide ];
            borderArgs = [];
            if (borderData.width>0){
                bx = x;
                by = y;
                bw = w;
                bh = h - (borders[2].width);

                switch(borderSide){
                    case 0:
                        // top border
                        bh = borders[0].width;
                        
                        i = 0;
                        borderArgs[ i++ ] = [ "line", bx, by ];  // top left
                        borderArgs[ i++ ] = [ "line", bx + bw, by ]; // top right
                        borderArgs[ i++ ] = [ "line", bx + bw - borders[ 1 ].width, by + bh  ]; // bottom right
                        borderArgs[ i++ ] = [ "line", bx + borders[ 3 ].width, by + bh ]; // bottom left
                        
                        break;
                    case 1:
                        // right border
                        bx = x + w - (borders[1].width);
                        bw = borders[1].width;
                        
                        i = 0;
                        borderArgs[ i++ ] = [ "line", bx, by + borders[ 0 ].width];  // top left
                        borderArgs[ i++ ] = [ "line", bx + bw, by ]; // top right
                        borderArgs[ i++ ] = [ "line", bx + bw, by + bh + borders[ 2 ].width ]; // bottom right
                        borderArgs[ i++ ] = [ "line", bx, by + bh ]; // bottom left
                        
                        break;
                    case 2:
                        // bottom border
                        by = (by + h) - (borders[2].width);
                        bh = borders[2].width;
                                             
                                    
                        i = 0;
                        /*    
                        // top left
                        if ( borderRadius[ 3 ][ 0 ] > 0 ) {
                            
                            borderArgs[ i++ ] = [ "line", 
                            bx + borders[ 3 ].width, 
                            by - (borderRadius[ 3 ][ 1 ]) + borders[ 2 ].width
                            ];  
                            
                            borderArgs[ i++ ] = [ "quadraticCurve", 
                            bx + borders[ 3 ].width,
                            by,
                            bx + borderRadius[ 3 ][ 0 ], 
                            by,    
                            ];  
                            
                        
                            rw = ( borders[ 3 ].width === 0 ) ? 1 : borders[ 2 ].width / (borders[ 3 ].width + borders[ 2 ].width);

                            borderArgs[ i++ ] = [ "line", 
                            bx + (borderRadius[ 3 ][ 0 ] * ( 1-rw )), 
                            by - (borderRadius[ 3 ][ 1 ] - borders[ 2 ].width) + (borderRadius[ 3 ][ 1 ] * ( 1-rw ))
                            ];  
                          
                            borderArgs[ i++ ] = [ "quadraticCurve", 
                            bx + borders[ 3 ].width,
                            by,
                            bx + borders[ 3 ].width + borderRadius[ 3 ][ 0 ], 
                            by,    
                            ];  
                             
                            borderArgs[ i++ ] = [ "bezierCurve", 
                            bx + (borderRadius[ 3 ][ 0 ] * ( 1-rw )),
                            by,
                            bx + (borderRadius[ 3 ][ 0 ] * ( 1-rw )),
                            by,
                            bx + borders[ 3 ].width + borderRadius[ 3 ][ 0 ], 
                            by,    
                            ];   
                            
                        } else {
                             borderArgs[ i++ ] = [ "line", bx + borders[ 3 ].width, by ]; 
                        }
                         */
                        borderArgs[ i++ ] = [ "line", bx + borders[ 3 ].width, by ]; 
                        borderArgs[ i++ ] = [ "line", bx + bw - borders[ 2 ].width, by ]; // top right
                        borderArgs[ i++ ] = [ "line", bx + bw, by + bh ]; // bottom right
                        borderArgs[ i++ ] = [ "line", bx, by + bh ]; // bottom left
                        
                        break;
                    case 3:
                        // left border
                        bw = borders[3].width;
                        
                        i = 0;
                        borderArgs[ i++ ] = [ "line", bx, by ];  // top left
                        borderArgs[ i++ ] = [ "line", bx + bw, by + borders[ 0 ].width ]; // top right
                        borderArgs[ i++ ] = [ "line", bx + bw, by + bh ]; // bottom right
                        borderArgs[ i++ ] = [ "line", bx, by + bh + borders[ 2 ].width ]; // bottom left
                        
                        break;
                }

                borderBounds = {
                    left:bx,
                    top:by,
                    width: bw,
                    height:bh
                };

                if (clip){
                    borderBounds = clipBounds(borderBounds, clip);
                }


                if ( borderBounds.width > 0 && borderBounds.height > 0 ) {
                    
                    if ( borderData.color !== "transparent" ){
                        ctx.setVariable( "fillStyle", borderData.color );
                        
                        var shape = ctx.drawShape(),
                        numBorderArgs = borderArgs.length;
                        
                        for ( i = 0; i < numBorderArgs; i++ ) {
                            shape[( i === 0) ? "moveTo" : borderArgs[ i ][ 0 ] + "To" ].apply( null, borderArgs[ i ].slice(1) );
                        }

                        numDraws+=1;
                    }
                    
                    
            
                    
                //  renderRect(ctx, bx, by, borderBounds.width, borderBounds.height, borderData.color);
                }


            }
        }

        return borders;

    }


    function renderFormValue (el, bounds, stack){

        var valueWrap = doc.createElement('valuewrap'),
        cssArr = ['lineHeight','textAlign','fontFamily','color','fontSize','paddingLeft','paddingTop','width','height','border','borderLeftWidth','borderTopWidth'],
        i,
        textValue,
        textNode,
        arrLen,
        style;

        for (i = 0, arrLen = cssArr.length; i < arrLen; i+=1){
            style = cssArr[i];

            try {
                valueWrap.style[style] = getCSS(el, style);
            } catch( e ) {
                // Older IE has issues with "border"
                h2clog("html2canvas: Parse: Exception caught in renderFormValue: " + e.message);
            }
        }


        valueWrap.style.borderColor = "black";
        valueWrap.style.borderStyle = "solid";
        valueWrap.style.display = "block";
        valueWrap.style.position = "absolute";
        if (/^(submit|reset|button|text|password)$/.test(el.type) || el.nodeName === "SELECT"){
            valueWrap.style.lineHeight = getCSS(el, "height");
        }


        valueWrap.style.top = bounds.top + "px";
        valueWrap.style.left = bounds.left + "px";

        if (el.nodeName === "SELECT"){
            // TODO increase accuracy of text position
            textValue = el.options[el.selectedIndex].text;
        } else{
            textValue = el.value;
        }
        textNode = doc.createTextNode(textValue);

        valueWrap.appendChild(textNode);
        body.appendChild(valueWrap);


        renderText(el, textNode, stack);
        body.removeChild(valueWrap);



    }





    function renderImage (ctx, image, sx, sy, sw, sh, dx, dy, dw, dh) {
        ctx.drawImage(
            image,
            sx, //sx
            sy, //sy
            sw, //sw
            sh, //sh
            dx, //dx
            dy, // dy
            dw, //dw
            dh //dh
            );
        numDraws+=1;

    }


    function renderBackgroundRepeat (ctx, image, x, y, width, height, elx, ely){
        var sourceX = 0,
        sourceY=0;
        if (elx-x>0){
            sourceX = elx-x;
        }

        if (ely-y>0){
            sourceY = ely-y;
        }

        renderImage(
            ctx,
            image,
            sourceX, // source X
            sourceY, // source Y
            width-sourceX, // source Width
            height-sourceY, // source Height
            x+sourceX, // destination X
            y+sourceY, // destination Y
            width-sourceX, // destination width
            height-sourceY // destination height
            );
    }


    function renderBackgroundRepeatY (ctx, image, bgp, x, y, w, h){

        var height,
        width = Math.min(image.width,w),bgy;

        bgp.top = bgp.top-Math.ceil(bgp.top/image.height)*image.height;


        for(bgy=(y+bgp.top);bgy<h+y;){


            if ( Math.floor(bgy+image.height)>h+y){
                height = (h+y)-bgy;
            }else{
                height = image.height;
            }
            renderBackgroundRepeat(ctx,image,x+bgp.left,bgy,width,height,x,y);

            bgy = Math.floor(bgy+image.height);

        }
    }

    function renderBackgroundRepeatX(ctx, image, bgp, x, y, w, h){

        var height = Math.min(image.height,h),
        width,bgx;


        bgp.left = bgp.left-Math.ceil(bgp.left/image.width)*image.width;


        for (bgx=(x+bgp.left);bgx<w+x;) {

            if (Math.floor(bgx+image.width)>w+x){
                width = (w+x)-bgx;
            }else{
                width = image.width;
            }

            renderBackgroundRepeat(ctx,image,bgx,(y+bgp.top),width,height,x,y);

            bgx = Math.floor(bgx+image.width);


        }
    }

    function renderBackground(el,bounds,ctx){

        // TODO add support for multi background-images
        var background_image = getCSS(el, "backgroundImage"),
        background_repeat = getCSS(el, "backgroundRepeat").split(",")[0],
        image,
        bgp,
        bgy,
        bgw,
        bgsx,
        bgsy,
        bgdx,
        bgdy,
        bgh,
        h,
        height,
        add;

        //   if (typeof background_image !== "undefined" && /^(1|none)$/.test(background_image) === false && /^(-webkit|-moz|linear-gradient|-o-)/.test(background_image)===false){

        if ( !/data:image\/.*;base64,/i.test(background_image) && !/^(-webkit|-moz|linear-gradient|-o-)/.test(background_image) ) {
            background_image = background_image.split(",")[0];
        }

        if ( typeof background_image !== "undefined" && /^(1|none)$/.test( background_image ) === false ) {
            background_image = _html2canvas.Util.backgroundImage( background_image );
            image = loadImage( background_image );


            bgp = _html2canvas.Util.BackgroundPosition(el, bounds, image);

            // TODO add support for background-origin
            if ( image ){
                switch ( background_repeat ) {

                    case "repeat-x":
                        renderBackgroundRepeatX( ctx, image, bgp, bounds.left, bounds.top, bounds.width, bounds.height );
                        break;

                    case "repeat-y":
                        renderBackgroundRepeatY( ctx, image, bgp, bounds.left, bounds.top, bounds.width, bounds.height );
                        break;

                    case "no-repeat":
                        /*
                    this.drawBackgroundRepeat(
                        ctx,
                        image,
                        bgp.left+bounds.left, // sx
                        bgp.top+bounds.top, // sy
                        Math.min(bounds.width,image.width),
                        Math.min(bounds.height,image.height),
                        bounds.left,
                        bounds.top
                        );*/


                       
                        bgw = bounds.width - bgp.left;
                        bgh = bounds.height - bgp.top;
                        bgsx = bgp.left;
                        bgsy = bgp.top;
                        bgdx = bgp.left+bounds.left;
                        bgdy = bgp.top+bounds.top;

                        //
                        //     bgw = Math.min(bgw,image.width);
                        //  bgh = Math.min(bgh,image.height);

                        if (bgsx<0){
                            bgsx = Math.abs(bgsx);
                            bgdx += bgsx;
                            bgw = Math.min(bounds.width,image.width-bgsx);
                        }else{
                            bgw = Math.min(bgw,image.width);
                            bgsx = 0;
                        }

                        if (bgsy<0){
                            bgsy = Math.abs(bgsy);
                            bgdy += bgsy;
                            // bgh = bgh-bgsy;
                            bgh = Math.min(bounds.height,image.height-bgsy);
                        }else{
                            bgh = Math.min(bgh,image.height);
                            bgsy = 0;
                        }


                        if (bgh>0 && bgw > 0){
                            renderImage(
                                ctx,
                                image,
                                bgsx, // source X : 0
                                bgsy, // source Y : 1695
                                bgw, // source Width : 18
                                bgh, // source Height : 1677
                                bgdx, // destination X :906
                                bgdy, // destination Y : 1020
                                bgw, // destination width : 18
                                bgh // destination height : 1677
                                );

                        }
                        break;
                    default:



                        bgp.top = bgp.top-Math.ceil(bgp.top/image.height)*image.height;


                        for(bgy=(bounds.top+bgp.top);bgy<bounds.height+bounds.top;){



                            h = Math.min(image.height,(bounds.height+bounds.top)-bgy);


                            if ( Math.floor(bgy+image.height)>h+bgy){
                                height = (h+bgy)-bgy;
                            }else{
                                height = image.height;
                            }
                            // console.log(height);

                            if (bgy<bounds.top){
                                add = bounds.top-bgy;
                                bgy = bounds.top;

                            }else{
                                add = 0;
                            }

                            renderBackgroundRepeatX(ctx,image,bgp,bounds.left,bgy,bounds.width,height);
                            if (add>0){
                                bgp.top += add;
                            }
                            bgy = Math.floor(bgy+image.height)-add;
                        }
                        break;


                }
            }else{
                h2clog("html2canvas: Error loading background:" + background_image);
            //console.log(images);
            }

        }
    }



    function renderElement(el, parentStack){

        var bounds = _html2canvas.Util.Bounds(el),
        x = bounds.left,
        y = bounds.top,
        w = bounds.width,
        h = bounds.height,
        image,
        bgcolor = getCSS(el, "backgroundColor"),
        cssPosition = getCSS(el, "position"),
        zindex,
        opacity = getCSS(el, "opacity"),
        stack,
        stackLength,
        borders,
        ctx,
        bgbounds,
        imgSrc,
        paddingLeft,
        paddingTop,
        paddingRight,
        paddingBottom;

        if (!parentStack){
            docDim = docSize();
            parentStack = {
                opacity: 1
            };
        }else{
            docDim = {};
        }


        //var zindex = this.formatZ(this.getCSS(el,"zIndex"),cssPosition,parentStack.zIndex,el.parentNode);

        zindex = setZ( getCSS( el, "zIndex"), parentStack.zIndex );



        stack = {
            ctx: h2cRenderContext( docDim.width || w , docDim.height || h ),
            zIndex: zindex,
            opacity: opacity * parentStack.opacity,
            cssPosition: cssPosition
        };



        // TODO correct overflow for absolute content residing under a static position

        if (parentStack.clip){
            stack.clip = _html2canvas.Util.Extend( {}, parentStack.clip );
        //stack.clip = parentStack.clip;
        //   stack.clip.height = stack.clip.height - parentStack.borders[2].width;
        }


        if ( options.useOverflow === true && /(hidden|scroll|auto)/.test(getCSS(el, "overflow")) === true && /(BODY)/i.test(el.nodeName) === false ){
            if (stack.clip){
                stack.clip = clipBounds(stack.clip, bounds);
            }else{
                stack.clip = bounds;
            }
        }


        stackLength =  zindex.children.push(stack);

        ctx = zindex.children[stackLength-1].ctx;

        ctx.setVariable("globalAlpha", stack.opacity);

        // draw element borders
        borders = renderBorders(el, ctx, bounds, false);
        stack.borders = borders;


        // let's modify clip area for child elements, so borders dont get overwritten

        /*
    if (stack.clip){
        stack.clip.width = stack.clip.width-(borders[1].width);
        stack.clip.height = stack.clip.height-(borders[2].width);
    }
     */
        if (ignoreElementsRegExp.test(el.nodeName) && options.iframeDefault !== "transparent"){
            if (options.iframeDefault === "default"){
                bgcolor = "#efefef";
            }else{
                bgcolor = options.iframeDefault;
            }
        }

        // draw base element bgcolor

        bgbounds = {
            left: x + borders[3].width,
            top: y + borders[0].width,
            width: w - (borders[1].width + borders[3].width),
            height: h - (borders[0].width + borders[2].width)
        };

        //if (this.withinBounds(stack.clip,bgbounds)){

        if (stack.clip){
            bgbounds = clipBounds(bgbounds, stack.clip);

        //}

        }


        if (bgbounds.height > 0 && bgbounds.width > 0){
            renderRect(
                ctx,
                bgbounds.left,
                bgbounds.top,
                bgbounds.width,
                bgbounds.height,
                bgcolor
                );

            renderBackground(el, bgbounds, ctx);
        }

        switch(el.nodeName){
            case "IMG":
                imgSrc = el.getAttribute('src');
                image = loadImage(imgSrc);
                if (image){

                    paddingLeft = getCSSInt(el, 'paddingLeft');
                    paddingTop = getCSSInt(el, 'paddingTop');
                    paddingRight = getCSSInt(el, 'paddingRight');
                    paddingBottom = getCSSInt(el, 'paddingBottom');


                    renderImage(
                        ctx,
                        image,
                        0, //sx
                        0, //sy
                        image.width, //sw
                        image.height, //sh
                        x + paddingLeft + borders[3].width, //dx
                        y + paddingTop + borders[0].width, // dy
                        bounds.width - (borders[1].width + borders[3].width + paddingLeft + paddingRight), //dw
                        bounds.height - (borders[0].width + borders[2].width + paddingTop + paddingBottom) //dh
                        );

                }else{
                    h2clog("html2canvas: Error loading <img>:" + imgSrc);
                }
                break;
            case "INPUT":
                // TODO add all relevant type's, i.e. HTML5 new stuff
                // todo add support for placeholder attribute for browsers which support it
                if (/^(text|url|email|submit|button|reset)$/.test(el.type) && el.value.length > 0){

                    renderFormValue(el, bounds, stack);


                /*
                 this just doesn't work well enough

                this.newText(el,{
                    nodeValue:el.value,
                    splitText: function(){
                        return this;
                    },
                    formValue:true
                },stack);
                 */
                }
                break;
            case "TEXTAREA":
                if (el.value.length > 0){
                    renderFormValue(el, bounds, stack);
                }
                break;
            case "SELECT":
                if (el.options.length > 0){
                    renderFormValue(el, bounds, stack);
                }
                break;
            case "LI":
                renderListItem(el, stack, bgbounds);
                break;
            case "CANVAS":
                paddingLeft = getCSSInt(el, 'paddingLeft');
                paddingTop = getCSSInt(el, 'paddingTop');
                paddingRight = getCSSInt(el, 'paddingRight');
                paddingBottom = getCSSInt(el, 'paddingBottom');
                renderImage(
                    ctx,
                    el,
                    0, //sx
                    0, //sy
                    el.width, //sw
                    el.height, //sh
                    x + paddingLeft + borders[3].width, //dx
                    y + paddingTop + borders[0].width, // dy
                    bounds.width - (borders[1].width + borders[3].width + paddingLeft + paddingRight), //dw
                    bounds.height - (borders[0].width + borders[2].width + paddingTop + paddingBottom) //dh
                    );
                break;
        }

        return zindex.children[stackLength - 1];
    }



    function parseElement (el, stack) {

        // skip hidden elements and their children
        if (getCSS(el, 'display') !== "none" && getCSS(el, 'visibility') !== "hidden" && !el.hasAttribute("data-html2canvas-ignore") ) {

            stack = renderElement(el, stack) || stack;

            ctx = stack.ctx;

            if ( !ignoreElementsRegExp.test( el.nodeName ) ) {
                var elementChildren = _html2canvas.Util.Children( el ),
                i,
                node,
                childrenLen;
                for (i = 0, childrenLen = elementChildren.length; i < childrenLen; i+=1) {
                    node = elementChildren[i];

                    if ( node.nodeType === 1 ) {
                        parseElement(node, stack);
                    }else if ( node.nodeType === 3 ) {
                        renderText(el, node, stack);
                    }

                }

            }
        } 
    }

    stack = renderElement(element, null);

    /*
    SVG powered HTML rendering, non-tainted canvas available from FF 11+ onwards
 */

    if ( support.svgRendering ) {
        (function( body ){
            var img = new Image(),
            size =  docSize(),
            html = "";

            function parseDOM( el ) {
                var children = _html2canvas.Util.Children( el ),
                len = children.length,
                attr,
                a,
                alen,
                elm,
                i;
                for ( i = 0; i < len; i+=1 ) {
                    elm = children[ i ];
                    if ( elm.nodeType === 3 ) {
                        // Text node

                        html += elm.nodeValue.replace(/\</g,"&lt;").replace(/\>/g,"&gt;");
                    } else if ( elm.nodeType === 1 ) {
                        // Element
                        if ( !/^(script|meta|title)$/.test(elm.nodeName.toLowerCase()) ) {

                            html += "<" + elm.nodeName.toLowerCase();

                            // add attributes
                            if ( elm.hasAttributes() ) {
                                attr = elm.attributes;
                                alen = attr.length;
                                for ( a = 0; a < alen; a+=1 ) {
                                    html += " " + attr[ a ].name + '="' + attr[ a ].value + '"';
                                }
                            }


                            html += '>';

                            parseDOM( elm );


                            html += "</" + elm.nodeName.toLowerCase() + ">";
                        }
                    }

                }

            }

            parseDOM( body );
            img.src = [
            "data:image/svg+xml,",
            "<svg xmlns='http://www.w3.org/2000/svg' version='1.1' width='" + size.width + "' height='" + size.height + "'>",
            "<foreignObject width='" + size.width + "' height='" + size.height + "'>",
            "<html xmlns='http://www.w3.org/1999/xhtml' style='margin:0;'>",
            html.replace(/\#/g,"%23"),
            "</html>",
            "</foreignObject>",
            "</svg>"
            ].join("");




            img.onload = function() {
                stack.svgRender = img;
            };

        })( document.documentElement );

    }


    // parse every child element
    for (i = 0, children = element.children, childrenLen = children.length; i < childrenLen; i+=1){
        parseElement(children[i], stack);
    }


    stack.backgroundColor = getCSS( document.documentElement, "backgroundColor" );

    return stack;

};

function h2czContext(zindex) {
    return {
        zindex: zindex,
        children: []
    };
}

/*
  html2canvas v0.34 <http://html2canvas.hertzen.com>
  Copyright (c) 2011 Niklas von Hertzen. All rights reserved.
  http://www.twitter.com/niklasvh

  Released under MIT License
 */

_html2canvas.Preload = function( options ) {

    var images = {
        numLoaded: 0,   // also failed are counted here
        numFailed: 0,
        numTotal: 0,
        cleanupDone: false
    },
    pageOrigin,
    methods,
    i,
    count = 0,
    element = options.elements[0] || document.body,
    doc = element.ownerDocument,
    domImages = doc.images, // TODO probably should limit it to images present in the element only
    imgLen = domImages.length,
    link = doc.createElement("a"),
    supportCORS = (function( img ){
        return (img.crossOrigin !== undefined);
    })(new Image()),
    timeoutTimer;

    link.href = window.location.href;
    pageOrigin  = link.protocol + link.host;






    function isSameOrigin(url){
        link.href = url;
        link.href = link.href; // YES, BELIEVE IT OR NOT, that is required for IE9 - http://jsfiddle.net/niklasvh/2e48b/
        var origin = link.protocol + link.host;
        return (origin === pageOrigin);
    }

    function start(){
        h2clog("html2canvas: start: images: " + images.numLoaded + " / " + images.numTotal + " (failed: " + images.numFailed + ")");
        if (!images.firstRun && images.numLoaded >= images.numTotal){
            h2clog("Finished loading images: # " + images.numTotal + " (failed: " + images.numFailed + ")");

            if (typeof options.complete === "function"){
                options.complete(images);
            }

        }
    }

    // TODO modify proxy to serve images with CORS enabled, where available
    function proxyGetImage(url, img, imageObj){
        if(url.indexOf('flickr.com') > 0) {
            //return;
        }
        
        var callback_name,
        scriptUrl = options.proxy,
        script;

        link.href = url;
        url = link.href; // work around for pages with base href="" set - WARNING: this may change the url

        callback_name = 'html2canvas_' + (count++);
        imageObj.callbackname = callback_name;

        if (scriptUrl.indexOf("?") > -1) {
            scriptUrl += "&";
        } else {
            scriptUrl += "?";
        }
        scriptUrl += 'url=' + encodeURIComponent(url) + '&callback=' + callback_name;
        script = doc.createElement("script");

        window[callback_name] = function(a){
            if (a.substring(0,6) === "error:"){
                imageObj.succeeded = false;
                images.numLoaded++;
                images.numFailed++;
                start();
            } else {
                setImageLoadHandlers(img, imageObj);
                img.src = a;
            }
            window[callback_name] = undefined; // to work with IE<9  // NOTE: that the undefined callback property-name still exists on the window object (for IE<9)
            try {
                delete window[callback_name];  // for all browser that support this
            } catch(ex) {}
            script.parentNode.removeChild(script);
            script = null;
            delete imageObj.script;
            delete imageObj.callbackname;
        };

        script.setAttribute("type", "text/javascript");
        script.setAttribute("src", scriptUrl);
        imageObj.script = script;
        //console.log(script);
        window.document.body.appendChild(script);

    }

    function getImages (el) {



        // if (!this.ignoreRe.test(el.nodeName)){
        //
        
        var contents = _html2canvas.Util.Children(el),
        i,
        background_image,
        src,
        img,
        elNodeType = false;

        // Firefox fails with permission denied on pages with iframes
        try {
            var contentsLen = contents.length;
            for (i = 0;  i < contentsLen; i+=1 ){
                // var ignRe = new RegExp("("+this.ignoreElements+")");
                // if (!ignRe.test(element.nodeName)){
                getImages(contents[i]);
                // }
            }
        }
        catch( e ) {}


        // }
        try {
            elNodeType = el.nodeType;
        } catch (ex) {
            elNodeType = false;
            h2clog("html2canvas: failed to access some element's nodeType - Exception: " + ex.message);
        }

        if (elNodeType === 1 || elNodeType === undefined){

            // opera throws exception on external-content.html
            try {
                background_image = _html2canvas.Util.getCSS(el, 'backgroundImage');
            }catch(e) {
                h2clog("html2canvas: failed to get background-image - Exception: " + e.message);
            }
            if ( background_image && background_image !== "1" && background_image !== "none" ) {

                // TODO add multi image background support

                if (/^(-webkit|-o|-moz|-ms|linear)-/.test( background_image )) {

                    img = _html2canvas.Generate.Gradient( background_image, _html2canvas.Util.Bounds( el ) );

                    if ( img !== undefined ){
                        images[background_image] = {
                            img: img,
                            succeeded: true
                        };
                        images.numTotal++;
                        images.numLoaded++;
                        start();

                    }

                } else {
                    src = _html2canvas.Util.backgroundImage(background_image.match(/data:image\/.*;base64,/i) ? background_image : background_image.split(",")[0]);
                    methods.loadImage(src);
                }

                /*
            if (background_image && background_image !== "1" && background_image !== "none" && background_image.substring(0,7) !== "-webkit" && background_image.substring(0,3)!== "-o-" && background_image.substring(0,4) !== "-moz"){
                // TODO add multi image background support
                src = _html2canvas.Util.backgroundImage(background_image.split(",")[0]);
                methods.loadImage(src);            */
            }
        }
    }

    function setImageLoadHandlers(img, imageObj) {
        img.onload = function() {
            if ( imageObj.timer !== undefined ) {
                // CORS succeeded
                window.clearTimeout( imageObj.timer );
            }

            images.numLoaded++;
            imageObj.succeeded = true;
            img.onerror = img.onload = null;
            start();
        };
        img.onerror = function() {

            if (img.crossOrigin === "anonymous") {
                // CORS failed
                window.clearTimeout( imageObj.timer );

                // let's try with proxy instead
                if ( options.proxy ) {
                    var src = img.src;
                    img = new Image();
                    imageObj.img = img;
                    img.src = src;

                    proxyGetImage( img.src, img, imageObj );
                    return;
                }
            }


            images.numLoaded++;
            images.numFailed++;
            imageObj.succeeded = false;
            img.onerror = img.onload = null;
            start();

        };

        // TODO Opera has no load/error event for SVG images

        // Opera ninja onload's cached images
        /*
        window.setTimeout(function(){
            if ( img.width !== 0 && imageObj.succeeded === undefined ) {
                img.onload();
            }
        }, 100); // needs a reflow for base64 encoded images? interestingly timeout of 0 doesn't work but 1 does.
         */
    }


    methods = {
        loadImage: function( src ) {
            var img, imageObj;
            if ( src && images[src] === undefined ) {
                img = new Image();
                if ( src.match(/data:image\/.*;base64,/i) ) {
                    img.src = src.replace(/url\(['"]{0,}|['"]{0,}\)$/ig, '');
                    imageObj = images[src] = {
                        img: img
                    };
                    images.numTotal++;
                    setImageLoadHandlers(img, imageObj);
                } else if ( isSameOrigin( src ) || options.allowTaint ===  true ) {
                    imageObj = images[src] = {
                        img: img
                    };
                    images.numTotal++;
                    setImageLoadHandlers(img, imageObj);
                    img.src = src;
                } else if ( supportCORS && !options.allowTaint && options.useCORS ) {
                    // attempt to load with CORS

                    img.crossOrigin = "anonymous";
                    imageObj = images[src] = {
                        img: img
                    };
                    images.numTotal++;
                    setImageLoadHandlers(img, imageObj);
                    img.src = src;

                    // work around for https://bugs.webkit.org/show_bug.cgi?id=80028
                    img.customComplete = function () {
                        if (!this.img.complete) {
                            this.timer = window.setTimeout(this.img.customComplete, 100);
                        } else {
                            this.img.onerror();
                        }
                    }.bind(imageObj);
                    img.customComplete();

                } else if ( options.proxy ) {
                    if(src.indexOf('flickr.com') == -1) {
                        imageObj = images[src] = {
                            img: img
                        };
                        images.numTotal++;
                        proxyGetImage( src, img, imageObj );
                    }
                }
            }

        },
        cleanupDOM: function(cause) {
            var img, src;
            if (!images.cleanupDone) {
                if (cause && typeof cause === "string") {
                    h2clog("html2canvas: Cleanup because: " + cause);
                } else {
                    h2clog("html2canvas: Cleanup after timeout: " + options.timeout + " ms.");
                }

                for (src in images) {
                    if (images.hasOwnProperty(src)) {
                        img = images[src];
                        if (typeof img === "object" && img.callbackname && img.succeeded === undefined) {
                            // cancel proxy image request
                            window[img.callbackname] = undefined; // to work with IE<9  // NOTE: that the undefined callback property-name still exists on the window object (for IE<9)
                            try {
                                delete window[img.callbackname];  // for all browser that support this
                            } catch(ex) {}
                            if (img.script && img.script.parentNode) {
                                img.script.setAttribute("src", "about:blank");  // try to cancel running request
                                img.script.parentNode.removeChild(img.script);
                            }
                            images.numLoaded++;
                            images.numFailed++;
                            h2clog("html2canvas: Cleaned up failed img: '" + src + "' Steps: " + images.numLoaded + " / " + images.numTotal);
                        }
                    }
                }

                // cancel any pending requests
                if(window.stop !== undefined) {
                    window.stop();
                } else if(document.execCommand !== undefined) {
                    document.execCommand("Stop", false);
                }
                if (document.close !== undefined) {
                    document.close();
                }
                images.cleanupDone = true;
                if (!(cause && typeof cause === "string")) {
                    start();
                }
            }
        },
        renderingDone: function() {
            if (timeoutTimer) {
                window.clearTimeout(timeoutTimer);
            }
        }

    };

    if (options.timeout > 0) {
        timeoutTimer = window.setTimeout(methods.cleanupDOM, options.timeout);
    }
    h2clog('html2canvas: Preload starts: finding background-images');
    images.firstRun = true;

    getImages( element );

    h2clog('html2canvas: Preload: Finding images');
    // load <img> images
    for (i = 0; i < imgLen; i+=1){
        methods.loadImage( domImages[i].getAttribute( "src" ) );
    }

    images.firstRun = false;
    h2clog('html2canvas: Preload: Done.');
    if ( images.numTotal === images.numLoaded ) {
        start();
    }

    return methods;

};




/*
  html2canvas v0.34 <http://html2canvas.hertzen.com>
  Copyright (c) 2011 Niklas von Hertzen. All rights reserved.
  http://www.twitter.com/niklasvh

  Released under MIT License
*/
function h2cRenderContext(width, height) {
    var storage = [];
    return {
        storage: storage,
        width: width,
        height: height,
        fillRect: function () {
            storage.push({
                type: "function",
                name: "fillRect",
                'arguments': arguments
            });
        },
        drawShape: function() {
          
            var shape = [];
            
            storage.push({
                type: "function",
                name: "drawShape",
                'arguments': shape
            });
          
            return {
                moveTo: function() {
                    shape.push({
                        name: "moveTo",
                        'arguments': arguments
                    });
                },
                lineTo: function() {
                    shape.push({
                        name: "lineTo",
                        'arguments': arguments
                    });
                },
                bezierCurveTo: function() {
                    shape.push({
                        name: "bezierCurveTo",
                        'arguments': arguments
                    });
                },
                quadraticCurveTo: function() {
                    shape.push({
                        name: "quadraticCurveTo",
                        'arguments': arguments
                    });
                }
            };
          
        },
        drawImage: function () {
            storage.push({
                type: "function",
                name: "drawImage",
                'arguments': arguments
            });
        },
        fillText: function () {
            storage.push({
                type: "function",
                name: "fillText",
                'arguments': arguments
            });
        },
        setVariable: function (variable, value) {
            storage.push({
                type: "variable",
                name: variable,
                'arguments': value
            });
        }
    };
}

/*
  html2canvas v0.34 <http://html2canvas.hertzen.com>
  Copyright (c) 2011 Niklas von Hertzen. All rights reserved.
  http://www.twitter.com/niklasvh

  Released under MIT License
*/
_html2canvas.Renderer = function(parseQueue, options){


    var queue = [];

    function sortZ(zStack){
        var subStacks = [],
        stackValues = [],
        zStackChildren = zStack.children,
        s,
        i,
        stackLen,
        zValue,
        zLen,
        stackChild,
        b,
        subStackLen;


        for (s = 0, zLen = zStackChildren.length; s < zLen; s+=1){

            stackChild = zStackChildren[s];

            if (stackChild.children && stackChild.children.length > 0){
                subStacks.push(stackChild);
                stackValues.push(stackChild.zindex);
            }else{
                queue.push(stackChild);
            }

        }

        stackValues.sort(function(a, b) {
            return a - b;
        });

        for (i = 0, stackLen = stackValues.length; i < stackLen; i+=1){
            zValue = stackValues[i];
            for (b = 0, subStackLen = subStacks.length; b <= subStackLen; b+=1){

                if (subStacks[b].zindex === zValue){
                    stackChild = subStacks.splice(b, 1);
                    sortZ(stackChild[0]);
                    break;

                }
            }
        }

    }


    sortZ(parseQueue.zIndex);
    if ( typeof options._renderer._create !== "function" ) {
        throw new Error("Invalid renderer defined");
    }
    return options._renderer._create( parseQueue, options, document, queue, _html2canvas );

};

/*
  html2canvas v0.34 <http://html2canvas.hertzen.com>
  Copyright (c) 2011 Niklas von Hertzen. All rights reserved.
  http://www.twitter.com/niklasvh

  Released under MIT License
*/


html2canvas = function( elements, opts ) {

    var queue,
    canvas,
    options = {
        // general
        logging: false,
        elements: elements,

        // preload options
        proxy: "http://html2canvas.appspot.com/",
        timeout: 0,    // no timeout
        useCORS: false, // try to load images as CORS (where available), before falling back to proxy
        allowTaint: false, // whether to allow images to taint the canvas, won't need proxy if set to true

        // parse options
        svgRendering: false, // use svg powered rendering where available (FF11+)
        iframeDefault: "default",
        ignoreElements: "IFRAME|OBJECT|PARAM",
        useOverflow: true,
        letterRendering: false,

        // render options

        flashcanvas: undefined, // path to flashcanvas
        width: null,
        height: null,
        taintTest: true, // do a taint test with all images before applying to canvas
    renderer: "Canvas"
    }, renderer;

    options = _html2canvas.Util.Extend(opts, options);

  if (typeof options.renderer === "string" && _html2canvas.Renderer[options.renderer] !== undefined) {
    options._renderer = _html2canvas.Renderer[options.renderer]( options );
  } else if (typeof options.renderer === "function") {
    options._renderer = options.renderer( options );
  } else {
    throw("Unknown renderer");
  }

    _html2canvas.logging = options.logging;
    options.complete = function( images ) {

        if (typeof options.onpreloaded === "function") {
            if ( options.onpreloaded( images ) === false ) {
                return;
            }
        }
        queue = _html2canvas.Parse( images, options );

        if (typeof options.onparsed === "function") {
            if ( options.onparsed( queue ) === false ) {
                return;
            }
        }

        canvas = _html2canvas.Renderer( queue, options );

        if (typeof options.onrendered === "function") {
            options.onrendered( canvas );
        }


    };

    // for pages without images, we still want this to be async, i.e. return methods before executing
    window.setTimeout( function(){
        _html2canvas.Preload( options );
    }, 0 );

    return {
        render: function( queue, opts ) {
            return _html2canvas.Renderer( queue, _html2canvas.Util.Extend(opts, options) );
        },
        parse: function( images, opts ) {
            return _html2canvas.Parse( images, _html2canvas.Util.Extend(opts, options) );
        },
        preload: function( opts ) {
            return _html2canvas.Preload( _html2canvas.Util.Extend(opts, options) );
        },
        log: h2clog
    };
};

html2canvas.log = h2clog; // for renderers
html2canvas.Renderer = {
    Canvas: undefined // We are assuming this will be used
};

/*
  html2canvas v0.34 <http://html2canvas.hertzen.com>
  Copyright (c) 2011 Niklas von Hertzen. All rights reserved.
  http://www.twitter.com/niklasvh

  Released under MIT License
*/


_html2canvas.Renderer.Canvas = function( options ) {

    options = options || {};

    var doc = document,
    canvas = options.canvas || doc.createElement('canvas'),
    usingFlashcanvas = false,
    _createCalled = false,
    canvasReadyToDraw = false,
    methods,
    flashMaxSize = 2880; // flash bitmap limited to 2880x2880px // http://stackoverflow.com/questions/2033792/argumenterror-error-2015-invalid-bitmapdata


    if (canvas.getContext){
        h2clog("html2canvas: Renderer: using canvas renderer");
        canvasReadyToDraw = true;
    } else if ( options.flashcanvas !== undefined ){
        usingFlashcanvas = true;
        h2clog("html2canvas: Renderer: canvas not available, using flashcanvas");
        var script = doc.createElement("script");
        script.src = options.flashcanvas;

        script.onload = (function(script, func){
            var intervalFunc;

            if (script.onload === undefined) {
                // IE lack of support for script onload

                if( script.onreadystatechange !== undefined ) {

                    intervalFunc = function() {
                        if (script.readyState !== "loaded" && script.readyState !== "complete") {
                            window.setTimeout( intervalFunc, 250 );

                        } else {
                            // it is loaded
                            func();

                        }

                    };

                    window.setTimeout( intervalFunc, 250 );

                } else {
                    h2clog("html2canvas: Renderer: Can't track when flashcanvas is loaded");
                }

            } else {
                return func;
            }

        })(script, function(){

            if (typeof window.FlashCanvas !== "undefined") {
                h2clog("html2canvas: Renderer: Flashcanvas initialized");
                window.FlashCanvas.initElement( canvas );

                canvasReadyToDraw = true;
                if ( _createCalled !== false ) {
                    methods._create.apply( null, _createCalled );
                }
            }
        });

        doc.body.appendChild( script );

    }

    methods = {
        _create: function( zStack, options, doc, queue, _html2canvas ) {

            if ( !canvasReadyToDraw ) {
                _createCalled = arguments;
                return canvas;
            }

            var ctx = canvas.getContext("2d"),
            storageContext,
            i,
            queueLen,
            a,
            newCanvas,
            bounds,
            testCanvas = document.createElement("canvas"),
            hasCTX = ( testCanvas.getContext !== undefined ),
            storageLen,
            renderItem,
            testctx = ( hasCTX ) ? testCanvas.getContext("2d") : {},
            safeImages = [],
            fstyle;

            canvas.width = canvas.style.width = (!usingFlashcanvas) ? options.width || zStack.ctx.width : Math.min(flashMaxSize, (options.width || zStack.ctx.width) );
            canvas.height = canvas.style.height = (!usingFlashcanvas) ? options.height || zStack.ctx.height : Math.min(flashMaxSize, (options.height || zStack.ctx.height) );

            fstyle = ctx.fillStyle;
            ctx.fillStyle = zStack.backgroundColor;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = fstyle;

            if ( options.svgRendering && zStack.svgRender !== undefined ) {
                // TODO: enable async rendering to support this
                ctx.drawImage( zStack.svgRender, 0, 0 );
            } else {
                for ( i = 0, queueLen = queue.length; i < queueLen; i+=1 ) {

                    storageContext = queue.splice(0, 1)[0];
                    storageContext.canvasPosition = storageContext.canvasPosition || {};

                    //this.canvasRenderContext(storageContext,parentctx);

                    // set common settings for canvas
                    ctx.textBaseline = "bottom";

                    if (storageContext.clip){
                        ctx.save();
                        ctx.beginPath();
                        // console.log(storageContext);
                        ctx.rect(storageContext.clip.left, storageContext.clip.top, storageContext.clip.width, storageContext.clip.height);
                        ctx.clip();

                    }

                    if (storageContext.ctx.storage){

                        for (a = 0, storageLen = storageContext.ctx.storage.length; a < storageLen; a+=1){

                            renderItem = storageContext.ctx.storage[a];


                            switch(renderItem.type){
                                case "variable":
                                    ctx[renderItem.name] = renderItem['arguments'];
                                    break;
                                case "function":
                                    if (renderItem.name === "fillRect") {

                                        if (!usingFlashcanvas || renderItem['arguments'][0] + renderItem['arguments'][2] < flashMaxSize  && renderItem['arguments'][1] + renderItem['arguments'][3] < flashMaxSize) {
                                            ctx.fillRect.apply( ctx, renderItem['arguments'] );
                                        }
                                    } else if (renderItem.name === "drawShape") {
                                        
                                        ( function( args ) {
                                          
                                            var i, len = args.length;
                                            ctx.beginPath();
                                            for ( i = 0; i < len; i++ ) {   
                                                ctx[ args[ i ].name ].apply( ctx, args[ i ]['arguments'] );
                                            }
                                            ctx.closePath();
                                            ctx.fill();
                                        })( renderItem['arguments'] );
                                        
                                    } else if (renderItem.name === "fillText") {
                                        if (!usingFlashcanvas || renderItem['arguments'][1] < flashMaxSize  && renderItem['arguments'][2] < flashMaxSize) {
                                            ctx.fillText.apply( ctx, renderItem['arguments'] );
                                        }
                                    } else if (renderItem.name === "drawImage") {

                                        if (renderItem['arguments'][8] > 0 && renderItem['arguments'][7]){
                                            if ( hasCTX && options.taintTest ) {
                                                if ( safeImages.indexOf( renderItem['arguments'][ 0 ].src ) === -1 ) {
                                                    testctx.drawImage( renderItem['arguments'][ 0 ], 0, 0 );
                                                    try {
                                                        testctx.getImageData( 0, 0, 1, 1 );
                                                    } catch(e) {
                                                        testCanvas = doc.createElement("canvas");
                                                        testctx = testCanvas.getContext("2d");
                                                        continue;
                                                    }

                                                    safeImages.push( renderItem['arguments'][ 0 ].src );

                                                }
                                            }
                                            ctx.drawImage.apply( ctx, renderItem['arguments'] );
                                        }
                                    }


                                    break;
                                default:

                            }

                        }

                    }
                    if (storageContext.clip){
                        ctx.restore();
                    }

                }
            }

            h2clog("html2canvas: Renderer: Canvas renderer done - returning canvas obj");

            queueLen = options.elements.length;

            if (queueLen === 1) {
                if (typeof options.elements[ 0 ] === "object" && options.elements[ 0 ].nodeName !== "BODY" && usingFlashcanvas === false) {
                    // crop image to the bounds of selected (single) element
                    bounds = _html2canvas.Util.Bounds( options.elements[ 0 ] );
                    newCanvas = doc.createElement('canvas');
                    newCanvas.width = bounds.width;
                    newCanvas.height = bounds.height;
                    ctx = newCanvas.getContext("2d");

                    ctx.drawImage( canvas, bounds.left, bounds.top, bounds.width, bounds.height, 0, 0, bounds.width, bounds.height );
                    canvas = null;
                    return newCanvas;
                }
            } /*else {
        // TODO clip and resize multiple elements

            for ( i = 0; i < queueLen; i+=1 ) {
                if (options.elements[ i ] instanceof Element) {

                }

            }
        }
        */



            return canvas;
        }
    };

    return methods;

};

/*
  html2canvas v0.34 <http://html2canvas.hertzen.com>
  Copyright (c) 2011 Niklas von Hertzen. All rights reserved.
  http://www.twitter.com/niklasvh

  Released under MIT License
*/


// WARNING THIS file is outdated, and hasn't been tested in quite a while

_html2canvas.Renderer.SVG = function( options ) {

    options = options || {};

    var doc = document,
    svgNS = "http://www.w3.org/2000/svg",
    svg = doc.createElementNS(svgNS, "svg"),
    xlinkNS = "http://www.w3.org/1999/xlink",
    defs = doc.createElementNS(svgNS, "defs"),
    i,
    a,
    queueLen,
    storageLen,
    storageContext,
    renderItem,
    el,
    settings = {},
    text,
    fontStyle,
    clipId = 0,
    methods;


    methods = {
        _create: function( zStack, options, doc, queue, _html2canvas ) {
            svg.setAttribute("version", "1.1");
            svg.setAttribute("baseProfile", "full");

            svg.setAttribute("viewBox", "0 0 " + Math.max(zStack.ctx.width, options.width) + " " + Math.max(zStack.ctx.height, options.height));
            svg.setAttribute("width", Math.max(zStack.ctx.width, options.width) + "px");
            svg.setAttribute("height", Math.max(zStack.ctx.height, options.height) + "px");
            svg.setAttribute("preserveAspectRatio", "none");
            svg.appendChild(defs);



            for (i = 0, queueLen = queue.length; i < queueLen; i+=1){

                storageContext = queue.splice(0, 1)[0];
                storageContext.canvasPosition = storageContext.canvasPosition || {};

                //this.canvasRenderContext(storageContext,parentctx);


                /*
            if (storageContext.clip){
                ctx.save();
                ctx.beginPath();
                // console.log(storageContext);
                ctx.rect(storageContext.clip.left, storageContext.clip.top, storageContext.clip.width, storageContext.clip.height);
                ctx.clip();

            }*/

                if (storageContext.ctx.storage){

                    for (a = 0, storageLen = storageContext.ctx.storage.length; a < storageLen; a+=1){

                        renderItem = storageContext.ctx.storage[a];



                        switch(renderItem.type){
                            case "variable":
                                settings[renderItem.name] = renderItem['arguments'];
                                break;
                            case "function":
                                if (renderItem.name === "fillRect") {

                                    el = doc.createElementNS(svgNS, "rect");
                                    el.setAttribute("x", renderItem['arguments'][0]);
                                    el.setAttribute("y", renderItem['arguments'][1]);
                                    el.setAttribute("width", renderItem['arguments'][2]);
                                    el.setAttribute("height", renderItem['arguments'][3]);
                                    el.setAttribute("fill",  settings.fillStyle);
                                    svg.appendChild(el);

                                } else if(renderItem.name === "fillText") {
                                    el = doc.createElementNS(svgNS, "text");

                                    fontStyle = settings.font.split(" ");

                                    el.style.fontVariant = fontStyle.splice(0, 1)[0];
                                    el.style.fontWeight = fontStyle.splice(0, 1)[0];
                                    el.style.fontStyle = fontStyle.splice(0, 1)[0];
                                    el.style.fontSize = fontStyle.splice(0, 1)[0];

                                    el.setAttribute("x", renderItem['arguments'][1]);
                                    el.setAttribute("y", renderItem['arguments'][2] - (parseInt(el.style.fontSize, 10) + 3));

                                    el.setAttribute("fill", settings.fillStyle);




                                    // TODO get proper baseline
                                    el.style.dominantBaseline = "text-before-edge";
                                    el.style.fontFamily = fontStyle.join(" ");

                                    text = doc.createTextNode(renderItem['arguments'][0]);
                                    el.appendChild(text);


                                    svg.appendChild(el);



                                } else if(renderItem.name === "drawImage") {

                                    if (renderItem['arguments'][8] > 0 && renderItem['arguments'][7]){

                                        // TODO check whether even any clipping is necessary for this particular image
                                        el = doc.createElementNS(svgNS, "clipPath");
                                        el.setAttribute("id", "clipId" + clipId);

                                        text = doc.createElementNS(svgNS, "rect");
                                        text.setAttribute("x",  renderItem['arguments'][5] );
                                        text.setAttribute("y", renderItem['arguments'][6]);

                                        text.setAttribute("width", renderItem['arguments'][3]);
                                        text.setAttribute("height", renderItem['arguments'][4]);
                                        el.appendChild(text);
                                        defs.appendChild(el);

                                        el = doc.createElementNS(svgNS, "image");
                                        el.setAttributeNS(xlinkNS, "xlink:href", renderItem['arguments'][0].src);
                                        el.setAttribute("width", renderItem['arguments'][7]);
                                        el.setAttribute("height", renderItem['arguments'][8]);
                                        el.setAttribute("x", renderItem['arguments'][5]);
                                        el.setAttribute("y", renderItem['arguments'][6]);
                                        el.setAttribute("clip-path", "url(#clipId" + clipId + ")");
                                        // el.setAttribute("xlink:href", );


                                        el.setAttribute("preserveAspectRatio", "none");

                                        svg.appendChild(el);


                                        clipId += 1;
                                    /*
                                    ctx.drawImage(
                                        renderItem['arguments'][0],
                                        renderItem['arguments'][1],
                                        renderItem['arguments'][2],
                                        renderItem['arguments'][3],
                                        renderItem['arguments'][4],
                                        renderItem['arguments'][5],
                                        renderItem['arguments'][6],
                                        renderItem['arguments'][7],
                                        renderItem['arguments'][8]
                                        );
                                        */
                                    }
                                }



                                break;
                            default:

                        }

                    }

                }
            /*
            if (storageContext.clip){
                ctx.restore();
            }
    */



            }










            h2clog("html2canvas: Renderer: SVG Renderer done - returning SVG DOM obj");

            return svg;
        }
    };

    return methods;


};

window.html2canvas = html2canvas;
}(window, document));

;
/*
 feedback.js <http://experiments.hertzen.com/jsfeedback/>
 Copyright (c) 2012 Niklas von Hertzen. All rights reserved.
 http://www.twitter.com/niklasvh

 Released under MIT License
*/
(function( window, document, undefined ) {
if ( window.Feedback !== undefined ) { 
    return; 
}

// log proxy function
var log = function( msg ) {
    window.console.log( msg );
},
// function to remove elements, input as arrays
removeElements = function( remove ) {
    for (var i = 0, len = remove.length; i < len; i++ ) {
        var item = Array.prototype.pop.call( remove );
        if ( item !== undefined ) {
            if (item.parentNode !== null ) { // check that the item was actually added to DOM
                item.parentNode.removeChild( item );
            }
        }
    }
},
loader = function() {
    var div = document.createElement("div"), i = 3;
    div.className = "feedback-loader";
    
    while (i--) { div.appendChild( document.createElement( "span" )); }
    return div;
},
getBounds = function( el ) {
    return el.getBoundingClientRect();
},
emptyElements = function( el ) {
    var item;
    while( (( item = el.firstChild ) !== null ? el.removeChild( item ) : false) ) {}
},
element = function( name, text ) {
    var el = document.createElement( name );
    el.appendChild( document.createTextNode( text ) );
    return el;
},
// script onload function to provide support for IE as well
scriptLoader = function( script, func ){

    if (script.onload === undefined) {
        // IE lack of support for script onload

        if( script.onreadystatechange !== undefined ) {

            var intervalFunc = function() {
                if (script.readyState !== "loaded" && script.readyState !== "complete") {
                    window.setTimeout( intervalFunc, 250 );
                } else {
                    // it is loaded
                    func();
                }
            };

            window.setTimeout( intervalFunc, 250 );

        } else {
            log("ERROR: We can't track when script is loaded");
        }

    } else {
        return func;
    }

},
nextButton,
H2C_IGNORE = "data-html2canvas-ignore",
currentPage,
modalBody = document.createElement("div");

window.Feedback = function( options ) {

    options = options || {};

    // default properties
    options.label = options.label || "Send Support request";
    options.header = options.header || "Send Support request";
    options.url = options.url || "/";
    options.adapter = options.adapter || new window.Feedback.XHR( options.url );
    
    options.nextLabel = options.nextLabel || "Continue";
    options.reviewLabel = options.reviewLabel || "Review";
    options.sendLabel = options.sendLabel || "Send";
    options.closeLabel = options.closeLabel || "Close";
    
    options.messageSuccess = options.messageSuccess || "Your support request was sent succesfully.";
    options.messageError = options.messageError || "There was an error sending your support request to the server.";
    
  
    if (options.pages === undefined ) {
        options.pages = [
            new window.Feedback.Form(),
            new window.Feedback.Screenshot( options ),
            new window.Feedback.Review()
        ];
    }

    var button,
    modal,
    currentPage,
    glass = document.createElement("div"),
    returnMethods = {

        // open send feedback modal window
        open: function() {
            if(!Drupal.settings.nikadevs_cms.site_mail) {
                alert('Please setup your email here: Admin > Configuration > System > Site information');
                return;
            }
            var len = options.pages.length;
            currentPage = 0;
            for (; currentPage < len; currentPage++) {
                // create DOM for each page in the wizard
                if ( !(options.pages[ currentPage ] instanceof window.Feedback.Review) ) {
                    options.pages[ currentPage ].render();
                }
            }

            var a = element("a", "×"),
            modalHeader = document.createElement("div"),
            // modal container
            modalFooter = document.createElement("div");

            modal = document.createElement("div");
            document.body.appendChild( glass );

            // modal close button
            a.className =  "feedback-close";
            a.onclick = returnMethods.close;
            a.href = "#";

            button.disabled = true;

            // build header element
            modalHeader.appendChild( a );
            modalHeader.appendChild( element("h3", options.header ) );
            modalHeader.className =  "feedback-header";

            modalBody.className = "feedback-body";

            emptyElements( modalBody );
            currentPage = 0;
            modalBody.appendChild( options.pages[ currentPage++ ].dom );


            // Next button
            nextButton = element( "button", options.nextLabel );

            nextButton.className =  "feedback-btn";
            nextButton.onclick = function() {
                
                if (currentPage > 0 ) {
                    if ( options.pages[ currentPage - 1 ].end( modal ) === false ) {
                        // page failed validation, cancel onclick
                        return;
                    }
                }
                
                emptyElements( modalBody );

                if ( currentPage === len ) {
                    returnMethods.send( options.adapter );
                } else {

                    options.pages[ currentPage ].start( modal, modalHeader, modalFooter, nextButton );
                    
                    if ( options.pages[ currentPage ] instanceof window.Feedback.Review ) {
                        // create DOM for review page, based on collected data
                        options.pages[ currentPage ].render( options.pages );
                    }
                    
                    // add page DOM to modal
                    modalBody.appendChild( options.pages[ currentPage++ ].dom );

                    // if last page, change button label to send
                    if ( currentPage === len ) {
                        nextButton.firstChild.nodeValue = options.sendLabel;
                    }
                    
                    // if next page is review page, change button label
                    if ( options.pages[ currentPage ] instanceof window.Feedback.Review ) {   
                        nextButton.firstChild.nodeValue = options.reviewLabel;
                    }
                        

                }

            };

            modalFooter.className = "feedback-footer";
            modalFooter.appendChild( nextButton );


            modal.className =  "feedback-modal";
            modal.setAttribute(H2C_IGNORE, true); // don't render in html2canvas


            modal.appendChild( modalHeader );
            modal.appendChild( modalBody );
            modal.appendChild( modalFooter );

            document.body.appendChild( modal );
        },


        // close modal window
        close: function() {

            button.disabled = false;

            // remove feedback elements
            removeElements( [ modal, glass ] );

            // call end event for current page
            if (currentPage > 0 ) {
                options.pages[ currentPage - 1 ].end( modal );
            }
                
            // call close events for all pages    
            for (var i = 0, len = options.pages.length; i < len; i++) {
                options.pages[ i ].close();
            }

            return false;

        },
        
        // send data
        send: function( adapter ) {
            
            // make sure send adapter is of right prototype
            if ( !(adapter instanceof window.Feedback.Send) ) {
                throw new Error( "Adapter is not an instance of Feedback.Send" );
            }
            
            // fetch data from all pages   
            for (var i = 0, len = options.pages.length, data = [], p = 0, tmp; i < len; i++) {
                if ( (tmp = options.pages[ i ].data()) !== false ) {
                    data[ p++ ] = tmp;
                }
            }

            nextButton.disabled = true;
                
            emptyElements( modalBody );
            modalBody.appendChild( loader() );

            // send data to adapter for processing
            adapter.send( data, function( success ) {
                
                emptyElements( modalBody );
                nextButton.disabled = false;
                
                nextButton.firstChild.nodeValue = options.closeLabel;
                
                nextButton.onclick = function() {
                    returnMethods.close();
                    return false;  
                };
                
                if ( success === true ) {
                    modalBody.appendChild( document.createTextNode( options.messageSuccess ) );
                } else {
                    modalBody.appendChild( document.createTextNode( options.messageError ) );
                }
                
            } );
  
        }
    };

    glass.className = "feedback-glass";
    glass.style.pointerEvents = "none";
    glass.setAttribute(H2C_IGNORE, true);

    options = options || {};

    button = element( "button", options.label );
    button.className = "feedback-btn feedback-bottom-right";

    button.setAttribute(H2C_IGNORE, true);

    button.onclick = returnMethods.open;
    
    if ( options.appendTo !== null ) {
        ((options.appendTo !== undefined) ? options.appendTo : document.body).appendChild( button );
    }
    
    return returnMethods;
};
window.Feedback.Page = function() {};
window.Feedback.Page.prototype = {

    render: function( dom ) {
        this.dom = dom;
    },
    start: function() {},
    close: function() {},
    data: function() {
        // don't collect data from page by default
        return false;
    },
    review: function() {
        return null;
    },
    end: function() { return true; }

};
window.Feedback.Send = function() {};
window.Feedback.Send.prototype = {

    send: function() {}

};

window.Feedback.Form = function( elements ) {

    this.elements = elements || [{
        type: "textarea",
        name: "Issue",
        label: "Please describe the issue you are experiencing",
        required: false
    }];

    this.dom = document.createElement("div");

};

window.Feedback.Form.prototype = new window.Feedback.Page();

window.Feedback.Form.prototype.render = function() {

    var i = 0, len = this.elements.length, item;
    emptyElements( this.dom );
    for (; i < len; i++) {
        item = this.elements[ i ];

        switch( item.type ) {
            case "textarea":
                this.dom.appendChild( element("label", item.label + ":" + (( item.required === true ) ? " *" : "")) );
                this.dom.appendChild( ( item.element = document.createElement("textarea")) );
                break;
        }
    }

    return this;

};

window.Feedback.Form.prototype.end = function() {
    // form validation  
    var i = 0, len = this.elements.length, item;
    for (; i < len; i++) {
        item = this.elements[ i ];

        // check that all required fields are entered
        if ( item.required === true && item.element.value.length === 0) {
            item.element.className = "feedback-error";
            return false;
        } else {
            item.element.className = "";
        }
    }
    
    return true;
    
};

window.Feedback.Form.prototype.data = function() {
    
    if ( this._data !== undefined ) {
        // return cached value
        return this._data;
    }
    
    var i = 0, len = this.elements.length, item, data = {};
    
    for (; i < len; i++) {
        item = this.elements[ i ];
        data[ item.name ] = item.element.value;
    }
    
    // cache and return data
    return ( this._data = data );
};


window.Feedback.Form.prototype.review = function( dom ) {
  
    var i = 0, item, len = this.elements.length;
      
    for (; i < len; i++) {
        item = this.elements[ i ];
        
        if (item.element.value.length > 0) {
            dom.appendChild( element("label", item.name + ":") );
            dom.appendChild( document.createTextNode( item.element.value ) );
            dom.appendChild( document.createElement( "hr" ) );
        }
        
    }
    
    return dom;
     
};
window.Feedback.Review = function() {

    this.dom = document.createElement("div");
    this.dom.className = "feedback-review";

};

window.Feedback.Review.prototype = new window.Feedback.Page();

window.Feedback.Review.prototype.render = function( pages ) {

    var i = 0, len = pages.length, item;
    emptyElements( this.dom );
    
    for (; i < len; i++) {
        
        // get preview DOM items
        pages[ i ].review( this.dom );

    }

    return this;

};




window.Feedback.Screenshot = function( options ) {
    this.options = options || {};

    this.options.blackoutClass = this.options.blackoutClass || 'feedback-blackedout';
    this.options.highlightClass = this.options.highlightClass || 'feedback-highlighted';

    this.h2cDone = false;
};

window.Feedback.Screenshot.prototype = new window.Feedback.Page();

window.Feedback.Screenshot.prototype.end = function( modal ){
    modal.className = modal.className.replace(/feedback\-animate\-toside/, "");

    // remove event listeners
    document.body.removeEventListener("mousemove", this.mouseMoveEvent, false);
    document.body.removeEventListener("click", this.mouseClickEvent, false);

    removeElements( [this.h2cCanvas] );

    this.h2cDone = false;

};

window.Feedback.Screenshot.prototype.close = function(){
    removeElements( [ this.blackoutBox, this.highlightContainer, this.highlightBox, this.highlightClose ] );

    removeElements( document.getElementsByClassName( this.options.blackoutClass ) );
    removeElements( document.getElementsByClassName( this.options.highlightClass ) );

};

window.Feedback.Screenshot.prototype.start = function( modal, modalHeader, modalFooter, nextButton ) {

    if ( this.h2cDone ) {
        emptyElements( this.dom );
        nextButton.disabled = false;
        
        var $this = this,
        feedbackHighlightElement = "feedback-highlight-element",
        dataExclude = "data-exclude";

        var action = true;

        // delegate mouse move event for body
        this.mouseMoveEvent = function( e ) {

            // set close button
            if ( e.target !== previousElement && (e.target.className.indexOf( $this.options.blackoutClass ) !== -1 || e.target.className.indexOf( $this.options.highlightClass ) !== -1)) {

                var left = (parseInt(e.target.style.left, 10) +  parseInt(e.target.style.width, 10));
                left = Math.max( left, 10 );

                left = Math.min( left, window.innerWidth - 15 );

                var top = (parseInt(e.target.style.top, 10));
                top = Math.max( top, 10 );

                highlightClose.style.left = left + "px";
                highlightClose.style.top = top + "px";
                removeElement = e.target;
                clearBox();
                previousElement = undefined;
                return;
            }

            // don't do anything if we are highlighting a close button or body tag
            if (e.target.nodeName === "BODY" ||  e.target === highlightClose || e.target === modal || e.target === nextButton || e.target.parentNode === modal || e.target.parentNode === modalHeader) {
                // we are not gonna blackout the whole page or the close item
                clearBox();
                previousElement = e.target;
                return;
            }

            hideClose();

            if (e.target !== previousElement ) {
                previousElement = e.target;

                window.clearTimeout( timer );

                timer = window.setTimeout(function(){
                    var bounds = getBounds( previousElement ),
                    item;

                    if ( action === false ) {
                        item = blackoutBox;
                    } else {
                        item = highlightBox;
                        item.width = bounds.width;
                        item.height = bounds.height;
                        ctx.drawImage($this.h2cCanvas, window.pageXOffset + bounds.left, window.pageYOffset + bounds.top, bounds.width, bounds.height, 0, 0, bounds.width, bounds.height );
                    }

                    // we are only targetting IE>=9, so window.pageYOffset works fine
                    item.setAttribute(dataExclude, false);
                    item.style.left = window.pageXOffset + bounds.left + "px";
                    item.style.top = window.pageYOffset + bounds.top + "px";
                    item.style.width = bounds.width + "px";
                    item.style.height = bounds.height + "px";
                }, 100);



            }


        };


        // delegate event for body click
        this.mouseClickEvent = function( e ){

            e.preventDefault();


            if ( action === false) {
                if ( blackoutBox.getAttribute(dataExclude) === "false") {
                    var blackout = document.createElement("div");
                    blackout.className = $this.options.blackoutClass;
                    blackout.style.left = blackoutBox.style.left;
                    blackout.style.top = blackoutBox.style.top;
                    blackout.style.width = blackoutBox.style.width;
                    blackout.style.height = blackoutBox.style.height;

                    document.body.appendChild( blackout );
                    previousElement = undefined;
                }
            } else {
                if ( highlightBox.getAttribute(dataExclude) === "false") {

                    highlightBox.className += " " + $this.options.highlightClass;
                    highlightBox.className = highlightBox.className.replace(/feedback\-highlight\-element/g,"");
                    $this.highlightBox = highlightBox = document.createElement('canvas');

                    ctx = highlightBox.getContext("2d");

                    highlightBox.className += " " + feedbackHighlightElement;

                    document.body.appendChild( highlightBox );
                    clearBox();
                    previousElement = undefined;
                }
            }



        };

        this.highlightClose = element("div", "×");
        this.blackoutBox = document.createElement('div');
        this.highlightBox = document.createElement( "canvas" );
        this.highlightContainer = document.createElement('div');
        var timer,
        highlightClose = this.highlightClose,
        highlightBox = this.highlightBox,
        blackoutBox = this.blackoutBox,
        highlightContainer = this.highlightContainer,
        removeElement,
        ctx = highlightBox.getContext("2d"),
        buttonClickFunction = function( e ) {
            e.preventDefault();
            
            if (blackoutButton.className.indexOf("active") === -1) {
                blackoutButton.className += " active";
                highlightButton.className = highlightButton.className.replace(/active/g,"");
            } else {
                highlightButton.className += " active";
                blackoutButton.className = blackoutButton.className.replace(/active/g,"");
            }

            action = !action;
        },
        clearBox = function() {
            
            clearBoxEl(blackoutBox);
            clearBoxEl(highlightBox);

            window.clearTimeout( timer );
        },
        clearBoxEl = function( el ) {
            el.style.left =  "-5px";
            el.style.top =  "-5px";
            el.style.width = "0px";
            el.style.height = "0px";
            el.setAttribute(dataExclude, true);
        },
        hideClose = function() {
            highlightClose.style.left =  "-50px";
            highlightClose.style.top =  "-50px";

        },
        blackoutButton = element("a", "Blackout"),
        highlightButton = element("a", "Highlight"),
        previousElement;


        modal.className += ' feedback-animate-toside';


        highlightClose.id = "feedback-highlight-close";


        highlightClose.addEventListener("click", function(){
            removeElement.parentNode.removeChild( removeElement );
            hideClose();
        }, false);

        document.body.appendChild( highlightClose );


        this.h2cCanvas.className = 'feedback-canvas';
        document.body.appendChild( this.h2cCanvas);


        var buttonItem = [ highlightButton, blackoutButton ];

        this.dom.appendChild( element("p", "Highlight or blackout important information") );

        // add highlight and blackout buttons
        for (var i = 0; i < 2; i++ ) {
            buttonItem[ i ].className = 'feedback-btn feedback-btn-small ' + (i === 0 ? 'active' : 'feedback-btn-inverse');

            buttonItem[ i ].href = "#";
            buttonItem[ i ].onclick = buttonClickFunction;

            this.dom.appendChild( buttonItem[ i ] );

            this.dom.appendChild( document.createTextNode(" ") );

        }



        highlightContainer.id = "feedback-highlight-container";
        highlightContainer.style.width = this.h2cCanvas.width + "px";
        highlightContainer.style.height = this.h2cCanvas.height + "px";

        this.highlightBox.className += " " + feedbackHighlightElement;
        this.blackoutBox.id = "feedback-blackout-element";
        document.body.appendChild( this.highlightBox );
        highlightContainer.appendChild( this.blackoutBox );

        document.body.appendChild( highlightContainer );

        // bind mouse delegate events
        document.body.addEventListener("mousemove", this.mouseMoveEvent, false);
        document.body.addEventListener("click", this.mouseClickEvent, false);

    } else {
        // still loading html2canvas
        var args = arguments,
        $this = this;

        if ( nextButton.disabled !== true) {
            this.dom.appendChild( loader() );
        }

        nextButton.disabled = true;

        window.setTimeout(function(){
            $this.start.apply( $this, args );
        }, 500);
    }

};

window.Feedback.Screenshot.prototype.render = function() {

    this.dom = document.createElement("div");

    // execute the html2canvas script
    var script,
    $this = this,
    options = this.options,
    runH2c = function(){
        try {

            options.onrendered = options.onrendered || function( canvas ) {
                $this.h2cCanvas = canvas;
                $this.h2cDone = true;
            };

            window.html2canvas([ document.body ], options);

        } catch( e ) {

            $this.h2cDone = true;
            log("Error in html2canvas: " + e.message);
        }
    };

    if ( window.html2canvas === undefined && script === undefined ) {

        // let's load html2canvas library while user is writing message

        script = document.createElement("script");
        script.src = options.h2cPath || "libs/html2canvas.js";
        script.onerror = function() {
            log("Failed to load html2canvas library, check that the path is correctly defined");
        };

        script.onload = (scriptLoader)(script, function() {

            if (window.html2canvas === undefined) {
                log("Loaded html2canvas, but library not found");
                return;
            }

            window.html2canvas.logging = window.Feedback.debug;
            runH2c();


        });

        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(script, s);

    } else {
        // html2canvas already loaded, just run it then
        runH2c();
    }

    return this;
};

window.Feedback.Screenshot.prototype.data = function() {

    if ( this._data !== undefined ) {
        return this._data;
    }

    if ( this.h2cCanvas !== undefined ) {
      
        var ctx = this.h2cCanvas.getContext("2d"),
        canvasCopy,
        copyCtx,
        radius = 5;
        ctx.fillStyle = "#000";

        // draw blackouts
        Array.prototype.slice.call( document.getElementsByClassName('feedback-blackedout'), 0).forEach( function( item ) {
            var bounds = getBounds( item );
            ctx.fillRect( bounds.left, bounds.top, bounds.width, bounds.height );
        });

        // draw highlights
        var items = Array.prototype.slice.call( document.getElementsByClassName('feedback-highlighted'), 0);

        if (items.length > 0 ) {

            // copy canvas
            canvasCopy = document.createElement( "canvas" );
            copyCtx = canvasCopy.getContext('2d');
            canvasCopy.width = this.h2cCanvas.width;
            canvasCopy.height = this.h2cCanvas.height;

            copyCtx.drawImage( this.h2cCanvas, 0, 0 );

            ctx.fillStyle = "#777";
            ctx.globalAlpha = 0.5;
            ctx.fillRect( 0, 0, this.h2cCanvas.width, this.h2cCanvas.height );

            ctx.beginPath();

            items.forEach( function( item ) {

                var x = parseInt(item.style.left, 10),
                y = parseInt(item.style.top, 10),
                width = parseInt(item.style.width, 10),
                height = parseInt(item.style.height, 10);

                ctx.moveTo(x + radius, y);
                ctx.lineTo(x + width - radius, y);
                ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
                ctx.lineTo(x + width, y + height - radius);
                ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
                ctx.lineTo(x + radius, y + height);
                ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
                ctx.lineTo(x, y + radius);
                ctx.quadraticCurveTo(x, y, x + radius, y);
               
            });
            ctx.closePath();
            ctx.clip();

            ctx.globalAlpha = 1;

            ctx.drawImage(canvasCopy, 0,0);
   
        }
        
        // to avoid security error break for tainted canvas   
        try {
            // cache and return data
            return ( this._data = this.h2cCanvas.toDataURL() );
        } catch( e ) {}
        
    }
};


window.Feedback.Screenshot.prototype.review = function( dom ) {
  
    var data = this.data();
    if ( data !== undefined ) {
        var img = new Image();
        img.src = data;
        img.style.width = "300px";
        dom.appendChild( img );
    }
    
};
window.Feedback.XHR = function( url ) {
    
    this.xhr = new XMLHttpRequest();
    this.url = url;

};

window.Feedback.XHR.prototype = new window.Feedback.Send();

window.Feedback.XHR.prototype.send = function( data, callback ) {
    
    var xhr = this.xhr;
    
    xhr.onreadystatechange = function() {
        if( xhr.readyState == 4 ){
            callback( (xhr.status === 200) );
        }
    };
    
    xhr.open( "POST", this.url, true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send( "data=" + encodeURIComponent( window.JSON.stringify( data ) ) );
     
};
})( window, document );


jQuery(function($){
  $(document).ready(function() {
    Feedback({
        h2cPath: Drupal.settings.nikadevs_cms.module_path + '/support/js/html2canvas.js',
        url: '/nikadevs_cms/support',
        label: 'Support',
        messageSuccess: "Your message was sent succesfully.",
        messageError: "There was an error sending your message to the server. Contact us directly please: support@nikadevs.com"
    });
  });
});;
(function ($) {

/**
 * Attaches double-click behavior to toggle full path of Krumo elements.
 */
Drupal.behaviors.devel = {
  attach: function (context, settings) {

    // Add hint to footnote
    $('.krumo-footnote .krumo-call').once().before('<img style="vertical-align: middle;" title="Click to expand. Double-click to show path." src="' + settings.basePath + 'misc/help.png"/>');

    var krumo_name = [];
    var krumo_type = [];

    function krumo_traverse(el) {
      krumo_name.push($(el).html());
      krumo_type.push($(el).siblings('em').html().match(/\w*/)[0]);

      if ($(el).closest('.krumo-nest').length > 0) {
        krumo_traverse($(el).closest('.krumo-nest').prev().find('.krumo-name'));
      }
    }

    $('.krumo-child > div:first-child', context).dblclick(
      function(e) {
        if ($(this).find('> .krumo-php-path').length > 0) {
          // Remove path if shown.
          $(this).find('> .krumo-php-path').remove();
        }
        else {
          // Get elements.
          krumo_traverse($(this).find('> a.krumo-name'));

          // Create path.
          var krumo_path_string = '';
          for (var i = krumo_name.length - 1; i >= 0; --i) {
            // Start element.
            if ((krumo_name.length - 1) == i)
              krumo_path_string += '$' + krumo_name[i];

            if (typeof krumo_name[(i-1)] !== 'undefined') {
              if (krumo_type[i] == 'Array') {
                krumo_path_string += "[";
                if (!/^\d*$/.test(krumo_name[(i-1)]))
                  krumo_path_string += "'";
                krumo_path_string += krumo_name[(i-1)];
                if (!/^\d*$/.test(krumo_name[(i-1)]))
                  krumo_path_string += "'";
                krumo_path_string += "]";
              }
              if (krumo_type[i] == 'Object')
                krumo_path_string += '->' + krumo_name[(i-1)];
            }
          }
          $(this).append('<div class="krumo-php-path" style="font-family: Courier, monospace; font-weight: bold;">' + krumo_path_string + '</div>');

          // Reset arrays.
          krumo_name = [];
          krumo_type = [];
        }
      }
    );
  }
};

})(jQuery);
;
;(function(){

/**
 * Require the given path.
 *
 * @param {String} path
 * @return {Object} exports
 * @api public
 */

function require(path, parent, orig) {
  var resolved = require.resolve(path);

  // lookup failed
  if (null == resolved) {
    orig = orig || path;
    parent = parent || 'root';
    var err = new Error('Failed to require "' + orig + '" from "' + parent + '"');
    err.path = orig;
    err.parent = parent;
    err.require = true;
    throw err;
  }

  var module = require.modules[resolved];

  // perform real require()
  // by invoking the module's
  // registered function
  if (!module._resolving && !module.exports) {
    var mod = {};
    mod.exports = {};
    mod.client = mod.component = true;
    module._resolving = true;
    module.call(this, mod.exports, require.relative(resolved), mod);
    delete module._resolving;
    module.exports = mod.exports;
  }

  return module.exports;
}

/**
 * Registered modules.
 */

require.modules = {};

/**
 * Registered aliases.
 */

require.aliases = {};

/**
 * Resolve `path`.
 *
 * Lookup:
 *
 *   - PATH/index.js
 *   - PATH.js
 *   - PATH
 *
 * @param {String} path
 * @return {String} path or null
 * @api private
 */

require.resolve = function(path) {
  if (path.charAt(0) === '/') path = path.slice(1);

  var paths = [
    path,
    path + '.js',
    path + '.json',
    path + '/index.js',
    path + '/index.json'
  ];

  for (var i = 0; i < paths.length; i++) {
    var path = paths[i];
    if (require.modules.hasOwnProperty(path)) return path;
    if (require.aliases.hasOwnProperty(path)) return require.aliases[path];
  }
};

/**
 * Normalize `path` relative to the current path.
 *
 * @param {String} curr
 * @param {String} path
 * @return {String}
 * @api private
 */

require.normalize = function(curr, path) {
  var segs = [];

  if ('.' != path.charAt(0)) return path;

  curr = curr.split('/');
  path = path.split('/');

  for (var i = 0; i < path.length; ++i) {
    if ('..' == path[i]) {
      curr.pop();
    } else if ('.' != path[i] && '' != path[i]) {
      segs.push(path[i]);
    }
  }

  return curr.concat(segs).join('/');
};

/**
 * Register module at `path` with callback `definition`.
 *
 * @param {String} path
 * @param {Function} definition
 * @api private
 */

require.register = function(path, definition) {
  require.modules[path] = definition;
};

/**
 * Alias a module definition.
 *
 * @param {String} from
 * @param {String} to
 * @api private
 */

require.alias = function(from, to) {
  if (!require.modules.hasOwnProperty(from)) {
    throw new Error('Failed to alias "' + from + '", it does not exist');
  }
  require.aliases[to] = from;
};

/**
 * Return a require function relative to the `parent` path.
 *
 * @param {String} parent
 * @return {Function}
 * @api private
 */

require.relative = function(parent) {
  var p = require.normalize(parent, '..');

  /**
   * lastIndexOf helper.
   */

  function lastIndexOf(arr, obj) {
    var i = arr.length;
    while (i--) {
      if (arr[i] === obj) return i;
    }
    return -1;
  }

  /**
   * The relative require() itself.
   */

  function localRequire(path) {
    var resolved = localRequire.resolve(path);
    return require(resolved, parent, path);
  }

  /**
   * Resolve relative to the parent.
   */

  localRequire.resolve = function(path) {
    var c = path.charAt(0);
    if ('/' == c) return path.slice(1);
    if ('.' == c) return require.normalize(p, path);

    // resolve deps by returning
    // the dep in the nearest "deps"
    // directory
    var segs = parent.split('/');
    var i = lastIndexOf(segs, 'deps') + 1;
    if (!i) i = 0;
    path = segs.slice(0, i + 1).join('/') + '/deps/' + path;
    return path;
  };

  /**
   * Check if module is defined at `path`.
   */

  localRequire.exists = function(path) {
    return require.modules.hasOwnProperty(localRequire.resolve(path));
  };

  return localRequire;
};
require.register("abpetkov-transitionize/transitionize.js", function(exports, require, module){

/**
 * Transitionize 0.0.3
 * https://github.com/abpetkov/transitionize
 *
 * Authored by Alexander Petkov
 * https://github.com/abpetkov
 *
 * Copyright 2013, Alexander Petkov
 * License: The MIT License (MIT)
 * http://opensource.org/licenses/MIT
 *
 */

/**
 * Expose `Transitionize`.
 */

module.exports = Transitionize;

/**
 * Initialize new Transitionize.
 *
 * @param {Object} element
 * @param {Object} props
 * @api public
 */

function Transitionize(element, props) {
  if (!(this instanceof Transitionize)) return new Transitionize(element, props);

  this.element = element;
  this.props = props || {};
  this.init();
}

/**
 * Detect if Safari.
 *
 * @returns {Boolean}
 * @api private
 */

Transitionize.prototype.isSafari = function() {
  return (/Safari/).test(navigator.userAgent) && (/Apple Computer/).test(navigator.vendor);
};

/**
 * Loop though the object and push the keys and values in an array.
 * Apply the CSS3 transition to the element and prefix with -webkit- for Safari.
 *
 * @api private
 */

Transitionize.prototype.init = function() {
  var transitions = [];

  for (var key in this.props) {
    transitions.push(key + ' ' + this.props[key]);
  }

  this.element.style.transition = transitions.join(', ');
  if (this.isSafari()) this.element.style.webkitTransition = transitions.join(', ');
};
});
require.register("ftlabs-fastclick/lib/fastclick.js", function(exports, require, module){
/**
 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
 *
 * @version 0.6.11
 * @codingstandard ftlabs-jsv2
 * @copyright The Financial Times Limited [All Rights Reserved]
 * @license MIT License (see LICENSE.txt)
 */

/*jslint browser:true, node:true*/
/*global define, Event, Node*/


/**
 * Instantiate fast-clicking listeners on the specificed layer.
 *
 * @constructor
 * @param {Element} layer The layer to listen on
 */
function FastClick(layer) {
	'use strict';
	var oldOnClick, self = this;


	/**
	 * Whether a click is currently being tracked.
	 *
	 * @type boolean
	 */
	this.trackingClick = false;


	/**
	 * Timestamp for when when click tracking started.
	 *
	 * @type number
	 */
	this.trackingClickStart = 0;


	/**
	 * The element being tracked for a click.
	 *
	 * @type EventTarget
	 */
	this.targetElement = null;


	/**
	 * X-coordinate of touch start event.
	 *
	 * @type number
	 */
	this.touchStartX = 0;


	/**
	 * Y-coordinate of touch start event.
	 *
	 * @type number
	 */
	this.touchStartY = 0;


	/**
	 * ID of the last touch, retrieved from Touch.identifier.
	 *
	 * @type number
	 */
	this.lastTouchIdentifier = 0;


	/**
	 * Touchmove boundary, beyond which a click will be cancelled.
	 *
	 * @type number
	 */
	this.touchBoundary = 10;


	/**
	 * The FastClick layer.
	 *
	 * @type Element
	 */
	this.layer = layer;

	if (!layer || !layer.nodeType) {
		throw new TypeError('Layer must be a document node');
	}

	/** @type function() */
	this.onClick = function() { return FastClick.prototype.onClick.apply(self, arguments); };

	/** @type function() */
	this.onMouse = function() { return FastClick.prototype.onMouse.apply(self, arguments); };

	/** @type function() */
	this.onTouchStart = function() { return FastClick.prototype.onTouchStart.apply(self, arguments); };

	/** @type function() */
	this.onTouchMove = function() { return FastClick.prototype.onTouchMove.apply(self, arguments); };

	/** @type function() */
	this.onTouchEnd = function() { return FastClick.prototype.onTouchEnd.apply(self, arguments); };

	/** @type function() */
	this.onTouchCancel = function() { return FastClick.prototype.onTouchCancel.apply(self, arguments); };

	if (FastClick.notNeeded(layer)) {
		return;
	}

	// Set up event handlers as required
	if (this.deviceIsAndroid) {
		layer.addEventListener('mouseover', this.onMouse, true);
		layer.addEventListener('mousedown', this.onMouse, true);
		layer.addEventListener('mouseup', this.onMouse, true);
	}

	layer.addEventListener('click', this.onClick, true);
	layer.addEventListener('touchstart', this.onTouchStart, false);
	layer.addEventListener('touchmove', this.onTouchMove, false);
	layer.addEventListener('touchend', this.onTouchEnd, false);
	layer.addEventListener('touchcancel', this.onTouchCancel, false);

	// Hack is required for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
	// which is how FastClick normally stops click events bubbling to callbacks registered on the FastClick
	// layer when they are cancelled.
	if (!Event.prototype.stopImmediatePropagation) {
		layer.removeEventListener = function(type, callback, capture) {
			var rmv = Node.prototype.removeEventListener;
			if (type === 'click') {
				rmv.call(layer, type, callback.hijacked || callback, capture);
			} else {
				rmv.call(layer, type, callback, capture);
			}
		};

		layer.addEventListener = function(type, callback, capture) {
			var adv = Node.prototype.addEventListener;
			if (type === 'click') {
				adv.call(layer, type, callback.hijacked || (callback.hijacked = function(event) {
					if (!event.propagationStopped) {
						callback(event);
					}
				}), capture);
			} else {
				adv.call(layer, type, callback, capture);
			}
		};
	}

	// If a handler is already declared in the element's onclick attribute, it will be fired before
	// FastClick's onClick handler. Fix this by pulling out the user-defined handler function and
	// adding it as listener.
	if (typeof layer.onclick === 'function') {

		// Android browser on at least 3.2 requires a new reference to the function in layer.onclick
		// - the old one won't work if passed to addEventListener directly.
		oldOnClick = layer.onclick;
		layer.addEventListener('click', function(event) {
			oldOnClick(event);
		}, false);
		layer.onclick = null;
	}
}


/**
 * Android requires exceptions.
 *
 * @type boolean
 */
FastClick.prototype.deviceIsAndroid = navigator.userAgent.indexOf('Android') > 0;


/**
 * iOS requires exceptions.
 *
 * @type boolean
 */
FastClick.prototype.deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent);


/**
 * iOS 4 requires an exception for select elements.
 *
 * @type boolean
 */
FastClick.prototype.deviceIsIOS4 = FastClick.prototype.deviceIsIOS && (/OS 4_\d(_\d)?/).test(navigator.userAgent);


/**
 * iOS 6.0(+?) requires the target element to be manually derived
 *
 * @type boolean
 */
FastClick.prototype.deviceIsIOSWithBadTarget = FastClick.prototype.deviceIsIOS && (/OS ([6-9]|\d{2})_\d/).test(navigator.userAgent);


/**
 * Determine whether a given element requires a native click.
 *
 * @param {EventTarget|Element} target Target DOM element
 * @returns {boolean} Returns true if the element needs a native click
 */
FastClick.prototype.needsClick = function(target) {
	'use strict';
	switch (target.nodeName.toLowerCase()) {

	// Don't send a synthetic click to disabled inputs (issue #62)
	case 'button':
	case 'select':
	case 'textarea':
		if (target.disabled) {
			return true;
		}

		break;
	case 'input':

		// File inputs need real clicks on iOS 6 due to a browser bug (issue #68)
		if ((this.deviceIsIOS && target.type === 'file') || target.disabled) {
			return true;
		}

		break;
	case 'label':
	case 'video':
		return true;
	}

	return (/\bneedsclick\b/).test(target.className);
};


/**
 * Determine whether a given element requires a call to focus to simulate click into element.
 *
 * @param {EventTarget|Element} target Target DOM element
 * @returns {boolean} Returns true if the element requires a call to focus to simulate native click.
 */
FastClick.prototype.needsFocus = function(target) {
	'use strict';
	switch (target.nodeName.toLowerCase()) {
	case 'textarea':
		return true;
	case 'select':
		return !this.deviceIsAndroid;
	case 'input':
		switch (target.type) {
		case 'button':
		case 'checkbox':
		case 'file':
		case 'image':
		case 'radio':
		case 'submit':
			return false;
		}

		// No point in attempting to focus disabled inputs
		return !target.disabled && !target.readOnly;
	default:
		return (/\bneedsfocus\b/).test(target.className);
	}
};


/**
 * Send a click event to the specified element.
 *
 * @param {EventTarget|Element} targetElement
 * @param {Event} event
 */
FastClick.prototype.sendClick = function(targetElement, event) {
	'use strict';
	var clickEvent, touch;

	// On some Android devices activeElement needs to be blurred otherwise the synthetic click will have no effect (#24)
	if (document.activeElement && document.activeElement !== targetElement) {
		document.activeElement.blur();
	}

	touch = event.changedTouches[0];

	// Synthesise a click event, with an extra attribute so it can be tracked
	clickEvent = document.createEvent('MouseEvents');
	clickEvent.initMouseEvent(this.determineEventType(targetElement), true, true, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, false, false, false, false, 0, null);
	clickEvent.forwardedTouchEvent = true;
	targetElement.dispatchEvent(clickEvent);
};

FastClick.prototype.determineEventType = function(targetElement) {
	'use strict';

	//Issue #159: Android Chrome Select Box does not open with a synthetic click event
	if (this.deviceIsAndroid && targetElement.tagName.toLowerCase() === 'select') {
		return 'mousedown';
	}

	return 'click';
};


/**
 * @param {EventTarget|Element} targetElement
 */
FastClick.prototype.focus = function(targetElement) {
	'use strict';
	var length;

	// Issue #160: on iOS 7, some input elements (e.g. date datetime) throw a vague TypeError on setSelectionRange. These elements don't have an integer value for the selectionStart and selectionEnd properties, but unfortunately that can't be used for detection because accessing the properties also throws a TypeError. Just check the type instead. Filed as Apple bug #15122724.
	if (this.deviceIsIOS && targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time') {
		length = targetElement.value.length;
		targetElement.setSelectionRange(length, length);
	} else {
		targetElement.focus();
	}
};


/**
 * Check whether the given target element is a child of a scrollable layer and if so, set a flag on it.
 *
 * @param {EventTarget|Element} targetElement
 */
FastClick.prototype.updateScrollParent = function(targetElement) {
	'use strict';
	var scrollParent, parentElement;

	scrollParent = targetElement.fastClickScrollParent;

	// Attempt to discover whether the target element is contained within a scrollable layer. Re-check if the
	// target element was moved to another parent.
	if (!scrollParent || !scrollParent.contains(targetElement)) {
		parentElement = targetElement;
		do {
			if (parentElement.scrollHeight > parentElement.offsetHeight) {
				scrollParent = parentElement;
				targetElement.fastClickScrollParent = parentElement;
				break;
			}

			parentElement = parentElement.parentElement;
		} while (parentElement);
	}

	// Always update the scroll top tracker if possible.
	if (scrollParent) {
		scrollParent.fastClickLastScrollTop = scrollParent.scrollTop;
	}
};


/**
 * @param {EventTarget} targetElement
 * @returns {Element|EventTarget}
 */
FastClick.prototype.getTargetElementFromEventTarget = function(eventTarget) {
	'use strict';

	// On some older browsers (notably Safari on iOS 4.1 - see issue #56) the event target may be a text node.
	if (eventTarget.nodeType === Node.TEXT_NODE) {
		return eventTarget.parentNode;
	}

	return eventTarget;
};


/**
 * On touch start, record the position and scroll offset.
 *
 * @param {Event} event
 * @returns {boolean}
 */
FastClick.prototype.onTouchStart = function(event) {
	'use strict';
	var targetElement, touch, selection;

	// Ignore multiple touches, otherwise pinch-to-zoom is prevented if both fingers are on the FastClick element (issue #111).
	if (event.targetTouches.length > 1) {
		return true;
	}

	targetElement = this.getTargetElementFromEventTarget(event.target);
	touch = event.targetTouches[0];

	if (this.deviceIsIOS) {

		// Only trusted events will deselect text on iOS (issue #49)
		selection = window.getSelection();
		if (selection.rangeCount && !selection.isCollapsed) {
			return true;
		}

		if (!this.deviceIsIOS4) {

			// Weird things happen on iOS when an alert or confirm dialog is opened from a click event callback (issue #23):
			// when the user next taps anywhere else on the page, new touchstart and touchend events are dispatched
			// with the same identifier as the touch event that previously triggered the click that triggered the alert.
			// Sadly, there is an issue on iOS 4 that causes some normal touch events to have the same identifier as an
			// immediately preceeding touch event (issue #52), so this fix is unavailable on that platform.
			if (touch.identifier === this.lastTouchIdentifier) {
				event.preventDefault();
				return false;
			}

			this.lastTouchIdentifier = touch.identifier;

			// If the target element is a child of a scrollable layer (using -webkit-overflow-scrolling: touch) and:
			// 1) the user does a fling scroll on the scrollable layer
			// 2) the user stops the fling scroll with another tap
			// then the event.target of the last 'touchend' event will be the element that was under the user's finger
			// when the fling scroll was started, causing FastClick to send a click event to that layer - unless a check
			// is made to ensure that a parent layer was not scrolled before sending a synthetic click (issue #42).
			this.updateScrollParent(targetElement);
		}
	}

	this.trackingClick = true;
	this.trackingClickStart = event.timeStamp;
	this.targetElement = targetElement;

	this.touchStartX = touch.pageX;
	this.touchStartY = touch.pageY;

	// Prevent phantom clicks on fast double-tap (issue #36)
	if ((event.timeStamp - this.lastClickTime) < 200) {
		event.preventDefault();
	}

	return true;
};


/**
 * Based on a touchmove event object, check whether the touch has moved past a boundary since it started.
 *
 * @param {Event} event
 * @returns {boolean}
 */
FastClick.prototype.touchHasMoved = function(event) {
	'use strict';
	var touch = event.changedTouches[0], boundary = this.touchBoundary;

	if (Math.abs(touch.pageX - this.touchStartX) > boundary || Math.abs(touch.pageY - this.touchStartY) > boundary) {
		return true;
	}

	return false;
};


/**
 * Update the last position.
 *
 * @param {Event} event
 * @returns {boolean}
 */
FastClick.prototype.onTouchMove = function(event) {
	'use strict';
	if (!this.trackingClick) {
		return true;
	}

	// If the touch has moved, cancel the click tracking
	if (this.targetElement !== this.getTargetElementFromEventTarget(event.target) || this.touchHasMoved(event)) {
		this.trackingClick = false;
		this.targetElement = null;
	}

	return true;
};


/**
 * Attempt to find the labelled control for the given label element.
 *
 * @param {EventTarget|HTMLLabelElement} labelElement
 * @returns {Element|null}
 */
FastClick.prototype.findControl = function(labelElement) {
	'use strict';

	// Fast path for newer browsers supporting the HTML5 control attribute
	if (labelElement.control !== undefined) {
		return labelElement.control;
	}

	// All browsers under test that support touch events also support the HTML5 htmlFor attribute
	if (labelElement.htmlFor) {
		return document.getElementById(labelElement.htmlFor);
	}

	// If no for attribute exists, attempt to retrieve the first labellable descendant element
	// the list of which is defined here: http://www.w3.org/TR/html5/forms.html#category-label
	return labelElement.querySelector('button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea');
};


/**
 * On touch end, determine whether to send a click event at once.
 *
 * @param {Event} event
 * @returns {boolean}
 */
FastClick.prototype.onTouchEnd = function(event) {
	'use strict';
	var forElement, trackingClickStart, targetTagName, scrollParent, touch, targetElement = this.targetElement;

	if (!this.trackingClick) {
		return true;
	}

	// Prevent phantom clicks on fast double-tap (issue #36)
	if ((event.timeStamp - this.lastClickTime) < 200) {
		this.cancelNextClick = true;
		return true;
	}

	// Reset to prevent wrong click cancel on input (issue #156).
	this.cancelNextClick = false;

	this.lastClickTime = event.timeStamp;

	trackingClickStart = this.trackingClickStart;
	this.trackingClick = false;
	this.trackingClickStart = 0;

	// On some iOS devices, the targetElement supplied with the event is invalid if the layer
	// is performing a transition or scroll, and has to be re-detected manually. Note that
	// for this to function correctly, it must be called *after* the event target is checked!
	// See issue #57; also filed as rdar://13048589 .
	if (this.deviceIsIOSWithBadTarget) {
		touch = event.changedTouches[0];

		// In certain cases arguments of elementFromPoint can be negative, so prevent setting targetElement to null
		targetElement = document.elementFromPoint(touch.pageX - window.pageXOffset, touch.pageY - window.pageYOffset) || targetElement;
		targetElement.fastClickScrollParent = this.targetElement.fastClickScrollParent;
	}

	targetTagName = targetElement.tagName.toLowerCase();
	if (targetTagName === 'label') {
		forElement = this.findControl(targetElement);
		if (forElement) {
			this.focus(targetElement);
			if (this.deviceIsAndroid) {
				return false;
			}

			targetElement = forElement;
		}
	} else if (this.needsFocus(targetElement)) {

		// Case 1: If the touch started a while ago (best guess is 100ms based on tests for issue #36) then focus will be triggered anyway. Return early and unset the target element reference so that the subsequent click will be allowed through.
		// Case 2: Without this exception for input elements tapped when the document is contained in an iframe, then any inputted text won't be visible even though the value attribute is updated as the user types (issue #37).
		if ((event.timeStamp - trackingClickStart) > 100 || (this.deviceIsIOS && window.top !== window && targetTagName === 'input')) {
			this.targetElement = null;
			return false;
		}

		this.focus(targetElement);

		// Select elements need the event to go through on iOS 4, otherwise the selector menu won't open.
		if (!this.deviceIsIOS4 || targetTagName !== 'select') {
			this.targetElement = null;
			event.preventDefault();
		}

		return false;
	}

	if (this.deviceIsIOS && !this.deviceIsIOS4) {

		// Don't send a synthetic click event if the target element is contained within a parent layer that was scrolled
		// and this tap is being used to stop the scrolling (usually initiated by a fling - issue #42).
		scrollParent = targetElement.fastClickScrollParent;
		if (scrollParent && scrollParent.fastClickLastScrollTop !== scrollParent.scrollTop) {
			return true;
		}
	}

	// Prevent the actual click from going though - unless the target node is marked as requiring
	// real clicks or if it is in the whitelist in which case only non-programmatic clicks are permitted.
	if (!this.needsClick(targetElement)) {
		event.preventDefault();
		this.sendClick(targetElement, event);
	}

	return false;
};


/**
 * On touch cancel, stop tracking the click.
 *
 * @returns {void}
 */
FastClick.prototype.onTouchCancel = function() {
	'use strict';
	this.trackingClick = false;
	this.targetElement = null;
};


/**
 * Determine mouse events which should be permitted.
 *
 * @param {Event} event
 * @returns {boolean}
 */
FastClick.prototype.onMouse = function(event) {
	'use strict';

	// If a target element was never set (because a touch event was never fired) allow the event
	if (!this.targetElement) {
		return true;
	}

	if (event.forwardedTouchEvent) {
		return true;
	}

	// Programmatically generated events targeting a specific element should be permitted
	if (!event.cancelable) {
		return true;
	}

	// Derive and check the target element to see whether the mouse event needs to be permitted;
	// unless explicitly enabled, prevent non-touch click events from triggering actions,
	// to prevent ghost/doubleclicks.
	if (!this.needsClick(this.targetElement) || this.cancelNextClick) {

		// Prevent any user-added listeners declared on FastClick element from being fired.
		if (event.stopImmediatePropagation) {
			event.stopImmediatePropagation();
		} else {

			// Part of the hack for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
			event.propagationStopped = true;
		}

		// Cancel the event
		event.stopPropagation();
		event.preventDefault();

		return false;
	}

	// If the mouse event is permitted, return true for the action to go through.
	return true;
};


/**
 * On actual clicks, determine whether this is a touch-generated click, a click action occurring
 * naturally after a delay after a touch (which needs to be cancelled to avoid duplication), or
 * an actual click which should be permitted.
 *
 * @param {Event} event
 * @returns {boolean}
 */
FastClick.prototype.onClick = function(event) {
	'use strict';
	var permitted;

	// It's possible for another FastClick-like library delivered with third-party code to fire a click event before FastClick does (issue #44). In that case, set the click-tracking flag back to false and return early. This will cause onTouchEnd to return early.
	if (this.trackingClick) {
		this.targetElement = null;
		this.trackingClick = false;
		return true;
	}

	// Very odd behaviour on iOS (issue #18): if a submit element is present inside a form and the user hits enter in the iOS simulator or clicks the Go button on the pop-up OS keyboard the a kind of 'fake' click event will be triggered with the submit-type input element as the target.
	if (event.target.type === 'submit' && event.detail === 0) {
		return true;
	}

	permitted = this.onMouse(event);

	// Only unset targetElement if the click is not permitted. This will ensure that the check for !targetElement in onMouse fails and the browser's click doesn't go through.
	if (!permitted) {
		this.targetElement = null;
	}

	// If clicks are permitted, return true for the action to go through.
	return permitted;
};


/**
 * Remove all FastClick's event listeners.
 *
 * @returns {void}
 */
FastClick.prototype.destroy = function() {
	'use strict';
	var layer = this.layer;

	if (this.deviceIsAndroid) {
		layer.removeEventListener('mouseover', this.onMouse, true);
		layer.removeEventListener('mousedown', this.onMouse, true);
		layer.removeEventListener('mouseup', this.onMouse, true);
	}

	layer.removeEventListener('click', this.onClick, true);
	layer.removeEventListener('touchstart', this.onTouchStart, false);
	layer.removeEventListener('touchmove', this.onTouchMove, false);
	layer.removeEventListener('touchend', this.onTouchEnd, false);
	layer.removeEventListener('touchcancel', this.onTouchCancel, false);
};


/**
 * Check whether FastClick is needed.
 *
 * @param {Element} layer The layer to listen on
 */
FastClick.notNeeded = function(layer) {
	'use strict';
	var metaViewport;
	var chromeVersion;

	// Devices that don't support touch don't need FastClick
	if (typeof window.ontouchstart === 'undefined') {
		return true;
	}

	// Chrome version - zero for other browsers
	chromeVersion = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];

	if (chromeVersion) {

		if (FastClick.prototype.deviceIsAndroid) {
			metaViewport = document.querySelector('meta[name=viewport]');
			
			if (metaViewport) {
				// Chrome on Android with user-scalable="no" doesn't need FastClick (issue #89)
				if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
					return true;
				}
				// Chrome 32 and above with width=device-width or less don't need FastClick
				if (chromeVersion > 31 && window.innerWidth <= window.screen.width) {
					return true;
				}
			}

		// Chrome desktop doesn't need FastClick (issue #15)
		} else {
			return true;
		}
	}

	// IE10 with -ms-touch-action: none, which disables double-tap-to-zoom (issue #97)
	if (layer.style.msTouchAction === 'none') {
		return true;
	}

	return false;
};


/**
 * Factory method for creating a FastClick object
 *
 * @param {Element} layer The layer to listen on
 */
FastClick.attach = function(layer) {
	'use strict';
	return new FastClick(layer);
};


if (typeof define !== 'undefined' && define.amd) {

	// AMD. Register as an anonymous module.
	define(function() {
		'use strict';
		return FastClick;
	});
} else if (typeof module !== 'undefined' && module.exports) {
	module.exports = FastClick.attach;
	module.exports.FastClick = FastClick;
} else {
	window.FastClick = FastClick;
}

});
require.register("switchery/switchery.js", function(exports, require, module){
/**
 * Switchery 0.6.1
 * http://abpetkov.github.io/switchery/
 *
 * Authored by Alexander Petkov
 * https://github.com/abpetkov
 *
 * Copyright 2013-2014, Alexander Petkov
 * License: The MIT License (MIT)
 * http://opensource.org/licenses/MIT
 *
 */

/**
 * External dependencies.
 */

var transitionize = require('transitionize')
  , fastclick = require('fastclick');

/**
 * Expose `Switchery`.
 */

module.exports = Switchery;

/**
 * Set Switchery default values.
 *
 * @api public
 */

var defaults = {
    color          : '#64bd63'
  , secondaryColor : '#dfdfdf'
  , className      : 'switchery'
  , disabled       : false
  , disabledOpacity: 0.5
  , speed          : '0.4s'
};

/**
 * Create Switchery object.
 *
 * @param {Object} element
 * @param {Object} options
 * @api public
 */

function Switchery(element, options) {
  if (!(this instanceof Switchery)) return new Switchery(element, options);

  this.element = element;
  this.options = options || {};

  for (var i in defaults) {
    if (this.options[i] == null) {
      this.options[i] = defaults[i];
    }
  }

  if (this.element != null && this.element.type == 'checkbox') this.init();
}

/**
 * Hide the target element.
 *
 * @api private
 */

Switchery.prototype.hide = function() {
  this.element.style.display = 'none';
};

/**
 * Show custom switch after the target element.
 *
 * @api private
 */

Switchery.prototype.show = function() {
  var switcher = this.create();
  this.insertAfter(this.element, switcher);
};

/**
 * Create custom switch.
 *
 * @returns {Object} this.switcher
 * @api private
 */

Switchery.prototype.create = function() {
  this.switcher = document.createElement('span');
  this.jack = document.createElement('small');
  this.switcher.appendChild(this.jack);
  this.switcher.className = this.options.className;

  return this.switcher;
};

/**
 * Insert after element after another element.
 *
 * @param {Object} reference
 * @param {Object} target
 * @api private
 */

Switchery.prototype.insertAfter = function(reference, target) {
  reference.parentNode.insertBefore(target, reference.nextSibling);
};

/**
 * See if input is checked.
 *
 * @returns {Boolean}
 * @api private
 */

Switchery.prototype.isChecked = function() {
  return this.element.checked;
};

/**
 * See if switcher should be disabled.
 *
 * @returns {Boolean}
 * @api private
 */

Switchery.prototype.isDisabled = function() {
  return this.options.disabled || this.element.disabled;
};

/**
 * Set switch jack proper position.
 *
 * @param {Boolean} clicked - we need this in order to uncheck the input when the switch is clicked
 * @api private
 */

Switchery.prototype.setPosition = function (clicked) {
  var checked = this.isChecked()
    , switcher = this.switcher
    , jack = this.jack;

  if (clicked && checked) checked = false;
  else if (clicked && !checked) checked = true;

  if (checked === true) {
    this.element.checked = true;

    if (window.getComputedStyle) jack.style.left = parseInt(window.getComputedStyle(switcher).width) - parseInt(window.getComputedStyle(jack).width) + 'px';
    else jack.style.left = parseInt(switcher.currentStyle['width']) - parseInt(jack.currentStyle['width']) + 'px';

    if (this.options.color) this.colorize();
    this.setSpeed();
  } else {
    jack.style.left = 0;
    this.element.checked = false;
    this.switcher.style.boxShadow = 'inset 0 0 0 0 ' + this.options.secondaryColor;
    this.switcher.style.borderColor = this.options.secondaryColor;
    this.switcher.style.backgroundColor = (this.options.secondaryColor !== defaults.secondaryColor) ? this.options.secondaryColor : '#fff';
    this.setSpeed();
  }
};

/**
 * Set speed.
 *
 * @api private
 */

Switchery.prototype.setSpeed = function() {
  var switcherProp = {}
    , jackProp = { 'left': this.options.speed.replace(/[a-z]/, '') / 2 + 's' };

  if (this.isChecked()) {
    switcherProp = {
        'border': this.options.speed
      , 'box-shadow': this.options.speed
      , 'background-color': this.options.speed.replace(/[a-z]/, '') * 3 + 's'
    };
  } else {
    switcherProp = {
        'border': this.options.speed
      , 'box-shadow': this.options.speed
    };
  }

  transitionize(this.switcher, switcherProp);
  transitionize(this.jack, jackProp);
};

/**
 * Set switch color.
 *
 * @api private
 */

Switchery.prototype.colorize = function() {
  this.switcher.style.backgroundColor = this.options.color;
  this.switcher.style.borderColor = this.options.color;
  this.switcher.style.boxShadow = 'inset 0 0 0 16px ' + this.options.color;
};

/**
 * Handle the onchange event.
 *
 * @param {Boolean} state
 * @api private
 */

Switchery.prototype.handleOnchange = function(state) {
  if (typeof Event === 'function' || !document.fireEvent) {
    var event = document.createEvent('HTMLEvents');
    event.initEvent('change', true, true);
    this.element.dispatchEvent(event);
  } else {
    this.element.fireEvent('onchange');
  }
};

/**
 * Handle the native input element state change.
 * A `change` event must be fired in order to detect the change.
 *
 * @api private
 */

Switchery.prototype.handleChange = function() {
  var self = this
    , el = this.element;

  if (el.addEventListener) {
    el.addEventListener('change', function() {
      self.setPosition();
    });
  } else {
    el.attachEvent('onchange', function() {
      self.setPosition();
    });
  }
};

/**
 * Handle the switch click event.
 *
 * @api private
 */

Switchery.prototype.handleClick = function() {
  var self = this
    , switcher = this.switcher
    , parent = self.element.parentNode.tagName.toLowerCase()
    , labelParent = (parent === 'label') ? false : true;

  if (this.isDisabled() === false) {
    fastclick(switcher);

    if (switcher.addEventListener) {
      switcher.addEventListener('click', function() {
        self.setPosition(labelParent);
        self.handleOnchange(self.element.checked);
      });
    } else {
      switcher.attachEvent('onclick', function() {
        self.setPosition(labelParent);
        self.handleOnchange(self.element.checked);
      });
    }
  } else {
    this.element.disabled = true;
    this.switcher.style.opacity = this.options.disabledOpacity;
  }
};

/**
 * Mark an individual switch as already handled.
 *
 * @api private
 */

Switchery.prototype.markAsSwitched = function() {
  this.element.setAttribute('data-switchery', true);
};

/**
 * Check if an individual switch is already handled.
 *
 * @api private
 */

Switchery.prototype.markedAsSwitched = function() {
  return this.element.getAttribute('data-switchery');
};

/**
 * Initialize Switchery.
 *
 * @api private
 */

Switchery.prototype.init = function() {
  this.hide();
  this.show();
  this.setPosition();
  this.markAsSwitched();
  this.handleChange();
  this.handleClick();
};

});




require.alias("abpetkov-transitionize/transitionize.js", "switchery/deps/transitionize/transitionize.js");
require.alias("abpetkov-transitionize/transitionize.js", "switchery/deps/transitionize/index.js");
require.alias("abpetkov-transitionize/transitionize.js", "transitionize/index.js");
require.alias("abpetkov-transitionize/transitionize.js", "abpetkov-transitionize/index.js");
require.alias("ftlabs-fastclick/lib/fastclick.js", "switchery/deps/fastclick/lib/fastclick.js");
require.alias("ftlabs-fastclick/lib/fastclick.js", "switchery/deps/fastclick/index.js");
require.alias("ftlabs-fastclick/lib/fastclick.js", "fastclick/index.js");
require.alias("ftlabs-fastclick/lib/fastclick.js", "ftlabs-fastclick/index.js");
require.alias("switchery/switchery.js", "switchery/index.js");if (typeof exports == "object") {
  module.exports = require("switchery");
} else if (typeof define == "function" && define.amd) {
  define(function(){ return require("switchery"); });
} else {
  this["Switchery"] = require("switchery");
}})();;
/* ===================================================
 *  jquery-sortable.js v0.9.12
 *  http://johnny.github.com/jquery-sortable/
 * ===================================================
 *  Copyright (c) 2012 Jonas von Andrian
 *  All rights reserved.
 *
 *  Redistribution and use in source and binary forms, with or without
 *  modification, are permitted provided that the following conditions are met:
 *  * Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 *  * The name of the author may not be used to endorse or promote products
 *    derived from this software without specific prior written permission.
 *
 *  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 *  ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 *  WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 *  DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
 *  DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 *  (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 *  LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 *  ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 *  (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 *  SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 * ========================================================== */


!function ( $, window, pluginName, undefined){
  var eventNames,
  containerDefaults = {
    // If true, items can be dragged from this container
    drag: true,
    // If true, items can be droped onto this container
    drop: true,
    // Exclude items from being draggable, if the
    // selector matches the item
    exclude: "",
    // If true, search for nested containers within an item
    nested: true,
    // If true, the items are assumed to be arranged vertically
    vertical: true
  }, // end container defaults
  groupDefaults = {
    // This is executed after the placeholder has been moved.
    // $closestItemOrContainer contains the closest item, the placeholder
    // has been put at or the closest empty Container, the placeholder has
    // been appended to.
    afterMove: function ($placeholder, container, $closestItemOrContainer) {
    },
    // The exact css path between the container and its items, e.g. "> tbody"
    containerPath: "",
    // The css selector of the containers
    containerSelector: "ol, ul",
    // Distance the mouse has to travel to start dragging
    distance: 0,
    // Time in milliseconds after mousedown until dragging should start.
    // This option can be used to prevent unwanted drags when clicking on an element.
    delay: 0,
    // The css selector of the drag handle
    handle: "",
    // The exact css path between the item and its subcontainers
    itemPath: "",
    // The css selector of the items
    itemSelector: "li",
    // Check if the dragged item may be inside the container.
    // Use with care, since the search for a valid container entails a depth first search
    // and may be quite expensive.
    isValidTarget: function ($item, container) {
      return true
    },
    // Executed before onDrop if placeholder is detached.
    // This happens if pullPlaceholder is set to false and the drop occurs outside a container.
    onCancel: function ($item, container, _super, event) {
    },
    // Executed at the beginning of a mouse move event.
    // The Placeholder has not been moved yet.
    onDrag: function ($item, position, _super, event) {
      $item.css(position)
    },
    // Called after the drag has been started,
    // that is the mouse button is beeing held down and
    // the mouse is moving.
    // The container is the closest initialized container.
    // Therefore it might not be the container, that actually contains the item.
    onDragStart: function ($item, container, _super, event) {
      $item.css({
        height: $item.height(),
        width: $item.width()
      })
      $item.addClass("dragged")
      $("body").addClass("dragging")
    },
    // Called when the mouse button is beeing released
    onDrop: function ($item, container, _super, event) {
      $item.removeClass("dragged").removeAttr("style")
      $("body").removeClass("dragging")
    },
    // Called on mousedown. If falsy value is returned, the dragging will not start.
    // If clicked on input element, ignore
    onMousedown: function ($item, _super, event) {
      if (!event.target.nodeName.match(/^(input|select)$/i)) {
        event.preventDefault()
        return true
      }
    },
    // Template for the placeholder. Can be any valid jQuery input
    // e.g. a string, a DOM element.
    // The placeholder must have the class "placeholder"
    placeholder: '<li class="placeholder"/>',
    // If true, the position of the placeholder is calculated on every mousemove.
    // If false, it is only calculated when the mouse is above a container.
    pullPlaceholder: true,
    // Specifies serialization of the container group.
    // The pair $parent/$children is either container/items or item/subcontainers.
    serialize: function ($parent, $children, parentIsContainer) {
      var result = $.extend({}, $parent.data())

      if(parentIsContainer)
        return [$children]
      else if ($children[0]){
        result.children = $children
      }

      delete result.subContainers
      delete result.sortable

      return result
    },
    // Set tolerance while dragging. Positive values decrease sensitivity,
    // negative values increase it.
    tolerance: 0
  }, // end group defaults
  containerGroups = {},
  groupCounter = 0,
  emptyBox = {
    left: 0,
    top: 0,
    bottom: 0,
    right:0
  },
  eventNames = {
    start: "touchstart.sortable mousedown.sortable",
    drop: "touchend.sortable touchcancel.sortable mouseup.sortable",
    drag: "touchmove.sortable mousemove.sortable",
    scroll: "scroll.sortable"
  },
  subContainerKey = "subContainers"

  /*
   * a is Array [left, right, top, bottom]
   * b is array [left, top]
   */
  function d(a,b) {
    var x = Math.max(0, a[0] - b[0], b[0] - a[1]),
    y = Math.max(0, a[2] - b[1], b[1] - a[3])
    return x+y;
  }

  function setDimensions(array, dimensions, tolerance, useOffset) {
    var i = array.length,
    offsetMethod = useOffset ? "offset" : "position"
    tolerance = tolerance || 0

    while(i--){
      var el = array[i].el ? array[i].el : $(array[i]),
      // use fitting method
      pos = el[offsetMethod]()
      pos.left += parseInt(el.css('margin-left'), 10)
      pos.top += parseInt(el.css('margin-top'),10)
      dimensions[i] = [
        pos.left - tolerance,
        pos.left + el.outerWidth() + tolerance,
        pos.top - tolerance,
        pos.top + el.outerHeight() + tolerance
      ]
    }
  }

  function getRelativePosition(pointer, element) {
    var offset = element.offset()
    return {
      left: pointer.left - offset.left,
      top: pointer.top - offset.top
    }
  }

  function sortByDistanceDesc(dimensions, pointer, lastPointer) {
    pointer = [pointer.left, pointer.top]
    lastPointer = lastPointer && [lastPointer.left, lastPointer.top]

    var dim,
    i = dimensions.length,
    distances = []

    while(i--){
      dim = dimensions[i]
      distances[i] = [i,d(dim,pointer), lastPointer && d(dim, lastPointer)]
    }
    distances = distances.sort(function  (a,b) {
      return b[1] - a[1] || b[2] - a[2] || b[0] - a[0]
    })

    // last entry is the closest
    return distances
  }

  function ContainerGroup(options) {
    this.options = $.extend({}, groupDefaults, options)
    this.containers = []

    if(!this.options.rootGroup){
      this.scrollProxy = $.proxy(this.scroll, this)
      this.dragProxy = $.proxy(this.drag, this)
      this.dropProxy = $.proxy(this.drop, this)
      this.placeholder = $(this.options.placeholder)

      if(!options.isValidTarget)
        this.options.isValidTarget = undefined
    }
  }

  ContainerGroup.get = function  (options) {
    if(!containerGroups[options.group]) {
      if(options.group === undefined)
        options.group = groupCounter ++

      containerGroups[options.group] = new ContainerGroup(options)
    }

    return containerGroups[options.group]
  }

  ContainerGroup.prototype = {
    dragInit: function  (e, itemContainer) {
      this.$document = $(itemContainer.el[0].ownerDocument)

      // get item to drag
      this.item = $(e.target).closest(this.options.itemSelector)
      this.itemContainer = itemContainer

      if(this.item.is(this.options.exclude) ||
         !this.options.onMousedown(this.item, groupDefaults.onMousedown, e)){
        return
      }

      this.setPointer(e)
      this.toggleListeners('on')

      this.setupDelayTimer()
      this.dragInitDone = true
    },
    drag: function  (e) {
      if(!this.dragging){
        if(!this.distanceMet(e) || !this.delayMet)
          return

        this.options.onDragStart(this.item, this.itemContainer, groupDefaults.onDragStart, e)
        this.item.before(this.placeholder)
        this.dragging = true
      }

      this.setPointer(e)
      // place item under the cursor
      this.options.onDrag(this.item,
                          getRelativePosition(this.pointer, this.item.offsetParent()),
                          groupDefaults.onDrag,
                          e)

      var x = e.pageX || e.originalEvent.pageX,
      y = e.pageY || e.originalEvent.pageY,
      box = this.sameResultBox,
      t = this.options.tolerance

      if(!box || box.top - t > y || box.bottom + t < y || box.left - t > x || box.right + t < x)
        if(!this.searchValidTarget())
          this.placeholder.detach()
    },
    drop: function  (e) {
      this.toggleListeners('off')

      this.dragInitDone = false

      if(this.dragging){
        // processing Drop, check if placeholder is detached
        if(this.placeholder.closest("html")[0])
          this.placeholder.before(this.item).detach()
        else
          this.options.onCancel(this.item, this.itemContainer, groupDefaults.onCancel, e)

        this.options.onDrop(this.item, this.getContainer(this.item), groupDefaults.onDrop, e)

        // cleanup
        this.clearDimensions()
        this.clearOffsetParent()
        this.lastAppendedItem = this.sameResultBox = undefined
        this.dragging = false
      }
    },
    searchValidTarget: function  (pointer, lastPointer) {
      if(!pointer){
        pointer = this.relativePointer || this.pointer
        lastPointer = this.lastRelativePointer || this.lastPointer
      }

      var distances = sortByDistanceDesc(this.getContainerDimensions(),
                                         pointer,
                                         lastPointer),
      i = distances.length

      while(i--){
        var index = distances[i][0],
        distance = distances[i][1]

        if(!distance || this.options.pullPlaceholder){
          var container = this.containers[index]
          if(!container.disabled){
            if(!this.$getOffsetParent()){
              var offsetParent = container.getItemOffsetParent()
              pointer = getRelativePosition(pointer, offsetParent)
              lastPointer = getRelativePosition(lastPointer, offsetParent)
            }
            if(container.searchValidTarget(pointer, lastPointer))
              return true
          }
        }
      }
      if(this.sameResultBox)
        this.sameResultBox = undefined
    },
    movePlaceholder: function  (container, item, method, sameResultBox) {
      var lastAppendedItem = this.lastAppendedItem
      if(!sameResultBox && lastAppendedItem && lastAppendedItem[0] === item[0])
        return;

      item[method](this.placeholder)
      this.lastAppendedItem = item
      this.sameResultBox = sameResultBox
      this.options.afterMove(this.placeholder, container, item)
    },
    getContainerDimensions: function  () {
      if(!this.containerDimensions)
        setDimensions(this.containers, this.containerDimensions = [], this.options.tolerance, !this.$getOffsetParent())
      return this.containerDimensions
    },
    getContainer: function  (element) {
      return element.closest(this.options.containerSelector).data(pluginName)
    },
    $getOffsetParent: function  () {
      if(this.offsetParent === undefined){
        var i = this.containers.length - 1,
        offsetParent = this.containers[i].getItemOffsetParent()

        if(!this.options.rootGroup){
          while(i--){
            if(offsetParent[0] != this.containers[i].getItemOffsetParent()[0]){
              // If every container has the same offset parent,
              // use position() which is relative to this parent,
              // otherwise use offset()
              // compare #setDimensions
              offsetParent = false
              break;
            }
          }
        }

        this.offsetParent = offsetParent
      }
      return this.offsetParent
    },
    setPointer: function (e) {
      var pointer = this.getPointer(e)

      if(this.$getOffsetParent()){
        var relativePointer = getRelativePosition(pointer, this.$getOffsetParent())
        this.lastRelativePointer = this.relativePointer
        this.relativePointer = relativePointer
      }

      this.lastPointer = this.pointer
      this.pointer = pointer
    },
    distanceMet: function (e) {
      var currentPointer = this.getPointer(e)
      return (Math.max(
        Math.abs(this.pointer.left - currentPointer.left),
        Math.abs(this.pointer.top - currentPointer.top)
      ) >= this.options.distance)
    },
    getPointer: function(e) {
      return {
        left: e.pageX || e.originalEvent.pageX,
        top: e.pageY || e.originalEvent.pageY
      }
    },
    setupDelayTimer: function () {
      var that = this
      this.delayMet = !this.options.delay

      // init delay timer if needed
      if (!this.delayMet) {
        clearTimeout(this._mouseDelayTimer);
        this._mouseDelayTimer = setTimeout(function() {
          that.delayMet = true
        }, this.options.delay)
      }
    },
    scroll: function  (e) {
      this.clearDimensions()
      this.clearOffsetParent() // TODO is this needed?
    },
    toggleListeners: function (method) {
      var that = this,
      events = ['drag','drop','scroll']

      $.each(events,function  (i,event) {
        that.$document[method](eventNames[event], that[event + 'Proxy'])
      })
    },
    clearOffsetParent: function () {
      this.offsetParent = undefined
    },
    // Recursively clear container and item dimensions
    clearDimensions: function  () {
      this.traverse(function(object){
        object._clearDimensions()
      })
    },
    traverse: function(callback) {
      callback(this)
      var i = this.containers.length
      while(i--){
        this.containers[i].traverse(callback)
      }
    },
    _clearDimensions: function(){
      this.containerDimensions = undefined
    },
    _destroy: function () {
      containerGroups[this.options.group] = undefined
    }
  }

  function Container(element, options) {
    this.el = element
    this.options = $.extend( {}, containerDefaults, options)

    this.group = ContainerGroup.get(this.options)
    this.rootGroup = this.options.rootGroup || this.group
    this.handle = this.rootGroup.options.handle || this.rootGroup.options.itemSelector

    var itemPath = this.rootGroup.options.itemPath
    this.target = itemPath ? this.el.find(itemPath) : this.el

    this.target.on(eventNames.start, this.handle, $.proxy(this.dragInit, this))

    if(this.options.drop)
      this.group.containers.push(this)
  }

  Container.prototype = {
    dragInit: function  (e) {
      var rootGroup = this.rootGroup

      if( !this.disabled &&
          !rootGroup.dragInitDone &&
          this.options.drag &&
          this.isValidDrag(e)) {
        rootGroup.dragInit(e, this)
      }
    },
    isValidDrag: function(e) {
      return e.which == 1 ||
        e.type == "touchstart" && e.originalEvent.touches.length == 1
    },
    searchValidTarget: function  (pointer, lastPointer) {
      var distances = sortByDistanceDesc(this.getItemDimensions(),
                                         pointer,
                                         lastPointer),
      i = distances.length,
      rootGroup = this.rootGroup,
      validTarget = !rootGroup.options.isValidTarget ||
        rootGroup.options.isValidTarget(rootGroup.item, this)

      if(!i && validTarget){
        rootGroup.movePlaceholder(this, this.target, "append")
        return true
      } else
        while(i--){
          var index = distances[i][0],
          distance = distances[i][1]
          if(!distance && this.hasChildGroup(index)){
            var found = this.getContainerGroup(index).searchValidTarget(pointer, lastPointer)
            if(found)
              return true
          }
          else if(validTarget){
            this.movePlaceholder(index, pointer)
            return true
          }
        }
    },
    movePlaceholder: function  (index, pointer) {
      var item = $(this.items[index]),
      dim = this.itemDimensions[index],
      method = "after",
      width = item.outerWidth(),
      height = item.outerHeight(),
      offset = item.offset(),
      sameResultBox = {
        left: offset.left,
        right: offset.left + width,
        top: offset.top,
        bottom: offset.top + height
      }
      if(this.options.vertical){
        var yCenter = (dim[2] + dim[3]) / 2,
        inUpperHalf = pointer.top <= yCenter
        if(inUpperHalf){
          method = "before"
          sameResultBox.bottom -= height / 2
        } else
          sameResultBox.top += height / 2
      } else {
        var xCenter = (dim[0] + dim[1]) / 2,
        inLeftHalf = pointer.left <= xCenter
        if(inLeftHalf){
          method = "before"
          sameResultBox.right -= width / 2
        } else
          sameResultBox.left += width / 2
      }
      if(this.hasChildGroup(index))
        sameResultBox = emptyBox
      this.rootGroup.movePlaceholder(this, item, method, sameResultBox)
    },
    getItemDimensions: function  () {
      if(!this.itemDimensions){
        this.items = this.$getChildren(this.el, "item").filter(":not(.placeholder, .dragged)").get()
        setDimensions(this.items, this.itemDimensions = [], this.options.tolerance)
      }
      return this.itemDimensions
    },
    getItemOffsetParent: function  () {
      var offsetParent,
      el = this.el
      // Since el might be empty we have to check el itself and
      // can not do something like el.children().first().offsetParent()
      if(el.css("position") === "relative" || el.css("position") === "absolute"  || el.css("position") === "fixed")
        offsetParent = el
      else
        offsetParent = el.offsetParent()
      return offsetParent
    },
    hasChildGroup: function (index) {
      return this.options.nested && this.getContainerGroup(index)
    },
    getContainerGroup: function  (index) {
      var childGroup = $.data(this.items[index], subContainerKey)
      if( childGroup === undefined){
        var childContainers = this.$getChildren(this.items[index], "container")
        childGroup = false

        if(childContainers[0]){
          var options = $.extend({}, this.options, {
            rootGroup: this.rootGroup,
            group: groupCounter ++
          })
          childGroup = childContainers[pluginName](options).data(pluginName).group
        }
        $.data(this.items[index], subContainerKey, childGroup)
      }
      return childGroup
    },
    $getChildren: function (parent, type) {
      var options = this.rootGroup.options,
      path = options[type + "Path"],
      selector = options[type + "Selector"]

      parent = $(parent)
      if(path)
        parent = parent.find(path)

      return parent.children(selector)
    },
    _serialize: function (parent, isContainer) {
      var that = this,
      childType = isContainer ? "item" : "container",

      children = this.$getChildren(parent, childType).not(this.options.exclude).map(function () {
        return that._serialize($(this), !isContainer)
      }).get()

      return this.rootGroup.options.serialize(parent, children, isContainer)
    },
    traverse: function(callback) {
      $.each(this.items || [], function(item){
        var group = $.data(this, subContainerKey)
        if(group)
          group.traverse(callback)
      });

      callback(this)
    },
    _clearDimensions: function  () {
      this.itemDimensions = undefined
    },
    _destroy: function() {
      var that = this;

      this.target.off(eventNames.start, this.handle);
      this.el.removeData(pluginName)

      if(this.options.drop)
        this.group.containers = $.grep(this.group.containers, function(val){
          return val != that
        })

      $.each(this.items || [], function(){
        $.removeData(this, subContainerKey)
      })
    }
  }

  var API = {
    enable: function() {
      this.traverse(function(object){
        object.disabled = false
      })
    },
    disable: function (){
      this.traverse(function(object){
        object.disabled = true
      })
    },
    serialize: function () {
      return this._serialize(this.el, true)
    },
    refresh: function() {
      this.traverse(function(object){
        object._clearDimensions()
      })
    },
    destroy: function () {
      this.traverse(function(object){
        object._destroy();
      })
    }
  }

  $.extend(Container.prototype, API)

  /**
   * jQuery API
   *
   * Parameters are
   *   either options on init
   *   or a method name followed by arguments to pass to the method
   */
  $.fn[pluginName] = function(methodOrOptions) {
    var args = Array.prototype.slice.call(arguments, 1)

    return this.map(function(){
      var $t = $(this),
      object = $t.data(pluginName)

      if(object && API[methodOrOptions])
        return API[methodOrOptions].apply(object, args) || this
      else if(!object && (methodOrOptions === undefined ||
                          typeof methodOrOptions === "object"))
        $t.data(pluginName, new Container($t, methodOrOptions))

      return this
    });
  };

}(jQuery, window, 'sortable');
;
  jQuery(function($){

  jQuery.fn.outerHTML = function() {
    return jQuery('<div />').append(this.eq(0).clone()).html();
  };

  $(document).ready(function() {

    $('.form-select').each(function() {
      $(this).click();
      $(this).mouseup();
      $(this).keyup();
      $(this).change();
    });

    var active_layout = $('.layouts .active').attr('id');

    function update_layout(op) {
      // Going throught active layout to save all settings
      $this = $('.layout.active');
      var settings = Drupal.settings.nikadevs_cms.layouts[active_layout];
      var layout = {'name' : $('a[href="#' + $this.attr('id') + '"]').text(), 'pages' : settings['pages'], 'settings' : settings['settings'], 'rows': {}, 'regions' : {}};

      // Save rows settings
      $this.find('.row').each(function() {
        var id = $(this).attr('id');
        layout['rows'][$(this).attr('id')] = {
          'name' : $(this).find('h2 span').text(),
          'attributes' : attributes($(this)),
          'settings': typeof(settings['rows'][id]['settings']) != 'undefined' ? settings['rows'][id]['settings'] : {}
        };
      });

      // Save regions settings
      $this.find('.col').each(function() {
        if($(this).closest('.row').attr('id') != 'id-0') {
          var id = $(this).attr('id');
          layout['regions'][id] = {
            'row_id' : $(this).closest('.row').attr('id'),
            'name' : $(this).find('h3').text(),
            'attributes' : attributes($(this)),
            'settings': typeof(settings['regions'][id]['settings']) != 'undefined' ? settings['regions'][id]['settings'] : {}
          };
        }
      });

      // Send settings to server for saving
      $('#layout-settings').addClass('fa-spin');
      $.post(Drupal.settings.basePath + '?q=nikadevs_cms/layout_builder/update', {'layout' : layout, 'id' : active_layout, 'op' : op}, function() {
        $('#layout-settings').removeClass('fa-spin').after('<span class = "saving-info btn btn-xs btn-success">Saved.</span>');
        setTimeout(function() {
          $('.saving-info').animate({opacity: 0}, 500, function() {
            $(this).remove();
          });
        }, 1000);
      });
    }

    function attributes($this) {
      // Collect all attributes and remove not required
      var attrs = {};
      $.each($this[0].attributes, function() {
        if(!this.specified || this.name == 'style') {
          return;
        }
        attr = this.value;
        if(this.name == 'class') {
          if($.trim(attr)) {
            classes = $.trim(attr).split(' ');
            add_class = {};
            for(i in classes) {
              if(classes[i] != 'col' && classes[i] != 'sortable' && classes[i] != 'ui-sortable' && classes[i] != 'settings-open' && classes[i] != 'dragged') {
                add_class[i] = classes[i]
              }
            }
          }
          attrs[this.name] = add_class;
        }
        else {
          attrs[this.name] = $.trim(attr);
        }
      });
      return attrs;
    }

    function attach_handlers() {

      $('.layout').sortable({
        itemSelector: '.sortable',
        delay: 150,
        placeholder: '<div class = "layout-builder-row-placeholder"></div>',
        isValidTarget: function  (item, container) {
          if(item.is(".row") && container.el.is('.layout') || item.is(".col") && container.el.is('.sortable-parent')) {
            return true;
          }
          else {
            return false;
          }
        },
        onDrop: function ($item, container, _super, event) {
          update_layout();
          $item.removeClass("dragged").removeAttr("style");
          $("body").removeClass("dragging");
        }
      });

      // Row settings form
      $('.settings-row').click(row_settings_form);

      // Switch between layouts
      $('.layouts-links a').click(layout_switch);

      // Col Settings Form
      $('.settings-col').click(col_settings_form);
    }

    function layout_switch() {
      $('.layouts-links a, .layout').removeClass('active');
      $(this).addClass('active');
      $($(this).attr('href')).addClass('active');
      // Update global active layout
      active_layout = $(this).attr('href').substr(1);
      return false;
    }

    $("#col-settings").dialog({
      autoOpen: false,
      width: 700,
      modal: true,
      buttons: {
        "Save": function() {
          col_settings_save();
          $('.col').removeClass('settings-open');
          update_layout();
          $(this).dialog( "close" );
          return false;
        },
        Cancel: function() {
          $('.col').removeClass('settings-open');
          $(this).dialog( "close" );
        }
      },
    });

    function col_settings_form($col) {
      $col = $(this).parents('.col');
      // Set default option to AUTO
      $('.col-settings select').val(0);
      $('.vissible-settings input').attr('checked', false);
      var classes = $col.attr('class').split(' ');
      var col_class = '';
      var old_classes = {};
      // Setup form values and save current classes
      for(i in classes) {
        col_class = classes[i].split('-');
        if(col_class[0] == 'col' && typeof(col_class[3]) != 'undefined') {
          $('select[name="col-' + col_class[1] + '-' + col_class[2] + '"]').val(col_class[3]);
          old_classes[classes[i]] = classes[i];
        }
        else if(col_class[0] == 'col' && typeof(col_class[1]) != 'undefined') {
          $('select[name="col-' + col_class[1] + '"]').val(col_class[2]);
          old_classes[classes[i]] = classes[i];
        }
        if((col_class[0] == 'visible' || col_class[0] == 'hidden') && typeof(col_class[1]) != 'undefined') {
          $('input[name="showing-' + col_class[1] + '"]').filter('[value="' + classes[i] + '"]').attr('checked', true);
          old_classes[classes[i]] = classes[i];   
        }
      }

      // Load settings to the Form
      _settings_to_form('#col-settings', Drupal.settings.nikadevs_cms.layouts[active_layout]['regions'][$col.attr('id')]['settings']);

      $('.col').removeClass('settings-open');
      $col.addClass('settings-open').data('old_classes', old_classes);

      // Open first tab settings
      $('.settings-tabs a:first').click();

      // Open dialog form
      $("#col-settings").dialog('open');
    }

    $('.settings-tabs a').click(function() {
      $('.settings-tabs a.active').removeClass('active');
      $(this).addClass('active');
      $('.settings-tab-form.active').hide();
      $(this).parent().parent().find($(this).attr('href')).show(200).addClass('active');
      if($(this).hasClass('show-devices')) {
        $('.device-icons-wrap').show(200);
      }
      else {
        $('.device-icons-wrap').hide();
      }
      return false;
    });

    function _settings_to_form(target_form, settings) {
      $(target_form + ' .input-setting').val('').attr('checked', false);
      for(setting in settings) {
        // Exception for the checkboxes
        if($(target_form + ' [name="' + setting + '"]').attr('type') == 'checkbox') {
          $(target_form + ' [name="' + setting + '"]').attr('checked', parseInt(settings[setting]));
        }
        else {
          $(target_form + ' [name="' + setting + '"]').val(settings[setting]);
        }
      }
    }

    function _form_to_settings(target_form, settings) {
      if(typeof(settings) != 'object') {
        settings = {'settings' : {}};
      } else if(typeof(settings['settings']) != 'object') {
        settings['settings'] = {};
      }   
      $(target_form + ' .input-setting').each(function() {
        var value = $(this).attr('type') == 'checkbox' ? ($(this).is(':checked') ? 1 : 0) : $(this).val();
        if(value) {
          settings['settings'][$(this).attr('name')] = value;
        } else if(typeof(settings['settings'][$(this).attr('name')]) != 'undefined') {
          delete settings['settings'][$(this).attr('name')];
        }
      });
      return settings;
    }

    function col_settings_save() {
      // Remove old classes
      var old_classes = $('.settings-open').data('old_classes');
      for(old_class in old_classes) {
        $('.settings-open').removeClass(old_class);
      }
      // Setting up new row classes
      $('.col-settings select').each(function() {
        if ($(this).val() > 0) {
          $('.settings-open').addClass($(this).attr('name') + '-' + $(this).val());
        }
        else {
          var prefix = $(this).attr('name');
          var classes =  $('.settings-open').attr("class").split(" ").filter(function(c) {
            return c.lastIndexOf(prefix, 0) !== 0;
          });
          $('.settings-open').attr("class", classes.join(" "));
        }
      });
      var id = $('.settings-open').attr('id');
      // Save settings from Form to variables
      Drupal.settings.nikadevs_cms.layouts[active_layout]['regions'][id] = _form_to_settings('#col-settings', Drupal.settings.nikadevs_cms.layouts[active_layout]['regions'][id]);
      // Setup new visibility classes
      $('.vissible-settings input:checked').each(function() {
        $('.settings-open').addClass($(this).val());
      });

    }

    function layout_settings() {
      // Load current layout settings
      $('#layout-settings-form .name').val($('.layouts-links a.active').text());
      if(typeof(Drupal.settings.nikadevs_cms.layouts[active_layout]) != 'undefined') {
        var pages = Drupal.settings.nikadevs_cms.layouts[active_layout]['pages'];
        $('#layout-settings-form .layout-visible').val(pages);
        _settings_to_form('#layout-settings-form', Drupal.settings.nikadevs_cms.layouts[active_layout]['settings']);
      }
      $("#layout-settings-form").dialog( "open" );
      return false;
    }

    attach_handlers();

    // Add new Layout
    $('#nd_layout').click(function() {
      $("#layout-add").dialog( "open" );
      return false;
    });

    $("#layout-add").dialog({
      autoOpen: false,
      width: 700,
      modal: true,
      buttons: {
        "Add": function() {
          if($('#layout-add .name').val() != '') {
            var prev_active = active_layout;
            active_layout = 'layout-' + $('#layout-add .name').val().replace(/[^\w\s]/gi, '').toLowerCase().replace(/ /g, '-');
            Drupal.settings.nikadevs_cms.layouts[active_layout] = jQuery.extend(true, {}, Drupal.settings.nikadevs_cms.layouts[prev_active]);
            Drupal.settings.nikadevs_cms.layouts[active_layout]['pages'] = $('#layout-add .layout-visible').val();
            Drupal.settings.nikadevs_cms.layouts[active_layout] = _form_to_settings('#layout-add', Drupal.settings.nikadevs_cms.layouts[active_layout]);

            $('.layouts-links a, .layout').removeClass('active');
            $('.layouts-links').append('<a href = "#' + active_layout + '" class = "btn btn-default btn-sm active">' + $('#layout-add .name').val() + '</a>');
            var clone_layout = '<div id = "' + active_layout + '" class = "layout active">' + $('#' + prev_active).html() + '</div>';
            $('#layout-default').removeClass('active');
            $('.layouts').append(clone_layout);
            attach_handlers();
            update_layout();
            $(this).dialog( "close" );
          }
        },
        Cancel: function() {
          $(this).dialog( "close" );
        }
      },
    });

    // Layout Settings
    $('#layout-settings').click(layout_settings);

    $("#layout-settings-form").dialog({
      autoOpen: false,
      width: 700,
      modal: true,
      buttons: {
        "Save": function() {
          if($('#layout-settings-form .name').val() != '') {
            $('.layouts-links a.active').text($('#layout-settings-form .name').val());
            Drupal.settings.nikadevs_cms.layouts[active_layout]['pages'] = $('#layout-settings-form .layout-visible').val();
            Drupal.settings.nikadevs_cms.layouts[active_layout] = _form_to_settings('#layout-settings-form', Drupal.settings.nikadevs_cms.layouts[active_layout]);
            update_layout();
            $(this).dialog( "close" );
            return false;
          }
        },
        "Delete": function() {
          if (active_layout != 'layout-default') {
            update_layout('delete');
            $('.layouts-links a.active, #' + active_layout).remove();
            $('.layouts-links a:last').click();
          }
          $(this).dialog( "close" );
        },
        Cancel: function() {
          $(this).dialog( "close" );
        }
      },
    });

    // Add new Row
    $('#nd_row').click(function() {
      $("#row-add .input-setting, #row-add input").val('').attr('checked', false);
      $('.dropdown-menu-links-wrap').hide();
      render_row_onepage_settings('');
      $('#row-add select[name="bg_image_type"]').change();
      $('.bg-image-preview').html('');
      $('.remove_bg_image').hide();
      $("#row-add").dialog( "open" );
      // Open first tab settings
      $('#row-add .settings-tabs a:first').click();
      return false;
    });

    $("#row-add").dialog({
      autoOpen: false,
      width: 700,
      modal: true,
      buttons: {
        "Add": function() {
          add_row($(this));
        },
        Cancel: function() {
          $(this).dialog( "close" );
        }
      },
    });

    function add_row($this) {
      var new_id = 0, id;
      $('.layout.active .row').each(function() {
        id = parseInt($(this).attr('id').replace('id-', ''));
        new_id = id > new_id ? id : new_id;
      });
      new_id = 'id-' + (parseInt(new_id) + 1);
      $('.layout.active').append('<li id = "' + new_id + '" class = "row sortable"><h2><i class="fa fa-arrows"></i><span>' + $this.find('.name').val() + '</span><i class="fa fa-cog settings-row"></i></h2><ol class = "sortable-parent"></ol></li>');
      Drupal.settings.nikadevs_cms.layouts[active_layout]['rows'][new_id] = _form_to_settings('#row-add', Drupal.settings.nikadevs_cms.layouts[active_layout]['rows'][new_id]);
      attach_handlers();
      update_layout();
      $this.dialog( "close" );
    }

    // Add new Block
    $('#add-block').click(function() {
      $("#add-block-form .input-setting").val('').attr('checked', false);
      $("#add-block-form").dialog( "open" );
      return false;
    });

    $("#add-block-form").dialog({
      autoOpen: false,
      width: 700,
      modal: true,
      buttons: {
        "Add": function() {
          add_block($(this));
        },
        Cancel: function() {
          $(this).dialog( "close" );
        }
      },
    });

    function get_unique_id(id, context) {
      var i = 0;
      id = id.replace('|', '-');
      var saved_id = id;
      while($('#' + id, context).length > 0) {
        id = saved_id + '-' + (i++);
      }
      return id;
    }

    function add_block($this) {
      var id = get_unique_id($this.find('.name').val(), $('.layout.active'));
      $('.layout.active #id-0 .sortable-parent').append('<li class = "col col-md-12 sortable" id = "' + id + '"><h3><i class="fa fa-arrows"></i><span>' + $this.find('.name').find(':selected').text() + '</span><i class="fa fa-cog settings-col"></i></h3></li>');
      Drupal.settings.nikadevs_cms.layouts[active_layout]['regions'][id] = _form_to_settings('#add-block-form', Drupal.settings.nikadevs_cms.layouts[active_layout]['regions'][id]);
      attach_handlers();
      update_layout();
      $this.dialog( "close" );
    }

    function _get_rows_id() {
      var ids = '';
      $('#' + active_layout + ' .row h2 span').each(function() {
        ids += $(this).text() != 'Hidden' ? '#' + $(this).text().replace(/[^a-zA-Z0-9]/g, '-') + ' ' : '';
      });
      return ids;
    }

    $('input[name="dropdown_links"]').click(function() {
      if($(this).attr('checked')) {
        $('.available_id span').text(_get_rows_id());
        $('.available_id').show();
        $('.dropdown-menu-links-wrap').show();
      }else {
        $('.dropdown-menu-links-wrap').hide()
        $('.available_id').hide();
      }
    });

    $('#add_dropdown_menu').click(_add_dropdown_menu);

    $('.upload_bg_image').click(upload_bg_image);

    $('.remove_bg_image').click(function() { remove_bg_image($(this)); });

    $('select[name="bg_image_type"]').change(function() {
      $('.bg-tabs .settings-tab-form').hide();
      $('.bg-tabs .' + $(this).val() + '-tab').show();
    });

    function remove_bg_image($this) {
      var fid = $this.parent().find('input[name="bg_image_fid"]').val();
      $.post(Drupal.settings.basePath + '?q=nikadevs_cms/file_delete/' + fid, function() {
        $('.bg-image-preview').html('');
        $('input[name="bg_image_fid"], input[name="bg_image_preview"]').val(0);
        $('.remove_bg_image').hide();
      });
    }

    function upload_bg_image() {
      globalOptions = {};
      Drupal.media.popups.mediaBrowser(function (mediaFiles) {
        if (mediaFiles.length < 0) {
          return;
        }
        var mediaFile = mediaFiles[0];
        // Set the value of the filefield fid (hidden).
        $('input[name="bg_image_fid"]').val(mediaFile.fid);
        $('input[name="bg_image_preview"]').val($(mediaFile.preview).find('.media-thumbnail').html());
        // Set the preview field HTML.
        $('.bg-image-preview').html(mediaFile.preview);
        $('.remove_bg_image').show();
      }, globalOptions);
      return false;
    }

    function row_settings_form() {
      // Show which row is setting up now
      $(this).parents('.row').addClass('row-setting-open');
      // Clear form input
      $('#row-settings select, #row-settings input').val('').attr('checked', false);
      // Set row option on the form
      $('#row-settings .name').val($(this).parent().find('span').text());
      // Load settings to the Form
      var active_row = $(this).parents('.row').attr('id');
      $('.dropdown_menu:gt(1)').remove();
      render_row_onepage_settings(active_row);
      var settings = Drupal.settings.nikadevs_cms.layouts[active_layout]['rows'][active_row]['settings'];
      _settings_to_form('#row-settings', settings);
      $('#row-settings select[name="bg_image_type"]').change();
      // Set the background image
      if($('#row-settings input[name="bg_image_preview"]').val()) {
        $('.bg-image-preview').html('<div class = "media-item">' + $('#row-settings input[name="bg_image_preview"]').val() + '</div>');
        $('.remove_bg_image').show();
      }
      else {
        $('.bg-image-preview').html('');
      }
      // Open first tab settings
      $('#row-settings .settings-tabs a:first').click();
      $("#row-settings").dialog( "open" );
      return false;
    }

    function render_row_onepage_settings(active_row) {
      // If One page view enabled, show specified fields
      if(typeof(Drupal.settings.nikadevs_cms.layouts[active_layout]['settings']) != 'undefined' && typeof(Drupal.settings.nikadevs_cms.layouts[active_layout]['settings']['one_page']) != 'undefined' && Drupal.settings.nikadevs_cms.layouts[active_layout]['settings']['one_page']) {
        // Show Sections anchors
        $('.available_id span').text(_get_rows_id());
        $('.available_id').show();
        $('#row-settings .one-page-option').show();
        if(typeof(Drupal.settings.nikadevs_cms.layouts[active_layout]['rows'][active_row]) != 'undefined' && typeof(Drupal.settings.nikadevs_cms.layouts[active_layout]['rows'][active_row]['settings']['dropdown_links']) != 'undefined' && Drupal.settings.nikadevs_cms.layouts[active_layout]['rows'][active_row]['settings']['dropdown_links']) {
          $('#row-settings .dropdown-menu-links-wrap').show();
          for(name in Drupal.settings.nikadevs_cms.layouts[active_layout]['rows'][active_row]['settings']) {
            if(name.indexOf('menu_link_url_') > -1 && name != 'menu_link_url_1') {
              _add_dropdown_menu();
            }
          }
        }
        else {
          $('.available_id, .dropdown-menu-links-wrap').hide(); 
        }
      }
      else {
        $('.one-page-option, .available_id, .dropdown-menu-links-wrap').hide();
      }      
    }

    function _add_dropdown_menu() {
      var $menu = $('.dropdown_menu:last').clone();
      var id = parseInt($menu.find('.menu_link').attr('name').replace('menu_link_', '')) + 1;
      $menu.find('.menu_link').attr('name', 'menu_link_' + id);
      $menu.find('.menu_link_url').attr('name', 'menu_link_url_' + id);
      $('.dropdown_menu:last').after($menu.outerHTML());
      return false;
    }

    $("#row-settings").dialog({
      autoOpen: false,
      width: 700,
      modal: true,
      buttons: {
        "Save": function() {
          var id = $('.row-setting-open').attr('id');
          // If Dropdown Menu Links disabled - remove links
          if(!$('input[name="dropdown_links"]').is(':checked')) {
            $('input[name^="menu_link"]').val('');
          }
          Drupal.settings.nikadevs_cms.layouts[active_layout]['rows'][id] = _form_to_settings('#row-settings', Drupal.settings.nikadevs_cms.layouts[active_layout]['rows'][id]);
          $('.row-setting-open h2 span').text($('#row-settings .name').val());
          // Settings are done
          $('.row-setting-open').removeClass('row-setting-open');
          update_layout();
          $(this).dialog( "close" );
          return false;
        },
        "Delete": function() {
          $('.row-setting-open h2').remove();
          var regions = $('#' + active_layout + ' .row-setting-open').html();
          $('#' + active_layout + ' #id-0').append(regions);
          $('.row-setting-open').remove();
          update_layout();
          attach_handlers();
          $(this).dialog( "close" );
          return false;
        },
        Cancel: function() {
          $('.row-setting-open').removeClass('row-setting-open');
          $(this).dialog( "close" );
          return false;
        }
      },
    });

    $('.expandable h4').click(function() {
      $(this).parent().toggleClass('expanded');
    });

  }); // end doc ready 

}); // end no conflict
;

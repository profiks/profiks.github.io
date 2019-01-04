/**
 * basic.js
 * @author NHN Ent. FE Development Team <dl_javascript@nhnent.com>
 * @fileoverview
 */
'use strict';

var supportingFileAPI = !!(window.File && window.FileList && window.FileReader);
var rImageType = /data:(image\/.+);base64,/;
var shapeOptions = {};
var shapeType;
var activeObjectId;

// Buttons
var $btns = $('.menu-item');
var $btnsActivatable = $btns.filter('.activatable');
var $inputImage = $('#input-image-file');
var $btnDownload = $('#btn-download');

var $btnUndo = $('#btn-undo');
var $btnRedo = $('#btn-redo');
var $btnClearObjects = $('#btn-clear-objects');
var $btnRemoveActiveObject = $('#btn-remove-active-object');
var $btnCrop = $('#btn-crop');
var $btnFlip = $('#btn-flip');
var $btnRotation = $('#btn-rotation');
var $btnDrawLine = $('.js-btn-draw-line');
var $btnDrawShape = $('.js-btn-draw-shape');
var $btnApplyCrop = $('#btn-apply-crop');
var $btnCancelCrop = $('#btn-cancel-crop');
var $btnFlipX = $('#btn-flip-x');
var $btnFlipY = $('#btn-flip-y');
var $btnResetFlip = $('#btn-reset-flip');
var $btnRotateClockwise = $('#btn-rotate-clockwise');
var $btnRotateCounterClockWise = $('#btn-rotate-counter-clockwise');
var $btnText = $('.js-btn-text');
var $btnTextStyle = $('.btn-text-style');
var $btnAddIcon = $('.js-btn-add-icon');
var $btnRegisterIcon = $('#btn-register-icon');
var $btnMaskFilter = $('#btn-mask-filter');
var $btnImageFilter = $('#btn-image-filter');
var $btnLoadMaskImage = $('#input-mask-image-file');
var $btnApplyMask = $('#btn-apply-mask');
var $btnClose = $('.close');

// Input etc.
var $inputRotationRange = $('#input-rotation-range');
var $inputBrushWidthRange = $('#input-brush-width-range');
var $inputFontSizeRange = $('#input-font-size-range');
var $inputStrokeWidthRange = $('#input-stroke-width-range');
var $inputCheckTransparent = $('#input-check-transparent');
var $inputCheckGrayscale = $('#input-check-grayscale');
var $inputCheckInvert = $('#input-check-invert');
var $inputCheckSepia = $('#input-check-sepia');
var $inputCheckSepia2 = $('#input-check-sepia2');
var $inputCheckBlur = $('#input-check-blur');
var $inputCheckSharpen = $('#input-check-sharpen');
var $inputCheckEmboss = $('#input-check-emboss');
var $inputCheckRemoveWhite = $('#input-check-remove-white');
var $inputRangeRemoveWhiteThreshold = $('#input-range-remove-white-threshold');
var $inputRangeRemoveWhiteDistance = $('#input-range-remove-white-distance');
var $inputCheckBrightness = $('#input-check-brightness');
var $inputRangeBrightnessValue = $('#input-range-brightness-value');
var $inputCheckNoise = $('#input-check-noise');
var $inputRangeNoiseValue = $('#input-range-noise-value');
var $inputCheckGradientTransparency = $('#input-check-gradient-transparancy');
var $inputRangeGradientTransparencyValue = $('#input-range-gradient-transparency-value');
var $inputCheckPixelate = $('#input-check-pixelate');
var $inputRangePixelateValue = $('#input-range-pixelate-value');
var $inputCheckTint = $('#input-check-tint');
var $inputRangeTintOpacityValue = $('#input-range-tint-opacity-value');
var $inputCheckMultiply = $('#input-check-multiply');
var $inputCheckBlend = $('#input-check-blend');
var $inputCheckColorFilter = $('#input-check-color-filter');
var $inputRangeColorFilterValue = $('#input-range-color-filter-value');
var $btnLoadImage = $('.js-load-image .template');

// Sub menus
var $displayingSubMenu = $();
var $cropSubMenu = $('#crop-sub-menu');
var $flipSubMenu = $('#flip-sub-menu');
var $rotationSubMenu = $('#rotation-sub-menu');
var $freeDrawingSubMenu = $('#free-drawing-sub-menu');
var $drawLineSubMenu = $('#draw-line-sub-menu');
var $drawShapeSubMenu = $('#draw-shape-sub-menu');
var $textSubMenu = $('#text-sub-menu');
var $iconSubMenu = $('#icon-sub-menu');
var $filterSubMenu = $('#filter-sub-menu');
var $imageFilterSubMenu = $('#image-filter-sub-menu');

// Select line type
var $selectLine = $('[name="select-line-type"]');

// Select shape type
var $selectShapeType = $('[name="select-shape-type"]');

// Select color of shape type
var $selectColorType = $('[name="select-color-type"]');

//Select blend type
var $selectBlendType = $('[name="select-blend-type"]');

// Image editor
var imageEditor = new tui.ImageEditor('.tui-image-editor', {
    cssMaxWidth: 700,
    cssMaxHeight: 500,
    selectionStyle: {
        cornerSize: 20,
        rotatingPointOffset: 70
    }
});

// Color picker for free drawing
var brushColorpicker = tui.component.colorpicker.create({
    container: $('#tui-brush-color-picker')[0],
    color: '#000000'
});

// Color picker for text palette
var textColorpicker = tui.component.colorpicker.create({
    container: $('#tui-text-color-picker')[0],
    color: '#000000'
});

// Color picker for shape
var shapeColorpicker = tui.component.colorpicker.create({
    container: $('#tui-shape-color-picker')[0],
    color: '#000000'
});

// Color picker for icon
var iconColorpicker = tui.component.colorpicker.create({
    container: $('#tui-icon-color-picker')[0],
    color: '#000000'
});

var tintColorpicker = tui.component.colorpicker.create({
    container: $('#tui-tint-color-picker')[0],
    color: '#000000'
});

var multiplyColorpicker = tui.component.colorpicker.create({
    container: $('#tui-multiply-color-picker')[0],
    color: '#000000'
});

var blendColorpicker = tui.component.colorpicker.create({
    container: $('#tui-blend-color-picker')[0],
    color: '#00FF00'
});

// Common global functions
// HEX to RGBA
function hexToRGBa(hex, alpha) {
    var r = parseInt(hex.slice(1, 3), 16);
    var g = parseInt(hex.slice(3, 5), 16);
    var b = parseInt(hex.slice(5, 7), 16);
    var a = alpha || 1;

    return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + a + ')';
}

function base64ToBlob(data) {
    var mimeString = '';
    var raw, uInt8Array, i, rawLength;

    raw = data.replace(rImageType, function(header, imageType) {
        mimeString = imageType;

        return '';
    });

    raw = atob(raw);
    rawLength = raw.length;
    uInt8Array = new Uint8Array(rawLength); // eslint-disable-line

    for (i = 0; i < rawLength; i += 1) {
        uInt8Array[i] = raw.charCodeAt(i);
    }

    return new Blob([uInt8Array], {type: mimeString});
}

function resizeEditor() {
    var $editor = $('.tui-image-editor');
    var $container = $('.tui-image-editor-canvas-container');
    var height = parseFloat($container.css('max-height'));

    $editor.height(height);
}

function getBrushSettings() {
    var brushWidth = $inputBrushWidthRange.val();
    var brushColor = brushColorpicker.getColor();

    return {
        width: brushWidth,
        color: hexToRGBa(brushColor, 0.5)
    };
}

function activateShapeMode() {
    if (imageEditor.getDrawingMode() !== 'SHAPE') {
        imageEditor.stopDrawingMode();
        imageEditor.startDrawingMode('SHAPE');
    }
}

function activateIconMode() {
    imageEditor.stopDrawingMode();
}

function activateTextMode() {
    if (imageEditor.getDrawingMode() !== 'TEXT') {
        imageEditor.stopDrawingMode();
        imageEditor.startDrawingMode('TEXT');
    }
}

function setTextToolbar(obj) {
    var fontSize = obj.fontSize;
    var fontColor = obj.fill;

    $inputFontSizeRange.val(fontSize);
    textColorpicker.setColor(fontColor);
}

function setIconToolbar(obj) {
    var iconColor = obj.fill;

    iconColorpicker.setColor(iconColor);
}

function setShapeToolbar(obj) {
    var strokeColor, fillColor, isTransparent;
    var colorType = $selectColorType.val();

    if (colorType === 'stroke') {
        strokeColor = obj.stroke;
        isTransparent = (strokeColor === 'transparent');

        if (!isTransparent) {
            shapeColorpicker.setColor(strokeColor);
        }
    } else if (colorType === 'fill') {
        fillColor = obj.fill;
        isTransparent = (fillColor === 'transparent');

        if (!isTransparent) {
            shapeColorpicker.setColor(fillColor);
        }
    }

    $inputCheckTransparent.prop('checked', isTransparent);
    $inputStrokeWidthRange.val(obj.strokeWidth);
}

function showSubMenu(type) {
    var $submenu;

    switch (type) {
        case 'shape':
            $submenu = $drawShapeSubMenu;
            break;
        case 'icon':
            $submenu = $iconSubMenu;
            break;
        case 'text':
            $submenu = $textSubMenu;
            break;
        default:
            $submenu = 0;
    }

    $displayingSubMenu.hide();
    $displayingSubMenu = $submenu.show();
}

function applyOrRemoveFilter(applying, type, options) {
    if (applying) {
        imageEditor.applyFilter(type, options).then(result => {
            console.log(result);
        });
    } else {
        imageEditor.removeFilter(type);
    }
}

// Attach image editor custom events
imageEditor.on({
    objectAdded: function(objectProps) {
        console.info(objectProps);
    },
    undoStackChanged: function(length) {
        if (length) {
            $btnUndo.removeClass('disabled');
        } else {
            $btnUndo.addClass('disabled');
        }
        resizeEditor();
    },
    redoStackChanged: function(length) {
        if (length) {
            $btnRedo.removeClass('disabled');
        } else {
            $btnRedo.addClass('disabled');
        }
        resizeEditor();
    },
    objectScaled: function(obj) {
        if (obj.type === 'text') {
            $inputFontSizeRange.val(obj.fontSize);
        }
    },
    addText: function(pos) {
        imageEditor.addText('Double Click', {
            position: pos.originPosition
        }).then(objectProps => {
            console.log(objectProps);
        });
    },
    objectActivated: function(obj) {
        activeObjectId = obj.id;
        if (obj.type === 'rect' || obj.type === 'circle' || obj.type === 'triangle') {
            showSubMenu('shape');
            setShapeToolbar(obj);
            activateShapeMode();
        } else if (obj.type === 'icon') {
            showSubMenu('icon');
            setIconToolbar(obj);
            activateIconMode();
        } else if (obj.type === 'text') {
            showSubMenu('text');
            setTextToolbar(obj);
            activateTextMode();
        }
    },
    mousedown: function(event, originPointer) {
        if ($imageFilterSubMenu.is(':visible') && imageEditor.hasFilter('colorFilter')) {
            imageEditor.applyFilter('colorFilter', {
                x: parseInt(originPointer.x, 10),
                y: parseInt(originPointer.y, 10)
            });
        }
    }
});

// Attach button click event listeners
$btns.on('click', function() {
    $btnsActivatable.removeClass('active');
});

$btnsActivatable.on('click', function() {
    $(this).addClass('active');
});

$btnUndo.on('click', function() {
    $displayingSubMenu.hide();

    if (!$(this).hasClass('disabled')) {
        imageEditor.undo();
    }
});

$btnRedo.on('click', function() {
    $displayingSubMenu.hide();

    if (!$(this).hasClass('disabled')) {
        imageEditor.redo();
    }
});

$btnClearObjects.on('click', function() {
    $displayingSubMenu.hide();
    imageEditor.clearObjects();
});

$btnRemoveActiveObject.on('click', function() {
    $displayingSubMenu.hide();
    imageEditor.removeObject(activeObjectId);
});

$btnCrop.on('click', function() {
    imageEditor.startDrawingMode('CROPPER');
    $displayingSubMenu.hide();
    $displayingSubMenu = $cropSubMenu.show();
});

$btnFlip.on('click', function() {
    imageEditor.stopDrawingMode();
    $displayingSubMenu.hide();
    $displayingSubMenu = $flipSubMenu.show();
});

$btnRotation.on('click', function() {
    imageEditor.stopDrawingMode();
    $displayingSubMenu.hide();
    $displayingSubMenu = $rotationSubMenu.show();
});

$btnClose.on('click', function() {
    imageEditor.stopDrawingMode();
    $displayingSubMenu.hide();
});

$btnApplyCrop.on('click', function() {
    imageEditor.crop(imageEditor.getCropzoneRect()).then(() => {
        imageEditor.stopDrawingMode();
        resizeEditor();
    });
});

$btnCancelCrop.on('click', function() {
    imageEditor.stopDrawingMode();
});

$btnFlipX.on('click', function() {
    imageEditor.flipX().then(status => {
        console.log('flipX: ', status.flipX);
        console.log('flipY: ', status.flipY);
        console.log('angle: ', status.angle);
    });
});

$btnFlipY.on('click', function() {
    imageEditor.flipY().then(status => {
        console.log('flipX: ', status.flipX);
        console.log('flipY: ', status.flipY);
        console.log('angle: ', status.angle);
    });
});

$btnResetFlip.on('click', function() {
    imageEditor.resetFlip().then(status => {
        console.log('flipX: ', status.flipX);
        console.log('flipY: ', status.flipY);
        console.log('angle: ', status.angle);
    });
});

$btnRotateClockwise.on('click', function() {
    imageEditor.rotate(30);
});

$btnRotateCounterClockWise.on('click', function() {
    imageEditor.rotate(-30);
});

$inputRotationRange.on('mousedown', function() {
    var changeAngle = function() {
        imageEditor.setAngle(parseInt($inputRotationRange.val(), 10)).catch(() => {});
    };
    $(document).on('mousemove', changeAngle);
    $(document).on('mouseup', function stopChangingAngle() {
        $(document).off('mousemove', changeAngle);
        $(document).off('mouseup', stopChangingAngle);
    });
});

$inputRotationRange.on('change', function() {
    imageEditor.setAngle(parseInt($inputRotationRange.val(), 10)).catch(() => {});
});

$inputBrushWidthRange.on('change', function() {
    imageEditor.setBrush({width: parseInt(this.value, 10)});
});

$inputImage.on('change', function(event) {
    var file;

    if (!supportingFileAPI) {
        alert('This browser does not support file-api');
    }

    file = event.target.files[0];
    imageEditor.loadImageFromFile(file).then(result => {
        console.log(result);
        imageEditor.clearUndoStack();
    });
});

$btnDownload.on('click', function() {
    var imageName = imageEditor.getImageName();
    var dataURL = imageEditor.toDataURL();
    var blob, type, w;

    if (supportingFileAPI) {
        blob = base64ToBlob(dataURL);
        type = blob.type.split('/')[1];
        if (imageName.split('.').pop() !== type) {
            imageName += '.' + type;
        }

        // Library: FileSaver - saveAs
        saveAs(blob, imageName); // eslint-disable-line
    } else {
        alert('This browser needs a file-server');
        w = window.open();
        w.document.body.innerHTML = '<img src=' + dataURL + '>';
    }
});

// control draw line mode
$btnDrawLine.on('click', function() {
    imageEditor.stopDrawingMode();
    $displayingSubMenu.hide();
    $displayingSubMenu = $drawLineSubMenu.show();
    $selectLine.eq(0).change();
});

$selectLine.on('change', function() {
    var mode = $(this).val();
    var settings = getBrushSettings();

    imageEditor.stopDrawingMode();
    if (mode === 'freeDrawing') {
        imageEditor.startDrawingMode('FREE_DRAWING', settings);
    } else {
        imageEditor.startDrawingMode('LINE_DRAWING', settings);
    }
});

brushColorpicker.on('selectColor', function(event) {
    imageEditor.setBrush({
        color: hexToRGBa(event.color, 0.5)
    });
});

// control draw shape mode
$btnDrawShape.on('click', function() {
    showSubMenu('shape');

    // step 1. get options to draw shape from toolbar
    shapeType = $('[name="select-shape-type"]:checked').val();

    shapeOptions.stroke = '#000000';
    shapeOptions.fill = '#ffffff';

    shapeOptions.strokeWidth = Number($inputStrokeWidthRange.val());

    // step 2. set options to draw shape
    imageEditor.setDrawingShape(shapeType, shapeOptions);

    // step 3. start drawing shape mode
    activateShapeMode();
});

$selectShapeType.on('change', function() {
    shapeType = $(this).val();

    imageEditor.setDrawingShape(shapeType);
});

$inputCheckTransparent.on('change', function() {
    var colorType = $selectColorType.val();
    var isTransparent = $(this).prop('checked');
    var color;

    if (!isTransparent) {
        color = shapeColorpicker.getColor();
    } else {
        color = 'transparent';
    }

    if (colorType === 'stroke') {
        imageEditor.changeShape(activeObjectId, {
            stroke: color
        });
    } else if (colorType === 'fill') {
        imageEditor.changeShape(activeObjectId, {
            fill: color
        });
    }

    imageEditor.setDrawingShape(shapeType, shapeOptions);
});

shapeColorpicker.on('selectColor', function(event) {
    var colorType = $selectColorType.val();
    var isTransparent = $inputCheckTransparent.prop('checked');
    var color = event.color;

    if (isTransparent) {
        return;
    }

    if (colorType === 'stroke') {
        imageEditor.changeShape(activeObjectId, {
            stroke: color
        });
    } else if (colorType === 'fill') {
        imageEditor.changeShape(activeObjectId, {
            fill: color
        });
    }

    imageEditor.setDrawingShape(shapeType, shapeOptions);
});

$inputStrokeWidthRange.on('change', function() {
    var strokeWidth = Number($(this).val());

    imageEditor.changeShape(activeObjectId, {
        strokeWidth: strokeWidth
    });

    imageEditor.setDrawingShape(shapeType, shapeOptions);
});

// control text mode
$btnText.on('click', function() {
    showSubMenu('text');
    activateTextMode();
});

$inputFontSizeRange.on('change', function() {
    imageEditor.changeTextStyle(activeObjectId, {
        fontSize: parseInt(this.value, 10)
    });
});

$btnTextStyle.on('click', function(e) { // eslint-disable-line
    var styleType = $(this).attr('data-style-type');
    var styleObj;

    e.stopPropagation();

    switch (styleType) {
        case 'b':
            styleObj = {fontWeight: 'bold'};
            break;
        case 'i':
            styleObj = {fontStyle: 'italic'};
            break;
        case 'u':
            styleObj = {textDecoration: 'underline'};
            break;
        case 'l':
            styleObj = {textAlign: 'left'};
            break;
        case 'c':
            styleObj = {textAlign: 'center'};
            break;
        case 'r':
            styleObj = {textAlign: 'right'};
            break;
        default:
            styleObj = {};
    }

    imageEditor.changeTextStyle(activeObjectId, styleObj);
});

textColorpicker.on('selectColor', function(event) {
    imageEditor.changeTextStyle(activeObjectId, {
        'fill': event.color
    });
});

// control icon
$btnAddIcon.on('click', function() {
    showSubMenu('icon');
    activateIconMode();
});

function onClickIconSubMenu(event) {
    var element = event.target || event.srcElement;
    var iconType = $(element).attr('data-icon-type');

    imageEditor.once('mousedown', function(e, originPointer) {
        imageEditor.addIcon(iconType, {
            left: originPointer.x,
            top: originPointer.y
        }).then(objectProps => {
            // console.log(objectProps);
        });
    });

    imageEditor.registerIcons({
        crown: 'M86.291,248.744c0.14,0.092,0.256,0.211,0.396,0.302c9.941,6.394,21.697,9.786,33.979,9.786c18.995,0,36.313-8.082,47.512-22.181c10.468-13.214,19.988-28.501,28.501-45.337C147.11,199.96,106.723,221.196,86.291,248.744zM295.017,191.19c8.644,16.987,18.201,32.248,28.604,45.26c11.203,13.981,28.479,22.002,47.404,22.01h0.004c12.336,0,24.127-3.415,34.099-9.879c0.138-0.091,0.252-0.207,0.389-0.299C385.028,220.777,344.593,199.702,295.017,191.19zM462.504,147.495c-16.014,0-29.016,13.002-28.936,29.016c0,13.16,8.8,24.339,20.85,27.905c-5.946,15.856-13.794,30.046-23.704,42.255c-4.915,6.025-10.703,11.099-16.966,15.221c-31.948,20.691-77.613,15.538-102.506-15.538c-14.587-18.234-26.161-38.37-35.278-57.794c-11.575-24.576-19.106-48.121-23.783-65.483c12.922-2.933,22.515-14.508,22.515-28.381c0-16.014-13.081-28.936-29.094-28.936c-16.014,0-28.937,13.001-28.937,29.016c0,13.873,9.671,25.369,22.594,28.302c-4.597,17.362-12.129,40.987-23.545,65.563c-9.037,19.423-20.612,39.559-35.119,57.872c-24.814,31.235-70.478,36.468-102.506,15.855c-6.263-4.043-12.051-9.116-16.966-15.141c-9.989-12.13-17.837-26.4-23.942-42.255c12.13-3.567,20.93-14.746,20.85-27.905c0-16.014-13.001-29.016-29.015-28.937C13.001,148.13,0,161.132,0,177.146c0.079,16.014,13.081,29.016,29.095,29.016c1.189,0,2.299-0.08,3.409-0.238l31.949,190.265h-12.05v29.571h386.953v-29.571l-11.575-0.475l31.394-190.424c1.11,0.158,2.22,0.238,3.409,0.238c16.014-0.08,29.015-13.081,28.936-29.095C491.52,160.418,478.518,147.416,462.504,147.495zM245.875,366.512c-21.915,0-39.682-26.425-39.682-59.02c0-32.598,17.767-59.022,39.682-59.022c21.916,0,39.682,26.424,39.682,59.022C285.557,340.087,267.791,366.512,245.875,366.512z',
        shape46: 'M25.312,446.025c-2.518,3.981-5.304,7.792-7.993,11.669c-3.125,4.504-2.876,9.212-0.559,13.855			c4.337,8.694,11.975,14.092,19.935,18.943c3.929,2.395,8.241,4.157,12.75,5.818c0.979,0.362,1.436-0.127,1.048-1.103			c-3.362-8.522-3.142-15.206-0.718-20.779c0.417-0.958,1.657-1.868,2.668-2.146c1.587-0.437,3.138-1.004,4.643-1.677			c0.955-0.429,2.505-1.102,3.493-1.453c8.707-3.108,17.283-6.34,26.022-9.041c7.83-2.42,15.447-1.179,22.93,2.439			c16.026,7.748,31.979,15.741,48.438,22.473c24.676,10.086,50.649,12.432,77.104,10.474c6.169-0.457,12.313-1.053,18.413-1.86			c1.037-0.139,1.926,0.592,2.024,1.632c0.216,2.313,0.567,4.623,1.048,6.92c0.216,1.023-0.428,1.918-1.453,2.13			c-7.16,1.48-11.391,7.164-14.463,14.573c-0.657,1.588-1.555,3.13-2.603,4.488c-2.958,3.831-3.798,7.246,0.718,10.71			c0.975,0.751,1.187,3.093,1.02,4.623c-0.437,3.929-1.151,7.829-1.856,12.048c-0.171,1.032,0.506,2.109,1.485,2.48			c3.244,1.22,6.487,2.913,9.029,2.175c2.264-0.657,3.745-4.011,5.557-6.997c0.543-0.894,1.734-1.102,2.591-0.506			c2.122,1.473,4.219,2.926,6.116,4.243c0.861,0.596,2.174,0.498,2.934-0.221c5.336-5.026,10.506-9.901,16.414-15.471			c0.763-0.719,0.539-1.176-0.494-1.021c-5.781,0.857-10.755,1.592-16.169,2.391c-1.037,0.155-1.828-0.57-1.775-1.615			c0.253-5.03,0.437-9.711,0.914-14.361c0.082-0.788,1.926-2.004,2.917-1.967c2.232,0.082,4.456,0.519,6.932,0.955			c1.032,0.179,1.734,1.15,1.566,2.183c-0.477,2.958-0.934,5.785-1.403,8.698c-0.167,1.032,0.522,1.66,1.501,1.289			c6.744-2.542,9.825-8.205,13.317-13.831c0.551-0.89,0.265-1.999-0.657-2.493c-3.509-1.872-6.969-3.721-10.857-5.801			c-0.922-0.494-1.187-1.588-0.587-2.448c1.591-2.285,3.097-4.451,4.521-6.496c0.4-0.481,0.755-1.003,1.081-1.55			c0.266-0.384,0.531-0.763,0.792-1.139c0.437-0.628,0.697-1.113,0.575-1.081c-0.119,0.032,0.171-0.697,0.645-1.628			c0.73-1.432,1.465-2.86,2.195-4.292c0.478-0.931,1.42-1.045,2.216-0.367c1.46,1.244,3.166,2.183,5.01,2.762			c0.999,0.314,2.603,0.812,3.55,1.257c5.553,2.604,11.542,5.26,17.327,8.303c6.912,3.64,8.132,10.547,8.499,17.405			c0.225,4.133-3.183,6.034-6.545,7.842c-4.675,2.514-9.551,4.974-13.5,8.413c-5.104,4.447-4.884,7.862-1.216,13.574			c0.636,0.991,0.571,2.909,0.081,4.084c-4.899,11.686-4.944,11.665,4.183,20.326c1.578,1.502,3.162,2.999,5.218,4.945			c0.759,0.718,1.191,0.474,0.972-0.547c-0.874-4.015-1.579-7.303-2.318-10.579c-1.31-5.81-0.905-7.928,3.203-11.926			c0.751-0.73,2.143-0.922,3.08-0.461c1.853,0.909,3.791,1.86,5.985,2.938c0.938,0.461,1.543,0.2,1.355-0.588			c-0.14-0.587-0.241-1.008-0.359-1.42c-2.893-10.028-2.48-11.628,7.377-15.234c0.979-0.359,1.868,0.204,1.979,1.244			c0.697,6.626,1.387,13.134,2.057,19.642c0.13,1.256,0.154,2.521,0.261,3.777c0.571,6.753,2.945,9.425,9.539,10.47			c0.955,0.151,2.224-0.172,3.015-0.734c3.786-2.697,7.491-5.512,11.881-8.801c0.837-0.628,0.674-1.216-0.371-1.31			c-3.978-0.347-7.312-0.526-10.551-1.184c-1.392-0.281-3.509-2.027-3.541-3.161c-0.273-8.499-0.176-17.01-0.163-25.929			c0-1.045,0.799-1.604,1.791-1.277c1.538,0.506,3.117,1.016,4.459,1.89c1.146,0.75,2.163,2.562,2.224,3.94			c0.127,2.93-0.18,5.876-0.44,9.604c-0.073,1.045,0.519,1.335,1.31,0.649c5.312-4.595,9.825-8.609,12.122-14.676			c1.012-2.669,0.812-4.179-2.143-5.488c-6.042-2.681-12.244-5.3-17.646-9.017c-2.799-1.926-4.484-5.467-7.083-9.388			c-0.579-0.873-0.229-1.607,0.815-1.665c6.892-0.384,12.726-0.706,18.765-1.04c1.044-0.058,1.51-0.861,1.004-1.779			c-2.542-4.59-5.586-8.91-4.468-14.908c0.191-1.028,1.02-1.195,1.795-0.494c3.586,3.228,7.409,3.746,11.473,2.53			c1.004-0.302,1.808-0.82,1.841-1.049c0.024-0.171,0.036-0.33-0.041-0.404c-7.634-7.291-9.091-16.683-4.146-28.466			c0.004-0.012,0.012-0.028,0.017-0.041c0.012-0.024,0.795-0.379,1.782-0.726c5.554-1.946,11.139-1.926,17.45,0			c6.006,2.28,9.201,6.838,11.567,15.296c3.125,11.167,3.455,22.395-0.938,33.415c-2.228,5.585-5.443,10.38-10.588,13.709			c-0.877,0.566-0.836,1.276,0.151,1.611c9.266,3.162,18.816,3.056,25.765-12.342c0.429-0.955,0.935-0.914,1.195,0.102			c0.29,1.11,0.522,1.979,0.543,2.856c0.253,12.052,5.055,22.171,13.88,30.045c13.546,12.081,28.887,20.196,47.834,18.923			c16.749-1.122,36.39-16.394,39.58-31.339c2.489-11.66,0.743-22.889-5.3-33.297c-0.865-1.484-2.012-2.814-3.088-4.169			c-0.209-0.262-0.494-0.466-0.923-0.759c-0.547-0.376-0.746,0.122-0.444,1.121c0.922,3.032,1.853,5.631,2.22,8.308			c1.611,11.767-6.051,22.554-18.87,27.14c-10.539,3.771-20.013,0.453-27.797-6.026c-6.01-5.006-10.348-12.068-15.187-18.396			c-0.819-1.073-1.105-2.562-1.252-4.288c-0.09-1.04,0.367-1.199,1.036-0.392c7.69,9.311,17.021,8.181,27.344,5.108			c1.004-0.298,1.24-1.18,0.535-1.95c-3.815-4.17-7.242-7.883-10.608-11.648c-5.695-6.369-9.768-13.84-11.143-22.122			c-0.697-4.206-1.93-7.829-3.631-10.946c-0.502-0.918-1.269-2.424-1.677-3.387c-2.804-6.605-6.757-12.615-11.592-17.817			c-0.714-0.767-1.754-2.089-2.338-2.958c-1.881-2.807-3.884-5.247-6.042-7.441c-0.734-0.747-1.6-2.154-2.191-3.02			c-0.489-0.722-1.146-1.387-1.982-1.963c-5.133-3.524-10.429-6.784-15.859-9.779c-0.914-0.506-2.317-1.444-3.142-2.089			c-6.561-5.133-13.758-9.376-21.387-12.619c-0.963-0.408-0.906-0.816,0.13-0.938c17.683-2.077,34.953-5.855,52.388-11.612			c0.995-0.326,0.95-0.542-0.09-0.465c-13.012,0.95-24.835,2.126-36.684,2.464c-4.831,0.14-9.67,0.009-14.513-0.195			c-1.044-0.045-1.57-0.914-0.767-1.583c1.611-1.338,4.337-1.967,6.124-2.632c1.975-0.734,3.945-1.465,5.916-2.199			c0.979-0.363,2.623-0.661,3.668-0.681c23.741-0.453,46.275-7.969,68.421-17.573c0.959-0.416,0.894-0.661-0.143-0.534			c-9.213,1.118-18.409,2.709-27.646,2.982c-5.99,0.176-11.983,0.266-17.977,0.306c-1.045,0.009-2.064-0.673-2.444-1.439			c-0.379-0.768-0.682-1.425-0.502-1.559c0.11-0.082,0.221-0.159,0.331-0.237c1.795-1.244,3.61-2.464,5.524-3.513			c2.346-1.285,4.712-2.383,7.151-3.329c0.976-0.38,2.611-0.812,3.636-1.021c2.529-0.514,5.055-1.122,7.568-1.844			c16.899-4.839,32.188-13.162,47.622-21.433c0.922-0.493,0.853-0.673-0.159-0.403c-16.704,4.442-33.534,7.638-50.535,9.693			c-1.036,0.127-2.362-0.081-3.02-0.31c-0.656-0.225-0.652-0.906,0.045-1.686c1.894-2.104,3.754-4.243,5.573-6.413			c0.674-0.8,2.04-1.641,3.057-1.881c28.021-6.581,53.721-19.76,76.639-41.155c0.763-0.714,0.596-0.963-0.367-0.562			c-2.84,1.183-5.483,2.231-8.021,3.476c-17.785,8.724-36.198,15.419-55.076,20.604c-1.008,0.277-1.347-0.204-0.763-1.073			c1.881-2.795,3.7-5.626,5.463-8.499c0.547-0.894,1.787-1.885,2.782-2.211c2.526-0.832,5.048-1.665,7.569-2.477			c25.067-8.05,43.436-26.087,62.003-43.578c0.764-0.718,1.204-1.518,0.992-1.787c-0.217-0.269-1.131-0.073-2.04,0.433			c-2.722,1.514-5.451,3.011-8.14,4.578c-8.854,5.157-17.993,10.73-27.753,14.002c-1.672,0.563-18.348,5.398-16.735,0.449			c1.644-5.01,7.078-8.67,10.828-12.048c6.924-6.234,13.848-12.469,20.771-18.703c4.618-3.497,9.049-7.271,13.198-11.477			c15.504-15.704,27.156-34.219,39.666-52.122c0.6-0.857,0.856-1.738,0.575-1.971c-0.281-0.233-1.139,0.151-1.913,0.853			c-5.459,4.961-10.923,9.918-16.382,14.88c-17.393,15.814-35.978,29.878-55.68,42.293c-0.885,0.559-1.411,0.18-1.183-0.84			c0.326-1.444,0.636-2.897,0.93-4.349c0.058-0.286,0.114-0.567,0.163-0.853c0.086-0.469,0.665-1.521,1.31-2.35			c1.865-2.395,3.729-4.786,5.59-7.181c0.641-0.824,1.84-2.007,2.656-2.66c7.397-5.928,13.656-13.215,18.417-21.501			c0.522-0.906,1.469-2.301,2.138-3.109c22.44-27.189,34.701-58.866,38.932-95.097c0.122-1.041-0.2-1.143-0.706-0.225			c-7.127,12.905-13.496,24.913-20.358,36.63c-12.979,22.163-28.141,42.509-46.227,60.364c-0.743,0.734-2.094,1.738-3.032,2.195			c-1.538,0.75-3.125,1.396-4.749,1.934c-0.991,0.326-2.125,0.208-2.517-0.204s-0.213-1.403,0.407-2.244			c7.426-10.016,13.685-20.743,18.728-32.126c0.425-0.955,1.208-2.456,1.755-3.346c11.248-18.339,19.392-38.229,26.589-58.556			c0.314-0.89,0.931-1.991,0.661-2.718c-3.934-10.579-0.91-21.538-1.705-32.301c-1.506-20.232-10.612-37.018-21.474-53.268			c-1.497-2.24-3.072-4.427-5.043-6.447c-0.73-0.75-1.122-0.498-0.819,0.502c1.864,6.145,3.867,12.256,5.45,18.474			c6.467,25.443,9.796,51.021,3.606,77.125c-3.292,13.892-10.95,25.316-18.947,36.724c-13.439,19.172-28.523,36.557-49.547,47.842			c-11.249,6.039-22.31,12.452-33.718,18.181c-38.046,19.099-74.374,40.947-108.52,66.329			c-12.497,8.458-24.423,17.768-35.476,28.013c-0.767,0.71-1.028,0.522-0.596-0.429c3.456-7.658,6.328-15.41,7.666-23.843			c0.164-1.032-0.045-1.763-0.44-1.648c-0.392,0.114-0.612,0.167-0.665,0.29c-2.672,6.381-7.226,11.416-11.591,16.589			c-0.677,0.8-1.493,0.652-1.844-0.335c-0.861-2.428-1.75-4.843-2.656-7.254c-0.367-0.979-0.277-2.521,0.196-3.456			c7.03-13.762,12.591-28.025,15.752-43.252c0.212-1.024,0.151-1.955-0.118-2.081c-0.273-0.122-0.853,0.543-1.277,1.498			c-0.563,1.269-1.122,2.538-1.861,3.696c-5.797,9.131-11.624,18.25-17.491,27.336c-0.567,0.877-1.354,0.808-1.763-0.155			c-1.211-2.852-2.456-5.691-3.729-8.515c-0.428-0.955-0.498-2.521-0.151-3.509c6.389-18.144,11.159-36.691,13.391-56.022			c0.122-1.041-0.065-1.983-0.404-2.105c-0.338-0.123-0.889,0.579-1.208,1.575c-0.641,2.011-1.244,4.039-2.13,5.92			c-5.565,11.853-11.146,23.697-16.777,35.517c-0.449,0.942-1.199,0.955-1.677,0.024c-2.583-5.039-5.271-10.021-8.062-14.945			c-0.514-0.91-0.767-2.477-0.559-3.501c2.525-12.631,4.309-25.41,5.431-38.311c0.363-4.182,0.13-8.413,0.073-13.117			c-0.012-1.044-0.294-1.093-0.641-0.106c-4.479,12.762-8.825,25.149-13.125,37.405c-0.347,0.987-1.077,1.069-1.636,0.184			c-2.061-3.244-4.166-6.455-6.316-9.637c-0.587-0.865-0.926-2.403-0.767-3.436c3.301-21.208,4.525-42.505,2.513-64.101			c-0.098-1.041-0.559-1.934-1.02-1.995c-0.461-0.061-0.967,0.727-1.102,1.763c-0.322,2.489-0.575,4.998-1.244,7.393			c-3.725,13.309-7.467,26.614-11.265,39.902c-0.29,1.003-1.036,1.146-1.673,0.318c-2.407-3.125-4.863-6.21-7.364-9.258			c-0.665-0.808-1.171-2.309-1.143-3.354c0.792-26.63-2.579-52.812-11.13-78.65c-0.331-0.991-0.327-0.991-0.057,0.017			c3.762,14.255-0.576,40.017-3.027,54.807c-0.171,1.032-1.155,1.987-2.199,1.954c-5.145-0.163-9.38-3.57-11.779-8.466			c-2.595-5.296-2.917-11.367-3.472-17.238c-2.048-21.775-7.94-43.183-17.316-62.946c-0.449-0.946-0.738-0.861-0.636,0.18			c2.036,20.808,3.884,41.938,0.057,62.44c-0.192,1.028-0.734,1.093-1.191,0.155c-16.046-33.133-32.093-66.267-48.14-99.401			c-0.457-0.942-0.661-0.873-0.461,0.155c4.603,23.464,9.208,46.932,13.811,70.396c0.2,1.028-0.314,1.351-1.134,0.702			C85.57,81.457,74.436,62.938,70.8,42.966c-0.188-1.028-0.273-1.02-0.253,0.024c0.13,6.932-0.225,22.306,2.954,28.107			c0.502,0.918,0.506,0.934-0.273,0.236c-0.959-0.861-1.918-1.718-2.876-2.579c-0.779-0.698-1.82-2.007-2.322-2.921			c-2.986-5.426-6.001-10.824-9.241-16.083c-5.777-9.384-11.501-18.964-18.56-27.356C33.631,14.549,25.585,7.919,18.054,0.853			c-0.763-0.714-1.64-1.048-1.971-0.734s-0.163,1.293,0.375,2.191c3.982,6.671,8.046,13.292,11.873,20.053			C46.932,55.219,61.126,89.78,68.748,126.904c5.786,28.193,4.659,56.414,1.024,84.713c-2.876,22.395-6.654,44.59-14.753,65.782			c-1.967,5.145-4.647,10.017-7.238,15.263c-0.465,0.938-0.159,2.224,0.665,2.868c3.884,3.035,7.903,6.259,12.114,9.196			c0.799,0.559,2.844-0.106,4.027-0.743c7.062-3.781,14.023-7.752,21.061-11.578c0.522-0.286,1.105-0.457,1.701-0.601			c0.975-0.232,1.848-0.273,1.955-0.098c0.102,0.176-0.437,0.886-1.208,1.596c-0.587,0.538-1.175,1.077-1.762,1.615			c-0.771,0.706-0.596,0.996,0.396,0.665c8.45-2.831,16.957-4.631,25.9-4.292c20.062,0.763,38.397,24.321,33.228,42.901			c-2.456,8.829-8.601,14.953-15.704,20.131c-14.631,10.673-31.612,16.193-48.584,21.701c-9.143,2.966-18.217,6.165-27.385,9.045			c-16.125,5.063-22.391,17.862-25.684,32.808c-0.637,2.885-0.951,5.843-1.053,8.87c-0.037,1.044-0.322,2.697-0.526,3.721			c-0.42,2.102-0.396,4.325,0.13,6.524c0.208,0.864,0.417,1.726,0.625,2.591c0.245,1.016,0.004,2.566-0.547,3.455			C26.544,444.055,25.933,445.042,25.312,446.025z',
        shape48: 'M30.578,17.446c0.539-0.289,1.215-1.538,1.215-1.538s-1.414-0.125-1.953,0.165c-0.053,0.029-0.096,0.072-0.146,0.106		c0.073-0.503,0.122-1.014,0.142-1.533c0.338,0.091,0.825-0.062,1.178-0.375c0.459-0.406,0.83-1.776,0.83-1.776		s-1.404,0.204-1.863,0.61c-0.057,0.05-0.096,0.113-0.146,0.17c-0.032-0.538-0.1-1.066-0.19-1.586		c0.346,0.002,0.776-0.259,1.047-0.638c0.354-0.499,0.404-1.917,0.404-1.917s-1.322,0.516-1.676,1.015		c-0.037,0.052-0.057,0.112-0.088,0.168c-0.115-0.409-0.252-0.809-0.404-1.202c0.346-0.057,0.727-0.396,0.918-0.827		c0.252-0.558,0.028-1.959,0.028-1.959s-1.198,0.762-1.448,1.32c-0.029,0.063-0.039,0.131-0.059,0.197		c-0.213-0.421-0.448-0.83-0.701-1.225c0.314-0.131,0.613-0.513,0.73-0.946c0.162-0.591-0.277-1.939-0.277-1.939		s-1.064,0.939-1.225,1.53c-0.021,0.075-0.021,0.153-0.03,0.23c-0.329-0.417-0.679-0.816-1.052-1.193		c0.285-0.193,0.498-0.645,0.515-1.103c0.022-0.611-0.712-1.825-0.712-1.825s-0.822,1.158-0.846,1.769		c-0.002,0.07,0,0.141,0.008,0.21c-0.307-0.254-0.623-0.497-0.951-0.725c-0.089-0.302-0.331-0.623-0.664-0.824		c-0.523-0.315-1.941-0.261-1.941-0.261s0.612,1.279,1.137,1.595c0.232,0.14,0.496,0.21,0.742,0.226		c0.25,0.17,0.498,0.346,0.735,0.533c-0.638,0.068-1.687,0.7-1.687,0.7s1.156,0.821,1.768,0.844		c0.469,0.017,0.943-0.171,1.148-0.452c0.252,0.253,0.49,0.52,0.722,0.793c-0.644-0.064-1.776,0.302-1.776,0.302		s0.938,1.063,1.53,1.224c0.461,0.125,0.97,0.042,1.229-0.197c0.188,0.289,0.361,0.585,0.524,0.889		c-0.61-0.186-1.846,0.008-1.846,0.008s0.761,1.197,1.319,1.447c0.416,0.187,0.91,0.196,1.209,0.029		c0.101,0.261,0.192,0.527,0.276,0.796c-0.557-0.307-1.825-0.356-1.825-0.356s0.518,1.321,1.017,1.675		c0.376,0.267,0.866,0.373,1.194,0.26c0.062,0.355,0.11,0.715,0.145,1.08c-0.496-0.411-1.665-0.73-1.665-0.73		s0.205,1.404,0.612,1.861c0.301,0.34,0.746,0.551,1.089,0.522c-0.013,0.364-0.036,0.726-0.078,1.083		c-0.36-0.523-1.479-1.134-1.479-1.134s-0.125,1.414,0.166,1.952c0.233,0.434,0.662,0.746,1.021,0.752		c-0.079,0.316-0.163,0.632-0.265,0.939c-0.256-0.568-1.365-1.353-1.365-1.353s-0.289,1.39-0.062,1.958		c0.164,0.419,0.508,0.768,0.836,0.859c-0.134,0.283-0.271,0.562-0.424,0.832c-0.145-0.604-1.09-1.582-1.09-1.582		s-0.543,1.311-0.428,1.912c0.082,0.438,0.349,0.84,0.65,0.998c-0.195,0.264-0.396,0.523-0.611,0.772		c-0.01-0.617-0.768-1.786-0.768-1.786s-0.785,1.182-0.789,1.792c-0.002,0.454,0.186,0.908,0.459,1.116		c-0.236,0.215-0.479,0.425-0.729,0.623c0.001-0.012,0.005-0.021,0.006-0.033c0.073-0.607-0.556-1.88-0.556-1.88		s-0.916,1.082-0.99,1.688c-0.053,0.418,0.066,0.844,0.281,1.094c-0.31,0.189-0.625,0.367-0.951,0.529		c0.033-0.088,0.062-0.178,0.08-0.271c0.117-0.601-0.42-1.914-0.42-1.914s-0.992,1.015-1.108,1.616		c-0.081,0.412,0.008,0.846,0.204,1.111c-0.571,0.215-1.164,0.381-1.768,0.518c-0.355-1.17-1.431-2.028-2.716-2.028		c-1.286,0-2.361,0.856-2.716,2.028c-0.604-0.135-1.197-0.303-1.768-0.518c0.196-0.266,0.285-0.699,0.204-1.111		c-0.116-0.602-1.108-1.616-1.108-1.616s-0.538,1.313-0.42,1.914c0.018,0.093,0.047,0.183,0.08,0.271		c-0.326-0.162-0.642-0.34-0.951-0.529c0.213-0.25,0.333-0.676,0.281-1.094c-0.074-0.606-0.991-1.688-0.991-1.688		s-0.628,1.271-0.555,1.88c0.001,0.012,0.005,0.021,0.006,0.033c-0.251-0.198-0.493-0.407-0.729-0.623		c0.272-0.208,0.461-0.663,0.458-1.116c-0.003-0.612-0.789-1.792-0.789-1.792s-0.757,1.169-0.767,1.786		c-0.214-0.249-0.416-0.509-0.611-0.772c0.301-0.158,0.567-0.56,0.65-0.998c0.116-0.603-0.428-1.912-0.428-1.912		s-0.945,0.979-1.09,1.582c-0.152-0.271-0.29-0.549-0.423-0.832c0.329-0.092,0.671-0.44,0.836-0.859		c0.226-0.57-0.063-1.958-0.063-1.958s-1.11,0.784-1.366,1.353c-0.102-0.309-0.186-0.623-0.264-0.939		c0.358-0.006,0.787-0.318,1.02-0.752c0.291-0.539,0.167-1.952,0.167-1.952s-1.121,0.611-1.48,1.134		c-0.042-0.356-0.065-0.718-0.078-1.083c0.342,0.029,0.788-0.183,1.089-0.522C4.525,13.614,4.73,12.21,4.73,12.21		s-1.168,0.319-1.665,0.73c0.033-0.364,0.082-0.725,0.145-1.08c0.327,0.113,0.818,0.007,1.194-0.26		C4.903,11.247,5.42,9.925,5.42,9.925s-1.268,0.049-1.825,0.356c0.084-0.27,0.176-0.535,0.277-0.796		c0.3,0.167,0.794,0.157,1.208-0.029C5.639,9.207,6.4,8.009,6.4,8.009S5.16,7.818,4.549,8.004C4.713,7.7,4.887,7.403,5.074,7.115		c0.26,0.238,0.769,0.322,1.23,0.197c0.591-0.161,1.53-1.224,1.53-1.224S6.7,5.723,6.057,5.787c0.231-0.273,0.469-0.54,0.721-0.793		c0.206,0.281,0.681,0.468,1.149,0.452c0.611-0.022,1.768-0.844,1.768-0.844s-1.049-0.632-1.687-0.7		C8.246,3.715,8.493,3.54,8.744,3.37c0.245-0.016,0.51-0.086,0.742-0.226c0.524-0.316,1.136-1.595,1.136-1.595		s-1.417-0.055-1.941,0.26C8.348,2.009,8.106,2.331,8.016,2.632C7.688,2.86,7.372,3.104,7.066,3.357		c0.006-0.07,0.009-0.14,0.007-0.21C7.05,2.535,6.228,1.378,6.228,1.378S5.492,2.591,5.515,3.203		c0.017,0.458,0.229,0.91,0.514,1.102C5.657,4.683,5.307,5.082,4.978,5.499c-0.01-0.077-0.01-0.155-0.03-0.23		c-0.161-0.591-1.225-1.53-1.225-1.53s-0.44,1.349-0.278,1.939c0.118,0.434,0.417,0.816,0.732,0.947		C3.924,7.02,3.689,7.427,3.476,7.85c-0.02-0.066-0.03-0.134-0.058-0.197c-0.251-0.558-1.449-1.32-1.449-1.32		s-0.224,1.4,0.028,1.958c0.193,0.43,0.574,0.77,0.918,0.827C2.764,9.51,2.627,9.91,2.511,10.319		c-0.031-0.056-0.051-0.116-0.088-0.168c-0.354-0.5-1.676-1.016-1.676-1.016s0.05,1.418,0.405,1.917		c0.27,0.378,0.701,0.64,1.047,0.638c-0.092,0.52-0.159,1.048-0.191,1.586c-0.049-0.057-0.09-0.12-0.146-0.17		C1.404,12.699,0,12.497,0,12.497s0.37,1.37,0.829,1.776c0.353,0.313,0.84,0.466,1.178,0.375c0.02,0.519,0.067,1.029,0.142,1.533		c-0.05-0.034-0.092-0.077-0.146-0.106c-0.539-0.291-1.953-0.165-1.953-0.165s0.676,1.248,1.215,1.539		c0.386,0.207,0.851,0.25,1.162,0.125c0.1,0.394,0.214,0.779,0.347,1.16c-0.045-0.023-0.083-0.056-0.13-0.074		c-0.569-0.225-1.958,0.066-1.958,0.066s0.817,1.159,1.387,1.383c0.442,0.176,0.956,0.149,1.241-0.056		c0.181,0.384,0.376,0.759,0.589,1.124c-0.045-0.013-0.091-0.027-0.137-0.035c-0.601-0.115-1.912,0.428-1.912,0.428		s1.019,0.988,1.621,1.103c0.473,0.09,0.977-0.036,1.215-0.297c0.257,0.351,0.528,0.688,0.816,1.015		c-0.039-0.002-0.077-0.008-0.116-0.007c-0.612,0.004-1.793,0.791-1.793,0.791s1.19,0.771,1.802,0.769		c0.472-0.004,0.941-0.215,1.132-0.508c0.276,0.254,0.559,0.498,0.854,0.729c-0.026,0.002-0.052-0.004-0.078-0.001		c-0.608,0.075-1.689,0.993-1.689,0.993s1.271,0.629,1.878,0.554c0.503-0.062,0.973-0.36,1.094-0.704		c0.236,0.146,0.468,0.301,0.713,0.434c-0.601,0.25-1.413,1.043-1.413,1.043s1.312,0.533,1.912,0.414		c0.485-0.094,0.922-0.412,1.033-0.752c0.724,0.287,1.479,0.512,2.255,0.676c0.105,1.479,1.326,2.649,2.831,2.649		s2.726-1.17,2.831-2.649c0.776-0.164,1.531-0.389,2.256-0.676c0.109,0.34,0.547,0.658,1.032,0.752		c0.601,0.119,1.914-0.418,1.914-0.418s-0.812-0.793-1.413-1.043c0.245-0.134,0.477-0.285,0.713-0.434		c0.121,0.343,0.592,0.643,1.094,0.704c0.607,0.075,1.879-0.554,1.879-0.554s-1.082-0.918-1.689-0.994		c-0.025-0.002-0.052,0.004-0.078,0.002c0.295-0.231,0.578-0.475,0.854-0.729c0.191,0.293,0.66,0.504,1.133,0.508		c0.611,0.004,1.802-0.769,1.802-0.769s-1.181-0.787-1.793-0.791c-0.039,0-0.077,0.005-0.116,0.007		c0.288-0.324,0.559-0.664,0.816-1.015c0.238,0.261,0.742,0.388,1.215,0.297c0.602-0.114,1.621-1.103,1.621-1.103		s-1.311-0.543-1.912-0.429c-0.046,0.009-0.092,0.022-0.137,0.036c0.213-0.363,0.408-0.738,0.589-1.124		c0.284,0.205,0.798,0.231,1.241,0.056c0.57-0.224,1.387-1.384,1.387-1.384s-1.389-0.29-1.958-0.065		c-0.047,0.02-0.085,0.051-0.13,0.074c0.133-0.379,0.246-0.767,0.347-1.16C29.727,17.696,30.191,17.653,30.578,17.446z',
        agenda: 'M283.606,122.421V54.473c0-2.195-1.779-3.973-3.974-3.973h-31.787c-2.194,0-3.974,1.778-3.974,3.973 c0,2.195,1.779,3.974,3.974,3.974h27.813v63.574h-7.946V70.367c0-2.195-1.779-3.974-3.974-3.974s-3.974,1.778-3.974,3.974v55.627 c0,2.195,1.779,3.974,3.974,3.974h15.854c0.013,0,0.026,0.002,0.04,0.002c0.009,0,0.018-0.001,0.027-0.001 c6.561,0.014,11.894,5.355,11.894,11.919v26.489c0,6.573-5.348,11.92-11.921,11.92h-15.894c-2.194,0-3.974,1.779-3.974,3.973v11.921 h-7.946V70.367c0-2.195-1.779-3.974-3.974-3.974s-3.974,1.778-3.974,3.974v129.798c0,2.194,1.779,3.973,3.974,3.973h15.884 c6.587,0.005,11.93,5.35,11.93,11.921v26.489c0,6.57-5.343,11.917-11.913,11.92c-0.017,0-15.9,0-15.9,0 c-2.194,0-3.974,1.779-3.974,3.974v21.191c0,2.195,1.779,3.974,3.974,3.974s3.974-1.778,3.974-3.974v-17.218h7.946v17.218 c0,2.195,1.779,3.974,3.974,3.974s3.974-1.778,3.974-3.974v-17.617c2.935-0.6,5.635-1.846,7.946-3.585v33.123h-39.733V54.473 c0-2.195-1.779-3.973-3.974-3.973H75.665c-2.194,0-3.974,1.778-3.974,3.973v13.245H62.42c-6.573,0-11.92,5.347-11.92,11.92 s5.347,11.92,11.92,11.92h9.271v39.734H62.42c-6.573,0-11.92,5.348-11.92,11.92c0,6.572,5.347,11.92,11.92,11.92h9.271v39.734H62.42 c-6.573,0-11.92,5.348-11.92,11.92c0,6.573,5.347,11.92,11.92,11.92h9.271v39.734H62.42c-6.573,0-11.92,5.349-11.92,11.921 s5.347,11.92,11.92,11.92h9.271v13.244c0,2.195,1.779,3.974,3.974,3.974h203.968c2.194,0,3.974-1.778,3.974-3.974V187.845 c9.058-1.846,15.894-9.873,15.894-19.467v-26.489C299.5,132.294,292.664,124.267,283.606,122.421z M58.447,79.638 c0-2.191,1.782-3.974,3.974-3.974H88.91c2.191,0,3.973,1.783,3.973,3.974c0,2.191-1.782,3.974-3.973,3.974H62.42 C60.229,83.612,58.447,81.83,58.447,79.638z M58.447,143.213c0-2.191,1.782-3.974,3.974-3.974H88.91 c2.191,0,3.973,1.782,3.973,3.974c0,2.191-1.782,3.973-3.973,3.973H62.42C60.229,147.186,58.447,145.404,58.447,143.213z M58.447,206.787c0-2.191,1.782-3.974,3.974-3.974H88.91c2.191,0,3.973,1.782,3.973,3.974s-1.782,3.974-3.973,3.974H62.42 C60.229,210.761,58.447,208.979,58.447,206.787z M58.447,270.362c0-2.191,1.782-3.975,3.974-3.975H88.91 c2.191,0,3.973,1.783,3.973,3.975s-1.782,3.973-3.973,3.973H62.42C60.229,274.335,58.447,272.554,58.447,270.362z M79.638,282.282 h9.271c6.573,0,11.92-5.348,11.92-11.92s-5.347-11.921-11.92-11.921h-9.271v-39.734h9.271c6.573,0,11.92-5.347,11.92-11.92 c0-6.572-5.347-11.92-11.92-11.92h-9.271v-39.734h9.271c6.573,0,11.92-5.348,11.92-11.92c0-6.573-5.347-11.92-11.92-11.92h-9.271 V91.559h9.271c6.573,0,11.92-5.348,11.92-11.92s-5.347-11.92-11.92-11.92h-9.271v-9.271h148.341v233.107H79.638V282.282z M267.713,196.592v-8.347h7.946v11.932C273.348,198.437,270.647,197.189,267.713,196.592z',
        ak: 'M311.959,144.165c0,0-40.853-2.43-41.994-1.248c-1.144,1.182-4.837,3.183-5.908,3.202 c-1.073,0.018-17.726-4.525-17.726-4.525l-3.457,0.059l-0.497-1.184l-0.698-0.673l0.382-0.395l-0.679-1.36l-1.313,0.023l-7.192-5.66 l-71.979,2.585l-0.023-1.391c0,0,0.673-0.092,0.833-0.093c0.159-0.004-0.211-3.018-0.211-3.018l-1.032,0.018l-0.578,1.123 l-1.746,0.11l-0.89-0.859l-1.788,0.031l0.014,0.834l-10.053,0.212l-0.012-0.716l-1.391,0.024l-0.148,0.639l-5.104,0.227l-0.995,1.03 l0.025,1.471l-1.47,0.063l-0.647-0.625l-35.065,1.873c-2.694,0.523-2.661,2.432-2.661,2.432l-27.681,1.428 c-3.556,8.169-7.906,8.939-7.906,8.939l-1.46,0.025l0.016,0.894l-18.57,0.11l-4.999-9.901l-0.06-3.487l-2.045-1.099l-4.558,0.197 l-0.85,0.878l0.217,12.666l-1.042,0.02l0.02,1.221l-0.656,0.012l-0.051,0.478l-3.16,0.074l0.041,2.324l3.12-0.053l0.016,0.954 l-2.822,0.029l0.032,1.827l4.927-0.085c0,0,0.398-0.006,0.424,1.503c0.026,1.511,2.17,1.395,2.17,1.395l1.979-0.433l36.058-1.159 l0.008,0.447l2.369-0.041l0.023-0.343l25.242-1.009l0.018,0.914l18.899-0.026c0,0,0.663-0.688,10.781-1.735 c10.118-1.048,16.804,4.044,18.917,4.445c2.112,0.401,5.045-2.471,5.045-2.471s19.431-0.332,18.807,0.314 c-0.626,0.646-0.167,4.137-0.167,4.137l0.476-0.008c-8.564,29.083-27.134,40.214-27.134,40.214l12.545,17.749 c36.914-26.231,36.969-57.99,36.969-57.99l0.833-0.013c0,0-0.128,4.095-0.124,4.374c0.005,0.277,1.724,0.844,1.724,0.844 l0.951,4.515l0.873-0.174l-0.31-2.916l0.762-0.789l1.947-0.033c1.021,1.612,2.263,2.187,2.263,2.187l15.334-0.581l2.501-2.428 l3.934,2.159c0,0,11.422,12.444,11.012,16.266c-0.412,3.824,2.143,4.496,2.143,4.496l7.868-0.135 c6.328-1.779,6.061-8.133,6.061-8.133s-10.654-14.048-12.389-17.835c-1.734-3.785,2.052-5.52,2.052-5.52l4.769-0.081 c0,0,67.015,23.177,72.839,24.35c5.823,1.172,6.825-0.594,6.825-0.594l0.04-34.82C324.619,144.167,311.959,144.165,311.959,144.165z M37.388,148.115l-4.768,0.082c-2.691-1.583,0.183-3.262,0.183-3.262l4.648-0.12c0.224,0.215,1.345-0.42,1.377,1.487 C38.859,148.209,37.388,148.115,37.388,148.115z M217.082,168.567l-13.747,0.473l-1.776-1.718l0.025-10.096l10.332-0.177 l0.012,0.675c0,0,5.661,3.401-1.684,8.496l0.008,0.396l0.834-0.014c0,0,3.119-1.207,4.738-6.48l2.313-1.909l1.192,0.1l0.133,7.789 L217.082,168.567z'

    });
}

$btnRegisterIcon.on('click', function() {
    $iconSubMenu.find('.menu-item').eq(3).after(
        '<li id="customArrow" class="menu-item icon-text" data-icon-type="customArrow">↑</li>'
    );

    imageEditor.registerIcons({
        customArrow: 'M 60 0 L 120 60 H 90 L 75 45 V 180 H 45 V 45 L 30 60 H 0 Z'
    });

    $btnRegisterIcon.off('click');

    $iconSubMenu.on('click', '#customArrow', onClickIconSubMenu);
});

$('.js-shapes-list').on('click', '.icon-text', onClickIconSubMenu);

iconColorpicker.on('selectColor', function(event) {
    imageEditor.changeIconColor(activeObjectId, event.color);
});

// control mask filter
$btnMaskFilter.on('click', function() {
    imageEditor.stopDrawingMode();
    $displayingSubMenu.hide();

    $displayingSubMenu = $filterSubMenu.show();
});

$btnImageFilter.on('click', function() {
    var filters = {
        'grayscale': $inputCheckGrayscale,
        'invert': $inputCheckInvert,
        'sepia': $inputCheckSepia,
        'sepia2': $inputCheckSepia2,
        'blur': $inputCheckBlur,
        'shapren': $inputCheckSharpen,
        'emboss': $inputCheckEmboss,
        'removeWhite': $inputCheckRemoveWhite,
        'brightness': $inputCheckBrightness,
        'noise': $inputCheckNoise,
        'gradientTransparency': $inputCheckGradientTransparency,
        'pixelate': $inputCheckPixelate,
        'tint': $inputCheckTint,
        'multiply': $inputCheckMultiply,
        'blend': $inputCheckBlend,
        'colorFilter': $inputCheckColorFilter
    };

    tui.util.forEach(filters, function($value, key) {
        $value.prop('checked', imageEditor.hasFilter(key));
    });
    $displayingSubMenu.hide();

    $displayingSubMenu = $imageFilterSubMenu.show();
});

$btnLoadMaskImage.on('change', function() {
    var file;
    var imgUrl;

    if (!supportingFileAPI) {
        alert('This browser does not support file-api');
    }

    file = event.target.files[0];

    if (file) {
        imgUrl = URL.createObjectURL(file);

        imageEditor.loadImageFromURL(imageEditor.toDataURL(), 'FilterImage').then(() => {
            imageEditor.addImageObject(imgUrl).then(objectProps => {
                URL.revokeObjectURL(file);
                console.log(objectProps);
            });
        });
    }
});

$btnLoadImage.on('click', function() {
    var $this = $(this);

    imageEditor.addImageObject($this.attr('data-template')).then(objectProps => {
        console.log(objectProps);
    });
});

$btnApplyMask.on('click', function() {
    imageEditor.applyFilter('mask', {
        maskObjId: activeObjectId
    }).then(result => {
        console.log(result);
    });
});

$inputCheckGrayscale.on('change', function() {
    applyOrRemoveFilter(this.checked, 'Grayscale', null);
});

$inputCheckInvert.on('change', function() {
    applyOrRemoveFilter(this.checked, 'Invert', null);
});

$inputCheckSepia.on('change', function() {
    applyOrRemoveFilter(this.checked, 'Sepia', null);
});

$inputCheckSepia2.on('change', function() {
    applyOrRemoveFilter(this.checked, 'Sepia2', null);
});

$inputCheckBlur.on('change', function() {
    applyOrRemoveFilter(this.checked, 'Blur', null);
});

$inputCheckSharpen.on('change', function() {
    applyOrRemoveFilter(this.checked, 'Sharpen', null);
});

$inputCheckEmboss.on('change', function() {
    applyOrRemoveFilter(this.checked, 'Emboss', null);
});

$inputCheckRemoveWhite.on('change', function() {
    applyOrRemoveFilter(this.checked, 'removeWhite', {
        threshold: parseInt($inputRangeRemoveWhiteThreshold.val(), 10),
        distance: parseInt($inputRangeRemoveWhiteDistance.val(), 10)
    });
});

$inputRangeRemoveWhiteThreshold.on('change', function() {
    applyOrRemoveFilter($inputCheckRemoveWhite.is(':checked'), 'removeWhite', {
        threshold: parseInt(this.value, 10)
    });
});

$inputRangeRemoveWhiteDistance.on('change', function() {
    applyOrRemoveFilter($inputCheckRemoveWhite.is(':checked'), 'removeWhite', {
        distance: parseInt(this.value, 10)
    });
});

$inputCheckBrightness.on('change', function() {
    applyOrRemoveFilter(this.checked, 'brightness', {
        brightness: parseInt($inputRangeBrightnessValue.val(), 10)
    });
});

$inputRangeBrightnessValue.on('change', function() {
    applyOrRemoveFilter($inputCheckBrightness.is(':checked'), 'brightness', {
        brightness: parseInt(this.value, 10)
    });
});

$inputCheckNoise.on('change', function() {
    applyOrRemoveFilter(this.checked, 'noise', {
        noise: parseInt($inputRangeNoiseValue.val(), 10)
    });
});

$inputRangeNoiseValue.on('change', function() {
    applyOrRemoveFilter($inputCheckNoise.is(':checked'), 'noise', {
        noise: parseInt(this.value, 10)
    });
});

$inputCheckGradientTransparency.on('change', function() {
    applyOrRemoveFilter(this.checked, 'gradientTransparency', {
        threshold: parseInt($inputRangeGradientTransparencyValue.val(), 10)
    });
});

$inputRangeGradientTransparencyValue.on('change', function() {
    applyOrRemoveFilter($inputCheckGradientTransparency.is(':checked'), 'gradientTransparency', {
        threshold: parseInt(this.value, 10)
    });
});

$inputCheckPixelate.on('change', function() {
    applyOrRemoveFilter(this.checked, 'pixelate', {
        blocksize: parseInt($inputRangePixelateValue.val(), 10)
    });
});

$inputRangePixelateValue.on('change', function() {
    applyOrRemoveFilter($inputCheckPixelate.is(':checked'), 'pixelate', {
        blocksize: parseInt(this.value, 10)
    });
});

$inputCheckTint.on('change', function() {
    applyOrRemoveFilter(this.checked, 'tint', {
        color: tintColorpicker.getColor(),
        opacity: parseFloat($inputRangeTintOpacityValue.val())
    });
});

tintColorpicker.on('selectColor', function(e) {
    applyOrRemoveFilter($inputCheckTint.is(':checked'), 'tint', {
        color: e.color
    });
});

$inputRangeTintOpacityValue.on('change', function() {
    applyOrRemoveFilter($inputCheckTint.is(':checked'), 'tint', {
        opacity: parseFloat($inputRangeTintOpacityValue.val())
    });
});

$inputCheckMultiply.on('change', function() {
    applyOrRemoveFilter(this.checked, 'multiply', {
        color: multiplyColorpicker.getColor()
    });
});

multiplyColorpicker.on('selectColor', function(e) {
    applyOrRemoveFilter($inputCheckMultiply.is(':checked'), 'multiply', {
        color: e.color
    });
});

$inputCheckBlend.on('change', function() {
    applyOrRemoveFilter(this.checked, 'blend', {
        color: blendColorpicker.getColor(),
        mode: $selectBlendType.val()
    });
});

blendColorpicker.on('selectColor', function(e) {
    applyOrRemoveFilter($inputCheckBlend.is(':checked'), 'blend', {
        color: e.color
    });
});

$selectBlendType.on('change', function() {
    applyOrRemoveFilter($inputCheckBlend.is(':checked'), 'blend', {
        mode: this.value
    });
});

$inputCheckColorFilter.on('change', function() {
    applyOrRemoveFilter(this.checked, 'colorFilter', {
        color: '#FFFFFF',
        threshold: $inputRangeColorFilterValue.val()
    });
});

$inputRangeColorFilterValue.on('change', function() {
    applyOrRemoveFilter($inputCheckColorFilter.is(':checked'), 'colorFilter', {
        threshold: this.value
    });
});

// Load sample image
imageEditor.loadImageFromURL(window.product, 'SampleImage').then(sizeValue => {
    console.log(sizeValue);
    imageEditor.clearUndoStack();
});

// IE9 Unselectable
$('.menu').on('selectstart', function() {
    return false;
});

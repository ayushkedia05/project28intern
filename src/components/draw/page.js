import React, { useState } from 'react';
import { Button } from '@mantine/core';
import { FabricJSCanvas, useFabricJSEditor } from 'fabricjs-react';

import { ColorPicker, Text, Stack } from '@mantine/core';
const Draw = () => {
    const { selectedObjects, editor, onReady } = useFabricJSEditor({ defaultStrokeColor: 'red' });
    const [text, setText] = useState("intern");
    const [strokeColor, setStrokeColor] = useState("rgba(16, 222, 64, 0.28)");
    const [fillColor, setFillColor] = useState("rgba(222, 16, 19, 0.28)");
    const onAddCircle = () => {
        editor === null || editor === void 0 ? void 0 : editor.addCircle();
    };
    const onAddRectangle = () => {
        editor === null || editor === void 0 ? void 0 : editor.addRectangle();
    };
    const onAddLine = () => {
        editor === null || editor === void 0 ? void 0 : editor.addLine();
    };
    const onAddText = () => {
        if (selectedObjects === null || selectedObjects === void 0 ? void 0 : selectedObjects.length) {
            return editor === null || editor === void 0 ? void 0 : editor.updateText(text);
        }
        editor === null || editor === void 0 ? void 0 : editor.addText(text);
    };
    const onSetStrokeColor = () => {
        editor === null || editor === void 0 ? void 0 : editor.setStrokeColor(strokeColor);
    };
    const onSetFillColor = () => {
        editor === null || editor === void 0 ? void 0 : editor.setFillColor(fillColor);
    };
    const onDeleteAll = () => {
        editor === null || editor === void 0 ? void 0 : editor.deleteAll();
    };
    const onDeleteSelected = () => {
        editor === null || editor === void 0 ? void 0 : editor.deleteSelected();
    };
    const onZoomIn = () => {
        editor === null || editor === void 0 ? void 0 : editor.zoomIn();
    };
    const onZoomOut = () => {
        editor === null || editor === void 0 ? void 0 : editor.zoomOut();
    };
    return (
        <>
        <div className='btns'>
           <Button onClick={onZoomIn} color="red">Zoom IN</Button>
           <Button onClick={onZoomOut} >Zoom OUT</Button>
           <Button onClick={onAddCircle} color="green" >Add circle</Button>

           <Button onClick={onAddRectangle} >Add Rectangle</Button>
           <Button onClick={onAddLine} color="red">Add Line</Button>
           <Button onClick={onDeleteAll} color="green">delete All</Button>
           <Button onClick={onDeleteSelected} >delete Selected</Button>
           </div>
           <div className='doflex'>
           <div>
           <input type="text" onChange={(e)=>setText(e.target.value)}></input>
            <Button onClick={onAddText} color="green" >Add Text</Button>
            </div>
            <div>
            <ColorPicker format="rgba" value={strokeColor} onChange={setStrokeColor} />   
           <Button onClick={onSetStrokeColor} >set Stroke Color</Button>
           </div>
           <div>
            <ColorPicker format="rgba" value={fillColor} onChange={setFillColor} />
           <Button color="red" onClick={onSetFillColor} >set Fill Color</Button>
           </div>
           </div>
            <FabricJSCanvas className="sample-canvas" onReady={onReady}></FabricJSCanvas>
        </>
)};
export default Draw;
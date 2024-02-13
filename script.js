function getInputValue(inputValueText) {
    const inputText = document.getElementById(inputValueText);
    const inputValueInt = inputText.value;
    const inputValue = parseFloat(inputValueInt);
    return inputValue;

    
}

// Calculate Triangle Area
function calculateTriangleArea() {
    const triangleBase = getInputValue('triangleBase');
    const triangleHeight = getInputValue('triangleHeight')
    const triangleArea = 0.5 * triangleBase * triangleHeight;
    console.log(triangleArea);
   
    //  Display Value in span tag
    const spanTriangleArea = document.getElementById('triangleSetArea');
    spanTriangleArea.innerText = triangleArea;
    
}


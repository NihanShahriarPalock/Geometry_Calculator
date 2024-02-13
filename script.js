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
   
    //  Display Value in span tag
    const spanTriangleArea = document.getElementById('triangleSetArea');
    spanTriangleArea.innerText = triangleArea;
    
}
//  Calculate Rectangle Area
function calculateRectangleArea() {
    const rectangleBase = getInputValue('rectangleBase');
    const rectangleHeight = getInputValue('rectangleHeight')
    const rectangleArea = 0.5 * rectangleBase * rectangleHeight;

    //  Display Value in span tag
    const spanRectangleArea = document.getElementById('rectangleSetArea');
    spanRectangleArea.innerText = rectangleArea;

}

// Calculate Ellipse Area
function calculateEllipseArea() {
    const ellipseRadius = getInputValue('ellipseRadius');
    const ellipseArea = 3.1416 * ellipseRadius * ellipseRadius;

    //  Display Value in span tag
    const spanEllipseArea = document.getElementById('ellipseSetArea');
    spanEllipseArea.innerText = ellipseArea;

}


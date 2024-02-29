const div = React.createElement("div",{},[
    React.createElement("h1",{},"Topics covered"),
    React.createElement("p",{},"The following is a list of all the topics we cover in the MDN learning area."),
    React.createElement("div",{},[
        React.createElement("a",{href:"https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web"},"Getting started with the web"),
        React.createElement("p",{},"Provides a practical introduction to web development for complete beginners."),
    ]),  
    React.createElement("div",{},[
        React.createElement("a",{href:"https://developer.mozilla.org/en-US/docs/Learn/HTML"},"HTML — Structuring the web"),
        React.createElement("p",{},"HTML is the language that we use to structure the different parts of our content and define what their meaning or purpose is. This topic teaches HTML in detail."),
    ]), 
    React.createElement("div",{},[
        React.createElement("a",{href:"https://developer.mozilla.org/en-US/docs/Learn/CSS"},"CSS — Styling the web"),
        React.createElement("p",{},"CSS is the language that we use to control our web content's style and layout, as well as adding behavior like animation. This topic provides comprehensive coverage of CSS."),
    ]),   
]);
ReactDOM.render(div, document.getElementById("root"));
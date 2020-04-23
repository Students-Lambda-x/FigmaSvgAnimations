module.exports = ( name ) => `
&& {
  height: $\{ props => props.height ? props.height : "300px" };
  width: $\{ props => props.width ? props.width : "300px" };

  .dash-array {
    fill: transparent;
    animation: dash 5s linear reverse;
    stroke-dasharray: $\{ props => props.length + ", " + props.length };
    }
    
    @keyframes dash {
    0% {
      stroke-dashoffset: 0;
    }
    100% {
      stroke-dashoffset: -$\{ props => props.length };
    }
  }
}

`;
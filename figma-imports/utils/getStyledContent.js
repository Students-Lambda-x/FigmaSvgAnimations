module.exports = ( name ) => `
&& {
  height: $\{ props => props.height ? props.height : "100%" };
  width: $\{ props => props.width ? props.width : "100%" };

  .dash-array {
    fill: transparent;
    animation: dash 5s linear infinite reverse;
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
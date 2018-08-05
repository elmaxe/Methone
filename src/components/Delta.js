import React from 'react';

class Delta extends React.Component {
  render() {
    const points = "M43.7787458,33.592285 C42.6511301,25.8619776 36.4053307,24.9682463 34.9922796,24.5299077 C32.3456685,23.7086951 27.8894062,23.9803328 27.4482787,20.1247049 C26.86666,15.0454778 30.7276382,17.5429168 33.2996277,17.7418823 C35.8708494,17.9408478 36.0983993,15 36.0983993,15 C36.0983993,15 35.4851508,16.5550034 30.2855895,15.2896138 C25.0858747,14.0243779 24.4670987,18.2920717 24.4242603,19.3975207 C24.3005051,22.5931057 26.3630408,24.1203001 26.5793821,24.9886806 C26.6736571,25.3657163 19.4190838,26.7772187 20.0373992,36.3168058 C20.6555611,45.8573148 26.5135123,49.7624152 31.054223,49.9901116 C35.5953943,50.2181153 45.6108143,46.5551535 43.7787458,33.592285 L43.7787458,33.592285 Z M40.3377062,39.8597738 C36.6622072,53.7530938 25.7316742,50.3181357 23.0692483,40.126495 C20.4789873,30.2109477 27.5310381,25.431782 27.5310381,25.431782 C27.5310381,25.431782 29.0851947,26.0448107 30.8936176,26.5548998 C31.9510644,26.8531175 43.4696649,28.0210985 40.3377062,39.8597738 L40.3377062,39.8597738 Z";
    const deltaStyle = {
      lineHeight: "normal",
      cursor: "pointer",
      backgroundColor: this.props.deltaBackground || "#fff",
      border: "none",
      fontSize: 14,
      height: 50,
      position: "relative",
      width: 50,
      top: 0,
      display: "inline-block",
      textAlign: "center",
      padding: 0
    };

    return (
      <a href="/" style={deltaStyle}>
        <svg id="superdelta_img" width="26px" height="37px" viewBox="0 0 26 37" version="1.1"
           xmlns="http://www.w3.org/2000/svg"
           style={{lineHeight: "normal", marginTop: 10, height: 31, marginLeft: 1.5}}>
          <g id="delta_logo" strokeWidth={0.75} transform="translate(-19.000000, -14.000000)" >
            <path d={points} style={{lineHeight: "normal", fill: this.props.foreground}} />
          </g>
        </svg>
      </a>
    )
  }
}

export default Delta;

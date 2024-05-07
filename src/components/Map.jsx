import React from "react";

import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup,
} from "react-simple-maps";

const Map = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        // rotate: [-10.0, -52.0, 0],
        rotate: [60.0, -150.0, 180],
        center: [-1, -5],
        scale: 1100,
      }}
      style={{ width: "100%", height: "100%" }}
    >
      <Geographies
        geography="/features.json"
        fill="#9265ce"
        stroke="#FFFFFF"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        // subject={[2.3522, 48.8566]}
        subject={[121.564558, 25.03746]}
        dx={40}
        dy={-10}
        connectorProps={{
          stroke: "white",
          strokeWidth: 2,
          strokeLinecap: "round",
        }}
      >
        <text x="50" textAnchor="end" alignmentBaseline="middle" fill="white">
          {"Taipei"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default Map;

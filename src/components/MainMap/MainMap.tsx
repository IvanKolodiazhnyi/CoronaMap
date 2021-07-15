import React from "react";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography
} from "react-simple-maps";

import { MAP_URL } from '../../api/api'

interface MainMapFC {
  setTitleContent: (text: string) => void,
  infoCovid: {
    country: string,
    timeline: {
      "7/12/21": number,
    },
  }[]
};

interface OneEl {
  country: string | undefined,
  timeline: {
    "7/12/21": number,
  },
};

export const MainMap:React.FC<MainMapFC> = ({ setTitleContent, infoCovid }) => {

  return (
    <>
      <ComposableMap data-tip="" projectionConfig={{ scale: 200 }}>
        <ZoomableGroup>
          <Geographies geography={MAP_URL}>
            {({ geographies }) =>
              geographies.map(geo => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={() => {
                    const { NAME, ISO_A3 } = geo.properties;
                    const findArr: OneEl | undefined = infoCovid.find(el => el.country === NAME || el.country === ISO_A3);
                    const name = "7/12/21";
                    findArr?.country === undefined ? (
                      setTitleContent(`${NAME} - No inforamtion`)
                    ) : (
                      setTitleContent(`${findArr?.country} — ${findArr?.timeline[name]}`)
                    )
                  }}
                  onMouseLeave={() => {
                    setTitleContent("");
                  }}
                  style={{
                    default: {
                      fill: "#000",
                      outline: "none"
                    },
                    hover: {
                      fill: "#F53",
                      outline: "none"
                    },
                    pressed: {
                      fill: "#E42",
                      outline: "none"
                    }
                  }}
                />
              ))
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </>
  );
};

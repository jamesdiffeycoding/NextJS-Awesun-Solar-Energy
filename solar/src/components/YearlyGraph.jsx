"use client"
import { useState } from "react"
import React from "react";

export default function YearlyGraph({daytimeDataYear, daytimeDataBarWidthYear, peakMWYear}){
  return (
    <>
      {/* YEAR CONTAINER  */}
      <section className="fixed bottom-0 w-full">
        <div className="graph" key="graph2">
          {daytimeDataYear.reverse().map((dataPoint, index) => (
            (
              <React.Fragment key={`${index}-frag`} >
                <div className="verticalstrip" key={index}>
                  {dataPoint[1].includes("01T") && <div className="break2" key={`${index}-break`}></div>}
                </div>
                <div className="verticalstrip" key={`${index}-2`} style={{ width: `${daytimeDataBarWidthYear}%` }}>
                  <div className="w-full bg-green-800 rounded-t-lg bg-gradient-to-b from-green-800 to-green-600" key={`${index}-bar-2`} style={{ height: `${98 * dataPoint[2] / peakMWYear}%` }}></div>
                </div>
              </React.Fragment>
            ) 
          ))}
        </div>
        <div className="w-full h-4  bg-green-700 bg-gradient-to-b from-green-600 to-green-500" key="base"></div>
      </section>
    </>
  );
  
}
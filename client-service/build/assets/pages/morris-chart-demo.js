/*
 Template Name: Scoxe - Admin & Dashboard Template
 Author: Myra Studio
 File: Morris
*/

$(function() {
  "use strict";
  if ($("#morris-area-example").length) {
    Morris.Area({
      element: "morris-area-example",
      lineColors: ["#2e7ce4"],
      data: [
        { y: "Mon", a: 10 },
        { y: "Tue", a: 10 },
        { y: "Web", a: 10 },
        { y: "Thr", a: 20 },
        { y: "Fri", a: 60 },
        { y: "Sat", a: 70 },
        { y: "Sun", a: 75 },
        { y: "Mon", a: 79 }
      ],
      xkey: "y",
      ymax: 100,
      parseTime: false,
      //xLabels:"year",
      ykeys: ["a"],
      hideHover: "auto",
      gridLineColor: "#eef0f2",
      resize: !0,
      labels: ["Load"]
    });
  }
});

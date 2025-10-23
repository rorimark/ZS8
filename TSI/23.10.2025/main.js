function clock() {
  // seconds
  let t = document.getElementById("test");
  let d = new Date();
  let ds = d.getSeconds();
  let dss = ds.toString();
  let ds1 = dss[0];
  let ds2 = dss[1] || "0";
  let ds1b = parseInt(ds1).toString(2);
  ds1b = String(ds1b).padStart(4, "0");
  let ds2b = parseInt(ds2).toString(2);
  ds2b = String(ds2b).padStart(4, "0");

  // seconds left
  if (ds1b[3] == 1)
    document.querySelector(".second-left-4").style.backgroundColor = "#6977b8";
  else
    document.querySelector(".second-left-4").style.backgroundColor = "darkgrey";

  if (ds1b[2] == 1)
    document.querySelector(".second-left-3").style.backgroundColor = "#6977b8";
  else
    document.querySelector(".second-left-3").style.backgroundColor = "darkgrey";

  if (ds1b[1] == 1)
    document.querySelector(".second-left-2").style.backgroundColor = "#6977b8";
  else
    document.querySelector(".second-left-2").style.backgroundColor = "darkgrey";

  if (ds2b[3] == 1)
    document.querySelector(".second-right-4").style.backgroundColor = "#6977b8";
  else
    document.querySelector(".second-right-4").style.backgroundColor =
      "darkgrey";

  // seconds right
  if (ds2b[2] == 1)
    document.querySelector(".second-right-3").style.backgroundColor = "#6977b8";
  else
    document.querySelector(".second-right-3").style.backgroundColor =
      "darkgrey";

  if (ds2b[1] == 1)
    document.querySelector(".second-right-2").style.backgroundColor = "#6977b8";
  else
    document.querySelector(".second-right-2").style.backgroundColor =
      "darkgrey";

  if (ds2b[0] == 1)
    document.querySelector(".second-right-1").style.backgroundColor = "#6977b8";
  else
    document.querySelector(".second-right-1").style.backgroundColor =
      "darkgrey";

  //   minutes
  let ms = d.getMinutes();
  let mss = ms.toString();
  let ms1 = mss[0];
  let ms2 = mss[1] || "0";
  let ms1b = parseInt(ms1).toString(2);
  ms1b = String(ms1b).padStart(4, "0");
  let ms2b = parseInt(ms2).toString(2);
  ms2b = String(ms2b).padStart(4, "0");

  // minutes left
  if (ms1b[3] == 1)
    document.querySelector(".minute-left-4").style.backgroundColor = "#6977b8";
  else
    document.querySelector(".minute-left-4").style.backgroundColor = "darkgrey";

  if (ms1b[2] == 1)
    document.querySelector(".minute-left-3").style.backgroundColor = "#6977b8";
  else
    document.querySelector(".minute-left-3").style.backgroundColor = "darkgrey";

  if (ms1b[1] == 1)
    document.querySelector(".minute-left-2").style.backgroundColor = "#6977b8";
  else
    document.querySelector(".minute-left-2").style.backgroundColor = "darkgrey";

  //
  if (ms2b[3] == 1)
    document.querySelector(".minute-right-4").style.backgroundColor = "#6977b8";
  else
    document.querySelector(".minute-right-4").style.backgroundColor =
      "darkgrey";

  if (ms2b[2] == 1)
    document.querySelector(".minute-right-3").style.backgroundColor = "#6977b8";
  else
    document.querySelector(".minute-right-3").style.backgroundColor =
      "darkgrey";

  if (ms2b[1] == 1)
    document.querySelector(".minute-right-2").style.backgroundColor = "#6977b8";
  else
    document.querySelector(".minute-right-2").style.backgroundColor =
      "darkgrey";
  if (ms2b[0] == 1)
    document.querySelector(".minute-right-1").style.backgroundColor = "#6977b8";
  else
    document.querySelector(".minute-right-1").style.backgroundColor =
      "darkgrey";

  //   hours
  let hs = d.getHours();
  let hss = hs.toString();
  let hs1 = hss[0];
  let hs2 = hss[1] || "0";
  let hs1b = parseInt(hs1).toString(2);
  hs1b = String(hs1b).padStart(4, "0");
  let hs2b = parseInt(hs2).toString(2);
  hs2b = String(hs2b).padStart(4, "0");

  // hours left
  if (hs1b[3] == 1)
    document.querySelector(".hour-left-4").style.backgroundColor = "#6977b8";
  else
    document.querySelector(".hour-left-4").style.backgroundColor = "darkgrey";

  if (hs1b[2] == 1)
    document.querySelector(".hour-left-3").style.backgroundColor = "#6977b8";
  else
    document.querySelector(".hour-left-3").style.backgroundColor = "darkgrey";

  // hours right
  if (hs2b[3] == 1)
    document.querySelector(".hour-right-4").style.backgroundColor = "#6977b8";
  else
    document.querySelector(".hour-right-4").style.backgroundColor = "darkgrey";

  if (hs2b[2] == 1)
    document.querySelector(".hour-right-3").style.backgroundColor = "#6977b8";
  else
    document.querySelector(".hour-right-3").style.backgroundColor = "darkgrey";

  if (hs2b[1] == 1)
    document.querySelector(".hour-right-2").style.backgroundColor = "#6977b8";
  else
    document.querySelector(".hour-right-2").style.backgroundColor = "darkgrey";

  if (hs2b[0] == 1)
    document.querySelector(".hour-right-1").style.backgroundColor = "#6977b8";
  else
    document.querySelector(".hour-right-1").style.backgroundColor = "darkgrey";
}

/*
 * Copyright (C) 2017-2020 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */

import { GeoCoordinates,} from "@here/harp-geoutils";
import { View } from "./View";
import { FeaturesDataSource } from "@here/harp-features-datasource";
import THREE = require("three");
import { cursorTo } from "readline";
import * as cube from "./cube";

const app = new View({
    canvas: document.getElementById("map") as HTMLCanvasElement
});

const mapView = app.mapView;

// make map full-screen
mapView.resize(window.innerWidth, window.innerHeight);

// react on resize events from the browser.
window.addEventListener("resize", () => {
    mapView.resize(window.innerWidth, window.innerHeight);
});

// center the camera to Rouen
mapView.lookAt(new GeoCoordinates(49.4431, 1.0993), 1500, 40, 0);


// for (var i = 0; i < 1; i++) {
//     mapView.mapAnchors.add(cube.randomCubePosition(mapView));
// }

const featuresDataSource = new FeaturesDataSource({ styleSetName: "geojson" });
map.addDataSource(featuresDataSource);


// make sure the map is rendered
mapView.update();

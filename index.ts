/*
 * Copyright (C) 2017-2020 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */

import { GeoCoordinates,} from "@here/harp-geoutils";
import { View } from "./View";
import { Tile, DataSource, MapAnchor,} from "@here/harp-mapview";
import THREE = require("three");
import { cursorTo } from "readline";

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

// center the camera to New York
mapView.lookAt(new GeoCoordinates(49.4431, 1.0993), 1500, 40, 0);

const scale = 100;
const geometry = new THREE.BoxGeometry(1 * scale, 1 * scale, 1 * scale);
const material = new THREE.MeshStandardMaterial({
});

function createCube(): MapAnchor<THREE.Object3D> {
    const cube = new THREE.Object3D();

    const mesh = new THREE.Mesh(geometry, material);
    mesh.renderOrder = Number.MAX_SAFE_INTEGER;
    cube.add(mesh);
    return cube;
}

const geoPosition = mapView.getGeoCoordinatesAt(49.4431, 1.0993);
geoPosition.altitude = 50;

const cube = createCube();
cube.anchor = geoPosition;
mapView.mapAnchors.add(cube);

// make sure the map is rendered
mapView.update();

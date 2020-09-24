import { StyleSet, FeatureCollection } from "@here/harp-datasource-protocol";
import { GeoJsonDataSource } from "@here/harp-geojson-datasource/lib/GeoJsonDataSource";

import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader.js";
import { MapAnchor, RenderEvent, MapViewEventNames  } from "@here/harp-mapview";
import THREE = require("three");
/*
 * Copyright (C) 2017-2020 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */

import { GeoCoordinates } from "@here/harp-geoutils";
import { GeoJsonDataProvider } from "@here/harp-vectortile-datasource/lib/GeoJsonDataProvider";
import { View } from "./View";
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

// center the camera to New York
mapView.lookAt(new GeoCoordinates(49.4431, 1.0993), 150, 40, 0);
function getStyleSet(): StyleSet {
    return [
        {
            when: "$geometryType == 'polygon'",
            technique: "fill",
            renderOrder: 10000,
            attr: {
                color: "#7cf",
                transparent: true,
                opacity: 0.8,
                lineWidth: 1,
                lineColor: "#003344"
            }
        },
        {
            when: "$geometryType == 'polygon'",
            technique: "solid-line",
            renderOrder: 10001,
            attr: {
                color: "#8df",
                metricUnit: "Pixel",
                lineWidth: 5
            }
        },
        {
            when: "$geometryType == 'point'",
            technique: "circles",
            renderOrder: 10002,
            attr: {
                size: 10,
                color: "#5ad"
            }
        },
        {
            when: "$geometryType == 'line'",
            technique: "solid-line",
            renderOrder: 10000,
            attr: {
                color: "#8df",
                metricUnit: "Pixel",
                lineWidth: 5
            }
        }
    ];
};
const timestamps = [
    { timestamps: "2020-09-20T00:00:00Z" },
    { timestamps: "2020-09-20T00:00:05Z" },
    { timestamps: "2020-09-20T00:00:10Z" },
    { timestamps: "2020-09-20T00:00:15Z" },
    { timestamps: "2020-09-20T00:00:20Z" },
    { timestamps: "2020-09-20T00:00:25Z" },
    { timestamps: "2020-09-20T00:00:30Z" },
    { timestamps: "2020-09-20T00:00:35Z" },
    { timestamps: "2020-09-20T00:00:40Z" },
    { timestamps: "2020-09-20T00:00:45Z" },
    { timestamps: "2020-09-20T00:00:50Z" },
    { timestamps: "2020-09-20T00:00:55Z" },
    { timestamps: "2020-09-20T00:01:00Z" },
    { timestamps: "2020-09-20T00:01:05Z" },
    { timestamps: "2020-09-20T00:01:10Z" },
    { timestamps: "2020-09-20T00:01:15Z" },
    { timestamps: "2020-09-20T00:01:20Z" },
    { timestamps: "2020-09-20T00:01:25Z" },
    { timestamps: "2020-09-20T00:01:30Z" },
    { timestamps: "2020-09-20T00:01:35Z" },
    { timestamps: "2020-09-20T00:01:40Z" },
    { timestamps: "2020-09-20T00:01:45Z" },
    { timestamps: "2020-09-20T00:01:50Z" },
    { timestamps: "2020-09-20T00:01:55Z" },
    { timestamps: "2020-09-20T00:02:00Z" },
    { timestamps: "2020-09-20T00:02:05Z" },
    { timestamps: "2020-09-20T00:02:10Z" },
    { timestamps: "2020-09-20T00:02:15Z" },
    { timestamps: "2020-09-20T00:02:20Z" },
    { timestamps: "2020-09-20T00:02:25Z" },
    { timestamps: "2020-09-20T00:02:30Z" },
    { timestamps: "2020-09-20T00:02:35Z" },
    { timestamps: "2020-09-20T00:02:40Z" },
    { timestamps: "2020-09-20T00:02:45Z" },
    { timestamps: "2020-09-20T00:02:50Z" },
    { timestamps: "2020-09-20T00:02:55Z" },
];

const coordinates =  [
    [
        -22.8515625,
        34.59704151614417
    ],
    [
        -21.4453125,
        27.68352808378776
    ],
    [
        -23.90625,
        20.632784250388028
    ],
    [
        -26.71875,
        10.487811882056695
    ],
    [
        -24.609375,
        5.266007882805498
    ],
    [
        -23.203125,
        0
    ],
    [
        -19.6875,
        -4.915832801313164
    ],
    [
        -20.390625,
        -15.28418511407642
    ],
    [
        -23.90625,
        -21.289374355860424
    ],
    [
        -28.125,
        -32.249974455863295
    ],
    [
        -28.125,
        -37.99616267972812
    ],
    [
        -27.421875,
        -44.840290651397986
    ],
    [
        -23.5546875,
        -48.92249926375823
    ],
    [
        -18.984375,
        -50.51342652633955
    ],
    [
        -9.4921875,
        -51.17934297928927
    ],
    [
        -5.9765625,
        -50.28933925329178
    ],
    [
        1.7578125,
        -45.33670190996811
    ],
    [
        2.8125,
        -41.244772343082076
    ],
    [
        0.3515625,
        -37.43997405227057
    ],
    [
        -5.2734375,
        -33.7243396617476
    ],
    [
        -10.8984375,
        -30.44867367928756
    ],
    [
        -11.953125,
        -27.059125784374054
    ],
    [
        -11.6015625,
        -20.96143961409684
    ],
    [
        -9.84375,
        -16.97274101999901
    ],
    [
        -7.3828125,
        -12.211180191503997
    ],
    [
        -7.3828125,
        -3.162455530237848
    ],
    [
        -14.0625,
        4.214943141390651
    ],
    [
        -20.0390625,
        8.407168163601076
    ],
    [
        -20.7421875,
        12.554563528593656
    ],
    [
        -18.6328125,
        18.312810846425442
    ],
    [
        -15.8203125,
        23.885837699862005
    ],
    [
        -11.25,
        34.016241889667015
    ],
    [
        -13.7109375,
        38.272688535980976
    ],
    [
        -20.390625,
        39.36827914916014
    ],
    [
        -26.3671875,
        38.54816542304656
    ],
    [
        -32.34375,
        34.016241889667015
    ]
];


const geojson : FeatureCollection = {
    type: "FeatureCollection",
    features: [
        {
            type: "Feature" ,
            properties: {},
            geometry: {
                type: "LineString",
                coordinates: [
                    [
                        -22.8515625,
                        34.59704151614417
                    ],
                ]
            }
        }
    ]
};


const geoJsonDataProvider = new GeoJsonDataProvider("test", geojson);

const geoJsonDataSource = new GeoJsonDataSource({
    dataProvider: geoJsonDataProvider,
    styleSetName: "geojson"
});

mapView.addDataSource(geoJsonDataSource).then(() => {
    geoJsonDataSource.setStyleSet(getStyleSet());
    mapView.update();
});

const clock = new THREE.Clock();

let figure: MapAnchor<THREE.Group> | undefined;
let mixer: THREE.AnimationMixer | undefined;
const onLoad = (object: any) => {
    mixer = new THREE.AnimationMixer(object);
    console.log(object);

    figure = object as THREE.Group;
    figure.traverse((child: THREE.Object3D) => {
        child.renderOrder = 10000;
    });
    figure.renderOrder = 10000;
    figure.rotateX(Math.PI / 3);
    const scale = 0.1;
    figure.scale.set(1 * scale, 1 * scale, 1 * scale);
    figure.name = "guy";

    // snippet:harp_gl_threejs_add_animated-object_add_to_scene.ts
    figure.anchor = new GeoCoordinates(49.4431, 1.0993);
    // Make sure the object is rendered on top of labels
    figure.overlay = true;
    mapView.mapAnchors.add(figure);
    // end:harp_gl_threejs_add_animated-object_add_to_scene.ts
};

const loader = new FBXLoader();
loader.load("jet.fbx", onLoad);

const onRender = (event: RenderEvent) => {
    if (mixer) {
        // snippet:harp_gl_threejs_add_animated-object_update_animation.ts
        const delta = clock.getDelta();
        mixer.update(delta);
        // end:harp_gl_threejs_add_animated-object_update_animation.ts
    }
};

mapView.addEventListener(MapViewEventNames.Render, onRender);
// end:harp_gl_threejs_add_animated-object_add_listener.ts

// snippet:harp_gl_threejs_add_animated-object_begin_animation.ts
mapView.beginAnimation();
mapView.update();



// const marker = cube.randomCubePosition(mapView);
// mapView.mapAnchors.add(marker);

// let count = 0;
// function markerMove() {
//     if ((count < coordinates.length) && (geojson.features[0].geometry.type == "LineString")) {
//         geoJsonDataProvider.updateInput(updateTrack(geojson));
//         marker.anchor = updateMarkerPosition(count, coordinates);
//         count++;
//         mapView.update();
//     }
// }

// function updateTrack(geojson) {
//     geojson.features[0].geometry.coordinates.push(coordinates[count]);
//     return geojson;
// }

// function updateMarkerPosition(count, coordinates) {
//     return new GeoCoordinates(coordinates[count][1], coordinates[count][0]);
// }

// mapView.update();
// setInterval(markerMove, 5000);
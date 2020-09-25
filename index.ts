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
mapView.lookAt(new GeoCoordinates(46.144674392344434, -1.1624586582183838), 150, 40, 0);
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

const coordinates = [
    [
        -1.1624586582183838,
        46.144674392344434
    ],
    [
        -1.1631774902343748,
        46.14476359264681
    ],
    [
        -1.1637783050537107,
        46.14487509282153
    ],
    [
        -1.1642181873321533,
        46.145001459413194
    ],
    [
        -1.164851188659668,
        46.145217025282456
    ],
    [
        -1.165452003479004,
        46.14525419172632
    ],
    [
        -1.1665141582489014,
        46.14546975660592
    ],
    [
        -1.1671149730682373,
        46.14549948962654
    ],
    [
        -1.1676299571990967,
        46.14570762032106
    ],
    [
        -1.1680591106414795,
        46.14593061662054
    ],
    [
        -1.1683380603790283,
        46.14631714139977
    ],
    [
        -1.1685740947723389,
        46.146711096555
    ],
    [
        -1.1685740947723389,
        46.147075316737464
    ],
    [
        -1.1686062812805176,
        46.14761049304159
    ],
    [
        -1.1687135696411133,
        46.14795240851187
    ],
    [
        -1.1690139770507812,
        46.14819026149943
    ],
    [
        -1.1694753170013428,
        46.14836865056563
    ],
    [
        -1.169818639755249,
        46.14841324774184
    ],
    [
        -1.1706125736236572,
        46.148383516295034
    ],
    [
        -1.1719107627868652,
        46.14809363384719
    ],
    [
        -1.1727476119995117,
        46.1478186157547
    ],
    [
        -1.1731553077697754,
        46.14764022490594
    ],
    [
        -1.1736810207366943,
        46.147313173515
    ],
    [
        -1.1739277839660645,
        46.14715708012068
    ],
    [
        -1.174163818359375,
        46.14689692347982
    ],
    [
        -1.1743783950805662,
        46.146547568342264
    ],
    [
        -1.1745929718017578,
        46.146205644145844
    ],
    [
        -1.1747002601623535,
        46.145938049814966
    ],
    [
        -1.1748826503753662,
        46.14557382210777
    ],
    [
        -1.175140142440796,
        46.14512782571479
    ],
    [
        -1.175462007522583,
        46.14476359264681
    ],
    [
        -1.1757087707519531,
        46.144369623554134
    ],
    [
        -1.176363229751587,
        46.14368574598159
    ],
    [
        -1.1768460273742676,
        46.14347760764285
    ],
    [
        -1.1772429943084717,
        46.14326946851718
    ],
    [
        -1.17753267288208,
        46.14296469194918
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
                        -1.1624586582183838,
                        46.144674392344434
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
const onLoad = (object: any) => {
    figure = object as THREE.Group;
    figure.traverse((child: THREE.Object3D) => {
        child.renderOrder = 10000;
    });
    figure.renderOrder = 10000;
    figure.rotateX(179.5);
    figure.rotateY(180)
    figure.rotateZ(90);
    const scale = 0.1;
    figure.scale.set(1 * scale, 1 * scale, 1 * scale);
    figure.name = "guy";

    figure.anchor = new GeoCoordinates(46.144674392344434, -1.1624586582183838);

    figure.overlay = true;
    mapView.mapAnchors.add(figure);
};

const loader = new FBXLoader();
loader.load("./3Dmarker/bote.fbx", onLoad);

//mapView.update();



// const marker = cube.randomCubePosition(mapView);
// mapView.mapAnchors.add(marker);

let count = 0;
function markerMove() {
    if ((count < coordinates.length) && (geojson.features[0].geometry.type == "LineString")) {
        geoJsonDataProvider.updateInput(updateTrack(geojson));
        figure.anchor = updateMarkerPosition(count, coordinates);
        count++;
        mapView.update();
    }
}

function updateTrack(geojson) {
    geojson.features[0].geometry.coordinates.push(coordinates[count]);
    return geojson;
}

function updateMarkerPosition(count, coordinates) {
    return new GeoCoordinates(coordinates[count][1], coordinates[count][0]);
}

mapView.update();
setInterval(markerMove, 5000);
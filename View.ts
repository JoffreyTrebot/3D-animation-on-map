/*
 * Copyright (C) 2017-2020 HERE Europe B.V.
 * Licensed under Apache 2.0, see full license in LICENSE
 * SPDX-License-Identifier: Apache-2.0
 */

import { Theme } from "@here/harp-datasource-protocol";
import { sphereProjection } from "@here/harp-geoutils";
import { MapControls } from "@here/harp-map-controls";
import { MapView } from "@here/harp-mapview";
import { VectorTileDataSource } from "@here/harp-vectortile-datasource";

const defaultTheme = "resources/berlin_tilezen_base.json";

export interface ViewParameters {
    theme?: string | Theme;
    canvas: HTMLCanvasElement;
}

export class View {
    readonly canvas: HTMLCanvasElement;
    readonly theme: string | Theme;

    readonly mapView: MapView;

    constructor(args: ViewParameters) {
        this.canvas = args.canvas;
        this.theme = args.theme === undefined ? defaultTheme : args.theme;
        this.mapView = this.initialize();
    }

    protected initialize(): MapView {
        const mapView = new MapView({
            canvas: this.canvas,
            projection: sphereProjection,
            theme: "resources/berlin_tilezen_base_globe.json",
            decoderUrl: "decoder.bundle.js"
        });

        const dataSource = new VectorTileDataSource({
            authenticationCode: "MDLDI0sEcPT8fIyH49IICWUmk_8mH-VBP5qnLmlMpH8",
            baseUrl: "https://vector.hereapi.com/v2/vectortiles/base/mc",
        });

        mapView.addDataSource(dataSource);

        const a = MapControls.create(mapView);
        a.maxTiltAngle = 90;

        return mapView;
    }
}

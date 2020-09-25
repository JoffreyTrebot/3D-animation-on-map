import { GeoCoordinates } from '@here/harp-geoutils';
import { MapAnchor } from "@here/harp-mapview";
import THREE = require("three");

export function createCube(): MapAnchor<THREE.Object3D> {
    const scale = 100000;
    const geometry = new THREE.BoxGeometry(1 * scale, 1 * scale, 1 * scale);
    const material = new THREE.MeshStandardMaterial({});

    const cube = new THREE.Object3D();

    const mesh = new THREE.Mesh(geometry, material);
    mesh.renderOrder = Number.MAX_SAFE_INTEGER;
    cube.add(mesh);
    return cube;
}


export function randomCubePosition(mapView) {
    const geoPosition = new GeoCoordinates(46.144674392344434, -1.1624586582183838);
    geoPosition.altitude = 50;

    const cube = createCube();
    cube.anchor = geoPosition;
    return cube;
}
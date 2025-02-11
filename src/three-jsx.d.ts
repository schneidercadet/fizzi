import * as THREE from 'three';
import { Object3DNode, ThreeElements } from '@react-three/fiber';

declare module 'react' {
  interface HTMLAttributes<T> extends DOMAttributes<T> {
    rotation?: THREE.Vector3;
    position?: THREE.Vector3;
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements extends ThreeElements {
      mesh: Object3DNode<THREE.Mesh, typeof THREE.Mesh>;
      boxGeometry: Object3DNode<THREE.BoxGeometry, typeof THREE.BoxGeometry>;
      ambientLight: Object3DNode<THREE.AmbientLight, typeof THREE.AmbientLight>;
      spotLight: Object3DNode<THREE.SpotLight, typeof THREE.SpotLight>;
    }
  }

  namespace React {
    namespace JSX {
      interface IntrinsicElements extends ThreeElements {
      }
    }
  }
}

export {};

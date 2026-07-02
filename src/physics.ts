import { createBox3D, BodyType, TRANSFORM_STRIDE, type PhysicsWorld } from 'box3d-wasm';

export { BodyType, TRANSFORM_STRIDE };
export type { PhysicsWorld };

export const GRAVITY_Y = -11;

// Fixed-step config shared by main loop and anything predicting physics.
export const FIXED_STEP = 1 / 60;
export const SUBSTEPS = 4;

export async function initPhysics() {
  const b3 = await createBox3D();
  const world = b3.createWorld([0, GRAVITY_Y, 0]);
  // High-speed collisions above this closing speed produce hit events (impact SFX).
  world.setHitEventThreshold(2.5);
  return { b3, world };
}

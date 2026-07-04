use common::{Rng, Vec2};
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub struct World {
    width: f32,
    height: f32,
    pos: Vec<Vec2>,
    vel: Vec<Vec2>,
    coords: Vec<f32>,
}

#[wasm_bindgen]
impl World {
    #[wasm_bindgen(constructor)]
    pub fn new(count: usize, width: f32, height: f32) -> World {
        let mut rng = Rng::new(0x1234_5678);
        let mut pos = Vec::with_capacity(count);
        let mut vel = Vec::with_capacity(count);
        for _ in 0..count {
            pos.push(Vec2::new(rng.range(0.0, width), rng.range(0.0, height)));
            vel.push(Vec2::new(rng.range(-60.0, 60.0), rng.range(-60.0, 60.0)));
        }
        World {
            width,
            height,
            pos,
            vel,
            coords: vec![0.0; count * 2],
        }
    }

    pub fn count(&self) -> usize {
        self.pos.len()
    }

    pub fn tick(&mut self, dt: f32) {
        for i in 0..self.pos.len() {
            let mut p = self.pos[i] + self.vel[i] * dt;
            if p.x < 0.0 || p.x > self.width {
                self.vel[i].x = -self.vel[i].x;
                p.x = p.x.clamp(0.0, self.width);
            }
            if p.y < 0.0 || p.y > self.height {
                self.vel[i].y = -self.vel[i].y;
                p.y = p.y.clamp(0.0, self.height);
            }
            self.pos[i] = p;
        }
    }

    /// Pointer to interleaved [x,y,...] coords; JS reads `2 * count()` f32s.
    pub fn positions(&mut self) -> *const f32 {
        for (i, p) in self.pos.iter().enumerate() {
            self.coords[2 * i] = p.x;
            self.coords[2 * i + 1] = p.y;
        }
        self.coords.as_ptr()
    }
}

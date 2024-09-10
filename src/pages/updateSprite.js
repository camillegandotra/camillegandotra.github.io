const updateSpriteWGSL = `
    struct Particle {
        pos : vec2<f32>
    };

    struct Particles {
        particles : array<Particle>
    };

    @binding(0) @group(0) var<storage, read_write> particlesA : Particles;
    @binding(1) @group(0) var<storage, read_write> particlesB : Particles;

    @compute @workgroup_size(64)
    fn main(@builtin(global_invocation_id) GlobalInvocationID : vec3<u32>) {
        var index : u32 = GlobalInvocationID.x;

        // Get position of current particle
        var vPos = particlesA.particles[index].pos;

        // ADD YOUR COMPUTATION HERE
        // --------------------------------
        var nearestC : i32 = -1;
        for (var j: u32 = 0; j < index; j += 1u) {
            let jPos = particlesA.particles[j].pos;
            let dx = jPos.x - vPos.x;
            let dy = jPos.y - vPos.y;
            let distance = sqrt((dx * dx) + (dy * dy));
            if (distance < .003) {
                nearestC = i32(j);
               break;
            }
        }
   
        if (nearestC == -1) {
            // we want to find the nearest neighbor that isn't apart of a potential cluster
            var nearestND : f32 = 999999.0;
            var nearestN  : i32 = -1;
            for (var j: u32 = 0; j < arrayLength(&particlesA.particles); j += 1u) {
                let jPos = particlesA.particles[j].pos;
                let dx = jPos.x - vPos.x;
                let dy = jPos.y - vPos.y;
                let distance = sqrt((dx * dx) + (dy * dy));
                if (.003 <= distance && distance < nearestND) {
                    nearestN  = i32(j);
                    nearestND = distance;
                }
            }
            if (nearestN != -1) {
                let nPos = particlesA.particles[nearestN].pos;
                let dx = nPos.x - vPos.x;
                let dy = nPos.y - vPos.y;
                var x: f32 = 0.0;
                if (dx > 0.0) {
                    x = 0.001;
                }
                else {
                    x = -0.001;
                }
                var y: f32 = 0.0;
                if (dy > 0.0) {
                    y = 0.001;
                }
                else {
                    y = -0.001;
                }
                vPos.x += x;
                vPos.y += y;
            }
            else {
                vPos.x += 0.0;
                vPos.y += 0.0;
            }
        }
        else {
            let cPos = particlesA.particles[nearestC].pos;
            let dx = cPos.x - vPos.x;
            let dy = cPos.y - vPos.y;
            var x: f32 = 0.0;
            if (dx > 0.0) {
                x = 0.001;
            }
            else {
                x = -0.001;
            }
            var y: f32 = 0.0;
            if (dy > 0.0) {
                y = 0.001;
            }
            else {
                y = -0.001;
            }
            vPos.x += x;
            vPos.y += y;
        }
        
        // --------------------------------

        // Write new particle data
        particlesB.particles[index].pos = vPos;
    }
`;

export default updateSpriteWGSL;


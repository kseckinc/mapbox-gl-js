// @flow

import {Uniform1f, Uniform2f, Uniform3f} from './uniform_binding.js';

export type FogUniformsType = {|
    'u_fog_range': Uniform2f,
    'u_fog_color': Uniform3f,
    'u_fog_opacity': Uniform1f,
    'u_fog_sky_blend': Uniform1f
|};

export const fogUniforms = (context: Context, locations: UniformLocations): FogUniformsType => ({
    'u_fog_range': new Uniform2f(context, locations.u_fog_range),
    'u_fog_color': new Uniform3f(context, locations.u_fog_color),
    'u_fog_opacity': new Uniform1f(context, locations.u_fog_opacity),
    'u_fog_sky_blend': new Uniform1f(context, locations.u_fog_sky_blend)
});
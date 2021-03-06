#version 130
uniform sampler2D diffuse;
uniform sampler2D specular;
uniform sampler2D ambient_occlusion;
uniform sampler2D specular_map;
uniform vec3 ambient;
<<<<<<< HEAD
uniform sampler2D spectex;

void main()
{
	vec2 texc = gl_TexCoord[0].xy;

	vec4 col = texture2D(tex, texc);
	vec4 specular = texture2D(spectex, texc);

	col.xyz += ambient;
	float spec = col.a - 0.05;
	spec *= specular.a;
	col.xyz += spec;
	col.a = 1.0;
=======

in vec2 uv;
out vec4 FragColor;

void main()
{
	vec2 texc = uv;

	vec3 diffuse = texture(diffuse, texc).xyz;
	vec3 spec = texture(specular, texc).xyz;
	float specmap = texture(specular_map, texc).x;
	float ao = texture(ambient_occlusion, texc).x;
>>>>>>> master

	FragColor = vec4(diffuse + spec * specmap + ao * ambient, 1.0);
}

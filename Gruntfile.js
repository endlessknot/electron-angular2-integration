"use strict";
module.exports = function (grunt)
{

	// Project configuration.
	grunt.initConfig(
	{
		pkg: grunt.file.readJSON('package.json'),

		clean:
		{
			options:
			{
				// this allows grunt to delete files outside the Gruntfile directory.
				// required to clean the ../public directory.
				force: true
			},
			dist:
			{
				src: ['dist/**/*', '!dist/.gitignore']
			}
		},

		copy:
		{
			dist:
			{
				files: [
					//Copy base files
					{
						expand: true,
						cwd: 'src/base/',
						src: ['**/*'],
						dest: ''
					},
					//Copy css files
					{
						expand: true,
						cwd: 'src/css/',
						src: ['**/*'],
						dest: 'dist/css/'
					},
					//Copy templates
					{
						expand: true,
						cwd: 'src/templates/',
						src: ['**/*'],
						dest: 'dist/templates/'
					},
				]
			}
		},
		// use this to compile typescript - it uses the version of typescript compiler defined within this project, rather than any global typescript compiler
		ts:
		{
			default:
			{
				tsconfig: './tsconfig.json',
				src: ["src/**/*.ts",
					"!node_modules/**",
					"!typings/main/**",
					"!typings/main.d.ts"
				],
				dest: ['dist']
			}
		},
	});

	// Load the plugin that provides the "clean" task.
	grunt.loadNpmTasks('grunt-contrib-clean');
	// Load the plugin that provides the "copy" task.
	grunt.loadNpmTasks('grunt-contrib-copy');
	// Load the plugin that provides typescript compilation
	grunt.loadNpmTasks('grunt-ts');

	// Default task(s).
	grunt.registerTask('default', ['build']);
	grunt.registerTask('build', ['clean:dist', 'copy:dist', 'ts']);
};

/*
 After you have changed the settings at "Your code goes here",
 run this with one of these options:
  "grunt" alone creates a new, completed images directory
  "grunt clean" removes the images directory
  "grunt responsive_images" re-processes images without removing the old ones
*/

module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      large: {
        options: {
          engine: 'im',
          sizes: [{
            width:'1600',
            quality:'70',
            name:'1200'
          }]
        },
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'images_src/',
          dest: 'img/'
        }]
      },
      medium: {
        options: {
          engine: 'im',
          sizes: [{
            width:'800',
            quality:'70',
            name:'800'
          }]
        },
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'images_src/',
          dest: 'img/'
        }]
      },
      small: {
        options: {
          engine: 'im',
          sizes: [{
            width:'500',
            quality:'70',
            name:'500'
          }]
        },
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'images_src/',
          dest: 'img/'
        }]
      },
      tiny: {
        options: {
          engine: 'im',
          sizes: [{
            width:'300',
            quality:'70',
            name:'300'
          }]
        },
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'images_src/',
          dest: 'img/'
        }]
      },
      micro: {
        options: {
          engine: 'im',
          sizes: [{
            width:'150',
            quality:'70',
            name:'150'
          }]
        },
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'images_src/',
          dest: 'img/'
        }]
      }

    },

    /* Clear out the images directory if it exists */
    clean: {
      dev: {
        src: ['img'],
      },
    },

    /* Generate the images directory if it is missing */
    mkdir: {
      dev: {
        options: {
          create: ['img/'],
        },
      },
    },

    copy: {
      dev: {
        files: [{
          expand: true,
          flatten: true,
          src: ['images_src/fixed/*'],
          dest: 'img/'
        }]
      },
    },
  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.registerTask('default', ['clean', 'mkdir', 'responsive_images','copy']);

};

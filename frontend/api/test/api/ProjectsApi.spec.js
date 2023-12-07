/**
 * backend
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Backend);
  }
}(this, function(expect, Backend) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Backend.ProjectsApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('ProjectsApi', function() {
    describe('projectProjectIdDelete', function() {
      it('should call projectProjectIdDelete successfully', function(done) {
        //uncomment below and update the code to test projectProjectIdDelete
        //instance.projectProjectIdDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('projectProjectIdPost', function() {
      it('should call projectProjectIdPost successfully', function(done) {
        //uncomment below and update the code to test projectProjectIdPost
        //instance.projectProjectIdPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('projectProjectIdTaskIdDelete', function() {
      it('should call projectProjectIdTaskIdDelete successfully', function(done) {
        //uncomment below and update the code to test projectProjectIdTaskIdDelete
        //instance.projectProjectIdTaskIdDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('projectsGet', function() {
      it('should call projectsGet successfully', function(done) {
        //uncomment below and update the code to test projectsGet
        //instance.projectsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('projectsPost', function() {
      it('should call projectsPost successfully', function(done) {
        //uncomment below and update the code to test projectsPost
        //instance.projectsPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));

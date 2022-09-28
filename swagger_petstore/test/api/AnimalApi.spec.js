/*
 * Swagger Petstore
 * This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\
 *
 * OpenAPI spec version: 1.0.0
 * Contact: apiteam@swagger.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.35
 *
 * Do not edit the class manually.
 *
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SwaggerPetstore);
  }
}(this, function(expect, SwaggerPetstore) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SwaggerPetstore.AnimalApi();
  });

  describe('(package)', function() {
    describe('AnimalApi', function() {
      describe('addAnimal', function() {
        it('should call addAnimal successfully', function(done) {
          // TODO: uncomment, update parameter values for addAnimal call
          /*

          instance.addAnimal(body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('deleteAnimal', function() {
        it('should call deleteAnimal successfully', function(done) {
          // TODO: uncomment, update parameter values for deleteAnimal call
          /*
          var opts = {};

          instance.deleteAnimal(animalId, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getAnimalById', function() {
        it('should call getAnimalById successfully', function(done) {
          // TODO: uncomment, update parameter values for getAnimalById call and complete the assertions
          /*

          instance.getAnimalById(animalId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SwaggerPetstore.Animal);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('updateAnimal', function() {
        it('should call updateAnimal successfully', function(done) {
          // TODO: uncomment, update parameter values for updateAnimal call
          /*

          instance.updateAnimal(body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('updateAnimalWithForm', function() {
        it('should call updateAnimalWithForm successfully', function(done) {
          // TODO: uncomment, update parameter values for updateAnimalWithForm call
          /*
          var opts = {};

          instance.updateAnimalWithForm(animalId, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));

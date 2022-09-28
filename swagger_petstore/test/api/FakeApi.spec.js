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
    instance = new SwaggerPetstore.FakeApi();
  });

  describe('(package)', function() {
    describe('FakeApi', function() {
      describe('fakeOuterBooleanSerialize', function() {
        it('should call fakeOuterBooleanSerialize successfully', function(done) {
          // TODO: uncomment, update parameter values for fakeOuterBooleanSerialize call and complete the assertions
          /*
          var opts = {};

          instance.fakeOuterBooleanSerialize(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SwaggerPetstore.OuterBoolean);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('fakeOuterCompositeSerialize', function() {
        it('should call fakeOuterCompositeSerialize successfully', function(done) {
          // TODO: uncomment, update parameter values for fakeOuterCompositeSerialize call and complete the assertions
          /*
          var opts = {};

          instance.fakeOuterCompositeSerialize(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SwaggerPetstore.OuterComposite);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('fakeOuterNumberSerialize', function() {
        it('should call fakeOuterNumberSerialize successfully', function(done) {
          // TODO: uncomment, update parameter values for fakeOuterNumberSerialize call and complete the assertions
          /*
          var opts = {};

          instance.fakeOuterNumberSerialize(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SwaggerPetstore.OuterNumber);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('fakeOuterStringSerialize', function() {
        it('should call fakeOuterStringSerialize successfully', function(done) {
          // TODO: uncomment, update parameter values for fakeOuterStringSerialize call and complete the assertions
          /*
          var opts = {};

          instance.fakeOuterStringSerialize(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SwaggerPetstore.OuterString);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('testClientModel', function() {
        it('should call testClientModel successfully', function(done) {
          // TODO: uncomment, update parameter values for testClientModel call and complete the assertions
          /*

          instance.testClientModel(body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SwaggerPetstore.Client);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('testEndpointParameters', function() {
        it('should call testEndpointParameters successfully', function(done) {
          // TODO: uncomment, update parameter values for testEndpointParameters call
          /*

          instance.testEndpointParameters(body, function(error, data, response) {
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
      describe('testEnumParameters', function() {
        it('should call testEnumParameters successfully', function(done) {
          // TODO: uncomment, update parameter values for testEnumParameters call
          /*
          var opts = {};

          instance.testEnumParameters(opts, function(error, data, response) {
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
      describe('testEnumRequestBody', function() {
        it('should call testEnumRequestBody successfully', function(done) {
          // TODO: uncomment, update parameter values for testEnumRequestBody call
          /*
          var opts = {};

          instance.testEnumRequestBody(opts, function(error, data, response) {
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
      describe('testInlineAdditionalProperties', function() {
        it('should call testInlineAdditionalProperties successfully', function(done) {
          // TODO: uncomment, update parameter values for testInlineAdditionalProperties call
          /*

          instance.testInlineAdditionalProperties(body, function(error, data, response) {
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
      describe('testJsonFormData', function() {
        it('should call testJsonFormData successfully', function(done) {
          // TODO: uncomment, update parameter values for testJsonFormData call
          /*

          instance.testJsonFormData(body, function(error, data, response) {
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
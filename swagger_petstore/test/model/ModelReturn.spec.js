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

  describe('(package)', function() {
    describe('ModelReturn', function() {
      beforeEach(function() {
        instance = new SwaggerPetstore.ModelReturn();
      });

      it('should create an instance of ModelReturn', function() {
        // TODO: update the code to test ModelReturn
        expect(instance).to.be.a(SwaggerPetstore.ModelReturn);
      });

      it('should have the property _return (base name: "return")', function() {
        // TODO: update the code to test the property _return
        expect(instance).to.have.property('_return');
        // expect(instance._return).to.be(expectedValueLiteral);
      });

    });
  });

}));

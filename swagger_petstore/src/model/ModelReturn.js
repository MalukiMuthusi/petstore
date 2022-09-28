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
import {ApiClient} from '../ApiClient';

/**
 * The ModelReturn model module.
 * @module model/ModelReturn
 * @version 1.0.0
 */
export class ModelReturn {
  /**
   * Constructs a new <code>ModelReturn</code>.
   * Model for testing reserved words
   * @alias module:model/ModelReturn
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ModelReturn</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelReturn} obj Optional instance to populate.
   * @return {module:model/ModelReturn} The populated <code>ModelReturn</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ModelReturn();
      if (data.hasOwnProperty('return'))
        obj._return = ApiClient.convertToType(data['return'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {Number} _return
 */
ModelReturn.prototype._return = undefined;


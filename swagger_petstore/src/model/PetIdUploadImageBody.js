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
 * The PetIdUploadImageBody model module.
 * @module model/PetIdUploadImageBody
 * @version 1.0.0
 */
export class PetIdUploadImageBody {
  /**
   * Constructs a new <code>PetIdUploadImageBody</code>.
   * @alias module:model/PetIdUploadImageBody
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>PetIdUploadImageBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PetIdUploadImageBody} obj Optional instance to populate.
   * @return {module:model/PetIdUploadImageBody} The populated <code>PetIdUploadImageBody</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PetIdUploadImageBody();
      if (data.hasOwnProperty('additionalMetadata'))
        obj.additionalMetadata = ApiClient.convertToType(data['additionalMetadata'], 'String');
      if (data.hasOwnProperty('file'))
        obj.file = ApiClient.convertToType(data['file'], 'Blob');
    }
    return obj;
  }
}

/**
 * Additional data to pass to server
 * @member {String} additionalMetadata
 */
PetIdUploadImageBody.prototype.additionalMetadata = undefined;

/**
 * file to upload
 * @member {Blob} file
 */
PetIdUploadImageBody.prototype.file = undefined;

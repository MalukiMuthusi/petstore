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
 * The EnumFormBody model module.
 * @module model/EnumFormBody
 * @version 1.0.0
 */
export class EnumFormBody {
  /**
   * Constructs a new <code>EnumFormBody</code>.
   * @alias module:model/EnumFormBody
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>EnumFormBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EnumFormBody} obj Optional instance to populate.
   * @return {module:model/EnumFormBody} The populated <code>EnumFormBody</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new EnumFormBody();
      if (data.hasOwnProperty('enum_form_string_array'))
        obj.enumFormStringArray = ApiClient.convertToType(data['enum_form_string_array'], ['String']);
      if (data.hasOwnProperty('enum_form_string'))
        obj.enumFormString = ApiClient.convertToType(data['enum_form_string'], 'String');
      if (data.hasOwnProperty('enum_query_double'))
        obj.enumQueryDouble = ApiClient.convertToType(data['enum_query_double'], 'Number');
    }
    return obj;
  }
}

/**
 * Allowed values for the <code>enumFormStringArray</code> property.
 * @enum {String}
 * @readonly
 */
EnumFormBody.EnumFormStringArrayEnum = {
  /**
   * value: ">"
   * @const
   */
  GREATER_THAN: ">",

  /**
   * value: "$"
   * @const
   */
  DOLLAR: "$"
};
/**
 * Form parameter enum test (string array)
 * @member {Array.<module:model/EnumFormBody.EnumFormStringArrayEnum>} enumFormStringArray
 */
EnumFormBody.prototype.enumFormStringArray = undefined;

/**
 * Allowed values for the <code>enumFormString</code> property.
 * @enum {String}
 * @readonly
 */
EnumFormBody.EnumFormStringEnum = {
  /**
   * value: "_abc"
   * @const
   */
  abc: "_abc",

  /**
   * value: "-efg"
   * @const
   */
  efg: "-efg",

  /**
   * value: "(xyz)"
   * @const
   */
  xyz: "(xyz)"
};
/**
 * Form parameter enum test (string)
 * @member {module:model/EnumFormBody.EnumFormStringEnum} enumFormString
 * @default '-efg'
 */
EnumFormBody.prototype.enumFormString = '-efg';

/**
 * Allowed values for the <code>enumQueryDouble</code> property.
 * @enum {Number}
 * @readonly
 */
EnumFormBody.EnumQueryDoubleEnum = {
  /**
   * value: 1.1
   * @const
   */
  _11: 1.1,

  /**
   * value: -1.2
   * @const
   */
  _12: -1.2
};
/**
 * Query parameter enum test (double)
 * @member {module:model/EnumFormBody.EnumQueryDoubleEnum} enumQueryDouble
 */
EnumFormBody.prototype.enumQueryDouble = undefined;

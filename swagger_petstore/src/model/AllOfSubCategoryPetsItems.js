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
import {Category} from './Category';
import {Pet} from './Pet';
import {Tag} from './Tag';

/**
 * The AllOfSubCategoryPetsItems model module.
 * @module model/AllOfSubCategoryPetsItems
 * @version 1.0.0
 */
export class AllOfSubCategoryPetsItems extends Pet {
  /**
   * Constructs a new <code>AllOfSubCategoryPetsItems</code>.
   * @alias module:model/AllOfSubCategoryPetsItems
   * @class
   * @extends module:model/Pet
   * @param name {} 
   * @param photoUrls {} 
   */
  constructor(name, photoUrls) {
    super(name, photoUrls);
  }

  /**
   * Constructs a <code>AllOfSubCategoryPetsItems</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AllOfSubCategoryPetsItems} obj Optional instance to populate.
   * @return {module:model/AllOfSubCategoryPetsItems} The populated <code>AllOfSubCategoryPetsItems</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AllOfSubCategoryPetsItems();
      Pet.constructFromObject(data, obj);
    }
    return obj;
  }
}
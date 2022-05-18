/* tslint:disable */
/* eslint-disable */
/**
 * esa API v1
 * チームのナレッジ共有サービス[esa.io](https://esa.io/)のAPI v1の仕様書
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Invitation } from './invitation';

/**
 * Emailによる招待のリストを表します
 * @export
 * @interface InvitationList
 */
export interface InvitationList {
    /**
     * 
     * @type {Array<Invitation>}
     * @memberof InvitationList
     */
    'invitations': Array<Invitation>;
}


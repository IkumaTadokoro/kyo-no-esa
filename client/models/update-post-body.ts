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


import { EditPost } from './edit-post';

/**
 * 記事の更新内容を表します。
 * @export
 * @interface UpdatePostBody
 */
export interface UpdatePostBody {
    /**
     * 
     * @type {EditPost}
     * @memberof UpdatePostBody
     */
    'post': EditPost;
}


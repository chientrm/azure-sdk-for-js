/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import { GeneratedClientOptionalParams } from "./models";

const packageName = "@azure/container-registry";
const packageVersion = "1.0.0";

/** @hidden */
export class GeneratedClientContext extends coreHttp.ServiceClient {
  url: string;

  /**
   * Initializes a new instance of the GeneratedClientContext class.
   * @param url Registry login URL
   * @param options The parameter options
   */
  constructor(url: string, options?: GeneratedClientOptionalParams) {
    if (url === undefined) {
      throw new Error("'url' cannot be null");
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }

    if (!options.userAgent) {
      const defaultUserAgent = coreHttp.getDefaultUserAgentValue();
      options.userAgent = `${packageName}/${packageVersion} ${defaultUserAgent}`;
    }

    super(undefined, options);

    this.requestContentType = "application/json; charset=utf-8";

    this.baseUri = options.endpoint || "{url}";

    // Parameter assignments
    this.url = url;
  }
}
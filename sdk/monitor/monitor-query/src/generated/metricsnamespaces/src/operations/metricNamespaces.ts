/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { MetricNamespaces } from "../operationsInterfaces";
import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { MonitorManagementClientContext } from "../monitorManagementClientContext";
import {
  MetricNamespacesListOptionalParams,
  MetricNamespacesListResponse
} from "../models";

/** Class representing a MetricNamespaces. */
export class MetricNamespacesImpl implements MetricNamespaces {
  private readonly client: MonitorManagementClientContext;

  /**
   * Initialize a new instance of the class MetricNamespaces class.
   * @param client Reference to the service client
   */
  constructor(client: MonitorManagementClientContext) {
    this.client = client;
  }

  /**
   * Lists the metric namespaces for the resource.
   * @param resourceUri The identifier of the resource.
   * @param options The options parameters.
   */
  list(
    resourceUri: string,
    options?: MetricNamespacesListOptionalParams
  ): Promise<MetricNamespacesListResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceUri,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listOperationSpec
    ) as Promise<MetricNamespacesListResponse>;
  }
}
// Operation Specifications
const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const listOperationSpec: coreHttp.OperationSpec = {
  path: "/{resourceUri}/providers/microsoft.insights/metricNamespaces",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.MetricNamespaceCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.startTime],
  urlParameters: [Parameters.$host, Parameters.resourceUri],
  headerParameters: [Parameters.accept],
  serializer
};
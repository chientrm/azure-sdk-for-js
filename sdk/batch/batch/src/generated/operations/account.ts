/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { GeneratedClient } from "../generatedClient";
import {
  ImageInformation,
  AccountListSupportedImagesNextOptionalParams,
  AccountListSupportedImagesOptionalParams,
  PoolNodeCounts,
  AccountListPoolNodeCountsNextOptionalParams,
  AccountListPoolNodeCountsOptionalParams,
  AccountListSupportedImagesResponse,
  AccountListPoolNodeCountsResponse,
  AccountListSupportedImagesNextResponse,
  AccountListPoolNodeCountsNextResponse
} from "../models";

/** Class representing a Account. */
export class Account {
  private readonly client: GeneratedClient;

  /**
   * Initialize a new instance of the class Account class.
   * @param client Reference to the service client
   */
  constructor(client: GeneratedClient) {
    this.client = client;
  }

  /**
   * Lists all Virtual Machine Images supported by the Azure Batch service.
   * @param options The options parameters.
   */
  public listSupportedImages(
    options?: AccountListSupportedImagesOptionalParams
  ): PagedAsyncIterableIterator<ImageInformation> {
    const iter = this.listSupportedImagesPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listSupportedImagesPagingPage(options);
      }
    };
  }

  private async *listSupportedImagesPagingPage(
    options?: AccountListSupportedImagesOptionalParams
  ): AsyncIterableIterator<ImageInformation[]> {
    let result = await this._listSupportedImages(options);
    yield result.value || [];
    let continuationToken = result.odataNextLink;
    while (continuationToken) {
      result = await this._listSupportedImagesNext(continuationToken, options);
      continuationToken = result.odataNextLink;
      yield result.value || [];
    }
  }

  private async *listSupportedImagesPagingAll(
    options?: AccountListSupportedImagesOptionalParams
  ): AsyncIterableIterator<ImageInformation> {
    for await (const page of this.listSupportedImagesPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Gets the number of Compute Nodes in each state, grouped by Pool. Note that the numbers returned may
   * not always be up to date. If you need exact node counts, use a list query.
   * @param options The options parameters.
   */
  public listPoolNodeCounts(
    options?: AccountListPoolNodeCountsOptionalParams
  ): PagedAsyncIterableIterator<PoolNodeCounts> {
    const iter = this.listPoolNodeCountsPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPoolNodeCountsPagingPage(options);
      }
    };
  }

  private async *listPoolNodeCountsPagingPage(
    options?: AccountListPoolNodeCountsOptionalParams
  ): AsyncIterableIterator<PoolNodeCounts[]> {
    let result = await this._listPoolNodeCounts(options);
    yield result.value || [];
    let continuationToken = result.odataNextLink;
    while (continuationToken) {
      result = await this._listPoolNodeCountsNext(continuationToken, options);
      continuationToken = result.odataNextLink;
      yield result.value || [];
    }
  }

  private async *listPoolNodeCountsPagingAll(
    options?: AccountListPoolNodeCountsOptionalParams
  ): AsyncIterableIterator<PoolNodeCounts> {
    for await (const page of this.listPoolNodeCountsPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Lists all Virtual Machine Images supported by the Azure Batch service.
   * @param options The options parameters.
   */
  private _listSupportedImages(
    options?: AccountListSupportedImagesOptionalParams
  ): Promise<AccountListSupportedImagesResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listSupportedImagesOperationSpec
    ) as Promise<AccountListSupportedImagesResponse>;
  }

  /**
   * Gets the number of Compute Nodes in each state, grouped by Pool. Note that the numbers returned may
   * not always be up to date. If you need exact node counts, use a list query.
   * @param options The options parameters.
   */
  private _listPoolNodeCounts(
    options?: AccountListPoolNodeCountsOptionalParams
  ): Promise<AccountListPoolNodeCountsResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listPoolNodeCountsOperationSpec
    ) as Promise<AccountListPoolNodeCountsResponse>;
  }

  /**
   * ListSupportedImagesNext
   * @param nextLink The nextLink from the previous successful call to the ListSupportedImages method.
   * @param options The options parameters.
   */
  private _listSupportedImagesNext(
    nextLink: string,
    options?: AccountListSupportedImagesNextOptionalParams
  ): Promise<AccountListSupportedImagesNextResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      nextLink,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listSupportedImagesNextOperationSpec
    ) as Promise<AccountListSupportedImagesNextResponse>;
  }

  /**
   * ListPoolNodeCountsNext
   * @param nextLink The nextLink from the previous successful call to the ListPoolNodeCounts method.
   * @param options The options parameters.
   */
  private _listPoolNodeCountsNext(
    nextLink: string,
    options?: AccountListPoolNodeCountsNextOptionalParams
  ): Promise<AccountListPoolNodeCountsNextResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      nextLink,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listPoolNodeCountsNextOperationSpec
    ) as Promise<AccountListPoolNodeCountsNextResponse>;
  }
}
// Operation Specifications
const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const listSupportedImagesOperationSpec: coreHttp.OperationSpec = {
  path: "/supportedimages",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AccountListSupportedImagesResult,
      headersMapper: Mappers.AccountListSupportedImagesHeaders
    },
    default: {
      bodyMapper: Mappers.BatchError
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter2,
    Parameters.maxResults3,
    Parameters.timeout17
  ],
  urlParameters: [Parameters.batchUrl],
  headerParameters: [
    Parameters.accept,
    Parameters.clientRequestId17,
    Parameters.returnClientRequestId17,
    Parameters.ocpDate17
  ],
  serializer
};
const listPoolNodeCountsOperationSpec: coreHttp.OperationSpec = {
  path: "/nodecounts",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PoolNodeCountsListResult,
      headersMapper: Mappers.AccountListPoolNodeCountsHeaders
    },
    default: {
      bodyMapper: Mappers.BatchError
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter3,
    Parameters.maxResults4,
    Parameters.timeout18
  ],
  urlParameters: [Parameters.batchUrl],
  headerParameters: [
    Parameters.accept,
    Parameters.clientRequestId18,
    Parameters.returnClientRequestId18,
    Parameters.ocpDate18
  ],
  serializer
};
const listSupportedImagesNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AccountListSupportedImagesResult,
      headersMapper: Mappers.AccountListSupportedImagesNextHeaders
    },
    default: {
      bodyMapper: Mappers.BatchError
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter2,
    Parameters.maxResults3,
    Parameters.timeout17
  ],
  urlParameters: [Parameters.batchUrl, Parameters.nextLink],
  headerParameters: [
    Parameters.accept,
    Parameters.clientRequestId17,
    Parameters.returnClientRequestId17,
    Parameters.ocpDate17
  ],
  serializer
};
const listPoolNodeCountsNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PoolNodeCountsListResult,
      headersMapper: Mappers.AccountListPoolNodeCountsNextHeaders
    },
    default: {
      bodyMapper: Mappers.BatchError
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter3,
    Parameters.maxResults4,
    Parameters.timeout18
  ],
  urlParameters: [Parameters.batchUrl, Parameters.nextLink],
  headerParameters: [
    Parameters.accept,
    Parameters.clientRequestId18,
    Parameters.returnClientRequestId18,
    Parameters.ocpDate18
  ],
  serializer
};
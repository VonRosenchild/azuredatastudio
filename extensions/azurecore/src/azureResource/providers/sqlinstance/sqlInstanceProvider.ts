/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the Source EULA. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { ExtensionContext } from 'vscode';
import { ApiWrapper } from '../../../apiWrapper';

import { azureResource } from '../../azure-resource';
import { IAzureResourceService, AzureResourceDatabaseServer } from '../../interfaces';
import { SqlInstanceTreeDataProvider as SqlInstanceTreeDataProvider } from './sqlInstanceTreeDataProvider';

export class SqlInstanceProvider implements azureResource.IAzureResourceProvider {
	public constructor(
		private _service: IAzureResourceService<AzureResourceDatabaseServer>,
		private _apiWrapper: ApiWrapper,
		private _extensionContext: ExtensionContext
	) {
	}

	public getTreeDataProvider(): azureResource.IAzureResourceTreeDataProvider {
		return new SqlInstanceTreeDataProvider(this._service, this._apiWrapper, this._extensionContext);
	}

	public get providerId(): string {
		return 'azure.resource.providers.sqlInstance';
	}
}

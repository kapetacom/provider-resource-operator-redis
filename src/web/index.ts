/**
 * Copyright 2023 Kapeta Inc.
 * SPDX-License-Identifier: MIT
 */

import RedisEditorComponent from './RedisEditorComponent';

import {
    IResourceTypeProvider,
    ResourceRole,
    ResourceProviderType
} from '@kapeta/ui-web-types';
import {Metadata} from "@kapeta/schemas";

const definition = require('../../kapeta.yml');
const packageJson = require('../../package.json');

const resourceTypeProvider: IResourceTypeProvider<Metadata> = {
    kind: definition.metadata.name,
    version: packageJson.version,
    title: definition.metadata.title,
    role: ResourceRole.CONSUMES,
    type: ResourceProviderType.OPERATOR,
    editorComponent: RedisEditorComponent,
    definition
};

export default resourceTypeProvider;

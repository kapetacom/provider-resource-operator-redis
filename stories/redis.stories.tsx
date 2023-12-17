/**
 * Copyright 2023 Kapeta Inc.
 * SPDX-License-Identifier: MIT
 */

import React from 'react';
import '@kapeta/ui-web-components/styles/index.less';
import RedisEditorComponent from "../src/web/RedisEditorComponent";
import {Resource} from "@kapeta/schemas";
import {FormContainer} from "@kapeta/ui-web-components";

const RESOURCE_KIND = 'kapeta/resource-type-redis';

const RedisResource:Resource = {
  kind: RESOURCE_KIND,
  metadata: {
    name: 'MyRedis'
  },
  spec: {
    port: {
      type: 'redis'
    }
  }
};

export default {
  title: 'Redis'
};

export const Editor = () => {
  return <FormContainer initialValue={RedisResource}>
      <RedisEditorComponent />
  </FormContainer>
};

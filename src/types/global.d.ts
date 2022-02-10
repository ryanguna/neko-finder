import React from 'react';

interface IReactComponentWrapper {
  children?: React.ReactNode;
}

interface IAxiosResponse {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}

interface ISagaActionParam {
  type: string;
}

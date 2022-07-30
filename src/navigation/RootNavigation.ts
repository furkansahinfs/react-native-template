import * as React from 'react';

export const navigationRef: any = React.createRef();

export function navigate(name: string, params?: any) {
  navigationRef.current?.navigate(name, params);
}

export function goBack() {
  if (navigationRef?.current?.canGoBack()) {
    navigationRef.current?.goBack();
  }
}

export function navigationReset(name: string, params?: any) {
  navigationRef.current?.reset({
    index: 0,
    routes: [{ name, params }],
  });
}

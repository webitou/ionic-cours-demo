declare module "@capacitor/core" {
  interface PluginRegistry {
    GyroscopePluginWeb: GyroscopePluginWebPlugin;
  }
}

export interface GyroscopePluginWebPlugin {
  echo(options: { value: string }): Promise<{value: string}>;
}

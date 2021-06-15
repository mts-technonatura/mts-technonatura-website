export interface arduinoAppI {
  _id: string;
  name: string;
  sensors?: Array<string>;
  desc: string;
  own?: string;
  token: {
    token: string;
    tokenCreated: number;
  };
}

export interface sensorI {
  _id: string;
  name: string;
  appID: string;
  own: string;
}

export interface sensorsResponseI {
  sensors?: sensorI[];
}

export interface sensorsStateI extends sensorsResponseI {
  fetched: boolean;
}

export interface arduinoResponseI {
  app?: arduinoAppI;
}

export interface arduinoAppStateI extends arduinoResponseI {
  fetched: boolean;
}
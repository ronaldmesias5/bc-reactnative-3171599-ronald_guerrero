import type { NavigatorScreenParams } from '@react-navigation/native';

export type RootTabParamList = {
  Home: NavigatorScreenParams<HomeStackParamList>;
  Saved: undefined;
};

export type HomeStackParamList = {
  HomeList: undefined;
  HomeDetail: { id: string; brand: string; model: string };
};

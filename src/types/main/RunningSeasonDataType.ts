export interface RunningSeason {
  id: number;
  name: string;
  description?: string;
  thumbsImgUrl: string;
}

export interface RunningSeasonDataType {
  SeasonData: RunningSeason[];
}

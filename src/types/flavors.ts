export interface IFlavor {
  id: number;
  content: string;
}

export interface IFlavorByBeer extends IFlavor {
  count: number;
}

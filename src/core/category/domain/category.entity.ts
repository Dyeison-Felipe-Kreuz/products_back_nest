type CategoryProps = {
  id?: number;
  name: string;
}

export class Category {
  id?: number;
  name?: string;

  constructor(props?: CategoryProps) {
    this.id = props?.id;
    this.name = props?.name;
  }
}
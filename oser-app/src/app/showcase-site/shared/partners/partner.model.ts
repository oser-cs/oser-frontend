export class Partner {
  name: string;
  website: string;
  logo: string;
  premium: boolean;

  constructor(options: {
    name: string,
    website: string,
    logo: string,
    premium: boolean,
  }) {
    this.name = options.name;
    this.website = options.website;
    this.logo = options.logo;
    this.premium = options.premium;
  }
}

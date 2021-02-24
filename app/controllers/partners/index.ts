import { get, sortBy, union } from 'lodash';
import { readFileSync } from 'fs';
import { getDistanceBetweenTwoLocations } from './../../helpers/distance';


type Office = {
  location: string
  address: string
  coordinates: string
}

type Partner = {
  id: number,
  urlName: string,
  organization: string,
  customerLocations: string,
  willWorkRemotely: boolean,
  website: string,
  services: string,
  offices: Office[]
};
type PartnerToReturn = Pick<Partner, "organization" | "offices">;


export const partners = {
  getAll() {
    const partners: Partner[] = JSON.parse(readFileSync("partners.json", { encoding: 'utf-8' }))
    const partnersData = partners.map(partner => {
      const offices: Office[] = get(partner, 'offices', [])
      const organization = get(partner, 'organization', '')
      const data = { offices, organization }
      return data
    })
    const data = sortBy(partnersData, partner => partner.organization);
    return data;
  },
  getAllWithinRange(range: number) {
    const partners: Partner[] = JSON.parse(readFileSync("partners.json", { encoding: 'utf-8' }))
    const starbucksLocation = "51.5144636,-0.142571"
    let filteredPartners: PartnerToReturn[] = []
    partners.map(partner => {
      const officesArray: Office[] = get(partner, 'offices', [])
      const organization = get(partner, 'organization', '')
      let pickedOffices: Office[] = []
      officesArray.map(office => {
        const officeToStarbucks = getDistanceBetweenTwoLocations({ mainLocation: starbucksLocation, targetedLocation: office.coordinates })
        if (officeToStarbucks < range) {
          pickedOffices = union([office], pickedOffices);

        }
      })
      if (pickedOffices.length > 0) {
        const data = { offices: pickedOffices, organization }
        filteredPartners = union([data], filteredPartners);
      }
    })
    const data = sortBy(filteredPartners, partner => partner.organization);
    return data;
  },
}
export default partners;

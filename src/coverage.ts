export enum BikeType {
  Road,
  Mountain,
  Hybrid
}

export type Bike = {
  brand: string,
  brakeType: 'disc brakes' | 'v-brakes'
}

export function bikeFactory(bikeType?: BikeType, brand?: string): Bike{
  if(!brand){
    brand = 'custom'
  }

  switch(bikeType){
    case BikeType.Hybrid:
    case BikeType.Road: return {
      brand,
      brakeType: 'v-brakes'
    }
    case BikeType.Mountain: return {
      brand,
      brakeType: 'disc brakes'
    }
    default: throw new Error('Invalid bike type')
  } 
}
import { Bike, bikeFactory, BikeType } from "./coverage";

describe.skip('Bike factory - Test coverage', () => {
  it('returns a bike with valid params', () => {
    const bike = bikeFactory(BikeType.Road, 'Specialized')
    expect(bike).toEqual<Bike>({
      brakeType: 'v-brakes',
      brand: 'Specialized'
    })
  })
  
  // Get 100% coverage

  // it('returns a road bike', () => {
  //   const bike = bikeFactory(BikeType.Road, 'Specialized')
  //   expect(bike).toEqual<Bike>({
  //     brakeType: 'v-brakes',
  //     brand: 'Specialized'
  //   })
  // })
  // it('returns a hybrid bike', () => {
  //   const bike = bikeFactory(BikeType.Hybrid, 'Specialized')
  //   expect(bike).toEqual<Bike>({
  //     brakeType: 'v-brakes',
  //     brand: 'Specialized'
  //   })
  // })
  // it('returns a Mountain bike', () => {
  //   const bike = bikeFactory(BikeType.Mountain, 'Specialized')
  //   expect(bike).toEqual<Bike>({
  //     brakeType: 'disc brakes',
  //     brand: 'Specialized'
  //   })
  // })
  // it('returns a road bike without brand', () => {
  //   const bike = bikeFactory(BikeType.Road)
  //   expect(bike).toEqual<Bike>({
  //     brakeType: 'v-brakes',
  //     brand: 'custom'
  //   })
  // })
  // it('returns a hybrid bike without brand', () => {
  //   const bike = bikeFactory(BikeType.Hybrid)
  //   expect(bike).toEqual<Bike>({
  //     brakeType: 'v-brakes',
  //     brand: 'custom'
  //   })
  // })
  // it('returns a Mountain bike without brand', () => {
  //   const bike = bikeFactory(BikeType.Mountain)
  //   expect(bike).toEqual<Bike>({
  //     brakeType: 'disc brakes',
  //     brand: 'custom'
  //   })
  // })
  // it('throws an exception', () => {
  //   expect(bikeFactory).toThrowError();
  // })


  // rename v-brakes to 'Side-pull caliper brakes' for road bikes
  
  // it('returns a bike with valid params that matches snapshots', () => {
  //   const bike = bikeFactory(BikeType.Road, 'Specialized')
  //   expect(bike).toMatchSnapshot()
  // })

})
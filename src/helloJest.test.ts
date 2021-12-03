import { helloJest } from './helloJest'

describe('helloJest tests', () => {
  // Type checking
  it('returns a string', () => {
    const value = helloJest('Mathieu')
    expect(typeof value).toBe('string');
  })
  
  // value checking
  it('returns a valid message', () => {
    const value = helloJest('Mathieu')
    expect(value).toBe('Hello Jest from Mathieu');
  })

  // Snapshots (change the test)
  // it('returns a valid message', () => {
  //   const value = helloJest('Mathieu')
  //   expect(value).toMatchSnapshot();
  // })
})

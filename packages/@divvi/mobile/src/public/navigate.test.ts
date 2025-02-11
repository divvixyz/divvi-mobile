import { navigate } from './navigate'

// Mock the required internal modules
jest.mock('../navigator/NavigationService', () => ({
  navigate: jest.fn(),
}))

const mockInternalNavigate = require('../navigator/NavigationService').navigate

describe('navigate', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should navigate to swap screen without params', () => {
    navigate('Swap')

    expect(mockInternalNavigate).toHaveBeenCalledWith('SwapScreenWithBack', undefined)
  })

  it('should navigate to swap screen with valid params', () => {
    navigate('Swap', {
      fromTokenId: 'token1',
      toTokenId: 'token2',
      toTokenNetworkId: 'celo-mainnet',
    })

    expect(mockInternalNavigate).toHaveBeenCalledWith('SwapScreenWithBack', {
      fromTokenId: 'token1',
      toTokenId: 'token2',
      toTokenNetworkId: 'celo-mainnet',
    })
  })

  it('should type check navigation parameters', () => {
    // These should compile without type errors
    navigate('Swap')
    navigate('Swap', undefined)
    navigate('Swap', {
      fromTokenId: 'token1',
    })
    navigate('Swap', {
      fromTokenId: 'token1',
      toTokenId: 'token2',
      toTokenNetworkId: 'celo-mainnet',
    })

    // @ts-expect-error - Invalid parameter
    navigate('Swap', { invalidParam: 'foo' })

    // @ts-expect-error - Extra invalid parameter
    navigate('Swap', { fromTokenId: 'token1', invalidParam: 'foo' })
  })

  it('should allow navigation to custom screens', () => {
    // Using type assertion to simulate a custom screen
    navigate('CustomScreen' as any)

    expect(mockInternalNavigate).toHaveBeenCalledWith('CustomScreen', undefined)
  })

  it('should allow navigation to custom screens with params', () => {
    navigate('CustomScreenWithParams' as any, { customParam: 'test' } as any)

    expect(mockInternalNavigate).toHaveBeenCalledWith('CustomScreenWithParams', {
      customParam: 'test',
    })
  })
})

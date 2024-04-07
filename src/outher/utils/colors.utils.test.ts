import { COLOR_BY_USER } from '../constants/colors.constants'
import { getColorByIdentifier } from './colors.utils'

describe('should test colors utilities', () => {
  it('should test get color by identifier', () => {
    const color1 = getColorByIdentifier('001', COLOR_BY_USER)
    const color2 = getColorByIdentifier('002', COLOR_BY_USER)
    const color3 = getColorByIdentifier('001', COLOR_BY_USER)

    expect(color1).toBe(color3)
    expect(color2).not.toBe(color3)
  })
})

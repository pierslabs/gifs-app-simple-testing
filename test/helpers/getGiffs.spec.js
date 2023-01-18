import { getGiffs } from '../../src/helpers/getGiffs';

describe('GetGiffs', () => {
  const category = 'ultraman';

  test('should return giffs array', async () => {
    const giffs = await getGiffs(category);

    expect(giffs.length).toBeGreaterThan(0);
    expect(giffs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });
  });
});

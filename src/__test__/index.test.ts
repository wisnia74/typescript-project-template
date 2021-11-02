import config from 'config';
import add from '@App/index';

describe('add function imported absolutely from src', () => {
  it('adds', () => {
    expect(add(2, 2)).toBe(4);
  });
});

describe('config object imported absolutely from rootDir/config', () => {
  it('exists', () => {
    expect(config).toStrictEqual({
      key: 'value',
    });
  });
});

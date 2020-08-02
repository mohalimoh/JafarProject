import { FixLengthPipe } from './fix-length.pipe';

describe('FixLengthPipe', () => {
  it('create an instance', () => {
    const pipe = new FixLengthPipe();
    expect(pipe).toBeTruthy();
  });
});

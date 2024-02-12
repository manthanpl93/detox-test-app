describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.launchApp();
  });

  it('Expect label text to be Label Changed After Clicking On Button', async () => {
    await expect(element(by.id('myTextTestId'))).toBeVisible();
    await expect(element(by.id('myTextTestId'))).toHaveText('Please Change Label');
    await element(by.id('myButtonTestId')).tap();
    await expect(element(by.id('myTextTestId'))).toHaveText('Label Changed');
  });
});
